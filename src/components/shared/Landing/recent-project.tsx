import React, { useState } from "react";

const RecentProject = () => {
  return (
    <section>
      <div className="px-24 py-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 rounded-full bg-white" />
            <h4>Recent Project</h4>
          </div>
          <div
            className="
text-2xl | md:text-3xl | xl:text-4xl | 4xl:text-5xl
font-sans-primary tracking-tight
text-white
leading-none
text-balance
max-w-xl  | xl:indent-32 | 4xl:max-w-2xl
"
          >
            <h2>How we take your business to the next level</h2>
          </div>
          <div className="">
            <p className="text-base | xl:text-md text-white dark:text-grayDark-200 font-sans-primary relative z-10 text-pretty font-light leading-7  mb-6 max-w-sm">
              We are a digital marketing agency with expertise, and we’re on a
              mission to help you take the next step in your business.
            </p>
            <div className="">
              <button>See All Project</button>
            </div>
          </div>
        </div>
        <ProjectDetails />
      </div>
    </section>
  );
};

export default RecentProject;

function ProjectDetails() {
  // Example projects data
  const projects = [
    {
      name: "Flight Booking",
      category: "Design and Development",
      imageUrl:
        "https://yasingenc.net/_next/image?url=%2Fhero-image.jpg&w=640&q=75", // Placeholder URL
    },
    {
      name: "Hotel Reservation",
      category: "Design and Development",
      imageUrl:
        "https://made-byshape.transforms.svdcdn.com/production/uploads/images/workImages/Enabl/Flyer.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1707131053&s=13b24aed79a6a5b9c7f9724fba347b23",
    },
    {
      name: "Car Rental Service",
      category: "Design and Development",
      imageUrl:
        "https://yasingenc.net/_next/image?url=%2Fhero-image.jpg&w=640&q=75",
    },
  ];

  // State to track hovered project
  const [hoveredProject, setHoveredProject] = useState<any>(null);
  // State to track cursor position
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    setCursorPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div className="space-y-4 relative" onMouseMove={handleMouseMove}>
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex items-center justify-between w-full border-b py-6 px-4"
          onMouseEnter={() => setHoveredProject(project)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <div className="flex-grow">
            <h1 className="text-4xl uppercase font-semibold">{project.name}</h1>
          </div>
          <div>
            <button className="text-lg">{project.category}</button>
          </div>
        </div>
      ))}
      {hoveredProject && (
        <img
          src={hoveredProject.imageUrl}
          alt="Hovered Project"
          className="absolute w-96 h-96 rounded-3xl p-4"
          style={{
            top: `${cursorPos.y - 250}px`,
            left: `${cursorPos.x - 50}px`,
          }}
        />
      )}
    </div>
  );
}
