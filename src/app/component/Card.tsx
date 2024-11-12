import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  index:number
}

const Card: React.FC<CardProps> = ({ title, description,index }) => {


  
  return (
    <div className="w-[560px] h-[380px] p-3 rounded-lg overflow-hidden shadow-xl bg-gradient-to-r from-[#FF7369] to-[#FFB06D] hover:bg-[#6754c5] hover:text-white transition-colors duration-300 flex items-center">
      <div className=" flex flex-col justify-center  p-4 w-[80%] mx-auto">
        <div
          className={`text-center font-bold text-[20px] text-nowrap  mb-2  mx-auto`}
        >
          {title}
        </div>
        <div className="px-6 py-2">
          <p className=" text-base lg:text-[16px] text-center">{description}</p>
          <div className="py-4 text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
