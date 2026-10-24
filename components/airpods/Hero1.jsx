import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero1 = () => {
    const ref = useRef(null);
    const scrollTriggerRef = useRef(null);
    
    const images = useMemo(() => {
        const loadedImages = [];
        for (let i = 120; i <= 350; i++) {
            const img = new Image();
            img.src = `/assets/images/airpods/frame2/${i}.webp`;
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
            end: '+=10000px', // Adjust according to your content height
            scrub: 1, // Adjust scrub value for smoother image transition
            pin: true, // Pin the container during the scroll
            onUpdate: (self) => {
                const index = Math.round(self.progress * 229) + 1; // Adjust total image count
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
                    height: '10000px', // Adjust according to your content height
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

export default Hero1;
