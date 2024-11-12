import React from "react";
import Card2 from "./Card2";
import { LuBrainCircuit } from "react-icons/lu";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { BsRobot } from "react-icons/bs";
import { TbRotate3D } from "react-icons/tb";
import { TbServerCog } from "react-icons/tb";

export const Service_Section = () => {
  const courses = [
    {
      title: "AI&ML Integrations",
      description:
        "Outpace your competition by integrating AI and Machine Learning into your products.",
      logo: <LuBrainCircuit size={35} />,
    },

    {
      title: "Mobile app development(iOS, Android, Native)",
      description:
        "High-performing iOS and Android app development for new or existing projects.",
      logo: <MdOutlineMobileFriendly size={35} />,
    },
    {
      title: "AI Chatbots",
      description:
        "AI chatbots provide instant, personalized support and streamline customer interactions.",
      logo: <BsRobot size={35} />,
    },
    {
      title: "Website Development",
      description:
        "Website development involves creating, building, and maintaining dynamic, user-friendly websites for businesses and individuals.",
      logo: <TbRotate3D size={35} />,
    },
    {
      title: "Backend System Development",
      description:
        "Backend System Development involves creating robust, scalable, and secure server-side applications and databases.",
      logo: <TbServerCog size={35} />,
    },
    {
      title: "CRM Implementation",
      description:
        "CRM Implementation optimizes customer management and business operations.",
      logo: <LuBrainCircuit size={35} />,
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
