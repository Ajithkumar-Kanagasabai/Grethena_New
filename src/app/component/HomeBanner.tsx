
import Image from 'next/image';
import Link from 'next/link';
import HeroBgImage from '../../../public/assets/Home/home-hero-bg2.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";


const HeroSlider: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        appendDots: (dots: React.ReactNode) => (
            <div style={{ position: 'absolute', bottom: '10px', width: '100%' }}>
                <ul className="flex justify-center">{dots}</ul>
            </div>
        ),
    };

    return (
      <div
        className="h-[720px] bg-cover "
        style={{ backgroundImage: `url(${HeroBgImage.src})` }}
      >
        <div className="flex justify-center w-full">
          <div className=" mt-[12rem]">
            <p className="text-center text-xl text-white font-semibold">
              SOFTWARE DEVELOPMENT PARTNERS FOR STARTUPS
            </p>
            <h1 className="lg:text-[3rem] text-3xl text-center font-semibold text-white mt-12  lg:w-[80%] mx-auto lg:leading-[4.3rem]">
              Scale faster with{" "}
              <span className="text-[#04E39C]">high-performing</span> software
              and digital products
            </h1>
            <p className="text-center text-xl text-white font-semibold mt-[3rem] leading-5">
              Leading software development partner for UK startups
            </p>
            <div className="flex justify-center gap-x-4 mt-[2.5rem]">
              <div>
                <Link
                  href={"#"}
                  className="flex items-center justify-center rounded-md bg-[#6754c5] border-[#6754c5] border-2 text-white gap-x-1 px-5 py-[0.7rem] "
                >
                  <span className=" font-medium">Get in Touch</span>
                  <span>
                    <IoIosArrowRoundForward size={25} />
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  href={"#"}
                  className="flex items-center justify-center rounded-md bg-white text-[#6754c5] border-[#6754c5] border-2 gap-x-1 px-5 py-[0.7rem] "
                >
                  <span className=" font-medium">What we do</span>
                  <span>
                    <IoIosArrowRoundForward size={25} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default HeroSlider;
