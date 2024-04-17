import React from "react";
import dynamic from "next/dynamic";
import HeaderTitle from "../heading-title";
const ProjectCard = dynamic(() => import("./project-card"));

const projectData = [
  {
    id: 1,
    title: "Modern Web App",
    description:
      "A cutting-edge web application designed to streamline business processes and enhance user interaction.",
    imageUrl:
      "https://resonance.bestlooker.pro/images/demo-modern/portfolio/1.jpg",
    company: "Innovative Tech Ltd.",
    companyLogo: "https://resonance.bestlooker.pro/images/logo.png",
    websiteLink: "https://innovativetech.com",
  },
  {
    id: 2,
    title: "Future AI Solutions",
    description:
      "Revolutionizing the future of automated systems through advanced AI technology.",
    imageUrl:
      "https://resonance.bestlooker.pro/images/demo-modern/portfolio/2.jpg",
    company: "AI Ventures",
    companyLogo: "https://resonance.bestlooker.pro/images/ai-logo.png",
    websiteLink: "https://aiventures.com",
  },
  {
    id: 3,
    title: "Eco-Friendly Housing",
    description:
      "Innovative eco-friendly housing designs that reduce environmental impact.",
    imageUrl:
      "https://resonance.bestlooker.pro/images/demo-modern/portfolio/3.jpg",
    company: "Green Builds",
    companyLogo: "https://resonance.bestlooker.pro/images/eco-logo.png",
    websiteLink: "https://greenbuilds.com",
  },
  {
    id: 4,
    title: "Smart Home Systems",
    description:
      "Integrated systems for enhancing the efficiency and comfort of home environments.",
    imageUrl:
      "https://resonance.bestlooker.pro/images/demo-modern/portfolio/4.jpg",
    company: "Home Smart Inc.",
    companyLogo: "https://resonance.bestlooker.pro/images/smart-home-logo.png",
    websiteLink: "https://homesmart.com",
  },
  {
    id: 5,
    title: "Blockchain Solutions",
    description:
      "Secure, scalable blockchain solutions for businesses of all sizes.",
    imageUrl:
      "https://resonance.bestlooker.pro/images/demo-modern/portfolio/5.jpg",
    company: "Block Solutions",
    companyLogo: "https://resonance.bestlooker.pro/images/blockchain-logo.png",
    websiteLink: "https://blocksolutions.com",
  },
];

const ProjectWorks = () => {
  return (
    <section
      id="projects"
      className="flex px-24 py-12 flex-col items-start justify-center"
    >
      <div className="pb-12">
        <HeaderTitle mainText="selected" subText="Work" />
      </div>
      <div className="">
        {projectData.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            company={project.company}
            companyLogo={project.companyLogo}
            websiteLink={project.websiteLink}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectWorks;
