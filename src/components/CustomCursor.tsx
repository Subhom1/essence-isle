"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorTextRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        if (!cursor) return;

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
                xPercent: -50,
                yPercent: -50,
            });
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isLinkOrButton = target.closest("a, button, .interactive");
            const isProductImage = target.closest(".product-image-container");

            if (isLinkOrButton) {
                document.body.classList.add("cursor-hover-active");
                if (cursorTextRef.current) cursorTextRef.current.innerText = "";
            } else if (isProductImage) {
                document.body.classList.add("cursor-hover-active");
                if (cursorTextRef.current) cursorTextRef.current.innerText = "View";
            } else {
                document.body.classList.remove("cursor-hover-active");
                if (cursorTextRef.current) cursorTextRef.current.innerText = "";
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleHover);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleHover);
        };
    }, []);

    return (
        <div
            id="custom-cursor"
            ref={cursorRef}
            style={{ opacity: 0 }}
        >
            <span className="cursor-text" ref={cursorTextRef}></span>
        </div>
    );
}
