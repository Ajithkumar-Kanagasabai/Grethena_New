import React, { useState } from 'react'
import Header from '../app/component/Header'
import "../app/globals.css";
import Footer from '../app/component/Footer';
import TopSection from '../app/aboutUsPage/TopSection';
import WhyChooseUs from '../app/aboutUsPage/WhyChooseUs';
import VisionMission from '../app/aboutUsPage/VisionMission';
import Philosophy from '../app/aboutUsPage/Philosophy';
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";



const BackendSystemDevelopment = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedCourse, setSelectedCourse] = useState<string>('Full Stack Development');

    return (
        <>
            <section>
                    <Header onSelectCourse={setSelectedCourse} />
                    
                    <div className="text-[1.5rem] font-medium mt-[5rem] text-gray-700 font-Quicksand">
                    <div className="text-center">
      <h2 className="font-[Quicksand] text-[var(--four-color)] font-bold m-0 mb-4 leading-[1.41666] clear-both text-[32px] pt-[60px] pr-[60px] pb-[60px] pl-[60px]"> Backend System Development</h2>
    </div>
          <p className="">
          Building the Foundation for Powerful Applications
          </p>
          <p className="mt-5 mb-5">
          Behind every high-performing application is a solid backend system. Our backend development
services focus on creating robust, scalable systems that support complex workflows and ensure
seamless data flow. We design architecture that grows with your business, optimizing for
security, scalability, and reliability.
          </p>
          {/* <h1 className="mt-[2rem] text-[1.9rem] font-semibold leading text-[#6754C5]">
            Mobile App Development service is a testament to our commitment to
            turning visionary concepts into reality.
          </h1>
          <p className="mt-[2rem]">
            From creating intuitive user interfaces that captivate audiences to
            harnessing the power of cutting-edge technologies like AI and
            machine learning, we’ve consistently pushed the boundaries of what
            mobile apps can achieve.
          </p> */}
          <h1 className="mt-[4rem]  text-[2.8rem] font-semibold text-black">
          Our Backend Development Services Cover:
          </h1>
          {/* <p className="mt-[1.2rem]">
            At Grethena our culture comes to life through three core values:
          </p> */}
          <div className="flex items-center gap-4  mt-[3rem]">
            <div className="bg-[#6754C5] rounded-full w-[2.5rem] lg:w-6 border lg:h-6 flex items-center justify-center ">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <p>Database Management: Secure and efficient storage solutions tailored to your
            needs.</p>
          </div>
          <div className="flex items-center gap-4 mt-[3rem] ">
            <div className="bg-[#6754C5] rounded-full w-[2.5rem] lg:w-6 border lg:h-6 flex items-center justify-center">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <p>API Integrations: Seamless connectivity between different systems and services.</p>
          </div>
          <div className="flex items-center gap-4 mt-[3rem] ">
            <div className="bg-[#6754C5] rounded-full w-[2.5rem] lg:w-6 border lg:h-6 flex items-center justify-center ">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <p>Scalability & Reliability: Architecture that adapts as your business expands.</p>
          </div>
          <div className="flex items-center gap-4 mt-[3rem] ">
            <div className="bg-[#6754C5] rounded-full w-[2.5rem] lg:w-6 border lg:h-6 flex items-center justify-center ">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <p>Security & Compliance: Built with industry-leading practices to protect sensitive
            information.</p>
          </div>
          <p className="mt-[3.2rem]">
          Strengthen your app’s backbone with a backend system that supports seamless functionality.
CRM Implementation
          </p>
         
          <div className="mt-[8rem]">
            <div className="w-[220px] mx-auto mb-[8rem]">
              <Link
                href={
                  "https://calendly.com/sriram-angajala-grethena/discuss-about-your-new-app-idea?primary_color=00ff1b"
                }
                className="flex items-center justify-center rounded-md bg-[#6754C5] text-white lg:gap-x-2 gap-x-1 lg:p-3 p-2  lg:ml-6 mr-3 lg:mr-0 text-nowrap md:ml-[4rem]"
              >
                <span className=" font-bold mx-auto">Get in Touch</span>
                <span>
                  <IoIosArrowRoundForward size={25} className="mx-auto" />
                </span>
              </Link>
            </div>
          </div>
        </div>
                    <Footer />
            </section>
        </>
    )
}

export default BackendSystemDevelopment