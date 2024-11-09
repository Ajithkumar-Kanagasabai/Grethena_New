"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "../../../public/assets/logo/Logo.png";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

import { IoIosArrowRoundForward } from "react-icons/io";

interface HeaderProps {
  onSelectCourse: (courseName: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSelectCourse }) => {
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

          {/* desktop view */}

          <Link href="/" passHref className=" flex bg-cover">
            <Image
              src={Logo}
              alt="Logo"
              className="h-[4rem] w-[10rem] bg-cover bg-center"
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-12 text-xl">
          <div className="relative" ref={servicesDropdownRef}>
            <button
              onClick={() => setisServicesDropdownOpen(!isServicesDropdownOpen)}
              className="flex items-center text-white font-bold"
            >
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
            {isServicesDropdownOpen && (
              <div className="w-[270px] absolute bg-white border mt-1 left-[-1px] rounded shadow-lg z-10 text-[1rem] font-medium">
                <Link
                  href="#"
                  className="block px-4 py-1 text-[#464646] hover:text-black hover:font-semibold "
                >
                  Mobile App Development
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-3 text-[#464646] hover:text-black hover:font-semibold"
                >
                  AI chatbots
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-3 text-[#464646] hover:text-black hover:font-semibold"
                >
                  AI, ML Integrations
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-3 text-[#464646] hover:text-black hover:font-semibold"
                >
                  Website Development
                </Link>
                <Link
                  href="#"
                  onClick={() => onSelectCourse("DevOps and IT Management")}
                  className="block px-4 py-3 text-[#464646] hover:text-black hover:font-semibold"
                >
                  Backend System Development
                </Link>
                <Link
                  href="#"
                  onClick={() => onSelectCourse("DevOps and IT Management")}
                  className="block px-4 py-3 text-[#464646] hover:text-black hover:font-semibold"
                >
                  CRM Implementation
                </Link>
              </div>
            )}
          </div>
          <div className="relative" ref={startupDropdownRef}>
            <button
              onClick={() => setisStartupDropdownOpen(!isStartupDropdownOpen)}
              className="flex items-center text-white font-bold"
            >
              Startup
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
            {isStartupDropdownOpen && (
              <div className="w-[250px] absolute bg-white border mt-1 left-[-1px] rounded shadow-lg z-10 text-[1rem] font-medium">
                <Link
                  href="#"
                  className="block px-3 py-2 text-[#464646] hover:text-black hover:font-semibold "
                >
                  Proof Of Concept delelopment(POCs)
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-[#464646] hover:text-black hover:font-semibold"
                >
                  Proof Of Concept development(POCs)
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-[#464646] hover:text-black hover:font-semibold"
                >
                  Minimum viable Product Development (MVP)
                </Link>
              </div>
            )}
          </div>

          <Link
            href="#"
            className="text-white hover:text-black font-bold transition-colors duration-300"
          >
            Success Stories
          </Link>
          <Link
            href="/Case_Studies"
            className="text-white hover:text-black font-bold transition-colors duration-300"
          >
            Case Studies
          </Link>
          <Link
            href="#"
            className="text-white hover:text-black font-bold transition-colors duration-300"
          >
            Gallery
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-black font-bold transition-colors duration-300"
          >
            About Us
          </Link>
        </nav>
        <div>
          <Link
            href={
              "https://calendly.com/sriram-angajala-grethena/discuss-about-your-new-app-idea?primary_color=00ff1b"
            }
            className="flex items-center justify-center rounded-md bg-[#6754c5] text-white lg:gap-x-2 gap-x-1 lg:p-3 p-2 px-1 ml-6"
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
