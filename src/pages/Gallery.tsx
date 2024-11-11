import React, { useState } from "react";
import Header from "../app/component/Header";
import "../app/globals.css";
import Footer from "../app/component/Footer";
import Image from "next/image";
import Office_Entrance from "../../public/assets/about/img1.jpg";
import Office_Lounge from "../../public/assets/about/img2.jpg";
import Conference_Room from "../../public/assets/about/img3.jpg";
import Office_Room4 from "../../public/assets/about/img4.jpg";
import Office_Room5 from "../../public/assets/about/img5.jpg";
import Office_Room6 from "../../public/assets/about/img6.jpg";
import Office_Room7 from "../../public/assets/about/img7.jpg";
import birthday_1 from "../../public/assets/about/img8.jpeg";
import birthday_2 from "../../public/assets/about/img9.jpeg";
import birthday_3 from "../../public/assets/about/img10.jpg";
import team_get_1 from "../../public/assets/about/img11.jpg";
import team_get_2 from "../../public/assets/about/img12.jpg";
import team_get_3 from "../../public/assets/about/img13.jpg";
import { Newsletter } from "../app/component/Newsletter";

const Gallery = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedCourse, setSelectedCourse] = useState<string>(
    "Full Stack Development"
  );

  return (
    <>
      <section>
        <Header  />
        <div className="p-4 text-center">
          <h1 className="text-2xl font-bold mb-4 p-[39px]">GALLERY & EVENTS</h1>
          <h2 className="text-2xl font-bold mb-4 pb-[30px]">OUR OFFICE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-[60px] pr-[60px] 1">
            {/* First Image */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={Office_Entrance}
                alt="Logo"
                className="w-full border-2 border-[#cfcfcf]"
              />
            </div>
            {/* Second Image */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={Office_Lounge}
                alt="Office Lounge"
                className="w-full border-2 border-[#cfcfcf]"
              />
            </div>
            {/* Third Image */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={Conference_Room}
                alt="Conference Room"
                className="w-full border-2 border-[#cfcfcf]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-[60px] pr-[60px] pt-[40px]">
            {/* First Image */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={Office_Room4}
                alt="Logo"
                className="w-full border-2 border-[#cfcfcf]"
              />
            </div>
            {/* Second Image */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={Office_Room5}
                alt="Office Lounge"
                className="w-full border-2 border-[#cfcfcf]"
              />
            </div>
            {/* Third Image */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={Office_Room6}
                alt="Conference Room"
                className="w-full border-2 border-[#cfcfcf]"
              />
            </div>
          </div>

      
        </div>

        <div className="p-4 text-center">
          <h1 className="text-2xl font-bold mb-4 p-[39px]">BIRTHDAY PARTIES</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-[60px] pr-[60px]">
            {/* First Image */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={birthday_1}
                alt="Logo"
                className="w-full border-2 border-[#cfcfcf]"
              />
            </div>
            {/* Second Image */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={birthday_2}
                alt="Office Lounge"
                className="w-full border-2 border-[#cfcfcf]"
              />
            </div>
            {/* Third Image */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={birthday_3}
                alt="Conference Room"
                className="w-full border-2 border-[#cfcfcf]"
              />
            </div>
          </div>
        </div>

        <div className="p-4 text-center">
          <h1 className="text-2xl font-bold mb-4 p-[39px]">
            TEAM GET TOGETHER
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-[60px] pr-[60px]">
            {/* First Image */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={team_get_1}
                alt="Logo"
                className="w-full border-2 border-[#cfcfcf]"
              />
            </div>
            {/* Second Image */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={team_get_2}
                alt="Office Lounge"
                className="w-full border-2 border-[#cfcfcf]"
              />
            </div>
            {/* Third Image */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={team_get_3}
                alt="Conference Room"
                className="w-full border-2 border-[#cfcfcf]"
              />
            </div>
          </div>
        </div>
        <div className="lg:p-0 p-4 ">
          <Newsletter />
        </div>

        <Footer />
      </section>
    </>
  );
};

export default Gallery;
