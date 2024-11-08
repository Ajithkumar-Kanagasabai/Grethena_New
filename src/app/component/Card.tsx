import React from 'react';
import Image from 'next/image';

interface CardProps {
    Images: string;
    title: string;
    startDate: string;
    duration: string;
    price: number;
}

const Card: React.FC<CardProps> = ({ Images, title, startDate, duration, price }) => {
    return (
      <div className="max-w-xs rounded-lg overflow-hidden shadow-xl">
        <div className="px-6 py-6">
          <div className="text-center font-bold text-xl mb-2">
            MVP Development
          </div>
        </div>
        <div className="px-6 py-2">
          <p className="text-gray-700 text-base">
            Investor-ready MVP development in just 8 weeks.
          </p>
          <div className="py-4 text-center">
            <p className="font-bold text-xl text-[#316B89]">
              {" "}
              <span className="font-normal text-lg text-[#A5A5A5]"></span>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Card;
