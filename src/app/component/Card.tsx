import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  index:number
}

const Card: React.FC<CardProps> = ({ title, description,index }) => {


  
  return (
    <div className="max-w-xs rounded-lg overflow-hidden  shadow-xl hover:bg-[#6754c5] duration-300 hover:duration-300 hover:text-white">
      <div className="px-6 py-6 ">
        <div className={`text-center font-bold  mb-2 text-nowrap mx-auto`}>
          {title}
        </div>
      </div>
      <div className="px-6 py-2">
        <p className=" text-base text-center">{description}</p>
        <div className="py-4 text-center"></div>
      </div>
    </div>
  );
};

export default Card;
