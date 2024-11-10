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



const websitedevelopment = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedCourse, setSelectedCourse] = useState<string>('Full Stack Development');

    return (
        <>
            <section>
                    <Header onSelectCourse={setSelectedCourse} />
                    
                    <div className="text-[1.5rem] font-medium mt-[5rem] text-gray-700 font-Quicksand">
                    <div className="text-center">
      <h2 className="font-[Quicksand] text-[var(--four-color)] font-bold m-0 mb-4 leading-[1.41666] clear-both text-[32px] pt-[60px] pr-[60px] pb-[60px] pl-[60px]">Website Development</h2>
    </div>
          <p className="">
          Empowering Your Brand with a Digital Presence
          </p>
          <p className="mt-5 mb-5">
          We are in digital-first world, a website is more than a storefront—it’s your brand’s first
impression. We specialize in crafting websites that are not only visually appealing but also
highly functional and responsive. Our approach combines aesthetics with functionality to create
an intuitive, seamless user experience that turns visitors into loyal customers.
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
          Our Expertise in Website Development Includes:
          </h1>
          {/* <p className="mt-[1.2rem]">
            At Grethena our culture comes to life through three core values:
          </p> */}
          <div className="flex items-center gap-4  mt-[3rem]">
            <div className="bg-[#6754C5] rounded-full w-[2.5rem] lg:w-6 border lg:h-6 flex items-center justify-center ">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <p>Custom Design: Tailored interfaces that reflect your brand identity.</p>
          </div>
          <div className="flex items-center gap-4 mt-[3rem] ">
            <div className="bg-[#6754C5] rounded-full w-[2.5rem] lg:w-6 border lg:h-6 flex items-center justify-center">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <p>Responsive Design: Optimized for all devices to ensure a flawless experience on
            mobile, tablet, and desktop.</p>
          </div>
          <div className="flex items-center gap-4 mt-[3rem] ">
            <div className="bg-[#6754C5] rounded-full w-[2.5rem] lg:w-6 border lg:h-6 flex items-center justify-center ">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <p>SEO & Performance Optimization: Built with search engines and speed in mind
            to keep your site visible and competitive.</p>
          </div>
          <div className="flex items-center gap-4 mt-[3rem] ">
            <div className="bg-[#6754C5] rounded-full w-[2.5rem] lg:w-6 border lg:h-6 flex items-center justify-center ">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <p>User-Centric Approach: Structured to engage and guide users effectively.</p>
          </div>
          <p className="mt-[3.2rem]">
          Let us build a digital presence that elevates your brand and drives growth.
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

export default websitedevelopment