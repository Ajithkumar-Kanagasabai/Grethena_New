import React from 'react'
import Header from "../../app/component/Header";
import { Newsletter } from "../../app/component/Newsletter";
import Footer from "../../app/component/Footer";
import "../../app/globals.css";
import Image from "next/image";
import aiImage from "../../../public/assets/Services/AI-app-banner.webp";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
const AI_ML_Intrgrations = () => {
  return (
    <>
      <Header />
      <div className="min-h-[700px] font-Quicksand p-8">
        <h1 className="text-4xl text-center font-bold mt-[4rem] mb-[2.5rem]">
          AI & ML Integrations
        </h1>
        <Image
          src={aiImage}
          className="flex bg-cover w-full lg:h-[570px] h-[300px] bg-center shadow-lg "
          alt="ai"
        />
        <div className="text-[1.5rem] font-medium mt-[5rem] text-gray-700 font-Quicksand">
          <p className="">
            At Grethena, we understand the transformative potential of AI & ML
            Integrations in reshaping the future of business. With our dedicated
            AI app development service, we empower businesses across diverse
            industries to harness the full potential of artificial intelligence
            and machine learning technologies to drive growth, enhance
            efficiency, and deliver unparalleled user experiences.
          </p>
          <p className="mt-5 mb-5">
            We’ve embarked on numerous remarkable projects that have left a
            lasting impact in the world of digital innovation.
          </p>
          <h1 className="mt-[2rem] text-[1.9rem] font-semibold leading text-[#6754c5]">
            At Grethena, we blend state-of-the-art technologies, deep industry
            insights, and a client-focused methodology to provide tailored AI
            and ML integration solutions.
          </h1>
          <p className="mt-[2rem]">
            AI-powered applications have the remarkable ability to analyze vast
            amounts of data, uncover valuable insights, and make data-driven
            decisions in real-time. By leveraging advanced algorithms and
            predictive analytics, businesses can gain deep insights into
            customer behavior, market trends, and operational patterns, enabling
            them to make informed decisions and stay ahead of the competition.
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
            <p>We embrace culture of lifelong learning and improvement.</p>
          </div>
          <div className="flex items-center gap-4 mt-[3rem] ">
            <div className="bg-[#6754c5] rounded-full w-[2.5rem] lg:w-6 border lg:h-6 flex items-center justify-center ">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <p>
              Collaboration lies at the heart of our approach, working together
              to drive innovative AI solutions that meet our clients&apos; needs
            </p>
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
            Whether you’re looking to streamline operations, enhance customer
            engagement, or unlock new revenue streams, our team of seasoned
            professionals is committed to helping you achieve your goals and
            unleash the full potential of artificial intelligence.
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
      {/* <div className="lg:p-6 p-4">
        <Newsletter />
      </div> */}
      <Footer />
    </>
  );
}

export default AI_ML_Intrgrations