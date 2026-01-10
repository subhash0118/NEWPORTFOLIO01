"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GooeyTextProps {
    texts: string[];
    morphTime?: number;
    cooldownTime?: number;
    className?: string;
    textClassName?: string;
}

export function GooeyText({
    texts,
    morphTime = 2,
    cooldownTime = 3,
    className,
    textClassName
}: GooeyTextProps) {
    const text1Ref = React.useRef<HTMLSpanElement>(null);
    const text2Ref = React.useRef<HTMLSpanElement>(null);

    React.useEffect(() => {
        let textIndex = 0;
        let time = new Date();
        let morph = 0;
        let cooldown = cooldownTime;

        // Initialize state
        if (text1Ref.current && text2Ref.current) {
            text1Ref.current.textContent = texts[textIndex % texts.length];
            text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
            text2Ref.current.style.opacity = "100%";
            text1Ref.current.style.opacity = "0%";
            // Actually, we want text2 to trigger visible initially?
            // Wait, cooldown logic expects text2 to be visible.
            // If we are in cooldown, text2 is correct.
            // But we want to show texts[0].
            // So text2 should be texts[0].

            // Let's align with our new logic:
            // textIndex points to "Current Visible".
            // So text2 has texts[0].
            text2Ref.current.textContent = texts[0];
            text1Ref.current.textContent = ""; // Irrelevant initially
        }

        const setMorph = (fraction: number) => {
            if (text1Ref.current && text2Ref.current) {
                text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
                text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

                fraction = 1 - fraction;
                text1Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
                text1Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
            }
        };

        const doCooldown = () => {
            morph = 0;
            if (text1Ref.current && text2Ref.current) {
                text2Ref.current.style.filter = "";
                text2Ref.current.style.opacity = "100%";
                text1Ref.current.style.filter = "";
                text1Ref.current.style.opacity = "0%";
            }
        };

        const doMorph = () => {
            morph -= cooldown;
            cooldown = 0;
            let fraction = morph / morphTime;

            if (fraction > 1) {
                cooldown = cooldownTime;
                fraction = 1;
            }

            setMorph(fraction);
        };

        function animate() {
            // Check if refs are still valid before continuing animation
            if (!text1Ref.current || !text2Ref.current) return;

            requestAnimationFrame(animate);
            const newTime = new Date();
            const shouldIncrementIndex = cooldown > 0;
            const dt = (newTime.getTime() - time.getTime()) / 1000;
            time = newTime;

            cooldown -= dt;

            if (cooldown <= 0) {
                if (shouldIncrementIndex) {
                    // Logic fix: Use current index THEN increment
                    text1Ref.current.textContent = texts[textIndex % texts.length];
                    text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
                    textIndex++;
                }
                doMorph();
            } else {
                doCooldown();
            }
        }

        // Start animation
        const animationId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [texts, morphTime, cooldownTime]);

    return (
        <div className={cn("relative h-24 mb-4", className)}>
            <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
                <defs>
                    <filter id="threshold">
                        <feColorMatrix
                            in="SourceGraphic"
                            type="matrix"
                            values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
                        />
                    </filter>
                </defs>
            </svg>

            <div
                className="flex items-center justify-center relative w-full h-full"
                style={{ filter: "url(#threshold)" }}
            >
                <span
                    ref={text1Ref}
                    className={cn(
                        "absolute inline-block select-none text-center",
                        textClassName
                    )}
                />
                <span
                    ref={text2Ref}
                    className={cn(
                        "absolute inline-block select-none text-center",
                        textClassName
                    )}
                />
            </div>
        </div>
    );
}
