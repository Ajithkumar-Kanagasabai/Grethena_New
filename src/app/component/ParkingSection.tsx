import React from "react";
import Image from "next/image";
import parking from "../../../public/assets/Case-Studies/parking.jpg";
import { FaStar } from "react-icons/fa6";
const ParkingSection = () => {
  return (
    <div className="font-Quicksand p-0 lg:p-6">
      <h1 className="text-center text-4xl font-semibold mt-6">
        PARKING MANAGEMENT
      </h1>
      <div className="lg:h-[600px] lg:flex mt-7 w-full lg:rounded-2xl overflow-hidden ">
        <Image src={parking} alt="booking" className="lg:w-[60%] bg-cover" />
        <div className="bg-[#6754c5] w-full text-white overflow-hidden ">
          <h1 className="text-center text-4xl text-nowrap font-semibold mt-3 p-4">
            Project Information
          </h1>
          <div className=" mt-0 lg:mt-6">
            <div className=" flex   justify-center border-b-2 ">
              <div className="flex gap-x-[3rem] justify-center text-xl font-medium mt-6  mb-6 lg:mb-6 w-[80%]">
                <p className="w-[40%]  text-nowrap">Client Name:</p>
                <p className="lg:mb-10   text-nowrap w-full">
                  UK Parking Control
                </p>
              </div>
            </div>
            <div className=" flex  justify-center border-b-2  ">
              <div className="flex boder gap-x-[3rem] justify-center text-center text-xl  font-medium  mb-6  mt-6 w-[80%]">
                <p className="w-[40%]  text-nowrap text-left">Location:</p>
                <p className="lg:mb-10 text-nowrap w-full text-left ml-[1.80rem] lg:ml-0 ">
                  London, United Kingdom
                </p>
              </div>
            </div>
            <div className=" flex justify-center items-center border-b-2   ">
              <div className="flex gap-x-[3rem] justify-center   text-xl  font-medium mt-5 lg:w-[80%] mb-6  ">
                <p className="lg:w-[40%] w-full  text-nowrap text-left mr-[2.3rem] lg:mr-0">
                  Problem:
                </p>
                <p className="lg:mb-10 text-nowrap w-full text-left ml-[0.75rem] lg:ml-0">
                  Parking Management
                </p>
              </div>
            </div>
            <div className=" flex  justify-center  ">
              <div className="flex gap-x-[3rem] justify-center text-xl  font-medium boder mb-6 mt-5 w-[90%] lg:w-[80%]">
                <p className="w-[40%]  text-left ml-6 lg:ml-0 text-nowrap">
                  Client Rating:
                </p>
                <div className="mb-10 text-nowrap w-full text-left ml-[2.75rem] lg:ml-0">
                  <div className="flex">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <article className="lg:px-8 px-5">
          <div className="text-[1.4rem] font-normal mt-[6rem] text-gray-700 font-Quicksand">
            <p className="mb-5">
              UK Parking Control Ltd (UKPC), a pioneering force in the realm of
              parking management, has set forth on a mission to redefine the
              parking experience through innovative technology.
            </p>
            <p className="mb-5">
              UKPC’s mission is simple yet transformative: “To provide the
              latest intelligent technology in car park management to landowners
              and managing agents, enabling a seamless parking experience for
              anyone using the facilities.” In alignment with this mission, UKPC
              envisions a future where every parking facility, regardless of its
              size or sector, can embrace a digital, technology-driven parking
              experience that caters specifically to their unique needs.
            </p>
            <h1 className=" mt-[2rem] text-3xl font-semibold text-[#6754c5]">
              UK Parking Control partnered with Grethena to introduce an
              innovative solution: the iTicket app.
            </h1>
            <p className="mt-[3rem]">
              As one of the United Kingdom’s foremost bespoke parking management
              solutions providers, UKPC stands at the forefront of delivering
              cutting-edge parking solutions and enforcement services. Their
              commitment extends beyond the realm of technology, encompassing
              effectiveness, compliance, innovation, and responsive aftercare
              services.
            </p>
            <p className="mt-[3rem]">
              n this case study, we delve into the remarkable journey of UKPC,
              exploring their visionary approach, the innovative solutions they
              offer, and the impact of their endeavors on landowners, managing
              agents, and parking facility users alike.
            </p>
          </div>
          <div>
            <h1 className="mt-[4rem] mb-[3rem] text-4xl font-semibold">
              Problem Statements
            </h1>
            <div className="mt-7 text-[1.4rem] text-gray-700 font-normal flex-col flex gap-y-6">
              <p>
                UK Parking Control (UKPC) faced a significant challenge in their
                parking management operations due to the reliance on manual
                contraventions. This manual approach required a substantial
                amount of effort to collect and send images related to parking
                violations, and it often resulted in inaccuracies in the data.
                The inefficiencies of this process not only hindered operational
                productivity but also led to potential errors and disputes.
              </p>
            </div>
          </div>
          <div>
            <h1 className="mt-[4rem] mb-[4rem] text-4xl font-semibold">
              Grethena’s Solution
            </h1>
            <p className="text-[1.4rem] mb-[4rem]">
              In response to these challenges, UK Parking Control partnered with
              Grethena to introduce an innovative solution: the iTicket app.
              This groundbreaking technology, powered by Grethena, aimed to
              empower parking management and provide a streamlined, accurate,
              and legally enforceable approach to controlling parking spaces.
            </p>
           
          </div>
        </article>
      </div>
    </div>
  );
};

export default ParkingSection;
