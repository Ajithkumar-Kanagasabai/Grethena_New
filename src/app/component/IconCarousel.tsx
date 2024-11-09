"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import gcMotor from "../../../public/assets/Icons/gcMotor.png";
import myco from "../../../public/assets/Icons/myco.png";
import transform from "../../../public/assets/Icons/transform.png";
import coco from "../../../public/assets/Icons/coco.png";
import doubleTree from "../../../public/assets/Icons/doubleTree.png";
import rhc from "../../../public/assets/Icons/RHC.jpg";
import brandCenter from "../../../public/assets/Icons/Brand Center lack.jpg"

const IconCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }
        ]

    };

    return (
      <div className="mt-20 w-full mx-auto">
        <h1 className="text-center text-[14px] sm:text-[20px] md:text-[30px] lg:text-[36px] font-bold bg-[#04E39C] text-gray-800">
          Trusted by 10,000+ companies around the world
        </h1>
        <Slider {...settings} className="mt-12 pl-12 sm:pl-20">
          <div className="flex justify-center">
            <Image src={gcMotor} alt="GoMotor" />
          </div>
          <div className="flex justify-center">
            <Image src={myco} alt="myco" />
          </div>
          <div className="flex justify-center">
            <Image src={transform} alt="transform" />
          </div>
          <div className="flex justify-center">
            <Image src={coco} alt="coco" />
          </div>
          <div className="flex justify-center">
            <Image src={doubleTree} alt="doubleTree" />
          </div>
          <div className="flex justify-center mt-10">
            <Image src={rhc} alt="rhc" className="w-[150px]" />
          </div>
          <div className="flex justify-center mt-12">
            <Image src={brandCenter} alt="brandCenter" className="w-[150px]" />
          </div>
          <div className="flex justify-center">
            <Image src={gcMotor} alt="gcMotor" />
          </div>
          <div className="flex justify-center">
            <Image src={myco} alt="myco" />
          </div>
          <div className="flex justify-center">
            <Image src={transform} alt="transform" />
          </div>
          <div className="flex justify-center">
            <Image src={coco} alt="coco" />
          </div>
          <div className="flex justify-center">
            <Image src={doubleTree} alt="doubleTree" />
          </div>
          <div className="flex justify-center  mt-10">
            <Image src={rhc} alt="rhc" className="w-[150px]" />
          </div>
          <div className="flex justify-center mt-12">
            <Image src={brandCenter} alt="brandCenter" className="w-[150px]" />
          </div>
        </Slider>
      </div>
    );
};

export default IconCarousel;
