import React from "react";
import Card2 from "./Card2";

export const Service_Section = () => {
  const courses = [
    {
      title: "MVP Development",
      description:
        " Our team has helped ambitious startups and established enterprises transform their ideas into fully functional MVPs that drive growth and engagement. Join a community of successful founders who have taken their first step with Grethena.",
    },
    {
      title: "AI&ML Integrations",
      description:
        "At Grethena, we blend state-of-the-art technologies, deep industry insights, and a client-focused methodology to provide tailored AI and ML integration solutions.",
    },
    {
      title: "Proof Of Concept development(POCs)",
      description:
        "At Grethena, we specialize in delivering Proof of Concept (POC) Development to help businesses validate their ideas, test new technologies.",
    },
    {
      title: "Mobile app development(iOS, Android, Native)",
      description:
        "At Grethena, we breathe life into your ideas through our Mobile App Development service. Our team of experts transforms concepts into seamless, user-friendly mobile experiences that stand out in the digital landscape.",
    },
    {
      title: "AI Chatbots",
      description:
        "At Grethena, we specialize in designing and developing custom chatbot solutions that are tailored to the unique needs and objectives of your business.",
    },
    {
      title: "Website Development",
      description:
        "We are in digital-first world, a website is more than a storefront—it's your brand's first impression. We specialize in crafting websites that are not only visually appealing but also highly functional and responsive. Our approach combines aesthetics with functionality to create an intuitive, seamless user experience that turns visitors into loyal customers.",
    },
    {
      title: "Backend System Development",
      description:
        "Behind every high-performing application is a solid backend system. Our backend development services focus on creating robust, scalable systems that support complex workflows and ensure seamless data flow.",
    },
    {
      title: "CRM Implementation",
      description:
        "Customer relationships are the core of your business. Our CRM implementation services focus on creating systems that help you understand and serve your clients better.",
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
          <Card2 key={index} {...course} index={index} />
        ))}
      </div>
    </div>
  );
};
