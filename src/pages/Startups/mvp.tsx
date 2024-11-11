import React from 'react'
import Header from "@/src/app/component/Header";
import "../../app/globals.css";
import Footer from "@/src/app/component/Footer";
import { Newsletter } from "@/src/app/component/Newsletter";
import mvpImage2 from "../../../public/assets/standups/mvp2.jpg";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

 const mvp = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[700px] px-8">
        <Image src={mvpImage2} className=" rounded-lg mt-4" alt="mvp" />
        <div className=" mt-[3rem]">
          <h1 className="text-3xl font-Quicksand font-semibold">
            Build an MVP in 8 Weeks with Grethena
          </h1>
          <article className="">
            <div className="text-[1.4rem] font-normal mt-[3rem] text-gray-700 font-Quicksand flex flex-col gap-y-8">
              <p className="mb-5">
                Accelerate Your Idea to Market with Confidence
              </p>
              <p className="mb-5">Trusted by Innovators Worldwide</p>
              <p className="mb-5">
                Our team has helped ambitious startups and established
                enterprises transform their ideas into fully functional MVPs
                that drive growth and engagement. Join a community of successful
                founders who have taken their first step with Grethena.
              </p>
              <h1 className="text-3xl font-Quicksand font-semibold text-black">
                A Message from Our CEO
              </h1>
              <p className=" mt-[2rem]">
                “At Grethena, we believe that every great product starts with a
                bold idea and the courage to take the first step. Building an
                MVP is a journey of discovery and growth, where we turn your
                vision into something tangible and impactful. Our team is
                committed to supporting you at every stage, ensuring that your
                product enters the market with confidence and purpose
              </p>
              <p className="">
                With a focus on innovation, efficiency, and quality, we make the
                process straightforward and results-driven. Partner with us, and
                let&apos;s bring your vision to life.”
              </p>
              <p>— Sriram Angajala, CEO of Grethena</p>
              <h1 className="text-3xl font-Quicksand font-semibold text-black">
                How We Go from 0 to MVP in 8 Weeks
              </h1>
              <p>
                Every MVP project at Grethena is supported by a dedicated
                project manager, an expert development team, and comprehensive
                quality assurance. Here&apos;s how we deliver an efficient and
                results-driven MVP for your business:
              </p>
              <h1 className="text-3xl font-Quicksand font-semibold text-black">
                Step 1
              </h1>
              <p>Create a Strategic Plan</p>
              <p>
                Our team of founders, tech specialists, and product experts
                collaborates to understand your vision and business objectives.
                We craft a custom roadmap and development strategy designed to
                maximize success, offering clear milestones and transparent
                pricing at every stage.
              </p>
              <h1 className="text-3xl font-Quicksand font-semibold text-black">
                Step 2
              </h1>
              <p>Design with Purpose</p>
              <p>
                Whether you&apos;re starting with a blank slate or have a fully
                developed concept, our UX/UI designers ensure your product meets
                user expectations. We combine extensive research with years of
                experience to deliver user-friendly, high-performance wireframes
                in just 2 weeks.
              </p>
              <h1 className="text-3xl font-Quicksand font-semibold text-black">
                Step 3
              </h1>
              <p>Bring Your Design to Life</p>
              <p>
                Our development team brings your MVP design to life, focusing on
                quality and scalability. We use the latest technologies to
                create a secure, responsive, and dynamic MVP ready for
                real-world testing.
              </p>
              <h1 className="text-3xl font-Quicksand font-semibold text-black">
                Step 4
              </h1>
              <p>Launch and Gather Feedback</p>
              <p>
                Launching is just the beginning. We support you in gathering
                valuable user feedback, allowing you to refine your product and
                make data-driven decisions for future iterations.
              </p>
              <p>
                Turn your vision into a reality with Grethena&apos;s MVP
                expertise under the leadership of CEO Sriram Angajala.
                Let&apos;s build a product that captures attention and
                accelerates growth.
              </p>
              <h1 className="text-3xl font-Quicksand font-semibold text-black">
                Step 5
              </h1>
              <p>Iterate, Improve, and Build</p>
              <p>
                After the launch, we continue working with you to refine and
                enhance your product based on real user feedback. Our team at
                Grethena will create a roadmap to incorporate insights and
                respond quickly to any change requests—often within 24 hours—so
                your product can evolve alongside your users’ needs.
              </p>
              <h1 className="text-3xl font-Quicksand font-semibold text-black">
                Our Approach
              </h1>
              <p>
                We specialize in MVP development tailored for startups and
                growing businesses. At Grethena, our goal is to deliver
                cost-effective solutions that scale with your business, allowing
                you to reach the market faster and optimize for growth.
              </p>
              <ul className="list-disc pl-5">
                <li>Get to Market Faster</li>
              </ul>
              <p>
                In today&apos;s data-driven landscape, launching quickly enables
                faster learning. The sooner your product is live, the sooner you
                can gather insights and iterate toward a market-fit solution.
              </p>
              <ul className="list-disc pl-5">
                <li>Maximize ROI</li>
              </ul>
              <p>
                Our MVP packages are adaptable to fit your budget, ensuring you
                get a product that meets investor expectations while leaving
                room for future growth. Our solutions are designed for
                scalability, allowing startups and SMEs to evolve as they grow.
              </p>
              <h1 className="text-3xl font-Quicksand font-semibold text-black">
                Why Choose Grethena?
              </h1>
              <p>
                Join hundreds of innovative founders who have launched
                successful products with Grethena. With years of experience
                across more than 80 technologies, we’re prepared to bring your
                vision to life.
              </p>
              <ul className="list-disc pl-5">
                <li>Decades of Combined Experience across 80+ technologies</li>
              </ul>
              <ul className="list-disc pl-5">
                <li>200+ MVPs Launched to date</li>
              </ul>
              <ul className="list-disc pl-5">
                <li>95% Customer Retention Rate</li>
              </ul>
              <p>
                Our team is equipped to work in your preferred tech stack,
                ensuring your MVP aligns with industry standards and your unique
                goals.
              </p>
              <p>
                Let me know if there are any further details you’d like to
                adjust or refine!
              </p>
              <div className="mt-[8rem]">
                <div className="w-[220px] mx-auto mb-[8rem]">
                  <Link
                    href={
                      "https://calendly.com/sriram-angajala-grethena/discuss-about-your-new-app-idea?primary_color=00ff1b"
                    }
                    className="flex items-center justify-center rounded-md bg-[#6754c5] text-white lg:gap-x-2 gap-x-1 lg:p-3 p-2  lg:ml-6 mr-3 lg:mr-0 text-nowrap md:ml-[4rem]"
                  >
                    <span className=" font-bold mx-auto">Get in Touch</span>
                    <span>
                      <IoIosArrowRoundForward size={25} className="mx-auto" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
     
      <Footer />
    </div>
  );
}

export default mvp