import React from "react";
import Header from "../../app/component/Header";
import { Newsletter } from "../../app/component/Newsletter";
import Image from "next/image";
import "../../app/globals.css";
import aiChatbot from "../../../public/assets/Services/chatbot-banner1.webp";
import Link from "next/link";

import { IoIosArrowRoundForward } from "react-icons/io";
import Footer from "../../app/component/Footer";

const AI_chatbots = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[600px] p-3">
        <h1 className="text-center text-4xl font-semibold mt-6 mb-[2.2rem]">
          MOBILE APP DEVELOPMENT
        </h1>
        <Image
          src={aiChatbot}
          className="flex bg-cover shadow-md"
          alt="mobile_app_development"
        />
        <div className="text-[1.5rem] font-medium mt-[5rem] text-gray-700 font-Quicksand">
          <p className="">
            At Grethena, we understand the transformative potential of chatbots
            in reshaping the customer service paradigm. With our expertise in
            chatbot development, we empower businesses to harness the power of
            conversational AI and deliver exceptional customer experiences
            across various channels.
          </p>

          <h1 className="mt-[2rem] text-[2.1rem] font-semibold leading text-[#6754c5]">
            We specialize in designing and developing custom chatbot solutions
            that are tailored to the unique needs and objectives of your
            business.
          </h1>
          <p className="mt-[2rem]">
            Chatbots offer businesses the ability to provide instant support to
            customers, eliminating the need for lengthy wait times and improving
            overall response times. Whether it’s answering frequently asked
            questions, troubleshooting issues, or providing product
            recommendations, chatbots are available 24/7 to assist customers
            with their queries and concerns
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
            <p>We help you facilitate seemless interation with customers</p>
          </div>
          <div className="flex items-center gap-4 mt-[3rem] ">
            <div className="bg-[#6754c5] rounded-full w-[2.5rem] lg:w-6 border lg:h-6 flex items-center justify-center">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <p>We understand the importance of providing 24/7 support</p>
          </div>
          <div className="flex items-center gap-4 mt-[3rem] ">
            <div className="bg-[#6754c5] rounded-full w-[2.5rem] lg:w-6 border lg:h-6 flex items-center justify-center ">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <p>We believe in the power of continuous improvement</p>
          </div>
          <p className="mt-[3.2rem]">
            One of the key advantages of chatbots is their ability to deliver
            personalized interactions based on user preferences, behavior, and
            past interactions. By leveraging data analytics and machine learning
            algorithms, chatbots can tailor conversations to each individual
            user, providing relevant recommendations, personalized offers, and
            targeted content.
          </p>
          <p className="mt-[3.2rem] mb-[2rem]">
            Chatbots automate repetitive tasks and workflows, freeing up human
            agents to focus on more complex and high-value activities. Whether
            it’s handling routine inquiries, scheduling appointments, or
            processing transactions, chatbots can streamline operations, reduce
            manual workload, and improve overall efficiency.
          </p>
          <p className="mt-[2.5rem] mb-[2rem]">
            Chatbots are constantly learning and evolving through machine
            learning algorithms and natural language processing capabilities. By
            analyzing user interactions, feedback, and performance metrics,
            chatbots can continuously improve their responses, accuracy, and
            effectiveness over time.
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

export default AI_chatbots;
