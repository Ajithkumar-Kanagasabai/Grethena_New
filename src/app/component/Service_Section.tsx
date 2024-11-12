import React from "react";
import Card2 from "./Card2";

export const Service_Section = () => {
  const courses = [
    {
      title: "AI&ML Integrations",
      description:
        "Outpace your competition by integrating AI and Machine Learning into your products.",
    },

    {
      title: "Mobile app development(iOS, Android, Native)",
      description:
        "High-performing iOS and Android app development for new or existing projects.",
    },
    {
      title: "AI Chatbots",
      description:
        "AI chatbots provide instant, personalized support and streamline customer interactions.",
    },
    {
      title: "Website Development",
      description:
        "Website development involves creating, building, and maintaining dynamic, user-friendly websites for businesses and individuals.",
    },
    {
      title: "Backend System Development",
      description:
        "Backend System Development involves creating robust, scalable, and secure server-side applications and databases.",
    },
    {
      title: "CRM Implementation",
      description:
        "CRM Implementation optimizes customer management and business operations.",
    },
  ];
  return (
    <div className="container mx-auto px-4 ">
      <div className="text-center ">
       
      </div>
      <div className=" grid lg:grid-cols-3 grid-cols-1  gap-9  w-[84%] mx-auto ">
        {courses.map((course, index) => (
          <Card2 key={index} {...course} index={index} />
        ))}
      </div>
    </div>
  );
};
