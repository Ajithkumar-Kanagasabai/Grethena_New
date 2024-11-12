"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "../../../public/assets/logo/Logo.png";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { IoIosArrowRoundForward } from "react-icons/io";

const Header: React.FC = () => {
  const [isServicesDropdownOpen, setisServicesDropdownOpen] = useState(false);
  const [isStartupDropdownOpen, setisStartupDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const startupDropdownRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
    <header className="md:px-[50px] bg-[#04E39C] h-[85px] flex items-center justify-center shadow-[inset_0_0_0_200px_rgba(0,0,0,0.1)]">
      <div className=" relative container  flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" passHref className=" mr-[2rem]">
            <div className="flex items-center mb-2 mt-3 w-48">
              <Image
                src={Logo}
                alt="Logo"
                className="object-contain"
                width={200} // Adjust width
                height={50} // Adjust height
                style={{ height: "auto" }}
              />
            </div>
          </Link>
          {/* Mobile Menu Icon */}
          <div className="flex md:flex lg:hidden items-center justify-between">
            <div
              className="text-2xl cursor-pointer absolute right-[10rem] "
              onClick={toggleMenu}
            >
              <FaBars />
            </div>

            <div
              ref={sidebarRef}
              className={`z-20 flex flex-col items-center fixed left-0 p-4 w-full h-auto bg-gray-900 text-white transition-transform transform gap-y-4 ${
                menuOpen
                  ? "translate-y-0 top-[6.5rem] "
                  : " top-[-11rem] -translate-y-full"
              } ease-in-out duration-300`}
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                href="/"
                className=" text-[#FFFFFF] hover:text-[#20C997] hover:font-bold "
              >
                Home
              </Link>

              <div
                className=" cursor-pointer text-center  "
                onClick={toggleDropdown}
              >
                <div className="flex items-center justify-center relative">
                  <Link
                    href="#"
                    className="my-2 text-[#FFFFFF] hover:text-[#20C997] hover:font-bold text-center "
                  >
                    {" "}
                    Services{" "}
                  </Link>
                  {isOpen ? (
                    <svg
                      className="w-4 h-4 absolute right-[3rem] top-[13px]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 15l7-7 7 7"
                      ></path>{" "}
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4  absolute right-[3rem] top-[13px] "
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
                  )}
                </div>

                <div>
                  <nav
                    className={`flex flex-col transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "h-auto max-h-screen opacity-100"
                        : "h-0 max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <Link
                      href="/service/Mobile_app_development"
                      className="my-2 text-[#FFFFFF] text-nowrap hover:text-[#20C997] hover:font-bold  mt-1"
                    >
                      Mobile App Development
                    </Link>
                    <Link
                      href="/service/AI_chatbots"
                      className="my-2 text-[#FFFFFF] text-nowrap hover:text-[#20C997] hover:font-bold  mt-1"
                    >
                      AI Chatbots
                    </Link>
                    <Link
                      href="/service/Al_ML_Intrgrations"
                      className="my-2 text-[#FFFFFF] text-nowrap hover:text-[#20C997] hover:font-bold  mt-1"
                    >
                      AI & ML Integrations
                    </Link>
                    <Link
                      href="/service/Website_development"
                      className="my-2 text-[#FFFFFF] text-nowrap hover:text-[#20C997] hover:font-bold  mt-1"
                    >
                      Website Development
                    </Link>
                    <Link
                      href="/service/Backend_system_development"
                      className="my-2 text-[#FFFFFF] text-nowrap hover:text-[#20C997] hover:font-bold  mt-1"
                    >
                      Backend System Development
                    </Link>
                    <Link
                      href="/service/CRM_implementation"
                      className="my-2 text-[#FFFFFF] text-nowrap hover:text-[#20C997] hover:font-bold  mt-1"
                    >
                      CRM Implementation
                    </Link>
                  </nav>
                </div>
              </div>
              <Link
                href="/Startups"
                className=" text-[#FFFFFF] hover:text-[#20C997] hover:font-bold "
              >
                Startups
              </Link>

              <Link
                href="/projects"
                className=" text-[#FFFFFF] hover:text-[#20C997] hover:font-bold "
              >
                Success Stories
              </Link>
              {/* <div className="w-100 h-px bg-gray-300"></div> */}
              {/* <Link
                href="/Case_Studies"
                className="my-2 text-[#FFFFFF] hover:text-[#20C997] hover:font-bold text-left"
              >
                Case Studies
              </Link> */}
              <Link
                href="/Gallery"
                className=" text-[#FFFFFF] hover:text-[#20C997] hover:font-bold "
              >
                Gallery
              </Link>

              <Link
                href="/about"
                className=" text-[#FFFFFF] hover:text-[#20C997] hover:font-bold "
              >
                About Us
              </Link>
            </div>
            {menuOpen && (
              <div className="fixed inset-0 bg-black opacity-50 z-10" />
            )}
          </div>
          {/* desktop view */}
        </div>
        <div className="flex items-center gap-x-11">
          <nav className="hidden  lg:flex lg:space-x-12 md:space-x-6 text-[16px] ">
            <div className="relative group " ref={servicesDropdownRef}>
              <button className="flex items-center text-nowrap text-white font-semibold ">
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
                    AI Chatbots
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
                className="flex items-center text-white font-semibold hover:text-black transition-colors duration-30"
              >
                Startups
              </button>
            </div>

            <Link
              href="/projects"
              className="text-white text-nowrap hover:text-black font-semibold transition-colors duration-300"
            >
              Success Stories
            </Link>
            {/* <Link
            href="/Case_Studies"
            className="text-white hover:text-black text-nowrap font-semibold transition-colors duration-300"
          >
            Case Studies
          </Link> */}
            <Link
              href="/Gallery"
              className="text-white hover:text-black font-semibold text-nowrap transition-colors duration-300"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="text-white text-nowrap hover:text-black font-semibold transition-colors duration-300"
            >
              About Us
            </Link>
          </nav>
          <div className="w-[8rem] lg:w-[9rem] h-[2.6rem] lg:h-[2.8rem] absolute right-2  lg:right-[-1rem] lg:relative ">
            <Link
              href={
                "https://calendly.com/sriram-angajala-grethena/discuss-about-your-new-app-idea?primary_color=00ff1b"
              }
              className="flex items-center justify-center rounded-md bg-[#6754c5] text-white h-full px-2"
            >
              <span className=" font-medium text-sm mx-auto text-nowrap">
                Get in Touch
              </span>
              <span>
                <IoIosArrowRoundForward size={19} className="mx-auto" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
