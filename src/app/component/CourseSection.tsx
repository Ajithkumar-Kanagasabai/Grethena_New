import React from "react";
import Card from "./Card";

const CourseSection = () => {
  const courses = [
    {
      title: "MVP Development",
      description:
        "With a focus on innovation, efficiency, and quality, we make the process straightforward and results-driven. Partner with us, and let's bring your vision to life.",
    },
    {
      title: "Hire our Developers",
      description:
        "Build your dream in-house team to work on new or existing projects in as little as 1 week",
    },
    {
      title: "Proof Of Concept development(POCs)",
      description:
        "At Grethena, we specialize in delivering Proof of Concept (POC) Development to help businesses validate their ideas, test new technologies.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold  text-black ">
          Services built for Startups
        </h2>
        <p className="px-8 md:px-40 text-[#3B3B3B] mt-8">
          For over a decade, we have been supporting scale-ups, consulting
          companies and SMBs in creating world-class software.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {courses.map((course, index) => (
          <Card key={index} {...course} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
