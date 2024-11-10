import React from 'react'
import Header from "../app/component/Header";
import "../app/globals.css";
import Footer from "../app/component/Footer";
import {Newsletter} from '../app/component/Newsletter'
const Startups = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[700px]"></div>
      <div className="lg:p-0 p-4 ">
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
}

export default Startups