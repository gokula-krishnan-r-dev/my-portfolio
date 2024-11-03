import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlurryCursor from "@/components/animation/curser";
import HeaderTitle from "../heading-title";
import LabelScroll from "@/components/animation/label-scroll";
import { useCurser } from "@/components/provider/curserProvider";
import Link from "next/link";

const experienceData = [
  {
    id: 1,
    title: "Full stack Developer",
    company: "TubePro.co",
    dateRange: "Nov 2023 - May 2024",
    location: "Tamil Nadu, India",
    projectLink: "https://tubepro.co",
  },
  {
    id: 2,
    title: "Jr.Full Stack Developer",
    company: "trulio.co",
    dateRange: "Nov 2023 - May 2024",
    location: "Tamil Nadu, India",
    projectLink: "https://innovativesolutions.com/projects",
  },
  {
    id: 3,
    title: "Full Stack employee",
    company: "Accomodation Hub",
    dateRange: "Nov 2023 - May 2024",
    location: "Tamil Nadu, India",
    projectLink: "https://booking-fgtd.vercel.app/",
  },
  {
    id: 4,
    title: "Full Stack Engineer",
    company: "zynoflix Inc",
    dateRange: "Feb 2023 - May 2024",
    location: "Tamil Nadu, India",
    projectLink: "https://zynoflix.com",
  },
  {
    id: 5,
    title: "Full Stack Developer(React JS)",
    company: "Magicvisor.com",
    dateRange: "Jan 2022 - Dec 2023",
    location: "USA(remote)",
    projectLink: "https://magicvisor.com",
  },
  {
    id: 5,
    title: "Full Stack Developer",
    company: "SPACENOS.com",
    dateRange: "Jun 2023 - Jul 2023",
    location: "USA(remote)",
    projectLink: "https://spacenos.com/",
  },
  {
    id: 6,
    title: "Full Stack Developer",
    company: "copyleads",
    dateRange: "Feb 2023 - Jun 2023",
    location: "USA(remote)",
    projectLink: "https://copyleads.com/",
  },
];

const Experience = () => {
  const { isActive, setIsActive } = useCurser();
  const ref = useRef<any>([]);
  ref.current = [];

  const addToRefs = (el: any) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  useEffect(() => {
    ref.current.forEach((el: any) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: el,
            start: "top center+=50",
            end: "bottom top",
            toggleActions: "play none none reverse",
            markers: true,
          },
        }
      );

      const additionalContent = el.nextElementSibling; // Assuming additional content is the next sibling element
      gsap.set(additionalContent, { autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: el,
        start: "top center+=100",
        onEnter: () =>
          gsap.to(additionalContent, { autoAlpha: 1, duration: 0.5 }),
        onLeaveBack: () =>
          gsap.to(additionalContent, { autoAlpha: 0, duration: 0.5 }),
        markers: true,
      });
    });
  }, []);

  // Hover effect functions
  const onEnter = ({ currentTarget }: any) => {
    gsap.to(currentTarget, {
      scale: 1.1,
      duration: 0.3,
    });
  };

  const onLeave = ({ currentTarget }: any) => {
    gsap.to(currentTarget, { scale: 1, color: "#fff", duration: 0.3 });
  };

  return (
    <section
      id="experience"
      className="px-24 flex items-start justify-center flex-col py-24"
    >
      <HeaderTitle mainText="Experience" subText="History" />

      <div className="flex items-center gap-12 justify-between py-12">
        <StatCard
          label="Years Experience in Full Stack development"
          number={3}
        />
        <p className="!max-w-xl w-auto">
          I have worked on a variety of projects over the years. Here are some
        </p>
        <StatCard
          label="
          Projects
          I Worked on"
          number={65}
        />
      </div>
      {experienceData.map((job) => (
        <Link
          target="_blank"
          href={job.projectLink}
          ref={addToRefs}
          key={job.id}
          className="flex py-6 justify-between w-full items-center"
        >
          <div
            onMouseLeave={() => setIsActive(false)}
            onMouseEnter={() => setIsActive(true)}
          >
            <h1
              className="text-5xl font-semibold text-white cursor-pointer"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              {job.title}
            </h1>

            <div className="">{job.company}</div>
          </div>
          <div className="flex items-end flex-col justify-end">
            <h6>{job.dateRange}</h6>
            <p>{job.location}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Experience;

interface StatProps {
  label: string;
  number: number;
}

const StatCard: React.FC<StatProps> = ({ label, number }) => {
  // Reference for the number element to animate
  const numberRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const animation = gsap.to(numberRef.current, {
      duration: 2,
      innerHTML: number,
      roundProps: "innerHTML",
      ease: "power3.out",
      scrollTrigger: {
        trigger: numberRef.current,
        start: "top bottom-=10",
        toggleActions: "restart none none none",
      },
    });

    // Clean up function
    return () => {
      animation.kill();
    };
  }, [number]);

  return (
    <div className="p-5 rounded-lg shadow-lg">
      <h3 className="text-3xl font-bold max-w-sm">{label}</h3>
      <div className="flex items-center gap-3">
        <h1 ref={numberRef} className="text-9xl font-bold ">
          0
        </h1>
        <span className="text-9xl font-bold ">{"+"}</span>
      </div>
    </div>
  );
};
