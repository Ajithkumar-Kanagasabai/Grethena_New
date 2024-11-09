import React, { useState } from 'react'
import Header from "../app/component/Header";
import "../app/globals.css";
import { Newsletter } from '../app/component/Newsletter';
import Footer from '../app/component/Footer';
import Image_1 from '../../public/assets/Case-Studies/image-1.png'
import { useRouter } from "next/navigation";
const Case_Studies = () => {
  const router = useRouter();
  

  return (
    <section>
      <Header />
      <div className="h-[700px]">
        <h1 className="text-center text-5xl mt-8 font-semibold ">
          Our Case Studies
        </h1>
        <div className="grid gap-9 grid-cols-1 lg:grid-cols-3 mt-8 bg-cover p-4">
          <div
            className="flex flex-col  rounded-lg shadow-md items-center  lg:hover:scale-110 hover:scale-105 duration-300 h-[400px] mt-11 cursor-pointer p-5"
            style={{ backgroundImage: `url(${Image_1.src})` }}
            onClick={() => router.push("/parking_management")}
          >
            <div className=" bg-white w-full mt-[16rem]">
              <div className={`text-5xl mb-5`}>kk</div>
              <div className="w-[95%] mx-auto">
                <h3 className="text-xl font-semibold mb-2  text-white"></h3>
                <p className="mt-4 text-gray-800 font-medium"></p>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-6 rounded-lg shadow-md items-center  lg:hover:scale-110 hover:scale-105 duration-300 h-[400px] mt-11">
            <div className={`text-5xl mb-5`}></div>
            <div className="w-[95%] mx-auto">
              <h3 className="text-xl font-semibold mb-2  text-white"></h3>
              <p className="mt-4 text-gray-800 font-medium"></p>
            </div>
          </div>
          <div className="flex flex-col p-6 rounded-lg shadow-md items-center lg:hover:scale-110 hover:scale-105 duration-300 h-[400px] mt-11">
            <div className={`text-5xl mb-5`}></div>
            <div className="w-[95%] mx-auto">
              <h3 className="text-xl font-semibold mb-2  text-white"></h3>
              <p className="mt-4 text-gray-800 font-medium"></p>
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
}

export default Case_Studies