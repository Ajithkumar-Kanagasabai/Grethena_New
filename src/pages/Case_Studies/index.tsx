import React, { useState } from "react";

import "../../app/globals.css";


import Image_1 from "../../../public/assets/Case-Studies/image-1.png";
import ott from '../../../public/assets/Case-Studies/ott.webp'
import parking from '../../../public/assets/Case-Studies/parking.jpg'
import { useRouter } from "next/navigation";
import Header from "@/src/app/component/Header";

import Footer from "@/src/app/component/Footer";
import { Newsletter } from "@/src/app/component/Newsletter";
const Case_Studies = () => {
  const router = useRouter();

  return (
    <section>
      <Header />
      <div className="h-[900px]">
        <h1 className="text-center text-5xl mt-8 font-semibold ">
          Our Case Studies
        </h1>
        <div className="grid gap-9 grid-cols-1 lg:grid-cols-3 mt-8 bg-cover p-4">
          <div
            className="flex flex-col  rounded-lg shadow-md items-center  lg:hover:scale-110 hover:scale-105 duration-300 lg:h-[430px] h-[200px] mt-11 cursor-pointer p-5 bg-cover"
            style={{ backgroundImage: `url(${Image_1.src})` }}
            onClick={() => router.push("/Case_Studies/booking-appointments")}
          >
            <div className=" bg-[#6754c5] text-white font-medium w-full  rounded-lg shadow-md mt-[5rem] lg:mt-[24rem]">
              <div className={` mb-5 flex p-5 text-xl space-x-5`}>
                <div>
                  <p className="">Client:</p>
                  <p>Service:</p>
                </div>
                <div>
                  <p>London General Practice</p>
                  <p>Booking Appointments</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col  rounded-lg shadow-md items-center  lg:hover:scale-110 hover:scale-105 duration-300 lg:h-[430px] h-[200px] mt-11 cursor-pointer p-5 bg-cover"
            style={{ backgroundImage: `url(${ott.src})` }}
            onClick={() => router.push("/Case_Studies/ott")}
          >
            <div className=" bg-[#6754c5] text-white font-medium w-full mt-[5rem] rounded-lg shadow-md lg:mt-[24rem]">
              <div className={` mb-5 flex p-5 text-xl space-x-5`}>
                <div>
                  <p className="">Client:</p>
                  <p>Service:</p>
                </div>
                <div>
                  <p>Myco</p>
                  <p>OTT</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col  rounded-lg shadow-md items-center  lg:hover:scale-110 hover:scale-105 duration-300 lg:h-[430px] h-[200px] mt-11 cursor-pointer p-5 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${parking.src})` }}
            onClick={() => router.push("/Case_Studies/parking_management")}
          >
            <div className=" bg-[#6754c5] text-white font-medium w-full mt-[6rem] lg:mt-[24rem] rounded-lg shadow-md">
              <div className={` mb-5 flex p-5 text-xl space-x-5`}>
                <div>
                  <p className="">Client:</p>
                  <p>Service:</p>
                </div>
                <div>
                  <p>UK Parking Control</p>
                  <p>Parking Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:p-0 p-4 ">
        <Newsletter />
      </div>
      <Footer />
    </section>
  );
};

export default Case_Studies;
