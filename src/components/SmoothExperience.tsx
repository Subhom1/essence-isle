"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useState } from "react";

const interactiveSelector = "a, button, input, textarea, select, label, [role='button']";

export default function SmoothExperience() {
  const prefersReducedMotion = useReducedMotion();
  const cursorX = useMotionValue(-60);
  const cursorY = useMotionValue(-60);
  const smoothX = useSpring(cursorX, { stiffness: 520, damping: 38, mass: 0.35 });
  const smoothY = useSpring(cursorY, { stiffness: 520, damping: 38, mass: 0.35 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.05,
      wheelMultiplier: 0.9,
      anchors: {
        offset: -72,
        duration: 1.05,
      },
      stopInertiaOnNavigate: true,
    });

    return () => lenis.destroy();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) {
      return;
    }

    const root = document.documentElement;
    root.classList.add("custom-cursor-active");
    let lastX = -1;
    let lastY = -1;

    const syncInteractiveState = () => {
      if (lastX < 0 || lastY < 0) return;
      const target = document.elementFromPoint(lastX, lastY);
      setCursorActive(Boolean(target?.closest(interactiveSelector)));
    };

    const handleMove = (event: PointerEvent) => {
      lastX = event.clientX;
      lastY = event.clientY;
      cursorX.set(event.clientX - 16);
      cursorY.set(event.clientY - 16);
      setCursorVisible(true);
      syncInteractiveState();
    };

    const hideCursor = () => setCursorVisible(false);

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("scroll", syncInteractiveState, { passive: true });
    window.addEventListener("blur", hideCursor);
    document.documentElement.addEventListener("mouseleave", hideCursor);

    return () => {
      root.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("scroll", syncInteractiveState);
      window.removeEventListener("blur", hideCursor);
      document.documentElement.removeEventListener("mouseleave", hideCursor);
    };
  }, [cursorX, cursorY, prefersReducedMotion]);

  return (
    <motion.div
      aria-hidden="true"
      data-active={cursorActive}
      data-testid="custom-cursor"
      className="custom-cursor"
      style={{ x: smoothX, y: smoothY }}
      animate={{
        opacity: cursorVisible ? 1 : 0,
        scale: cursorActive ? 1.65 : 1,
      }}
      transition={{ opacity: { duration: 0.18 }, scale: { duration: 0.22, ease: "easeOut" } }}
    />
  );
}
