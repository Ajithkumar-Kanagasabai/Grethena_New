import React from "react";
import Header from "../../app/component/Header";
import { Newsletter } from "../../app/component/Newsletter";
import Image from "next/image";
import "../../app/globals.css";
import mobileApp from "../../../public/assets/Services/mobile_app.webp";
import Link from "next/link";

import { IoIosArrowRoundForward } from "react-icons/io";
import Footer from "../../app/component/Footer";

/* eslint-disable no-console */

const Mobile_app_development = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[600px] p-6">
        <h1 className="text-center text-4xl font-semibold mt-6 mb-6">
          MOBILE APP DEVELOPMENT
        </h1>
        <Image
          src={mobileApp}
          className="flex bg-cover w-full lg:h-[570px] h-[300px] bg-center shadow-lg"
          alt="mobile_app_development"
        />
        <div className="text-[1.5rem] font-medium mt-[5rem] text-gray-700 font-Quicksand">
          <p className="">
            At Grethena, we breathe life into your ideas through our Mobile App
            Development service. Our team of experts transforms concepts into
            seamless, user-friendly mobile experiences that stand out in the
            digital landscape.
          </p>
          <p className="mt-5 mb-5">
            We’ve embarked on numerous remarkable projects that have left a
            lasting impact in the world of digital innovation.
          </p>
          <h1 className="mt-[2rem] text-[1.9rem] font-semibold leading text-[#6754c5]">
            Mobile App Development service is a testament to our commitment to
            turning visionary concepts into reality.
          </h1>
          <p className="mt-[2rem]">
            From creating intuitive user interfaces that captivate audiences to
            harnessing the power of cutting-edge technologies like AI and
            machine learning, we’ve consistently pushed the boundaries of what
            mobile apps can achieve.
          </p>
          <h1 className="mt-[4rem]  text-[2.8rem] font-semibold text-black">
            Core Values
          </h1>
          <p className="mt-[1.2rem]">
            At Grethena our culture comes to life through three core values:
          </p>
          <div className="flex items-center gap-4  mt-[3rem]">
            <div className="bg-[#6754c5] rounded-full w-[2.5rem] lg:w-6 border lg:h-6 flex items-center justify-center ">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <p>We believe in pushing the boundaries of what&apos;s possible.</p>
          </div>
          <div className="flex items-center gap-4 mt-[3rem] ">
            <div className="bg-[#6754c5] rounded-full w-[2.5rem] lg:w-6 border lg:h-6 flex items-center justify-center">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <p>We believe in pushing the boundaries of what&apos;s possible.</p>
          </div>
          <div className="flex items-center gap-4 mt-[3rem] ">
            <div className="bg-[#6754c5] rounded-full w-[2.5rem] lg:w-6 border lg:h-6 flex items-center justify-center ">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <p>We believe in pushing the boundaries of what&apos;s possible.</p>
          </div>
          <p className="mt-[3.2rem]">
            Over the years, we have spearheaded numerous groundbreaking projects
            that have reshaped the digital landscape. From sleek and intuitive
            user interfaces that captivate audiences to harnessing the power of
            AI and machine learning to create personalized experiences, we
            constantly strive to exceed expectations and push the boundaries of
            what mobile apps can achieve.
          </p>
          <p className="mt-[3.2rem] mb-[2rem]">
            At Grethena, we don’t just develop apps; we craft digital
            masterpieces that inspire, engage, and elevate your brand to new
            heights. With us, your vision becomes our mission, and together, we
            shape the future of mobile innovation.
          </p>
          <div className="mt-[8rem]">
            <div className="w-[220px] mx-auto mb-[8rem]">
              <Link
                href={
                  "https://calendly.com/sriram-angajala-grethena/discuss-about-your-new-app-idea?primary_color=00ff1b"
                }
                className="flex items-center justify-center rounded-md bg-[#6754c5] text-white lg:gap-x-2 gap-x-1 lg:p-3 p-2  lg:ml-6 mr-3 lg:mr-0 text-nowrap md:ml-[4rem]"
              >
                <span className=" font-bold mx-auto">Get in Touch</span>
                <span>
                  <IoIosArrowRoundForward size={25} className="mx-auto" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:p-0 p-4 ">
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default Mobile_app_development;
