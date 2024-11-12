import React from 'react'

interface CardProps {
  title: string;
  description: string;
  index: number;
  logo:any
}

const Card2: React.FC<CardProps> = ({ title, description, index,logo }) => {
  return (
    <div className="lg:w-[384px] lg:h-[300px] w-[440px] h-[300px] rounded-lg overflow-hidden  shadow-xl hover:bg-[#6754c5] duration-300 hover:duration-300  hover:text-white mx-auto bg-gray-200">
      <div className="px-6 py-6 ">
         <div className={ `flex justify-center mb-4 `}>
          {logo}
         </div>
        <div
          className={`text-center font-bold text-xl   mx-auto`}
        >
          {title}
        </div>
      </div>
      <div className="px-6 py-2">
        <p className=" text-base lg:text-md text-center">{description}</p>
        <div className="py-4 text-center"></div>
      </div>
    </div>
  );
};

export default Card2