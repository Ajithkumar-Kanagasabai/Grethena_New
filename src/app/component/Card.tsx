import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


interface CardProps {
  title: string;
  description: string;
  index:number
  logo:any
}

const Card: React.FC<CardProps> = ({ title, description,index,logo }) => {


  
  return (
    <div className="w-[560px] h-[380px] p-3 rounded-lg overflow-hidden shadow-xl bg-[#04E39C] transition-colors duration-300 flex items-center hover:bg-gradient-to-r hover:from-[#6754c5] hover:to-[#6754c5]  hover:text-white">
      <div className=" flex flex-col justify-center  p-4 w-[90%] lg:w-[80%] mx-auto">
        <div className=' flex justify-center mb-4'>
          {logo}
        </div>
        <div
          className={`text-center font-bold text-[20px]   mb-2  mx-auto`}
        >
          {title}
        </div>
        <div className="px-6 py-2">
          <p className=" text-base lg:text-[16px] text-center">{description}</p>
          <div className="py-4 text-center mt-4">
            <Link
              href={`${index === 0 ? "/Startups/mvp" : "/Startups/poc"}`}
              className=" bg-gray-600 p-2 text-white rounded-md"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
