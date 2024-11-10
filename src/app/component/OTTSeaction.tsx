import React from 'react'
import Image from "next/image";
import OTT from "../../../public/assets/Case-Studies/ott.webp";
import { FaStar } from "react-icons/fa6";
const OTTSeaction = () => {
  return (
    <div className="font-Quicksand p-0 lg:p-6">
      <h1 className="text-center text-4xl font-semibold mt-6">MYCO</h1>
      <div className="lg:h-[600px] lg:flex mt-7 w-full lg:rounded-2xl overflow-hidden ">
        <Image src={OTT} alt="booking" className="lg:w-[60%] bg-cover" />
        <div className="bg-[#6754c5] w-full text-white overflow-hidden ">
          <h1 className="text-center text-4xl text-nowrap font-semibold mt-3 p-4">
            Project Information
          </h1>
          <div className=" mt-0 lg:mt-6">
            <div className=" flex   justify-center border-b-2 ">
              <div className="flex gap-x-[3rem] justify-center text-xl font-medium mt-6  mb-6 lg:mb-6 w-[80%]">
                <p className="w-[40%]  text-nowrap">Client Name:</p>
                <p className="lg:mb-10   text-nowrap w-full">MYCO</p>
              </div>
            </div>
            <div className=" flex  justify-center border-b-2  ">
              <div className="flex boder gap-x-[3rem] justify-center text-center text-xl  font-medium  mb-6  mt-6 w-[80%]">
                <p className="w-[40%]  text-nowrap text-left">Location:</p>
                <p className="lg:mb-10 text-nowrap w-full text-left ml-[1.80rem] lg:ml-0 ">
                  London, United Kingdom
                </p>
              </div>
            </div>
            <div className=" flex justify-center items-center border-b-2   ">
              <div className="flex gap-x-[3rem] justify-center   text-xl  font-medium mt-5 lg:w-[80%] mb-6  ">
                <p className="lg:w-[40%] w-full  text-nowrap text-left mr-[2.3rem] lg:mr-0">
                  Problem:
                </p>
                <p className="lg:mb-10 text-nowrap w-full text-left ml-[0.75rem] lg:ml-0">
                  Global User Base
                </p>
              </div>
            </div>
            <div className=" flex  justify-center  ">
              <div className="flex gap-x-[3rem] justify-center text-xl  font-medium boder mb-6 mt-5 w-[90%] lg:w-[80%]">
                <p className="w-[40%]  text-left ml-6 lg:ml-0 text-nowrap">
                  Client Rating:
                </p>
                <div className="mb-10 text-nowrap w-full text-left ml-[2.75rem] lg:ml-0">
                  <div className="flex">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <article className="lg:px-8 px-5">
          <div className="text-[1.4rem] font-normal mt-[6rem] text-gray-700 font-Quicksand">
            <p className="mb-5">
              Introducing myco, a game-changing platform powered by MContent,
              that’s transforming the way we experience web3. Imagine getting
              rewarded for every minute you spend watching your favorite shows
              and movies. With myco, you don’t have to wonder anymore – it’s
              making that dream a reality.
            </p>
            <p className="mb-5">
              At its heart, myco is all about community and empowerment. It’s
              not just a video streaming platform; it’s a whole web3 ecosystem
              where viewers earn rewards while enjoying content. But it doesn’t
              stop there – myco also supports content creators by helping them
              stream, finance, produce, and distribute their original films, TV
              shows, and live content.
            </p>
            <h1 className=" mt-[2rem] text-3xl font-semibold text-[#6754c5]">
              It’s a win-win for everyone involved!
            </h1>
            <p className="mt-[3rem]">
              At the core of London General Practice’s ethos lies the belief in
              delivering healthcare that is prompt, personal, individualized,
              and proactive. This philosophy is embodied in their commitment to
              providing same-day appointments, ensuring that patients receive
              swift attention when they need it the most. These appointments,
              with a generous half-hour duration, allow ample time for
              comprehensive examinations, in-depth understanding of health
              concerns, and thoughtful answers to all questions, reaffirming
              their dedication to holistic care.
            </p>
          </div>
          <div>
            <h1 className="mt-[4rem] mb-[4rem] text-4xl font-semibold">
              Problem Statements
            </h1>
            <p className="text-[1.4rem] font-normal">
              Myco faced several challenges when they approached us at Grethena.
              Here are the key issues they were dealing with:
            </p>
            <ul className="list-decimal pl-5 mt-7 text-[1.4rem] text-gray-700 font-normal flex-col flex gap-y-6">
              <li>
                <span className="font-semibold">lobal User Base:</span> Myco had
                an impressive 1 million registered users from 195 different
                countries. Managing such a diverse user base was proving to be a
                challenge.
              </li>
              <li>
                <span className="font-semibold">Security and Scalability:</span>{" "}
                The old platform had security vulnerabilities and was unable to
                scale efficiently due to its monolithic architecture.
                Additionally, it suffered from multiple performance issues.
              </li>
              <li>
                <span className="font-semibold">
                  {" "}
                  High Infrastructure Costs:
                </span>{" "}
                he cost of maintaining the infrastructure was skyrocketing, and
                attempts to migrate to the cloud had not been successful, adding
                to the financial burden.
              </li>
              <li>
                <span className="font-semibold">
                  Waterfall Development Model:
                </span>{" "}
                Myco’s development process was using a waterfall model, which
                was slowing down their time to market. Furthermore, there was a
                culture of blame between the development and operations teams,
                hindering collaboration and progress.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="mt-[4rem] mb-[4rem] text-4xl font-semibold">
              Our Solution
            </h1>
            <p className="text-[1.4rem]">
              London General Practice, with the help of Grethena, introduced a
              mobile app solution aimed at revolutionizing the way patients
              access and interact with their healthcare services. This
              innovative app, intricately integrated with the Backend Meddbase
              Admin and Doctor Portals, encompasses a range of features designed
              to streamline the patient experience and improve the efficiency of
              healthcare delivery.
            </p>
            <ul className="list-decimal pl-5 text-[1.4rem] text-gray-700 font-normal flex-col flex gap-y-6 mt-8">
              <li>
                <span className="font-semibold">Platform Migration:</span>We
                successfully migrated Myco’s platform from the legacy domain
                mcontent.net to the new domain myco.io. This transition was
                crucial for addressing security and scalability issues.
              </li>
              <li>
                <span className="font-semibold">AWS MAP Program:</span> We
                partnered with the AWS MAP (Migration Acceleration Program),
                which not only helped us manage infrastructure costs but also
                provided us with opportunities to earn credits, ultimately
                reducing our overall expenses by up to 30%.
              </li>
              <li>
                <span className="font-semibold">Platform Monitoring:</span>We
                implemented robust platform monitoring using Datadog, which
                allowed us to keep a close eye on the system’s performance and
                detect any anomalies or issues in real-time.
              </li>
              <li>
                <span className="font-semibold">Incident Management:</span>
                Opsgenie was employed for efficient incident management. This
                tool streamlined the process of identifying and resolving
                issues, ensuring a smoother user experience.
              </li>
              <li>
                <span className="font-semibold">App Stability:</span>
                Despite frequent updates and releases, we managed to maintain a
                low app crash rate of around 4%, ensuring a stable and reliable
                user experience.
              </li>
              <li>
                <span className="font-semibold">Cost Reduction:</span>
                We transitioned from an outsourced development team to an
                in-house team, significantly reducing development costs and
                promoting better collaboration and control over the development
                process.
              </li>
            </ul>
            <p className="mt-[3rem] text-[1.4rem] text-gray-700 font-normal">
              These solutions collectively helped Myco overcome its challenges
              and create a more secure, scalable, and cost-effective platform
              while improving the overall user experience.
            </p>
            
          </div>
        </article>
      </div>
    </div>
  );
}

export default OTTSeaction