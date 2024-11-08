import React from 'react';
import About1 from "../../../public/assets/about/Banner.jpg";
import About2 from "../../../public/assets/about/Rectangle 3.png";
import About3 from "../../../public/assets/about/Rectangle 4.png";
import Image from 'next/image';

const TopSection: React.FC = () => {
    return (
        <div className="w-full">
            <section className="bg-gray-100 text-gray-800 py-8 lg:py-16 px-4 md:px-20">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">Success Stories</h2>
                {/* <div className="h-1 w-8 bg-[#316B89] mb-1 ml-6"></div>
                <div className="h-1 w-16 bg-[#20C997] mb-1"></div>
                <div className="h-1 w-4 bg-[#316B89] mb-4"></div> */}
                <p className="text-lg md:text-xl mt-8 text-center">
                Fueling Success Stories, From Pioneering Industry Leaders To Aspiring Startups!
                </p>
            </section>
            <section className="px-4 md:px-20 mt-8 bg-white grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className='lg:px-8'>
                    <h2 className="text-2xl font-quicksand md:text-4xl font-bold text-gray-700 mb-4 mt-4 lg:mt-0">COCORIO – Creative Nannies</h2>
                    <div className="h-1 w-8 bg-[#316B89] mb-1 ml-6"></div>
                    <div className="h-1 w-16 bg-[#20C997] mb-1"></div>
                    <div className="h-1 w-4 bg-[#316B89] mb-4"></div>
                    <ul className="list-inside text-gray-500 space-y-2">
                        <li className="font-quicksand font-medium">
                        Award winning creative experiences for kids that promote emotional and mental health + all your nanny duties taken care of too! For children 6 months 15 years!
                        Lea Henry co founded CocoRio because she worried about the quality of child care available. As she couldn’t keep her kids with her 24/7, she wanted to ensure their overall development and emotional well being would be catered for and her kids would be in the care of someone who didn’t turn to mindless screen time when they ran out of ideas.
                        </li>
                        <li className="font-quicksand font-medium">
                        With Corinna Bordoli, the pair have create a service that supports busy families, provides work to creative professionals and accompanies kids with meaningful creative experiences throughout their childhood.
                        </li>                        
                    </ul>
                   
                </div>
                <div className="flex items-center mt-4 lg:mt-0">
                    <Image src={About1} alt="What We Do" className="shadow-lg w-full lg:h-[400px]" />
                </div>
            </section>
            <section className="px-4 md:px-20 mt-8 bg-white grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="flex items-center justify-center relative overflow-hidden">
                    <Image src={About1} alt="About Us" className="shadow-lg w-full lg:h-[400px]" />
                </div>
                
                <div className='lg:pl-8'>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 mt-4 lg:mt-0">CocoRio</h2>
                    <div className="h-1 w-8 bg-[#316B89] mb-1 ml-6"></div>
                    <div className="h-1 w-16 bg-[#20C997] mb-1"></div>
                    <div className="h-1 w-4 bg-[#316B89] mb-4"></div>

                    {/* <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4 mt-8">Our Mission</h3> */}
                    <ul className="list-inside text-gray-600 space-y-2">
                        <li className="font-quicksand font-medium">
                        Connecting you with trusted creative professionals for a smarter child care service. Think your child’s favourite creative activity, but in your home and entirely tailored to them + all your child care needs taken care of! Nannies, babysitters, ad hoc and regular services available.
                        </li>
                                  
                    </ul>
                   
                    {/* <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">Who We Are</h3>
                    <p className="text-gray-600">
                        We are a passionate and innovative team committed to fostering a community of skilled IT professionals. Our comprehensive six-month courses are designed to equip our students with the latest industry-relevant skills, ensuring they are well-prepared to thrive in the fast-paced tech landscape.
                    </p> */}
                </div>
            </section>

            <section className="px-4 md:px-20 mt-8 bg-white grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className='lg:px-8'>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 mt-4 lg:mt-0">MYCO – Powered By MContent</h2>
                    <div className="h-1 w-8 bg-[#316B89] mb-1 ml-6"></div>
                    <div className="h-1 w-16 bg-[#20C997] mb-1"></div>
                    <div className="h-1 w-4 bg-[#316B89] mb-4"></div>
                   <ul className="list-inside text-gray-600 space-y-2">
                        <li className="font-quicksand font-medium">
                        Myco, powered by MContent, revolutionizes the web3 landscape as a comprehensive video streaming, financing, production, and distribution platform that rewards viewers for their content consumption. Have you ever contemplated the potential earnings from the countless hours spent indulging in series, live streams, or movies? Well, ponder no more. myco is reshaping the industry by empowering you, the viewer.
                        </li>
                        <li className="font-quicksand font-medium">
                        myco operates as a web3 ecosystem where viewers continuously earn while enjoying the content. At its core, myco is founded on the belief in the strength of community. It not only empowers viewers but also content creators through the streaming, financing, production, and distribution of original films, television shows, and live content.
                        </li>                        
                    </ul>
                </div>
                <div className="flex items-center mt-4 lg:mt-0">
                    <Image src={About2} alt="What We Do" className="shadow-lg w-full lg:h-[400px]" />
                </div>
            </section>
        </div>
    );
};

export default TopSection;
