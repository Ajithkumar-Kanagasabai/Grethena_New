import React from 'react'
import Image from "next/image";
import booking from '../../../public/assets/Case-Studies/image-1 (1).png'
export const BookingSection = () => {
  return (
    <div className="font-Quicksand p-6">
      <h1 className="text-center text-4xl font-semibold mt-3">
        BOOKING APPOINTMENTS
      </h1>
      <div className="lg:h-[600px] lg:flex mt-7 w-full rounded-2xl overflow-hidden ">
        <Image src={booking} alt="booking" className="lg:w-[75%] bg-cover" />
        <div className="bg-[#6754c5] w-full text-white overflow-hidden ">
          <h1 className="text-center text-4xl font-semibold mt-3 p-4">
            Project Information
          </h1>
          <div className=" mt-0 lg:mt-6">
            <div className=" flex   justify-center border-b-2 ">
              <div className="flex gap-x-[3rem] justify-center text-xl font-medium mt-6  mb-6 lg:mb-6 w-[80%]">
                <p className="w-[40%]  text-nowrap">Client Name:</p>
                <p className="lg:mb-10   text-nowrap w-full">
                  London General Practice
                </p>
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
                <p className="w-[40%]  text-nowrap text-left">Problem:</p>
                <p className="lg:mb-10 text-nowrap w-full text-left ml-[2.73rem] lg:ml-0">
                  Booking Appointments
                </p>
              </div>
            </div>
            <div className=" flex  justify-center  ">
              <div className="flex gap-x-[3rem] justify-center text-xl  font-medium boder mb-6 mt-5 w-[90%] lg:w-[80%]">
                <p className="w-[40%]  text-left text-nowrap">Client Rating:</p>
                <p className="mb-10 text-nowrap w-full text-left ml-[2.75rem] lg:ml-0">
                  777
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <article className="lg:px-8">
          <div className="text-[1.4rem] font-normal mt-[6rem] text-gray-700 font-Quicksand">
            <p className="mb-5">
              Established in 2005, London General Practice has been a beacon of
              excellence in the realm of healthcare, serving patients from the
              heart of the renowned Harley Street medical district. Its
              commitment to delivering superior medical care has only grown
              stronger since April 2022 when it became an integral part of HCA
              International.
            </p>
            <p className="mb-5">
              With a dedicated team of highly qualified and experienced
              practitioners, London General Practice caters to some of the
              world’s most discerning individuals and families. The remarkable
              service it offers is evident in the outstanding patient ratings,
              with an impressive average score of 4.8 out of 5. The practice
              extends its expertise beyond individual care, collaborating with
              corporate clients to provide a wide range of contracted and ad hoc
              services, including invaluable occupational health services. This
              not only aids employers in optimizing their teams but also
              emphasizes the promotion and protection of employee health and
              well-being.
            </p>
            <h1 className=" mt-[2rem] text-3xl font-semibold text-[#6754c5]">
              Grethena implemented a revolutionary solution that enhances
              patient experience by enabling hassle-free appointment booking via
              their app
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
            <h1 className='mt-[4rem] mb-[4rem] text-4xl font-semibold'>Problem Statements</h1>
            <ul className="list-decimal pl-5">
              <li>
                Navigating Patient Consultations During a Pandemic: London
                General Practice faced the challenge of efficiently conducting
                patient consultations with General Practitioners (GPs) amidst
                the unprecedented COVID-19 pandemic. The need to adapt to remote
                consultations while maintaining the quality of care posed a
                significant hurdle.
              </li>
              <li>
                Emergency GP Consultations: Urgent and emergency situations
                require immediate access to GP consultations. London General
                Practice encountered difficulties in ensuring timely
                consultations for patients in dire need of medical attention.
              </li>
              <li>
                Geographical Accessibility: Patients seeking London General
                Practice’s services sometimes encountered geographical
                constraints, making it challenging for them to access the
                clinic’s facilities conveniently. This issue raised concerns
                about equitable access to healthcare.
              </li>
              <li>
                Time-Consuming Travel and Waiting: Patients often spent a
                substantial amount of time commuting to the clinic and waiting
                for their GP appointments. This inefficient process not only
                inconvenienced patients but also had the potential to disrupt
                their daily routines.
              </li>
            </ul>
          </div>
          <div>
            <h1>Our Solution</h1>
            <p>
              London General Practice, with the help of Grethena, introduced a
              mobile app solution aimed at revolutionizing the way patients
              access and interact with their healthcare services. This
              innovative app, intricately integrated with the Backend Meddbase
              Admin and Doctor Portals, encompasses a range of features designed
              to streamline the patient experience and improve the efficiency of
              healthcare delivery.
            </p>
            <ul className="list-decimal pl-5">
              <li>
                Booking & Reminders: The core of the solution lies in its
                ability to empower patients to book appointments seamlessly
                through the mobile app. Patients can schedule appointments at
                their convenience, eliminating the need for time-consuming phone
                calls or in-person visits. Moreover, the app sends timely
                notification reminders to patients closer to their appointment
                dates, ensuring that they never miss an important consultation.
              </li>
              <li>
                Appointment Integration: The app simplifies the process further
                by seamlessly integrating with the user’s phone calendar. This
                feature allows patients to effortlessly save their upcoming
                appointments, keeping them organized and informed.
              </li>
              <li>
                Video Conferencing: In response to the challenge of accessing GP
                consultations during emergency situations and the pandemic, the
                app facilitates video conferencing. Patients can consult their
                doctors from the comfort of their homes through secure and
                convenient video calls, ensuring immediate access to medical
                care.
              </li>
              <li>
                Registration & Payments: Each patient benefits from a
                personalized account within the app, where they can conveniently
                manage their healthcare information. This not only streamlines
                administrative processes but also enables hassle-free online
                payments, enhancing the overall patient experience.
              </li>
              <li>
                Symptom Checker: The app incorporates a virtual GP feature,
                allowing patients to assess the severity of their symptoms and
                receive recommendations for appropriate treatment. This empowers
                patients with valuable health information and guides them toward
                suitable next steps.
              </li>
              <li>
                Reports and Tracking: Patients can access their medical reports
                directly from the app and share them with their doctors
                effortlessly. Additionally, the app offers a unique feature that
                enables patients to track the location of their doctor in case
                of a scheduled home visit, enhancing transparency and peace of
                mind.
              </li>
            </ul>
            <p>
              This mobile app solution represents a significant step forward in
              London General Practice’s commitment to providing swift,
              accessible, and patient-centric healthcare. By leveraging
              technology to bridge the gap between patients and healthcare
              providers, London General Practice and Grethena have created a
              healthcare experience that prioritizes convenience, efficiency,
              and patient well-being.
            </p>
            <p>
              The implementation of the Grethena’s solution at London General
              Practice has ushered in a new era of healthcare accessibility and
              efficiency.{" "}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
