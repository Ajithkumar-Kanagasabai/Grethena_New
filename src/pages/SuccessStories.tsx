import React, { useState } from 'react'
import Header from '../app/component/Header'
import "../app/globals.css";
import Footer from '../app/component/Footer';
import TopSection from '../app/aboutUsPage/TopSection';
import WhyChooseUs from '../app/aboutUsPage/WhyChooseUs';
import VisionMission from '../app/aboutUsPage/VisionMission';
import Philosophy from '../app/aboutUsPage/Philosophy';
import { Newsletter } from '../app/component/Newsletter';




const SuccessStories = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    return (
      <>
        <section>
          <Header />
          <TopSection />
          <WhyChooseUs />
          <VisionMission />
          <Philosophy />
        
          <Footer />
        </section>
      </>
    );
}

export default SuccessStories