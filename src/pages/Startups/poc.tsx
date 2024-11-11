import React from "react";
import Header from "@/src/app/component/Header";
import "../../app/globals.css";
import { Newsletter } from "@/src/app/component/Newsletter";
import Footer from "@/src/app/component/Footer";
import pocImg from '../../../public/assets/standups/poc.png'
import Image from "next/image";

const poc = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[700px] px-8 mt-[5rem]">
        <Image
          src={pocImg}
          className=" rounded-lg mt-4 w-[90%] h-[500px] mx-auto"
          alt="poc"
        />
        <section className=" mt-6 px-4 md:px-20 text-gray-700 ">
          <h2 className="text-3xl font-Quicksand font-semibold mt-4">OUR VISION</h2>
          <p className="text-lg md:text-xl mb-2">
            We envision a future where Latin American talent is at the forefront
            of technological innovation, driving progress and transformation in
            the global IT sector. Through our commitment to excellence in
            education and professional development, we aim to be the catalyst
            for success for every student who joins our program.
          </p>
        </section>
        <section className="text-gray-700  py-8 lg:py-16 px-4 md:px-20">
          <h1 className="text-3xl  font-Quicksand font-semibold">
            Build a POC with Grethena
          </h1>

          <h2 className="text-2xl md:text-1xl font-bold mb-6 mt-8">
            Minimize Risks, Gather Insights, and Build Confidence
          </h2>
          <p className="text-lg md:text-xl">
            At Grethena, we specialize in helping businesses bring their ideas
            to life quickly and effectively with Proof of Concept (POC)
            development. A POC allows you to validate core functionality, test
            technical feasibility, and demonstrate value to stakeholders before
            moving into full-scale development. Our expert team will work with
            you to create a robust, clear POC that showcases the potential of
            your concept.
          </p>
          <h1 className="text-2xl md:text-4xl font-bold mb-6 mt-8">
            Why Choose a POC?
          </h1>

          <h2 className="text-2xl md:text-1xl font-bold mb-6 mt-8">
            Minimize Risks, Gather Insights, and Build Confidence
          </h2>
          <p className="text-lg md:text-xl">
            At Grethena, we specialize in helping businesses bring their ideas
            to life quickly and effectively with Proof of Concept (POC)
            development. A POC allows you to validate core functionality, test
            technical feasibility, and demonstrate value to stakeholders before
            moving into full-scale development. Our expert team will work with
            you to create a robust, clear POC that showcases the potential of
            your concept.
          </p>
          <h1 className="text-2xl md:text-4xl font-bold mb-6 mt-8">
            Our Approach to POC Development
          </h1>

          <h2 className="text-2xl md:text-1xl font-bold mb-6">
            1. Discovery and Planning
          </h2>
          <p className="text-lg md:text-xl">
            We begin by understanding your idea, objectives, and the challenges
            you aim to address. Grethena’s team collaborates with you to define
            a clear roadmap and focus on key features to bring your vision into
            focus.
          </p>
          <h2 className="text-2xl md:text-1xl font-bold mb-6 mt-8">
            2. Design and Prototyping
          </h2>
          <p className="text-lg md:text-xl">
            Our designers work to create intuitive and functional prototypes
            that effectively demonstrate the core aspects of your concept,
            emphasizing user experience and engagement.
          </p>
          <h2 className="text-2xl md:text-1xl font-bold mb-6 mt-8">
            3. Development of Core Features
          </h2>
          <p className="text-lg md:text-xl">
            We develop a functional model that showcases the essential features
            of your concept. Our agile approach allows us to deliver quickly,
            providing you with a working prototype to validate your ideas.
          </p>
          <h2 className="text-2xl md:text-1xl font-bold mb-6 mt-8">
            4. Testing and Validation
          </h2>
          <p className="text-lg md:text-xl">
            Before presenting the POC, we conduct thorough testing to ensure it
            performs as intended. This stage allows us to refine the prototype
            and confirm it meets both your expectations and technical
            requirements.
          </p>
          <h2 className="text-2xl md:text-1xl font-bold mb-6 mt-8">
            5. Presentation and Feedback Loop
          </h2>
          <p className="text-lg md:text-xl">
            Once the POC is ready, we help you present it to stakeholders,
            gather insights, and provide recommendations for future development.
            This feedback loop enables you to refine the concept and move
            forward with confidence.
          </p>
          <h1 className="text-2xl md:text-4xl font-bold mb-6 mt-8">
            Why Partner with Grethena?
          </h1>

          <h2 className="text-2xl md:text-1xl font-bold mb-6">
            ● Experienced Team
          </h2>
          <p className="text-lg md:text-xl">
            Our developers and strategists have extensive experience delivering
            POCs that lay a strong foundation for successful projects.
          </p>
          <h2 className="text-2xl md:text-1xl font-bold mb-6 mt-8">
            ● Custom-Tailored Solutions
          </h2>
          <p className="text-lg md:text-xl">
            We focus on your unique needs, ensuring the POC aligns perfectly
            with your goals and vision.
          </p>
          <h2 className="text-2xl md:text-1xl font-bold mb-6 mt-8">
            ● Efficient and Transparent Process
          </h2>
          <p className="text-lg md:text-xl">
            Our streamlined POC development approach ensures you receive a
            functional, compelling prototype quickly, with transparency at every
            stage.
          </p>
          <h1 className="text-2xl md:text-4xl font-bold mb-6 mt-8">
            Ready to Validate Your Concept?
          </h1>

          <p className="text-lg md:text-xl">
            Let Grethena guide you in bringing your idea to life. Under the
            leadership of our CEO, Sriram Angajala, we’re committed to building
            POCs that inspire confidence and pave the way for impactful
            products. Contact us today to discuss how we can help you build a
            POC that resonates with your audience and accelerates growth.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default poc;
