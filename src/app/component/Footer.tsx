import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/assets/logo/Logo.png';
import Insta1 from "../../../public/assets/Footer/Image Placeholder.png";
import Insta2 from "../../../public/assets/Footer/Container.png";
import Insta3 from "../../../public/assets/Footer/Container (1).png";
import Insta4 from "../../../public/assets/Footer/Container (2).png";
import Fb from "../../../public/assets/Icons/Facebook.png";
import Twitter from "../../../public/assets/Icons/Twitter.png";
import Insta from "../../../public/assets/Icons/Instagram.png";
import Linkedin from "../../../public/assets/Icons/LinkedIn.png";
import Youtube from "../../../public/assets/Icons/YouTube.png";
import Link from 'next/link';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi2";

const Footer: React.FC = () => {
    return (
      <footer className="text-white py-8 px-20 bg-gradient-to-r from-[#00e897] via-[#00e897] to-[#6754c5] font-Quicksand ">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="lg:w-[29%] w-full">
            <Link href="/">
              {" "}
              <Image src={Logo} alt="Logo" width={200} height={42} />
            </Link>
            <div className="mt-6 flex flex-col gap-y-5 text-xl font-semibold ">
              <div className=" flex gap-4">
                <div className="mt-1">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div className="">
                  <p>UK Office</p>
                  <p>21 Heath Drive, Romford, Essex, UK, RM2 5QH</p>
                </div>
              </div>
              <div className=" flex  gap-4">
                <div className="mt-1">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div className="">
                  <p>India Office</p>
                  <p>25FG+WGJ, Ramapuram, Chennai, Tamil Nadu 600125</p>
                </div>
              </div>

              <div className=" flex items-center  gap-4">
                <div className="">
                  <HiPhone size={20} />
                </div>
                <p>+44 7453 289655</p>
              </div>
              <div className=" flex items-center  gap-4">
                <div className="">
                  <MdEmail size={20} />
                </div>
                <p>info@grethena.com</p>
              </div>
            </div>
          </div>

          <div className="flex  justify-between lg:w-[26%] w-[80%] ">
            <div className="flex flex-col mt-8 md:my-4 text-xl font-semibold">
              <h3 className=" mb-2">Menu</h3>
              <ul className="md:mt-2 flex flex-col justify-center text-white font-semibold">
                <li className="py-2">
                  <Link href="/">Home</Link>
                </li>
                <li className="py-2">
                  <Link href="/Case_Studies">Case Studies</Link>
                </li>
                <li className="py-2">
                  <Link href="/about">About Us</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col mt-8 md:my-4 text-xl font-semibold ">
              <h3 className="mb-2">Quick Links</h3>
              <ul className="md:mt-2 flex flex-col justify-center text-white font-semibold">
                <li className="py-2">
                  <Link href="/">Terms of Use</Link>
                </li>
                <li className="py-2">
                  <Link href="/PrivacyPolicy">Privacy Policy</Link>
                </li>
                <li className="py-2">
                  <Link href="/">Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className=" ">
            <div className="flex space-x-8 sm:space-x-20 md:space-x-3 xl:space-x-8 mb-6 lg:mb-0 justify-center mt-4">
              <Link href="https://www.facebook.com/" target="blank">
                <Image src={Fb} alt="Fb Icon" />
              </Link>
              <Link href="https://x.com/?lang=en" target="blank">
                <Image src={Twitter} alt="Twitter Icon" />
              </Link>
              <Link href="https://www.instagram.com/" target="blank">
                <Image src={Insta} alt="Insta Icon" />
              </Link>
              <Link href="https://in.linkedin.com/" target="blank">
                <Image src={Linkedin} alt="Linkedin Icon" />
              </Link>
              <Link href="https://www.youtube.com/" target="blank">
                <Image src={Youtube} alt="Youtube Icon" />
              </Link>
            </div>
            <p className="md:flex text-[12px] mt-5 lg:text-[18px] font-Quicksand text-white">
              &copy; 2024 Grethena. All rights reserved by Grethena Ltd.
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
