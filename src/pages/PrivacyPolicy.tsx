import React, { useState } from 'react'
import Header from '../app/component/Header'
import "../app/globals.css";
import Footer from '../app/component/Footer';
import TopSection from '../app/aboutUsPage/TopSection';
import WhyChooseUs from '../app/aboutUsPage/WhyChooseUs';
import VisionMission from '../app/aboutUsPage/VisionMission';
import Philosophy from '../app/aboutUsPage/Philosophy';




const PrivacyPolicy = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedCourse, setSelectedCourse] = useState<string>('Full Stack Development');

    return (
        <>
            <section>
                    <Header onSelectCourse={setSelectedCourse} />
                    <div className="m-0 mx-12 text-[24px] text-[#7A7A7A]">
                    <div className="">
                    <div className="text-center">
      <h2 className="font-[Quicksand] text-[#303142] font-bold m-0 mb-4 leading-[1.41666] clear-both text-[32px] pt-[60px] pr-[60px] pb-[60px] pl-[60px]">PRIVACY POLICY</h2>
    </div>
  <p className="text-sm mb-4 text-[24px] text-[#7A7A7A] font-medium mt-[32px] mb-8">1. In this privacy policy, the following definitions are used:</p>
  <div className="overflow-x-auto">
    <table className="min-w-full border">
      <tbody>
        <tr className="border-b">
          <td className="px-4 py-2 font-semibold border border-gray-300 p-[0.5em]">Data</td>
          <td className="px-4 py-2 border border-gray-300 p-[0.5em]">
            collectively all information that you submit to Grethena via the Website. This definition incorporates, where applicable, the definitions provided in the Data Protection Laws;
          </td>
        </tr>
        <tr>
          <td className="px-4 py-2 font-semibold border border-gray-300 p-[0.5em]">Data Protection Laws</td>
          <td className="px-4 py-2 border border-gray-300 p-[0.5em]">
            any applicable law relating to the processing of personal Data, including but not limited to the GDPR, and any national implementing and supplementary laws, regulations and secondary legislation;
          </td>
        </tr>
        <tr className="border-b">
          <td className="px-4 py-2 font-semibold border border-gray-300 p-[0.5em]">GDPR</td>
          <td className="px-4 py-2 border border-gray-300 p-[0.5em]">
          the UK General Data Protection Regulation;
          </td>
        </tr>
        <tr>
          <td className="px-4 py-2 font-semibold border border-gray-300 p-[0.5em]">Grethena, we or us</td>
          <td className="px-4 py-2 border border-gray-300 p-[0.5em]">
          Grethena of Forest house, 16-20 Clements road, London, IG1 1BA;
          </td>
        </tr>
        <tr>
          <td className="px-4 py-2 font-semibold border border-gray-300 p-[0.5em]">User or you</td>
          <td className="px-4 py-2 border border-gray-300 p-[0.5em]">
          any third party that accesses the Website and is not either (i) employed by Grethena and acting in the course of their employment or (ii) engaged as a consultant or otherwise providing services to Grethena and accessing the Website in connection with the provision of such services; and
          </td>
        </tr>
        <tr className="border-b">
          <td className="px-4 py-2 font-semibold border border-gray-300 p-[0.5em]">Website</td>
          <td className="px-4 py-2 border border-gray-300 p-[0.5em]">
          the website that you are currently using, https://grethena.com/, and any sub-domains of this site unless expressly excluded by their own terms and conditions.
          </td>
        </tr>
       </tbody>
    </table>
  </div>
</div>

<div className="text-base leading-relaxed space-y-2 text-[24px] text-[#7A7A7A]">
    <p className="font-medium mt-[42px] mb-5">2. In this privacy policy, unless the context requires a different interpretation:</p>
    <ul className="list-disc pl-6 space-y-1">
        <li>The singular includes the plural and vice versa;</li>
        <li>References to sub-clauses, clauses, schedules or appendices are to sub-clauses, clauses, schedules or appendices of this privacy policy;</li>
        <li>A reference to a person includes firms, companies, government entities, trusts and partnerships;</li>
        <li><span className="font-semibold">“Including”</span> is understood to mean “including without limitation”;</li>
        <li>Reference to any statutory provision includes any modification or amendment of it;</li>
        <li>The headings and sub-headings do not form part of this privacy policy.</li>
    </ul>
</div>
<div className="text-base leading-relaxed space-y-4 text-[24px] text-[#7A7A7A]">
    <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">Scope of this privacy policy</h1>
    <p>
        3. This privacy policy applies only to the actions of <span className="font-semibold">Grethena</span> and Users with respect to this Website. It does not extend to any websites that can be accessed from this Website including, but not limited to, any links we may provide to social media websites.
    </p>
    <p>
       4.  For purposes of the applicable Data Protection Laws, <span className="font-semibold">Grethena</span> is the “data controller”. This means that Grethena determines the purposes for which, and the manner in which, your Data is processed.
    </p>

    <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">Data Controller</h1>
    <p>
    5. We may collect the following Data, which includes personal Data, from you:
    </p>
    <ul className="list-disc pl-6 space-y-1">
        <li>Name;</li>
        <li>Contact Information such as email addresses and telephone numbers;</li>
        <li>In each case, in accordance with this privacy policy.</li>
    </ul>
    <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">How we collect Data</h1>
    <p>
    6. We collect Data in the following ways:
    </p>
    <ul className="list-disc pl-6 space-y-1">
        <li>Name;</li>
        <li>Data is given to us by you; and</li>
        <li>Data is collected automatically.</li>
    </ul>
    <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">Data that is given to us by you</h1>
    <p>
    7. Grethena will collect your Data in a number of ways, for example:
    </p>
    <ul className="list-disc pl-6 space-y-1">
        <li>When you contact us through the Website, by telephone, post, e-mail or through any other means;</li>
        <li>When you complete surveys that we use for research purposes (although you are not obliged to respond to them);</li>
        <li>When you enter a competition or promotion through a social media channel;</li>
        <li>When you elect to receive marketing communications from us;</li>
        <li>When you use our services;</li>
        <li>In each case, in accordance with this privacy policy.</li>
    </ul>
    <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">Data that is given to us by you</h1>
    <p>
    8. To the extent that you access the Website, we will collect your Data automatically, for example:
    </p>
    <ul className="list-disc pl-6 space-y-1">
        <li>We automatically collect some information about your visit to the Website. This information helps us to make improvements to Website content and navigation, and includes your IP address, the date, times and frequency with which you access the Website and the way you use and interact with its content.</li>
    </ul>
    <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">Our use of Data</h1>
    <p>
    9. Any or all of the above Data may be required by us from time to time in order to provide you with the best possible service and experience when using our Website. Specifically, Data may be used by us for the following reasons:
    </p>
    <ul className="list-disc pl-6 space-y-1">
        <li>Improvement of our products / services;</li>
        <li>In each case, in accordance with this privacy policy.</li>
    </ul>
    <p>
    10. We may use your Data for the above purposes if we deem it necessary to do so for our legitimate interests. If you are not satisfied with this, you have the right to object in certain circumstances (see the section headed “Your rights” below).
    </p>
    <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">Who we share Data with</h1>
    <p>
    11. We may share your Data with the following groups of people for the following reasons:
    </p>
    <ul className="list-disc pl-6 space-y-1">
        <li>Our employees, agents and/or professional advisors – to understand the requirement of the customer; in each case, in accordance with this privacy policy.</li>
    </ul>
    <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">Keeping Data secure</h1>
    <p>
    12. We will use technical and organisational measures to safeguard your Data, for example:
    </p>
    <ul className="list-disc pl-6 space-y-1">
        <li>Access to your account is controlled by a password and a user name that is unique to you</li>
        <li>We store your Data on secure servers</li>
    </ul>
    <p>
    13. We are certified to SOC 2. This family of standards helps us manage your Data and keep it secure.
    </p>
    <p>
    14. Technical and organisational measures include measures to deal with any suspected data breach. If you suspect any misuse or loss or unauthorised access to your Data, please let us know immediately by contacting us via this e-mail address: support@grethena.com.
    </p>
    <p>
    15. If you want detailed information from Get Safe Online on how to protect your information and your computers and devices against fraud, identity theft, viruses and many other online problems, please visit www.getsafeonline.org. Get Safe Online is supported by HM Government and leading businesses.
    </p>
    <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">Data retention</h1>
    <p>
    16. Unless a longer retention period is required or permitted by law, we will only hold your Data on our systems for the period necessary to fulfil the purposes outlined in this privacy policy or until you request that the Data be deleted.
    </p>
    <p>
    17. Even if we delete your Data, it may persist on backup or archival media for legal, tax or regulatory purposes.
    </p>
    <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">Your rights</h1>
    <p>
    18. You have the following rights in relation to your Data:
    </p>
    <ul className="list-disc pl-6 space-y-1">
        <li><span className="font-medium">Right to access – </span>the right to request (i) copies of the information we hold about you at any time, or (ii) that we modify, update or delete such information. If we provide you with access to the information we hold about you, we will not charge you for this, unless your request is “manifestly unfounded or excessive.” Where we are legally permitted to do so, we may refuse your request. If we refuse your request, we will tell you the reasons why.</li>
        <li><span className="font-medium">Right to correct – </span>the right to have your Data rectified if it is inaccurate or incomplete.</li>
        <li><span className="font-medium">Right to erase – </span>the right to request that we delete or remove your Data from our systems.</li>
        <li><span className="font-medium">Right to restrict our use of your Data – </span>the right to “block” us from using your Data or limit the way in which we can use it.</li>
        <li><span className="font-medium">Right to data portability – </span>the right to request that we move, copy or transfer your Data.</li>
        <li><span className="font-medium">Right to object –</span> the right to object to our use of your Data including where we use it for our legitimate interests.</li>
    </ul>
    <p>
    19. To make enquiries, exercise any of your rights set out above, or withdraw your consent to the processing of your Data (where consent is our legal basis for processing your Data), please contact us via this e-mail address: support@grethena.com.
    </p>
    <p>20. If you are not satisfied with the way a complaint you make in relation to your Data is handled by us, you may be able to refer your complaint to the relevant data protection authority. For the UK, this is the Information Commissioner’s Office (ICO). The ICO’s contact details can be found on their website at https://ico.org.uk/.</p>
    <p>21. It is important that the Data we hold about you is accurate and current. Please keep us informed if your Data changes during the period for which we hold it.</p>
    <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">Links to other websites</h1>
    <p>
    22. This Website may, from time to time, provide links to other websites. We have no control over such websites and are not responsible for the content of these websites. This privacy policy does not extend to your use of such websites. You are advised to read the privacy policy or statement of other websites prior to using them.
    </p>
    <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">Changes of business ownership and control</h1>
    <p>
    23. Grethena may, from time to time, expand or reduce our business and this may involve the sale and/or the transfer of control of all or part of Grethena. Data provided by Users will, where it is relevant to any part of our business so transferred, be transferred along with that part and the new owner or newly controlling party will, under the terms of this privacy policy, be permitted to use the Data for the purposes for which it was originally supplied to us.
    </p>
    <p>24. We may also disclose Data to a prospective purchaser of our business or any part of it.</p>
    <p>25. In the above instances, we will take steps with the aim of ensuring your privacy is protected.</p>
    <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">General</h1>
    <p>
    26. You may not transfer any of your rights under this privacy policy to any other person. We may transfer our rights under this privacy policy where we reasonably believe your rights will not be affected.
    </p>
    <p>27. If any court or competent authority finds that any provision of this privacy policy (or part of any provision) is invalid, illegal or unenforceable, that provision or part-provision will, to the extent required, be deemed to be deleted, and the validity and enforceability of the other provisions of this privacy policy will not be affected.</p>
    <p>28. Unless otherwise agreed, no delay, act or omission by a party in exercising any right or remedy will be deemed a waiver of that, or any other, right or remedy.</p>
    <p>29. This Agreement will be governed by and interpreted according to the law of England and Wales. All disputes arising under the Agreement will be subject to the exclusive jurisdiction of the English and Welsh courts.</p>
    <h1 className="font-quicksand text-[#303142] font-bold mb-[15px] clear-both text-[40px]">Changes to this privacy policy</h1>
    <p>
    30. Grethena reserves the right to change this privacy policy as we may deem necessary from time to time or as may be required by law. Any changes will be immediately posted on the Website and you are deemed to have accepted the terms of the privacy policy on your first use of the Website following the alterations.
    </p>
    <ul className="list-disc pl-6 space-y-1 pb-[150px]">
        <li>You may contact Grethena by email at support@grethena.com.</li>
    </ul>
</div>
</div>



                    <Footer />
            </section>
        </>
    )
}

export default PrivacyPolicy