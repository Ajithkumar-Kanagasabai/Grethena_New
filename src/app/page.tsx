"use client";
import React, { useState } from "react";
import Header from "@/src/app/component/Header";
import HeroSlider from "@/src/app/component/HomeBanner";
import "./globals.css";
import IconCarousel from "@/src/app/component/IconCarousel";
import CourseSection from "@/src/app/component/CourseSection";
import FeaturesSection from "@/src/app/component/FeaturesSection";
import Footer from "@/src/app/component/Footer";
import { Service_Section } from "./component/Service_Section";


export default function Home() {
  

  return (
    <main>
      <div id="homepage" className="font-Quicksand">
        <Header  />
        <HeroSlider />
        <IconCarousel />
        <CourseSection />
        <Service_Section />
        <FeaturesSection />
        <Footer />
      </div>
    </main>
  );
}
