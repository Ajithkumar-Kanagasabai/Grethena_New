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
    <header className="md:px-[50px] bg-[#04E39C] h-[110px] flex items-center">
      <div className="container px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex md:hidden items-center justify-between">
            {menuOpen && (
              <div className="fixed inset-0 bg-black opacity-50 z-10" />
            )}
          </div>

          {/* desktop view */}

          <Link href="/" passHref className=" flex bg-cover">
            <Image src={Logo} alt="Logo" className="h-[3rem] w-[10rem] bg-cover bg-center" />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-12 text-xl">
          <div className="relative" ref={servicesDropdownRef}>
            <button
              onClick={() => setisServicesDropdownOpen(!isServicesDropdownOpen)}
              className="flex items-center text-white font-medium"
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
              <div className="w-[270px] absolute bg-white border mt-1 left-[-1px] rounded shadow-lg z-10">
                <Link
                  href="#"
                  onClick={() => onSelectCourse("Full Stack Development")}
                  className="block px-4 py-3 text-[#464646] hover:text-white"
                >
                  Mobile App Development
                </Link>
                <Link
                  href="#"
                  onClick={() => onSelectCourse("Data Science and Analytics")}
                  className="block px-4 py-3 text-[#464646] hover:text-white"
                >
                  AI chatbots
                </Link>
                <Link
                  href="#"
                  onClick={() => onSelectCourse("DevOps and IT Management")}
                  className="block px-4 py-3 text-[#464646] hover:text-black"
                >
                  AI, ML Integrations
                </Link>
                <Link
                  href="#"
                  onClick={() => onSelectCourse("DevOps and IT Management")}
                  className="block px-4 py-3 text-[#464646] hover:text-black"
                >
                  Website Development
                </Link>
                <Link
                  href="#"
                  onClick={() => onSelectCourse("DevOps and IT Management")}
                  className="block px-4 py-3 text-[#464646] hover:text-black"
                >
                  Backend System Development
                </Link>
                <Link
                  href="#"
                  onClick={() => onSelectCourse("DevOps and IT Management")}
                  className="block px-4 py-3 text-[#464646] hover:text-black"
                >
                  CRM Implementation
                </Link>
              </div>
            )}
          </div>
          <div className="relative" ref={startupDropdownRef}>
            <button
              onClick={() => setisStartupDropdownOpen(!isStartupDropdownOpen)}
              className="flex items-center text-white font-medium"
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
              <div className="w-[270px] absolute bg-white border mt-1 left-[-1px] rounded shadow-lg z-10">
                <Link
                  href="#"
                  onClick={() => onSelectCourse("Full Stack Development")}
                  className="block px-4 py-3 text-[#464646] hover:text-black"
                >
                  Proof Of Concept delelopment(POCs)
                </Link>
                <Link
                  href="#"
                  onClick={() => onSelectCourse("Data Science and Analytics")}
                  className="block px-4 py-3 text-[#464646] hover:text-black"
                >
                  Proof Of Concept development(POCs)
                </Link>
                <Link
                  href="#"
                  onClick={() => onSelectCourse("DevOps and IT Management")}
                  className="block px-4 py-3 text-[#464646] hover:text-black"
                >
                  Minimum
                </Link>
                <Link
                  href="#"
                  onClick={() => onSelectCourse("DevOps and IT Management")}
                  className="block px-4 py-3 text-[#464646] hover:text-black"
                >
                  Website Development
                </Link>
                <Link
                  href="#"
                  onClick={() => onSelectCourse("DevOps and IT Management")}
                  className="block px-4 py-3 text-[#464646] hover:text-black"
                >
                  Backend System Development
                </Link>
                <Link
                  href="#"
                  onClick={() => onSelectCourse("DevOps and IT Management")}
                  className="block px-4 py-3 text-[#464646] hover:text-black"
                >
                  CRM Implementation
                </Link>
              </div>
            )}
          </div>

          <Link href="#" className="text-white font-medium">
            Success Stories
          </Link>
          <Link href="#" className="text-white font-medium">
            Case Studies
          </Link>
          <Link href="#" className="text-white font-medium">
            Gallery
          </Link>
          <Link href="/about" className="text-white font-medium">
            About Us
          </Link>
        </nav>
        <div>
          <Link
            href={"#"}
            className="flex items-center justify-center rounded-md bg-[#6754c5] text-white gap-x-1 px-5 py-[0.7rem]"
          >
            <span className=" font-medium">Get in Touch</span>
            <span>
              <IoIosArrowRoundForward size={25} />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
