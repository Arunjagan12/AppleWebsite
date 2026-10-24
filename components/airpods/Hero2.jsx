import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero2 = () => {
    const ref = useRef(null);
    const scrollTriggerRef = useRef(null);
    const [images, setImages] = useState([]);

    const loadImages = useCallback(async () => {
        const imagePromises = [];
        for (let i = 99; i <= 345; i++) {
            const img = new Image();
            img.src = `/assets/images/airpods/frame3/${i}.webp`;
            imagePromises.push(new Promise((resolve) => {
                img.onload = () => resolve(img);
            }));
        }
        const loadedImages = await Promise.all(imagePromises);
        setImages(loadedImages);
    }, []);

    const render = useCallback(
        (index) => {
            if (images[index - 1]) {
                const context = ref.current?.getContext('2d');
                if (context) {
                    const image = images[index - 1];
                    const canvas = ref.current;
                    const aspectRatio = image.width / image.height;

                    canvas.width = window.innerWidth;
                    canvas.height = window.innerWidth / aspectRatio;

                    context.clearRect(0, 0, canvas.width, canvas.height);
                    context.drawImage(image, 0, 0, canvas.width, canvas.height);
                }
            }
        },
        [images]
    );

    useEffect(() => {
        loadImages();
    }, [loadImages]);

    useEffect(() => {
        if (images.length > 0) {
            render(1); // Initial render

            // Set up GSAP ScrollTrigger
            scrollTriggerRef.current = ScrollTrigger.create({
                trigger: ref.current,
                start: 'top top',
                end: '+=5000px', // Reduced scroll distance to increase speed
                scrub: 0.3, // Adjusted scrub value for faster transition
                pin: true, // Pin the container during the scroll
                onUpdate: (self) => {
                    const index = Math.round(self.progress * 246) + 1; // Adjust total image count
                    render(index);
                },
                onLeave: () => {
                    ScrollTrigger.refresh(); // Refresh ScrollTrigger to unpin and continue scrolling
                }
            });

            return () => {
                // Clean up ScrollTrigger instance
                scrollTriggerRef.current?.kill();
            };
        }
    }, [images, render]);

    return (
        <div>
            <div
                style={{
                    height: '5000px', // Adjusted according to reduced scroll distance
                    backgroundColor: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    position: 'relative',
                }}
            >
                <canvas ref={ref} style={{ zIndex: 2, width: '100%' }} />
            </div>
            <div style={{ height: '1000px', backgroundColor: 'black' }} />
        </div>
    );
};

export default Hero2;
