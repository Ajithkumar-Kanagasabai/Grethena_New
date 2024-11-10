import React from 'react'
import "../../app/globals.css";
import Header from "@/src/app/component/Header";

import Footer from "@/src/app/component/Footer";
import { Newsletter } from "@/src/app/component/Newsletter";
import OTTSeaction from '@/src/app/component/OTTSeaction';

const ott = () => {
  return (
    <>
      <Header />
      <OTTSeaction />
      <div className="lg:p-0 p-4 ">
        <Newsletter />
      </div>
      <Footer />
    </>
  );
}

export default ott