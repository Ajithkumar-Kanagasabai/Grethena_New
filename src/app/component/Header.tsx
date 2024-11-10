"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "../../../public/assets/logo/Logo.png";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { IoIosArrowRoundForward } from "react-icons/io";



const Header: React.FC= () => {
  const [isServicesDropdownOpen, setisServicesDropdownOpen] = useState(false);
  const [isStartupDropdownOpen, setisStartupDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const startupDropdownRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
    const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setisServicesDropdownOpen(false);
      }
       if (
         startupDropdownRef.current &&
         !startupDropdownRef.current.contains(event.target as Node)
       ) {
         setisStartupDropdownOpen(false);
       }
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
    <header className="md:px-[50px] bg-[#04E39C] h-[110px] flex items-center justify-center shadow-[inset_0_0_0_200px_rgba(0,0,0,0.1)]">
      <div className="w-full  py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex md:hidden items-center justify-between">
            {menuOpen && (
              <div className="fixed inset-0 bg-black opacity-50 z-10" />
            )}
          </div>

          <div className="flex md:hidden items-center justify-between">
            <div className="text-2xl cursor-pointer" onClick={toggleMenu}>
              <FaBars />
            </div>
            <div
              ref={sidebarRef}
              className={`z-20 flex flex-col fixed top-0 left-0 p-4 w-[17rem] h-full bg-gray-900 text-white transition-transform transform ${
                menuOpen ? "translate-x-0" : "-translate-x-full"
              } ease-in-out duration-300`}
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                href="/"
                className="my-2 text-[#FFFFFF] hover:text-[#20C997] hover:font-bold text-left"
              >
                Home
              </Link>

              <div className="w-100 h-px bg-gray-300"></div>
              <div className="">
                <Link
                  href="#"
                  className="my-2 text-[#FFFFFF] hover:text-[#20C997] hover:font-bold text-left"
                >
                  Services
                </Link>
                <div>
                  <nav className=" flex flex-col">
                    <Link
                      href="/service/Mobile_app_development"
                      className="my-2 text-[#FFFFFF] text-nowrap hover:text-[#20C997] hover:font-bold text-left mt-2"
                    >
                      Mobile App Development
                    </Link>
                    <Link
                      href="/service/AI_chatbots"
                      className="my-2 text-[#FFFFFF] text-nowrap hover:text-[#20C997] hover:font-bold text-left mt-1"
                    >
                      AI chatbots
                    </Link>
                    <Link
                      href="#"
                      className="my-2 text-[#FFFFFF] text-nowrap hover:text-[#20C997] hover:font-bold text-left mt-1"
                    >
                      AI & ML Integrations
                    </Link>
                    <Link
                      href="#"
                      className="my-2 text-[#FFFFFF] text-nowrap hover:text-[#20C997] hover:font-bold text-left mt-1"
                    >
                      Website Development
                    </Link>
                    <Link
                      href="#"
                      className="my-2 text-[#FFFFFF] text-nowrap hover:text-[#20C997] hover:font-bold text-left mt-1"
                    >
                      Backend System Development
                    </Link>
                    <Link
                      href="#"
                      className="my-2 text-[#FFFFFF] text-nowrap hover:text-[#20C997] hover:font-bold text-left mt-1"
                    >
                      CRM Implementation
                    </Link>
                  </nav>
                </div>

                <div className="w-100 h-px bg-gray-300"></div>
              </div>

              <Link
                href="/Startups"
                className="my-2 text-[#FFFFFF] hover:text-[#20C997] hover:font-bold text-left"
              >
                Startups
              </Link>
              <div className="w-100 h-px bg-gray-300"></div>
              <Link
                href="/"
                className="my-2 text-[#FFFFFF] hover:text-[#20C997] hover:font-bold text-left"
              >
                Success Stories
              </Link>
              <div className="w-100 h-px bg-gray-300"></div>
              <Link
                href="/Case_Studies"
                className="my-2 text-[#FFFFFF] hover:text-[#20C997] hover:font-bold text-left"
              >
                Case Studies
              </Link>
              <div className="w-100 h-px bg-gray-300"></div>
              <Link
                href="/Gallery"
                className="my-2 text-[#FFFFFF] hover:text-[#20C997] hover:font-bold text-left"
              >
                Gallery
              </Link>
              <div className="w-100 h-px bg-gray-300"></div>
              <Link
                href="/about"
                className="my-2 text-[#FFFFFF] hover:text-[#20C997] hover:font-bold text-left"
              >
                About Us
              </Link>
              <div className="w-100 h-px bg-gray-300"></div>
            </div>
            {menuOpen && (
              <div className="fixed inset-0 bg-black opacity-50 z-10" />
            )}
          </div>

          {/* desktop view */}

          <Link href="/" passHref className=" flex bg-cover ">
            <Image
              src={Logo}
              alt="Logo"
              className="h-[4.2rem] w-[13rem] bg-cover bg-center"
            />
          </Link>
        </div>
        <nav className="hidden md:flex lg:space-x-12 md:space-x-8 text-xl">
          <div className="relative group" ref={servicesDropdownRef}>
            <button className="flex items-center text-nowrap text-white font-bold ">
              Services
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {
              <div className=" w-[270px] absolute  mt-1 left-[-1px] rounded shadow-lg z-10 text-[1rem] font-medium bg-white overflow-hidden max-h-0 group-hover:max-h-screen group-hover:opacity-100 transition-all duration-300 ease-in-out opacity-0 ">
                <Link
                  href="/service/Mobile_app_development"
                  className="block px-4 py-1 text-[#464646] hover:text-black hover:font-semibold "
                >
                  Mobile App Development
                </Link>
                <Link
                  href="/service/AI_chatbots"
                  className="block px-4 py-3 text-[#464646] hover:text-black hover:font-semibold"
                >
                  AI chatbots
                </Link>
                <Link
                  href="/service/Al_ML_Intrgrations"
                  className="block px-4 py-3 text-[#464646] hover:text-black hover:font-semibold"
                >
                  AI & ML Integrations
                </Link>
                <Link
                  href="/service/Website_development"
                  className="block px-4 py-3 text-[#464646] hover:text-black hover:font-semibold"
                >
                  Website Development
                </Link>
                <Link
                  href="/service/Backend_system_development"
                  className="block px-4 py-3 text-[#464646] hover:text-black hover:font-semibold"
                >
                  Backend System Development
                </Link>
                <Link
                  href="/service/CRM_implementation"
                  className="block px-4 py-3 text-[#464646] hover:text-black hover:font-semibold"
                >
                  CRM Implementation
                </Link>
              </div>
            }
          </div>
          <div className="relative" ref={startupDropdownRef}>
            <button
              onClick={() => router.push("/Startups")}
              className="flex items-center text-white font-bold hover:text-black transition-colors duration-30"
            >
              Startups
            </button>
          </div>

          <Link
            href="/SuccessStories"
            className="text-white text-nowrap hover:text-black font-bold transition-colors duration-300"
          >
            Success Stories
          </Link>
          <Link
            href="/Case_Studies"
            className="text-white hover:text-black text-nowrap font-bold transition-colors duration-300"
          >
            Case Studies
          </Link>
          <Link
            href="/Gallery"
            className="text-white hover:text-black font-bold text-nowrap transition-colors duration-300"
          >
            Gallery
          </Link>
          <Link
            href="/about"
            className="text-white text-nowrap hover:text-black font-bold transition-colors duration-300"
          >
            About Us
          </Link>
        </nav>
        <div>
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
    </header>
  );
};

export default Header;
