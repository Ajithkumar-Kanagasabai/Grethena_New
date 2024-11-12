import React from "react";
import Header from "../app/component/Header";
import "../app/globals.css";
import Footer from "../app/component/Footer";
const CookiesPolicy = () => {
  return (
    <section>
      <Header />
      <div className="m-0 mx-12 text-[24px] text-[#7A7A7A] mb-9">
        <div className="text-center">
          <h2 className=" font-Quicksand text-[#303142] font-bold m-0 mb-4 leading-[1.41666] clear-both text-[32px] pt-[60px] pr-[60px] pb-[60px] pl-[60px]">
            COOKIES POLICY
          </h2>
        </div>
        <div className="text-base leading-relaxed space-y-4 text-[24px] text-[#7A7A7A]">
          <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[35px]">
            Introduction
          </h1>
          <p>
            This Cookie Policy explains how Grethena uses cookies and similar
            tracking technologies on our website (https://grethena.com). By
            using our website, you consent to the use of cookies as described in
            this policy.
          </p>

          <div className="text-base leading-relaxed space-y-4 text-[24px] text-[#7A7A7A]">
            <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[35px]">
              What Are Cookies?
            </h1>
            <p>
              Cookies are small text files that are stored on your device when
              you visit a website. They help us improve your browsing
              experience, understand how our website is used, and provide
              essential functionality.
            </p>
            <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[35px]">
              Types of Cookies We Use
            </h1>
            <p>We use the following types of cookies on our website:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Necessary Cookies</li>
              <p className="">
                These cookies are essential for the website to function
                properly. They enable core functionalities, such as security,
                network management, and accessibility. You can disable these
                cookies in your browser settings, but it may affect website
                performance.
              </p>
              <li>Analytics Cookies</li>
              <p>
                Analytics cookies help us understand how visitors interact with
                our website by collecting information anonymously. We use this
                data to improve our website’s content, layout, and user
                experience.
              </p>
              <li>Functionality Cookies</li>
              <p>
                Functionality cookies allow us to remember your preferences and
                personalize your experience on our website, such as remembering
                your language or region.
              </p>
            </ul>
            <div className="text-base leading-relaxed space-y-4 text-[24px] text-[#7A7A7A]">
              <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[35px]">
                Third-Party Cookies
              </h1>
              <p>
                We may use third-party service providers, such as Google
                Analytics, to track and analyze website usage and performance.
                These third-party cookies are managed by their respective
                providers and are used in accordance with their own privacy
                policies.
              </p>
            </div>
            <div className="text-base leading-relaxed space-y-4 text-[24px] text-[#7A7A7A]">
              <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[35px]">
                Managing Cookies
              </h1>
              <p>
                Most web browsers automatically accept cookies, but you can
                modify your browser settings to decline cookies if you prefer.
                Please note that disabling cookies may limit some
                functionalities of our website.
              </p>
            </div>

            <div className="text-base leading-relaxed space-y-4 text-[24px] text-[#7A7A7A]">
              <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[35px]">
                Changes to This Policy
              </h1>
              <p>
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or relevant regulations. Any updates
                will be posted on this page, and we encourage you to review this
                policy periodically.
              </p>
            </div>
            <div className="text-base leading-relaxed space-y-4 text-[24px] text-[#7A7A7A]">
              <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[35px]">
                Contact Us
              </h1>
              <p>
                If you have any questions or concerns about our use of cookies,
                please contact us at:
              </p>
              <h1>Grethena Ltd</h1>
              <p>UK Office: 21 Heath Drive, Romford, Essex, UK, RM2 5QH</p>
              <p>
                India Office: 25FG+WGJ, Ramapuram, Chennai, Tamil Nadu 600125
              </p>
              <p>Email: info@grethena.com</p>
              <p>Phone:+44 7453 289655</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CookiesPolicy;
