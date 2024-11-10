import React from "react";
import Header from "../../app/component/Header";
import "../../app/globals.css";
import Footer from "../../app/component/Footer";
import { Newsletter } from "../../app/component/Newsletter";
import { useRouter } from "next/navigation";
import mvp from '../../../public/assets/standups/mvp.jpg'

const Startups = () => {
      const router = useRouter();
  return (
    <div>
      <Header />
      <div className="min-h-[750px] ">
        <h1 className="text-center text-4xl mt-[4rem] font-Quicksand font-bold">
          Our Startups
        </h1>
        <div className="grid gap-9 grid-cols-1 lg:grid-cols-2 mx-auto mt-8 bg-cover p-4 w-[90%]">
          <div
            className="flex flex-col  rounded-lg shadow-md items-center  lg:hover:scale-110 hover:scale-105 duration-300 lg:h-[430px] h-[200px] mt-[4rem] cursor-pointer p-5  bg-cover"
            style={{ backgroundImage: `url(${mvp.src})` }}
            onClick={() => router.push("/Startups/mvp")}
          >
            <div className=" bg-[#6754c5] text-white font-medium w-full  rounded-lg shadow-md mt-[8rem] lg:mt-[24rem]">
              <div
                className={` mb-5 flex p-5 lg:text-2xl space-x-5 justify-center`}
              >
                <h1 className="text-center">
                  Minimum Viable Product Development(MVP)
                </h1>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col  rounded-lg shadow-md items-center  lg:hover:scale-110 hover:scale-105 duration-300 lg:h-[430px] h-[200px] mt-[4rem]  cursor-pointer p-5 bg-cover"
            onClick={() => router.push("/Startups/poc")}
          >
            <div className=" bg-[#6754c5] text-white font-medium w-full mt-[8rem] rounded-lg shadow-md lg:mt-[24rem] ">
              <div
                className={` mb-5 flex p-5 lg:text-2xl space-x-5 justify-center`}
              >
                <h1 className="text-nowrap">
                  Proof Of Concept development(POCs)
                </h1>
              </div>
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

export default Startups;
