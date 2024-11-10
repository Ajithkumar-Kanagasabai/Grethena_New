import React from 'react'
import Header from "@/src/app/component/Header";
import "../../app/globals.css";
import { Newsletter } from "@/src/app/component/Newsletter";
import Footer from "@/src/app/component/Footer";

 const poc = () => {
  return (
    <div>
      <Header />
      <div className="lg:p-0 p-4 ">
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
}

export default poc