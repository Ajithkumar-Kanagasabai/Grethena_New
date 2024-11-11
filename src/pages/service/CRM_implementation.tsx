import React from "react";
import Header from "../../app/component/Header";
import { Newsletter } from "../../app/component/Newsletter";
import Footer from "../../app/component/Footer";
import "../../app/globals.css";
import Image from "next/image";
import CrmImage from "../../../public/assets/Services/CRM.jpg";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const CRM_implementation = () => {
  return (
    <div>
      <Header />
      <div className="text-[1.5rem]  text-gray-700 font-Quicksand p-8 min-h-[700px]">
        <div className="text-center">
          <h2 className="text-4xl text-center text-black font-bold mt-[4rem] mb-[2.5rem]">
            CRM Implementation
          </h2>
          <Image
            src={CrmImage}
            className="flex bg-cover w-full lg:h-[570px] h-[300px] mb-[3.2rem] bg-center shadow-lg "
            alt="crm"
          />
        </div>
        <p className="">
          Enhancing Customer Relationships Through Intelligent CRM Solutions
        </p>
        <p className="mt-5 mb-5">
          Customer relationships are the core of your business. Our CRM
          implementation services focus on creating systems that help you
          understand and serve your clients better. From tailored integrations
          to efficient workflow automation, we bring you closer to your
          customers with data-driven insights and streamlined processes.
        </p>
        <h1 className="mt-[4rem]  text-[2.8rem] font-semibold text-black">
          Our CRM Implementation Services Offer:
        </h1>
        <div className="flex items-center gap-4  mt-[3rem]">
          <div className="bg-[#6754C5] rounded-full w-[2.5rem] lg:w-6 border lg:h-6 flex items-center justify-center ">
            <span className="text-white font-bold text-lg">✓</span>
          </div>
          <p>
            Custom Configuration: Tailored to fit your unique business needs.
          </p>
        </div>
        <div className="flex items-center gap-4 mt-[3rem] ">
          <div className="bg-[#6754C5] rounded-full w-[2.5rem] lg:w-6 border lg:h-6 flex items-center justify-center">
            <span className="text-white font-bold text-lg">✓</span>
          </div>
          <p>
            Data Migration & Integration: Smooth transitions with minimal
            disruptions.
          </p>
        </div>
        <div className="flex items-center gap-4 mt-[3rem] ">
          <div className="bg-[#6754C5] rounded-full w-[2.5rem] lg:w-6 border lg:h-6 flex items-center justify-center ">
            <span className="text-white font-bold text-lg">✓</span>
          </div>
          <p>
            Workflow Automation: Reduce manual tasks and increase productivity.
          </p>
        </div>
        <div className="flex items-center gap-4 mt-[3rem] ">
          <div className="bg-[#6754C5] rounded-full w-[2.5rem] lg:w-6 border lg:h-6 flex items-center justify-center ">
            <span className="text-white font-bold text-lg">✓</span>
          </div>
          <p>
            Training & Support: Ensuring your team is ready to maximize CRM
            capabilities.
          </p>
        </div>
        <p className="mt-[3.2rem]">
          Optimize customer interactions and grow your business with a CRM that
          works for you.
        </p>

        <div className="mt-[6rem]">
          <div className="w-[220px] mx-auto mb-[5rem]">
            <Link
              href={
                "https://calendly.com/sriram-angajala-grethena/discuss-about-your-new-app-idea?primary_color=00ff1b"
              }
              className="flex items-center justify-center rounded-md bg-[#6754c5] text-white lg:gap-x-2 gap-x-1 lg:p-2 p-2  lg:ml-6 mr-3 lg:mr-0 text-nowrap md:ml-[4rem]"
            >
              <span className=" font-semibold mx-auto">Get in Touch</span>
              <span>
                <IoIosArrowRoundForward size={25} className="mx-auto" />
              </span>
            </Link>
          </div>
        </div>
      </div>
     
      <Footer />
    </div>
  );
};

export default CRM_implementation;
