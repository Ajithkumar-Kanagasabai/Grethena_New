import React from "react";
import Image from "next/image";
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { SiVitest } from "react-icons/si";
import { Newsletter } from "./Newsletter";

const features = [
  {
    title: "Get to Market Quicker",
    description:
      "Data is key to making business and product decisions, the sooner you’re live the quicker you can iterate to find market fit. We respond to all queries within 24 hours and can kick your project off in as little as 1 week.",
    icon: <FaArrowTrendUp size={35} className="text-[#6754c5]" />,
  },
  {
    title: "Maximise ROI",
    description:
      "We work with startups. So we know every penny counts. Our software development packages can be custom built to suit any budget.",
    icon: <HiOutlineCurrencyDollar size={35} className="text-[#6754c5]" />,
  },
  {
    title: "No compromises on quality",
    description:
      "We employ hundreds of highly-skilled, senior level engineers. We pride ourselves on rigorous quality assurance and testing as part of our process to ensure stable, future-proofed software every time.",
    icon: <SiVitest size={35} className="text-[#6754c5]" />,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <>
      <section className="py-4 md:py-16 px-4 md:px-20 ">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#6754c5]">
            Our approach
          </h2>
          <p className="text-gray-600 mb-12">
            We specialise in product and software development for startups and
            early stage SMEs. You need fast, cost-effective solutions to scale
            your business.
          </p>
          <div className="grid gap-9 grid-cols-1 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col p-6 rounded-lg shadow-md items-center bg-[#04E39C] lg:hover:scale-110 hover:scale-105 duration-300"
              >
                <div className={`text-5xl mb-5`}>{feature.icon}</div>
                <div className="w-[95%] mx-auto">
                  <h3 className="text-xl font-semibold mb-2  text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-gray-800 font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
};

export default FeaturesSection;
