"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useCurser } from "../provider/curserProvider";

export default function BlurryCursor({ children }: any) {
  const { isActive, setIsActive } = useCurser();
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef<any>(null);
  const circle = useRef<any>();
  const size = isActive ? 400 : 30;

  const lerp = (x: any, y: any, a: any) => x * (1 - a) + y * a;

  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e;

    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);

    rafId.current = window.requestAnimationFrame(animate);
  };

  const moveCircle = (x: any, y: any) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.cancelAnimationFrame(rafId.current);
    };
  }, [isActive]);

  return (
    <div className="relative">
      <div
        style={{
          backgroundColor: "#BCE4F2",
          width: size,
          height: size,
          transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
        }}
        className="top-0 left-0 z-[9999] fixed rounded-full mix-blend-difference pointer-events-none"
        ref={circle}
      />
      <div
        onMouseLeave={() => setIsActive(false)}
        onMouseEnter={() => setIsActive(true)}
      >
        {children}
      </div>
    </div>
  );
}
