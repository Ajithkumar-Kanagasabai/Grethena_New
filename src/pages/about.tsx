import React, { useState } from 'react'
import Header from '../app/component/Header'
import "../app/globals.css";
import Footer from '../app/component/Footer';
import TopSection from '../app/aboutUsPage/TopSection';
import WhyChooseUs from '../app/aboutUsPage/WhyChooseUs';
import VisionMission from '../app/aboutUsPage/VisionMission';
import Philosophy from '../app/aboutUsPage/Philosophy';
import Image from 'next/image';
import team1 from "../../public/assets/about/team1.jpeg";
import team2 from "../../public/assets/about/team2.jpeg";


const about = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedCourse, setSelectedCourse] = useState<string>('Full Stack Development');

    return (
        <>
            <section>

                    <Header onSelectCourse={setSelectedCourse} />
                    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center">
      <h2 className="font-[Quicksand] text-[var(--four-color)] font-bold m-0 mb-4 leading-[1.41666] clear-both text-[32px] pt-[60px] pr-[60px] pb-[60px] pl-[60px]">About Us</h2>
    </div>
    <div className="mt-6 flex flex-col items-center lg:flex-row lg:space-x-8">
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image src={team1} alt="Team Photo" className="rounded-lg shadow-lg w-full lg:w-auto max-w-xs lg:max-w-md"/>
      </div>
      <div className="mt-6 lg:mt-0 lg:w-1/2 text-center lg:text-left">
        <h3 className="text-5xl leading-[1.41666] m-0 mb-4 font-[Quicksand] text-[var(--four-color)] font-bold">Shaping The Digital Landscape!</h3>
        <p className="font-sans text-base font-normal leading-[40px]">
          Our team of experts has years of experience in App, AI, OTT Platform, and Booking App Development.
          We are passionate about helping our clients succeed, and we continuously strive to innovate and 
          improve in the digital space.
        </p>
      </div>
    </div>
  </div>
</div>
<div className="bg-purple-800 text-white py-8 px-4 md:px-8">
    {/* <!-- WHY CHOOSE US Tag --> */}
    <div className="mb-4">
        <span className="bg-blue-500 text-white text-xs font-semibold px-[35px] py-[6px] text-[22px] rounded-full uppercase">Why Choose Us</span>
    </div>
    {/* <!-- Title Section --> */}
    <h2 className="text-[50px] leading-[1.2em] text-[#FDFDFD] font-[Quicksand] font-bold mb-[75px]">Save Time and Effort with Grethena</h2>
    
    {/* <!-- Feature 1: Experience and Expertise --> */}
    <div className="flex items-start space-x-3 mb-6">
        <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
            <span className="text-white font-bold text-lg">✓</span>
        </div>
        <div>
            <h3 className="text-[32px] font-[Quicksand] font-bold leading-[42px] text-[#fdfdfd]">Experience and Expertise</h3>
            <p className="text-[16px] font-[Nunito Sans] font-bold leading-[26px] text-[#f6f6f6]">With over 15 years of industry prowess we are not just playing the game - we are mastering it!</p>
        </div>
    </div>
    
    {/* <!-- Feature 2: Customized Solutions --> */}
    <div className="flex items-start space-x-3">
        <div className="bg-purple-500 rounded-full w-6 h-6 flex items-center justify-center">
            <span className="text-white font-bold text-lg">✓</span>
        </div>
        <div>
            <h3 className="text-xl font-semibold">Customized Solutions</h3>
            <p className="text-[16px] font-[Nunito Sans] font-bold leading-[26px] text-[#f6f6f6]">Tailored solutions that meet your unique business needs.</p>
        </div>
    </div>

     {/* <!-- Feature 2: Customized Solutions --> */}
     <div className="flex items-start space-x-3">
        <div className="bg-purple-500 rounded-full w-6 h-6 flex items-center justify-center">
            <span className="text-white font-bold text-lg">✓</span>
        </div>
        <div>
            <h3 className="text-xl font-semibold">Flexibility on Time</h3>
            <p className="text-[16px] font-[Nunito Sans] font-bold leading-[26px] text-[#f6f6f6]">With Grethena, there is no need to compromise between flexibility and timeliness - you get the best of both worlds</p>
        </div>
    </div>
</div>
<div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">OUR OFFICE</h2>
    </div>
    <div className="mt-6 flex flex-col items-center lg:flex-row lg:space-x-8">
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image src={team2} alt="Team Photo" className="rounded-lg shadow-lg w-full lg:w-auto max-w-xs lg:max-w-md"/>
      </div>
      <div className="mt-6 lg:mt-0 lg:w-1/2 text-center lg:text-left">
        <h3 className="text-2xl font-semibold text-gray-800">Shaping The Digital Landscape!</h3>
        <p className="mt-4 text-gray-600">
          Our team of experts has years of experience in App, AI, OTT Platform, and Booking App Development.
          We are passionate about helping our clients succeed, and we continuously strive to innovate and 
          improve in the digital space.
        </p>
      </div>
    </div>
  </div>
</div>
<div className="mb-4 text-center">
        <span className="bg-blue-500 text-white text-xs font-semibold px-[35px] py-[6px] text-[22px] rounded-full uppercase">TESTIMONIALS</span>
    </div>
<div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Clients Say</h2>
    </div>
    <div className="mt-6 flex flex-col items-center lg:flex-row lg:space-x-8">
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image src={team1} alt="Team Photo" className="rounded-lg shadow-lg w-full lg:w-auto max-w-xs lg:max-w-md"/>
      </div>
      <div className="mt-6 lg:mt-0 lg:w-1/2 text-center lg:text-left">
        <h3 className="text-2xl font-semibold text-gray-800">Shaping The Digital Landscape!</h3>
        <p className="mt-4 text-gray-600">
          Our team of experts has years of experience in App, AI, OTT Platform, and Booking App Development.
          We are passionate about helping our clients succeed, and we continuously strive to innovate and 
          improve in the digital space.
        </p>
      </div>
    </div>
  </div>
</div>

<div className="bg-gradient-to-r from-orange-400 to-orange-300 p-6 rounded-lg shadow-md text-center md:text-left">
  <h2 className="text-[#FDFDFD] font-quicksand text-[45px] font-bold leading-[50px] mb-0">Subscribe to Our Newsletter</h2>
  <p className="text-white mt-2 md:mt-4">Stay up-to-date and receive exclusive tips and insights by subscribing to our newsletter.</p>
  
  <form className="mt-4 md:mt-6 flex flex-col md:flex-row items-center">
    <input 
      type="email" 
      placeholder="Enter your email" 
      className="w-full md:w-auto md:flex-grow p-3 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
      required
    />
    <button 
      type="submit" 
      className="mt-3 md:mt-0 md:ml-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center">
      Subscribe 
      <span className="ml-2">&rarr;</span>
    </button>
  </form>
</div>


        

                    <Footer />

            </section>
        </>
    )
}

export default about