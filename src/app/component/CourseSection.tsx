import React from 'react';
import Card from './Card';

const CourseSection = () => {
    const courses = [
        {
            Images: '/assets/Home/image4.png',
            title: 'Full Stack Development',
            startDate: 'December 20 2024',
            duration: '8 Weeks',
            price: 1999,
        },
        {
            Images: '/assets/Home/image5.png',
            title: 'Data Science and Analytics',
            startDate: 'December 20 2024',
            duration: '8 Weeks',
            price: 1999,
        },
        {
            Images: '/assets/Home/image4(1).png',
            title: 'DevOps and IT Management',
            startDate: 'December 20 2024',
            duration: '8 Weeks',
            price: 1999,
        },
    ];

    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold  text-[#04E39C] ">
            Services built for Startups
          </h2>
          <p className="px-8 md:px-40 text-[#3B3B3B] mt-8">
            For over a decade, we have been supporting scale-ups, consulting
            companies and SMBs in creating world-class software.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {courses.map((course, index) => (
            <Card key={index} {...course} />
          ))}
        </div>
      </div>
    );
};

export default CourseSection;
