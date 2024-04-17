import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import gsap from "gsap";
const words = [
  { greeting: "Hello", emoji: "👋" }, // English
  { greeting: "வணக்கம்", emoji: "👋" }, // Tamil
  { greeting: "Bonjour", emoji: "👋" }, // French
  { greeting: "Ciao", emoji: "👋" }, // Italian
  { greeting: "Olà", emoji: "👋" }, // Portuguese
  { greeting: "やあ", emoji: "👋" }, // Japanese
  { greeting: "Hallå", emoji: "👋" }, // Swedish
  { greeting: "Guten tag", emoji: "👋" }, // German
  { greeting: "Hallo", emoji: "👋" }, // Dutch
  { greeting: "Hola", emoji: "👋" }, // Spanish
  { greeting: "வணக்கம்", emoji: "👋" }, // Tamil
];

const PreLoading = () => {
  const [isLoading, setLoading] = useState(true);
  const handleLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);
  const comp = useRef(null);
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {}).to("#intro-slider", {
        yPercent: "-100",
        duration: 1.3,
        delay: 5,
        ease: "power4.inOut",
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="h-screen z-40  fixed inset-0">
      <div id="intro-slider" className="h-screen">
        {isLoading && (
          <motion.div
            ref={comp}
            variants={slideUp}
            initial="initial"
            exit="exit"
            className="text-white text-8xl fixed inset-0 z-50 font-semibold bg-black h-screen w-full flex items-center justify-center flex-col"
          >
            {dimension.width > 0 && (
              <>
                <motion.p variants={opacity} initial="initial" animate="enter">
                  <span></span>
                  {words[index].greeting}
                  <span></span>
                  {words[index].emoji}
                </motion.p>
                <svg>
                  <motion.path
                    variants={curve}
                    initial="initial"
                    exit="exit"
                  ></motion.path>
                </svg>
              </>
            )}
          </motion.div>
        )}
        <Spline
          onLoad={handleLoad}
          className="h-screen w-44 lg:w-full"
          scene="https://prod.spline.design/TQprXEZhYmX3pX7N/scene.splinecode"
        />
      </div>
    </div>
  );
};

export default PreLoading;

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};
