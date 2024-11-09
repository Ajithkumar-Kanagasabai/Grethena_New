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
      <footer className="text-white py-8 px-20 bg-gradient-to-r from-[#00e897] via-[#00e897] to-[#6754c5]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="w-[29%]">
            <Link href="/">
              {" "}
              <Image src={Logo} alt="Logo" width={200} height={42} />
            </Link>
            <div className="mt-6 flex flex-col gap-y-5 ">
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

              <div className=" flex items-center   gap-4">
                <div className="">
                  <HiPhone size={20} />
                </div>
                <p>+44 7453 289655</p>
              </div>
              <div className=" flex items-center   gap-4">
                <div className="">
                  <MdEmail size={20} />
                </div>
                <p>info@grethena.com</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-8 md:my-4">
            <h3 className="text-lg font-semibold mb-2">Menu</h3>
            <ul className="md:mt-2 flex flex-col justify-center text-white font-semibold">
              <li className="py-1">
                <Link href="/">Home</Link>
              </li>
              <li className="py-1">
                <Link href="/course">Courses</Link>
              </li>
              <li className="py-1">
                <Link href="/about">About</Link>
              </li>
              <li className="py-1">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col mt-8 md:my-4">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="md:mt-2 flex flex-col justify-center text-white font-semibold">
              <li className="py-1">
                <Link href="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* <div className="flex flex-col mt-8 md:my-4">
            <h3 className="text-lg font-semibold mb-2">Build an MVP</h3>
            <ul className="md:mt-2 flex flex-col justify-center text-white">
              London EC4R 1AP Build an MVP Hire a Developer Case Studies About
              55
              <li className="py-1">
                <Link href="/"></Link>
              </li>
              <li className="py-1">
                <Link href="/course"></Link>
              </li>
              <li className="py-1">
                <Link href="/about">Hire a Developer</Link>
              </li>
              <li className="py-1">
                <Link href="/contact"> Studies</Link>
              </li>
            </ul>
          </div> */}

          {/* <div className="flex flex-col gap-4 mt-8 md:my-4">
            <h3 className="text-lg font-semibold mb-2">Follow on Instagram</h3>
            <Link href="https://www.instagram.com/" target="blank">
              <div className="md:mt-2 flex flex-row gap-4">
                <div className="relative w-40 h-40 md:w-20 md:h-20 overflow-hidden aspect-w-1 aspect-h-1">
                  <Image
                    src={Insta1}
                    alt="Instagram 1"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="relative w-40 h-40 md:w-20 md:h-20 overflow-hidden aspect-w-1 aspect-h-1">
                  <Image
                    src={Insta2}
                    alt="Instagram 2"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </Link>
            <Link href="https://www.instagram.com/" target="blank">
              <div className="flex flex-row gap-4">
                <div className="relative w-40 h-40 md:w-20 md:h-20 overflow-hidden aspect-w-1 aspect-h-1">
                  <Image
                    src={Insta3}
                    alt="Instagram 3"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="relative w-40 h-40 md:w-20 md:h-20 overflow-hidden aspect-w-1 aspect-h-1">
                  <Image
                    src={Insta4}
                    alt="Instagram 4"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </Link>
          </div> */}
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
            <p className="md:flex text-[12px] mt-5 lg:text-[18px] text-white">
              &copy; 2024 Grethena. All rights reserved by Grethena Ltd.
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
