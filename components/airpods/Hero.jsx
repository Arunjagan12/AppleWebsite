import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const ref = useRef(null);
    const scrollTriggerRef = useRef(null);
    
    const images = useMemo(() => {
        const loadedImages = [];
        for (let i = 1; i <= 86; i++) {
            const img = new Image();
            img.src = `/assets/images/airpods/frame1/${i}.webp`;
            loadedImages.push(img);
        }
        return loadedImages;
    }, []);

    const render = useCallback(
        (index) => {
            if (images[index - 1]) {
                ref.current?.getContext('2d')?.drawImage(images[index - 1], 0, 0);
            }
        },
        [images]
    );

    useEffect(() => {
        render(1); // Initial render

        // Set up GSAP ScrollTrigger
        scrollTriggerRef.current = ScrollTrigger.create({
            trigger: ref.current,
            start: 'top top',
            end: '+=5000px', // Reduced scroll distance to increase speed
            scrub: 0.5, // Adjusted scrub value for faster transition
            pin: true, // Pin the container during the scroll
            onUpdate: (self) => {
                const index = Math.round(self.progress * 85) + 1; // Adjust total image count
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
    }, [render]);

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
                <canvas width={1000} height={1000} ref={ref} style={{ zIndex: 2 }} />
            </div>
            <div style={{ height: '1000px', backgroundColor: 'black' }} />
        </div>
    );
}

export default Hero;
