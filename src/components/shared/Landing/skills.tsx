import React from "react";
import { skills } from "../../data/skills";
import { useCurser } from "@/components/provider/curserProvider";

const Skills = () => {
  const { isActive, setIsActive } = useCurser();
  return (
    <div className="px-24  py-12">
      <div
        className="flex flex-col  items-start justify-center relative z-10"
        id="skills"
      >
        <div className="flex flex-col items-start justify-between w-full gap-3 px-4">
          <h1 className="text-4xl font-semibold  mt-5 mb-3 text-primary md:text-6xl">
            Skills
          </h1>
          <p className="text-lg max-w-2xl text-secondary">
            Here are some of my skills on which I have been working on for the
            past 2 years.
          </p>
          <div className="w-full px-44 mt-8 gap-8">
            {skills.map((skill) => (
              <div
                onMouseLeave={() => setIsActive(false)}
                onMouseEnter={() => setIsActive(true)}
                key={skill.title}
                className="w-full bg-card mt-8 border border-gray-700 rounded-3xl p-6 md:p-8"
              >
                <h2 className="text-2xl font-semibold text-secondary text-center mb-5">
                  {skill.title}
                </h2>
                <div className="flex flex-wrap justify-center gap-3 mb-5">
                  {skill.skills.map((item) => (
                    <button
                      key={item.name}
                      className="flex items-center justify-center border border-gray-700 rounded-full px-6 py-4 text-primary font-medium gap-2 text-sm md:text-base"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 rounded-full object-contain h-12"
                      />
                      <span className="text-xl font-semibold">{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
