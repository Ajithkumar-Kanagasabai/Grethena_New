import React from 'react';
import Image from 'next/image';
import Tailored from "../../../public/assets/Icons/Tailored.png";
import Expert from "../../../public/assets/Icons/Expert.png";
import HandsOn from "../../../public/assets/Icons/Hands on learning .png";
import Career from "../../../public/assets/Icons/Carrer.png";
import Global from "../../../public/assets/Icons/Global.png";
import Webinars from "../../../public/assets/Icons/Webinars.png";

const features = [
    {
        title: "Tailored for Latin American Talent",
        description: "Our programs are specifically designed to address the unique needs and challenges Latin American professionals face in the global IT market.",
        icon: Tailored,
    },
    {
        title: "Expert Instructors",
        description: "Learn from industry veterans and thought leaders who bring real-world experience and insights to the classroom.",
        icon: Expert,
    },
    {
        title: "Hands-On Learning",
        description: "Engage in practical projects and real-life scenarios that enhance learning and ensure job readiness.",
        icon: HandsOn,
    },
    {
        title: "Career Support",
        description: "Benefit from our dedicated career services, including job placement assistance, resume building, and interview preparation.",
        icon: Career,
    },
    {
        title: "Global Community",
        description: "Join a diverse and supportive network of peers, alumni, and mentors worldwide.",
        icon: Global,
    },
    {
        title: "Webinars",
        description: "We regularly schedule webinars on popular topics. Webinars are scheduled at various dates throughout the year and are free to register and join.",
        icon: Webinars,
    },
];

const FeaturesSection: React.FC = () => {
    return (
      <section className="py-4 md:py-16 px-4 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#6754c5]">
            Our approach
          </h2>
          <p className="text-gray-600 mb-12">
            We specialise in product and software development for startups and
            early stage SMEs. You need fast, cost-effective solutions to scale
            your business.
          </p>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-row p-6 rounded-lg shadow-md items-center"
              >
                <div className="w-[50%] text-4xl mb-4"></div>
                <div className="w-[80%]">
                  <h3 className="text-xl font-semibold mb-2">
                    Get to Market Quicker
                  </h3>
                  <p className="mt-4 text-gray-700">
                    Data is key to making business and product decisions, the
                    sooner you’re live the quicker you can iterate to find
                    market fit. We respond to all queries within 24 hours and
                    can kick your project off in as little as 1 week.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default FeaturesSection;
