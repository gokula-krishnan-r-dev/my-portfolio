import BlurryCursor from "@/components/animation/curser";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Hero = () => {
  return (
    <main id="hero" className="">
      <div className="h-[90vh] flex items-center justify-center">
        <div className="text-center space-y-8">
          <button className="border rounded-full px-6 py-2 border-gray-700">
            Hey 👋 I am Gokul
          </button>
          <div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-12">
                <span className="text-gray-400 text-sm uppercase tracking-wide">
                  (as)
                </span>
                <BlurryCursor>
                  <h1 className="text-8xl font-bold uppercase tracking-tight">
                    Full Stack
                  </h1>
                </BlurryCursor>
                <span className="text-gray-400 text-sm uppercase tracking-wide">
                  {"// Based somewhere else"} <br /> in the universe
                </span>
              </div>
              <BlurryCursor>
                <h1 className="text-8xl font-bold uppercase tracking-tight">
                  Developer
                </h1>
              </BlurryCursor>
              <div className="flex items-center gap-12">
                <button className="border rounded-full px-6 py-4 flex items-center border-gray-700">
                  Open For Project{" "}
                  <div className="w-3 h-3 rounded-full ml-6 bg-green-500" />
                </button>
                <BlurryCursor>
                  <h1 className="text-8xl font-bold uppercase tracking-tight">
                    & Designer
                  </h1>
                </BlurryCursor>
                <span className="text-gray-400 text-sm uppercase tracking-wide">
                  {"// UI/UX &"} <br /> Developer
                </span>
              </div>
              <div className="flex items-center gap-12">
                <span className="text-gray-400 text-sm uppercase tracking-wide">
                  {" // Android & Ios"} <br /> Developer
                </span>
                <BlurryCursor>
                  <h1 className="text-8xl font-bold uppercase tracking-tight">
                    & App Developer.
                  </h1>
                </BlurryCursor>
              </div>
            </div>
          </div>
          <div className="text-center pt-6 flex items-center justify-center">
            <p className="text-gray-400 max-w-2xl text-sm tracking-wide">
              As a Full Stack Developer, I am passionate about designing and
              building interactive, responsive web applications. With expertise
              in modern technologies like React, Next.js, Node.js, and Express,
              I also excel in UI/UX design, focusing on detail and user
              engagement. Continuously seeking new challenges, I am eager to
              expand my skills and contribute to innovative projects.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <img
          className="border bg-white rounded-full w-24 h-24 absolute bottom-12 spin-animation left-24"
          src="https://paulvl.eu/assets/img/scroll-down-light-2-1.png"
          alt=""
        />
      </div>
    </main>
  );
};

export default Hero;
