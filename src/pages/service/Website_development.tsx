import React from 'react'
import Header from "../../app/component/Header";
import Footer from "../../app/component/Footer";
import { Newsletter } from "../../app/component/Newsletter";
import "../../app/globals.css";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import webDevelop from "../../../public/assets/Services/website_develop.jpeg";
const Website_development = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[700px] p-8">
        <div className="text-[1.5rem] font-medium mt-[3rem] text-gray-700 font-Quicksand">
          <div className="text-center">
            <h2 className="text-4xl text-center font-bold text-black mt-[2rem] mb-[2.5rem]">
              Website Development
            </h2>
            <Image
              src={webDevelop}
              className="flex bg-cover w-full mb-8 lg:h-[570px] h-[300px] bg-center shadow-lg "
              alt="ai"
            />
          </div>
          <p className="">Empowering Your Brand with a Digital Presence</p>
          <p className="mt-5 mb-5">
            We are in digital-first world, a website is more than a
            storefront—it’s your brand’s first impression. We specialize in
            crafting websites that are not only visually appealing but also
            highly functional and responsive. Our approach combines aesthetics
            with functionality to create an intuitive, seamless user experience
            that turns visitors into loyal customers.
          </p>

          <h1 className="mt-[4rem]  text-[2.8rem] font-semibold text-black">
            Our Expertise in Website Development Includes:
          </h1>

          <div className="flex items-center gap-4  mt-[3rem]">
            <div className="bg-[#6754C5] rounded-full w-[2.6rem] lg:w-6 border lg:h-6 flex items-center justify-center ">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <p>
              Custom Design: Tailored interfaces that reflect your brand
              identity.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-[3rem] ">
            <div className="bg-[#6754C5] rounded-full w-[2.6rem] lg:w-6 border lg:h-6 flex items-center justify-center">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <p>
              Responsive Design: Optimized for all devices to ensure a flawless
              experience on mobile, tablet, and desktop.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-[3rem] ">
            <div className="bg-[#6754C5] rounded-full w-[2.6rem] lg:w-6 border lg:h-6 flex items-center justify-center ">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <p>
              SEO & Performance Optimization: Built with search engines and
              speed in mind to keep your site visible and competitive.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-[3rem] ">
            <div className="bg-[#6754C5] rounded-full w-[2.7rem] lg:w-6 border lg:h-6 flex items-center justify-center ">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <p>
              User-Centric Approach: Structured to engage and guide users
              effectively.
            </p>
          </div>
          <p className="mt-[3.2rem]">
            Let us build a digital presence that elevates your brand and drives
            growth.
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
      </div>
     
      <Footer />
    </div>
  );
}

export default Website_development