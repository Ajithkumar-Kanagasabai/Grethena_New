import React from 'react'
import Header from "../app/component/Header";
import Footer from "../app/component/Footer";
import "../app/globals.css";
const Terms_of_use = () => {
  return (
    <div>
      <Header />
      <div className="m-0 mx-12 text-[24px] text-[#7A7A7A]">
        <div className="text-center">
          <h2 className="font-[Quicksand] text-[#303142] font-bold m-0 mb-4 leading-[1.41666] clear-both text-[32px] pt-[60px] pr-[60px] pb-[60px] pl-[60px]">
            TERMS AND CONDITIONS
          </h2>
        </div>
        <div className="text-base leading-relaxed space-y-4 text-[24px] text-[#7A7A7A]">
          <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">
            Introduction
          </h1>
          <p>
            Welcome to Grethena. By accessing or using our website
            (https://grethena.com), you agree to comply with and be bound by the
            following terms and conditions. Please review these terms carefully
            before using our website.
          </p>

          <div className="text-base leading-relaxed space-y-4 text-[24px] text-[#7A7A7A]">
            <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">
              Website Purpose
            </h1>
            <p>
              The Grethena website serves as an informational platform to
              showcase our services, client projects, case studies, and company
              information. We do not conduct any transactions, charge fees, or
              sell products/services directly through this website. All
              inquiries and service requests are handled offline and are subject
              to separate agreements.
            </p>
            <div className="text-base leading-relaxed space-y-4 text-[24px] text-[#7A7A7A]">
              <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">
                Intellectual Property
              </h1>
              <p>
                All content, materials, logos, and intellectual property on
                Grethena's website are owned by Grethena or its licensors. Users
                may not copy, reproduce, distribute, or use any content for
                commercial purposes without prior written consent from Grethena.
              </p>
            </div>
            <div className="text-base leading-relaxed space-y-4 text-[24px] text-[#7A7A7A]">
              <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">
                User Obligations
              </h1>
              <p>When accessing or using our website, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Engage in any unlawful activities.</li>
                <li>Violate the rights of others.</li>
                <li>
                  Attempt to interfere with the functionality or security of the
                  website.
                </li>
              </ul>
            </div>

            <div className="text-base leading-relaxed space-y-4 text-[24px] text-[#7A7A7A]">
              <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">
                Limitation of Liability
              </h1>
              <p>
                Grethena is not liable for any direct, indirect, incidental, or
                consequential damages resulting from the use of our website. The
                website content is provided on an “as is” basis, and while we
                strive to keep the information accurate, we do not guarantee the
                completeness or reliability of any content.
              </p>
            </div>
            <div className="text-base leading-relaxed space-y-4 text-[24px] text-[#7A7A7A]">
              <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">
                Third-Party Links
              </h1>
              <p>
                Our website may contain links to third-party websites for
                additional information or reference. Grethena does not endorse
                or take responsibility for the content, accuracy, or practices
                of these external websites. Visiting linked sites is at your own
                risk.
              </p>
            </div>
            <div className="text-base leading-relaxed space-y-4 text-[24px] text-[#7A7A7A]">
              <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">
                Privacy Policy
              </h1>
              <p>
                Your privacy is important to us. Our Privacy Policy, which
                explains how we collect, use, and protect your information,
                governs your use of the website. Please review our Privacy
                Policy here. (Link to privacy policy page)
              </p>
            </div>
            <div className="text-base leading-relaxed space-y-4 text-[24px] text-[#7A7A7A]">
              <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">
                Changes to Terms
              </h1>
              <p>
                Grethena reserves the right to modify or update these terms at
                any time. Continued use of the website after any changes
                signifies your acceptance of the updated terms.
              </p>
            </div>
            <div className="text-base leading-relaxed space-y-4 text-[24px] text-[#7A7A7A]">
              <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">
                Governing Law
              </h1>
              <p>
                These terms shall be governed by and construed in accordance
                with the laws of the jurisdiction in which Grethena operates,
                without regard to its conflict of law principles.
              </p>
            </div>

            <ul className="list-disc pl-6 space-y-1 pb-[150px]">
              <li>
                You may contact Grethena by email at support@grethena.com.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Terms_of_use