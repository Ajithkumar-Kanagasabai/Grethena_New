import Footer from "@/src/app/component/Footer";
import Header from "@/src/app/component/Header";
import React from "react";
import "../../app/globals.css";
import Link from "next/link";
import { HiLink } from "react-icons/hi";

const poc_case_studies = () => {
  return (
    <>
      <Header />
      <div className="p-5">
        <h1 className="text-center lg:text-3xl md:text-3xl text-xl  font-bold mt-10 ">
          Build a POC with Grethena
        </h1>
        <div className="mt-20  mb-32">
          <h2 className="lg:text-2xl md:text-xl text-md font-bold mb-6">
            COCORIO - Child care startup in LONDON
          </h2>
          <Link
            className=" underline ml-[1.7rem]  flex items-center gap-x-3  text-blue-600 text-[20px]"
            href={
              "https://xd.adobe.com/view/c3da244f-201a-47bb-be9e-9d3180a534f4-9689/grid"
            }
            target="blank"
          >
            <HiLink size={20} />
            Click here
          </Link>
          <h2 className="lg:text-2xl md:text-xl text-md font-bold mb-6 mt-8">
            LONDON GENERAL PRACTICE - PRIVATE HOSPITAL in LONDON
          </h2>
          <Link
            className=" underline ml-[1.7rem]  text-blue-600 text-[20px] flex items-center gap-x-3"
            href={
              "https://xd.adobe.com/view/4759e6bb-6af1-4b44-6552-3a30761c3274-3168/grid/"
            }
            target="blank"
          >
            <HiLink />
            Click here
          </Link>
          <h2 className="lg:text-2xl md:text-xl text-md font-bold mb-6 mt-8 ">
            MERCHIDSE BENZ - Brand Center - DUBAI
          </h2>
          <Link
            className="underline ml-[1.7rem]  text-blue-600 text-[20px] flex items-center gap-x-3"
            href={
              "https://www.figma.com/design/vIV4B3vctcy0oukxI5Ome8/Grethena-Team---UI-Designs?node-id=1-2&t=Sm9NOI8lZnXoJ2ge-1"
            }
            target="blank"
          >
            <HiLink />
            Click here
          </Link>
          <h2 className="lg:text-2xl md:text-xl text-md font-bold mb-6 mt-8">
            TWIDOL - GYM Membership APP - LONDON
          </h2>
          <Link
            className="underline ml-[1.7rem]  text-blue-600 text-[20px] flex items-center gap-x-3"
            href={
              "https://xd.adobe.com/view/2f8bdb3e-4fc7-4944-55b2-308152ef8dc0-59ba/grid/"
            }
            target="blank"
          >
            <HiLink />
            Click here
          </Link>
          <h2 className="lg:text-2xl md:text-xl text-md font-bold mb-6 mt-8">
            Growth School own POCs-UK
          </h2>
          <Link
            className="underline ml-[3.7rem]   text-blue-600 text-[20px]
             relative  "
            href={
              "https://www.figma.com/proto/8XQ48U2DGvlzFnce5bAFtp/Growth-school?page-id=0%3A1&node-id=28-3&node-type=frame&viewport=-1101%2C148%2C0.1&t=XPanpXniYB36xwxi-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=28%3A3&show-proto-sidebar=1"
            }
            target="blank"
          >
            <HiLink className=" absolute  top-2 left-[-2.25rem]" />
            Click here
          </Link>

          <h2 className="lg:text-2xl md:text-xl text-md font-bold mb-6 mt-8">
            Task Learn-UK
          </h2>
          <Link
            className="underline ml-[3.7rem]  text-blue-600 text-[20px]
            flex items-center gap-x-3 relative"
            href={
              "https://www.figma.com/proto/V5VZIGzVuLlC9rw07MPJys/Task-Learn?page-id=0%3A1&node-id=873-120&node-type=canvas&viewport=-2299%2C-360%2C0.05&t=5NNdMT5ZX6mm7bHa-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=873%3A120"
            }
            target="blank"
          >
            <HiLink className="absolute  top-2 left-[-2.25rem]" />
            Click here
          </Link>
          <h2 className="lg:text-2xl md:text-xl text-md font-bold mb-6 mt-8">
            Training Latam-UK
          </h2>
          <Link
            className="underline ml-[3.7rem] relative  text-blue-600 text-[20px]
            flex items-center gap-x-3"
            href={
              "https://www.figma.com/proto/AFkymAtyPwL0fyB6m2osCb/Training-Latem?page-id=0%3A1&node-id=104-1172&node-type=canvas&viewport=633%2C403%2C0.11&t=qOdm3wme7kiiVDl9-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=62%3A179"
            }
            target="blank"
          >
            <HiLink className="absolute  top-2 left-[-2.25rem]" />
            Click here
          </Link>
          <h2 className="lg:text-2xl md:text-xl text-md font-bold mb-6 mt-8">
            App Blend-Dubai
          </h2>
          <Link
            className="underline ml-[3.7rem] relative  text-blue-600 text-[20px] flex items-center gap-x-3"
            href={
              "https://www.figma.com/proto/QfndtzXzEY55IyPwVMeMJC/Careem?page-id=0%3A1&node-id=77-3820&node-type=canvas&viewport=-4746%2C1281%2C0.09&t=M0jlpaKx0enThTMH-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=77%3A3816&show-proto-sidebar=1"
            }
            target="blank"
          >
            <HiLink className="absolute  top-2 left-[-2.25rem]" />
            Click here
          </Link>
          <h2 className="lg:text-2xl md:text-xl text-md font-bold mb-6 mt-8">
            Property Management-Dubai
          </h2>
          <Link
            className="underline ml-[3.7rem] absolute mb-5 text-blue-600 text-[20px]
            flex items-center gap-x-3"
            href={
              "https://www.figma.com/proto/jEOpuRBdejAb2TPoc4qDON/Property-management?t=OWgnofMzRjacYSIZ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=1-181&starting-point-node-id=1%3A181"
            }
            target="blank"
          >
            <HiLink className="absolute  top-2 left-[-2.25rem]" />
            Click here
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default poc_case_studies;
