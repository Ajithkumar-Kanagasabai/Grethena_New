import React, { useState } from "react";
import Header from "../app/component/Header";
import "../app/globals.css";
import Footer from "../app/component/Footer";

import Image from "next/image";
import team1 from "../../public/assets/about/team1.jpeg";
import team2 from "../../public/assets/about/team5.png";
import ceo from "../../public/assets/about/ceo.jpg";
import coo from "../../public/assets/about/coo.png";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";


const about = () => {


  return (
    <>
      <section>
        <Header />
        <div className="bg-white py-8 px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className=" text-[var(--four-color)] font-bold m-0  leading-[1.41666] clear-both text-[32px] pt-[60px] pr-[60px] pb-[60px] pl-[60px]">
                About Us
              </h2>
            </div>
            <p className="text-center text-gray-600 text-xl">
              Welcome to Grethena Where Innovation Meets Excellence in
              Information Technology In a rapidly evolving digital landscape, we
              stand at the forefront of technological advancements, dedicated to
              bringing you solutions that are not only innovative but also
              strategically designed to fuel growth and transformation. Our
              Story
            </p>
            <div className="max-w-7xl mx-auto">
              <div className="mt-6 flex flex-col items-center lg:flex-row lg:justify-evenly ">
                <div className="mt-[1.7rem]">
                  <Image
                    src={ceo}
                    alt="CEO"
                    className="rounded-lg shadow-lg w-[400px] h-[370px]"
                  />
                  <div className="mt-3 text-xl">
                    <p className="font-bold text-blue-700">Sriram Angajala</p>
                    <p className="">Chief Executive Officer | UK-London</p>
                    <p className=" underline decoration-blue-700 text-blue-700">
                      sriram.angajala@grethena.com
                    </p>
                    <Link
                      href={
                        "https://www.linkedin.com/in/sriramangajala?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      }
                      className="mt-4"
                      target="blank"
                    >
                      <FaLinkedin size={27} className="mt-3" />
                    </Link>
                  </div>
                </div>
                <div className="">
                  <Image
                    src={coo}
                    alt="COO"
                    className="rounded-lg shadow-lg w-[400px] h-[370px] flex bg-center mt-5 "
                  />
                  <div className="mt-3 text-xl">
                    <p className="font-bold text-blue-700">
                      Saranya Seetharaman
                    </p>
                    <p className="">Chief Operating Officer | India</p>
                    <p className="underline decoration-blue-700 text-blue-700">
                      saranya@grethena.com
                    </p>
                    <Link
                      href={
                        "https://www.linkedin.com/in/saranya-seetharaman-136305112?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      }
                      className="mt-4"
                      target="blank"
                    >
                      <FaLinkedin size={27} className="mt-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-11 flex flex-col items-center  lg:flex-row lg:space-x-11">
              <div className="w-full lg:w-1/2 flex justify-center ">
                <Image
                  src={team1}
                  alt="Team Photo"
                  className="bg-transparent h-auto max-w-full border-0 rounded-none shadow-none"
                />
              </div>
              <div className="mt-6 lg:mt-0 lg:w-1/2 text-center lg:text-left">
                <h3 className="text-4xl leading-[1.41666] m-0 mb-4  text-[var(--four-color)] font-bold">
                  Our Story
                </h3>
                <p className="font-sans text-lg font-normal leading-[40px]">
                  Grethena began with a vision to bridge the gap between
                  businesses and cutting-edge technology. Our journey, driven by
                  passion and expertise, has turned into a success story that
                  redefines how technology can empower businesses across diverse
                  industries.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-purple-800 text-white py-8 px-4 md:px-8 bg-gradient-to-r from-[#2f057b] to-[#6441c1]">
          {/* <!-- WHY CHOOSE US Tag --> */}
          <div className="mb-8">
            <span className="text-[22px] font-600 font-semibold px-[35px] py-[6px] rounded-full uppercase text-[#35E1B4] bg-[#6754c5]">
              Why Choose Us
            </span>
          </div>
          {/* <!-- Title Section --> */}
          <h2 className="w-[40%] text-[50px] leading-[1.2em] text-[#FDFDFD] font-[Quicksand] font-bold mb-[75px]">
            Save Time and Effort with Grethena
          </h2>

          {/* <!-- Feature 1: Experience and Expertise --> */}
          <div className="flex items-start space-x-3 mb-6">
            <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center p-[25px] bg-gradient-to-r from-[#00fff0] to-[#00d3c7]">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <div>
              <h3 className="text-[32px] font-[Quicksand] font-bold leading-[42px] text-[#fdfdfd]">
                Experience and Expertise
              </h3>
              <p className="w-[77%] text-[16px] font-[Nunito Sans] font-bold leading-[26px] text-[#f6f6f6] pt-[15px]">
                With over 15 years of industry prowess we are not just playing
                the game - we are mastering it!
              </p>
            </div>
          </div>

          {/* <!-- Feature 2: Customized Solutions --> */}
          <div className="flex items-start space-x-3 mt-[75px]">
            <div className="bg-purple-500 rounded-full w-6 h-6 flex items-center justify-center p-[25px] ">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <div>
              <h3 className="text-[32px] font-[Quicksand] font-bold leading-[42px] text-[#fdfdfd]">
                Customized Solutions
              </h3>
              <p className="w-[60%] text-[16px] font-[Nunito Sans] font-bold leading-[26px] text-[#f6f6f6] pt-[15px]">
                We understand that every client is unique, which is why we offer
                customized solutions tailored to your specific needs.
              </p>
            </div>
          </div>

          {/* <!-- Feature 2: Customized Solutions --> */}
          <div className="flex items-start space-x-3 mt-[75px]">
            <div className="bg-purple-500 rounded-full w-6 h-6 flex items-center justify-center p-[25px] bg-gradient-to-r from-[#FF7369] to-[#FFB06D]">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <div>
              <h3 className="text-[32px] font-[Quicksand] font-bold leading-[42px] text-[#fdfdfd]">
                Flexibility on Time
              </h3>
              <p className="w-[62%] text-[16px] font-[Nunito Sans] font-bold leading-[26px] text-[#f6f6f6] pt-[15px]">
                With Grethena, there is no need to compromise between
                flexibility and timeliness - you get the best of both worlds
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
             
            </div>
            <div className="mt-9 flex flex-col items-center lg:flex-row lg:space-x-8 ">
              <div className="w-full lg:w-1/2 border flex justify-center">
                {/* img */}
                <Image
                  src={team2}
                  alt="Team Photo"
                  className="rounded-lg shadow-lg w-full "
                />
              </div>
              <div className="mt-6 lg:mt-0 lg:w-1/2 text-center lg:text-left">
                <h3 className="text-3xl  text-black font-bold">OUR OFFICE</h3>
                <p className="mt-4 text-gray-600 text-lg">
                  At Grethena, our office is more than just a workspace—it's
                  where ideas are born, collaboration thrives, and technology is
                  transformed into innovative solutions. Located in the heart of
                  Chennai, our office is designed to inspire creativity and
                  foster a community of forward-thinking professionals dedicated
                  to redefining the future of information technology.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 text-center mt-4"></div>
        <div className="bg-white py-8 px-4 sm:px-6 lg:px-8 mb-5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What Our Clients Say
              </h2>
            </div>
            <div className="mt-9 flex flex-col items-center lg:flex-row lg:space-x-8">
              <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                  src={team1}
                  alt="Team Photo"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="mt-6 lg:mt-0 lg:w-1/2 text-center lg:text-left">
                <p className="mt-4 text-gray-600 text-lg">
                  &quot;Exceptional service and outstanding quality! The team
                  here has a clear commitment to innovation, delivering products
                  that surpass our expectations every time. Their expertise and
                  attention to detail have made a significant impact on our
                  business, and we truly value their dedication to
                  excellence.&quot;
                </p>
                <p className="mt-4 text-gray-600 text-lg">
                  &quot;Working with this team has been a fantastic experience.
                  Their industry knowledge, professionalism, and responsiveness
                  have made it easy for us to find exactly what we need. They
                  consistently go above and beyond, ensuring that every
                  interaction leaves us fully satisfied.&quot;
                </p>
                <p className="mt-4 text-gray-600 text-lg">
                  &quot;Reliable, forward-thinking, and customer-focused – this
                  company understands what it takes to provide a great client
                  experience. Their dedication to quality and innovation in IT
                  solutions is evident in everything they do. We couldn&quot;t
                  be happier with our partnership!&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default about;
