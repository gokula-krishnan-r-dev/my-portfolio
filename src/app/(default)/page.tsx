"use client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Header from "@/components/shared/header";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Skills from "@/components/shared/Landing/skills";
import ProjectDesign from "@/components/shared/Landing/project-design";
import LabelScroll from "@/components/animation/label-scroll";
import ContactUs from "@/components/shared/Landing/contact-us";
import Footer from "@/components/footer";
const PreLoading = dynamic(() => import("@/components/shared/pre-loading"));
const Hero = dynamic(() => import("@/components/shared/Landing/hero"));
const AboutUs = dynamic(() => import("@/components/shared/Landing/about-us"));
const Experience = dynamic(
  () => import("@/components/shared/Landing/experience")
);
const ProjectWorks = dynamic(
  () => import("@/components/shared/Landing/work-project")
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 8000);
    })();
  }, []);

  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Youtube", url: "https://youtube.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
  ];
  return (
    <div className="">
      <AnimatePresence mode="wait">
        {isLoading && <PreLoading />}
      </AnimatePresence>
      <div className="h-auto">
        <Header />
        <Hero />
        <AboutUs />
        <LabelScroll
          text="👋 WELCOME TO MY DIGITAL PLAYGROUND / GOKULA / 💻 FULL STACK DEVELOPER / DESIGNER & CODER 🚀"
          containerClassName="!bg-white text-black"
          className=" !bg-white text-black"
        />
        <Experience />
        <ProjectWorks />
        <Skills />
        <ProjectDesign />
        <div className="h-[70vh]">
          <LabelScroll
            text="👨‍💻 CRAFTING DIGITAL WORLDS WITH CODE & CREATIVITY 🌐🚀"
            containerClassName="-rotate-12"
          />
          <LabelScroll
            text="🔥 ENGINEERING THE FUTURE WITH INNOVATION & EXCELLENCE 💡🛠️"
            containerClassName="rotate-12"
          />
        </div>
        <ContactUs />
        <Footer
          companyName="Gokul"
          year={currentYear}
          socialLinks={socialLinks}
          backToTopHref="#top"
        />
      </div>
    </div>
  );
}
