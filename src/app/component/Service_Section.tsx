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
    <div className="mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 w-6/6">
        {courses.map((course, index) => (
          <div key={index}>
            <Card2 {...course} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};
