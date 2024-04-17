import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Link from "next/link";
import BlurryCursor from "@/components/animation/curser";
import { useCurser } from "@/components/provider/curserProvider";

// Define the ProjectCard component accepting props
type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  company: string;
  companyLogo: string;
  websiteLink: string;
  index: number;
};

// Define the ProjectCard component accepting props of type ProjectCardProps
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  company,
  companyLogo,
  websiteLink,
  index,
}) => {
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
            start: "top center+=200",
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
        start: "top center",
        onEnter: () =>
          gsap.to(additionalContent, { autoAlpha: 1, duration: 0.5 }),
        onLeaveBack: () =>
          gsap.to(additionalContent, { autoAlpha: 0, duration: 0.5 }),
        markers: true,
      });
    });
  }, []);
  const onEnter = ({ currentTarget }: any) => {
    gsap.to(currentTarget, {
      scale: 1.1,
      duration: 0.3,
    });
  };

  const onLeave = ({ currentTarget }: any) => {
    gsap.to(currentTarget, { scale: 1, duration: 0.3 });
  };

  const isEven = index % 2 === 0;
  return (
    <Link
      target="_blank"
      href={websiteLink}
      ref={addToRefs}
      className={cn(
        "flex  items-end mt-12 gap-8  p-4 rounded-lg shadow-lg",
        !isEven ? "flex-row" : "flex-row-reverse"
      )}
    >
      <div
        onMouseLeave={() => setIsActive(false)}
        onMouseEnter={() => setIsActive(true)}
        className="flex-1 relative bg-black"
      >
        <img
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          className="w-full rounded-3xl object-cover"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1
            onMouseLeave={() => setIsActive(false)}
            onMouseEnter={() => setIsActive(true)}
            className="uppercase text-3xl font-semibold"
          >
            {title}
          </h1>
          <p className="text-sm mt-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
