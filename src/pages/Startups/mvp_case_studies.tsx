import Footer from '@/src/app/component/Footer';
import Header from '@/src/app/component/Header';
import React from 'react'
import "../../app/globals.css";
import Link from 'next/link';
import { HiLink } from "react-icons/hi";

const mvc_case_studies = () => {
  return (
    <>
      <Header />
      <div className="p-5 px-9 min-h-[700px] container">
        <h1 className="text-center lg:text-3xl md:text-3xl text-2xl font-bold mt-10  ">
          Build a MVP with Grethena
        </h1>
        <div className="mt-20 mb-8">
          <div className="  ">
            <h1 className="lg:text-2xl md:text-xl text-md font-bold mb-6">
              Myco-Media streaming app, UAE
            </h1>
          </div>
          <div className="flex gap-x-2  items-center mb-2">
            <Link
              className=" underline ml-[1.7rem] flex items-center gap-x-3  text-blue-600 text-[20px] "
              href={"https://myco.io/"}
              target="blank"
            >
              <HiLink />
              Click here
            </Link>
            <p className="text-[20px]">-Website</p>
          </div>
          <div className="flex gap-x-2  items-center mb-2">
            <Link
              className=" underline ml-[1.7rem] flex items-center gap-x-3  text-blue-600 text-[20px] mb-2"
              href={
                "https://apps.apple.com/us/app/myco-powered-by-mcontent/id1603970931"
              }
              target="blank"
            >
              <HiLink />
              Click here
            </Link>
            <p className="text-[20px]">-App store</p>
          </div>

          <div className="flex gap-x-2  items-center mb-2">
            <Link
              className=" underline ml-[1.7rem] flex items-center gap-x-3  text-blue-600 text-[20px] mb-2"
              href={
                "https://play.google.com/store/apps/details?id=com.mcontent&hl=en&gl=US"
              }
              target="blank"
            >
              <HiLink />
              Click here
            </Link>
            <p className="text-[20px]">-Play store</p>
          </div>

          <h2 className="lg:text-2xl md:text-1xl font-bold mb-6 mt-8">
            United Kingdom Parking Control Utility App, UK
          </h2>
          <div className="flex gap-x-2  items-center mb-2">
            <Link
              className=" underline ml-[1.7rem] flex items-center gap-x-3  text-blue-600 text-[20px] mb-2"
              href={"https://www.ukparkingcontrol.com/"}
              target="blank"
            >
              <HiLink />
              Click here
            </Link>
            <p className="text-[20px]">-Website(Home)</p>
          </div>
          <div className="flex gap-x-2  items-center mb-2">
            <Link
              className=" underline ml-[1.7rem] flex items-center gap-x-3  text-blue-600 text-[20px] mb-2"
              href={"https://www.ukparkingcontrol.com/iticket/"}
              target="blank"
            >
              <HiLink />
              Click here
            </Link>
            <p className="text-[20px]">-Website(iTicket)</p>
          </div>
          <div className="flex gap-x-2  items-center mb-2">
            <Link
              className=" underline ml-[1.7rem] flex items-center gap-x-3  text-blue-600 text-[20px] mb-2"
              href={
                "https://apps.apple.com/gb/app/iticket-space-patrol-ukpc/id969471170"
              }
              target="blank"
            >
              <HiLink />
              Click here
            </Link>
            <p className="text-[20px]">-App Store</p>
          </div>

          <h2 className="lg:text-2xl md:text-1xl font-bold mb-6 mt-8">
            Eurostar(Train company), UK
          </h2>
          <div className="flex gap-x-2  items-center mb-2">
            <Link
              className="underline ml-[1.7rem] flex items-center gap-x-3  text-blue-600 text-[20px]"
              href={
                "https://www.eurostar.com/uk-en/travel-info/your-trip/eurostar-app"
              }
              target="blank"
            >
              <HiLink />
              Click here-Website
            </Link>
            <p className="text-[20px]">-Website</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default mvc_case_studies