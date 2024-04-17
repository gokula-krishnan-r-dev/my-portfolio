import BlurryCursor from "@/components/animation/curser";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import HeaderTitle from "../heading-title";
const phrase =
  " I am a seasoned dedicated to building robust and scalable applications that streamline business processes and elevate user engagement. Skilled in both frontend and backend technologies, I deliver end-to-end solutions that are efficient, effective, and tailored to meet the unique needs of any organization.";

const AboutUs = () => {
  let refs = useRef<any>([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top center`,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  const splitWords = (phrase: any) => {
    let body: any = [];
    phrase.split(" ").forEach((word: any, i: any) => {
      const letters = splitLetters(word);
      body.push(
        <p className="text-6xl" key={word + "_" + i}>
          {letters}
        </p>
      );
    });
    return body;
  };

  const splitLetters = (word: any) => {
    let letters: any = [];
    word.split("").forEach((letter: any, i: any) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el: any) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <section id="about" ref={container} className="relative about">
      <div className="absolute -top-52 right-0 w-96 h-96">
        <Spline
          className="w-24 bg-transparent h-24"
          scene="https://prod.spline.design/exUJqspMcvzp67yI/scene.splinecode"
        />
      </div>
      <div className="px-24 py-6 h-screen flex flex-col items-start justify-center">
        <h1 className="text-6xl font-semibold mb-4">About me</h1>
        <div className="pt-6">
          <BlurryCursor>
            <div className="w-full text" ref={body}>
              {splitWords(phrase)}
            </div>
          </BlurryCursor>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
