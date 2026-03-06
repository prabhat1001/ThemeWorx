import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaChevronDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import HeroImage from "../assets/ThemeBG.png";
import VisionImage from "../assets/vision.jpg";
import Creator from "../assets/creator.jpg";
import { faqs } from "../data/FAQs";
import Form from "../components/Form";
import Footer from './Footer.jsx'
import Branding from '../assets/EndBranding.png'

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState(0); // 0 = first FAQ open by default

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const location = useLocation();

  useEffect(() => {
    // Check if URL has #faq hash
    if (location.hash === "#faq") {
      const element = document.getElementById("faq");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="w-full">
        {/* Section 1 */}

        {/* Hero */}

        <div className=" w-full h-screen relative  ">
          <div className=" absolute md:w-[80vw] lg:w-[50vw] p-5 md:p-10 flex flex-col gap-5 top-[70%] md:top-3/4 lg:top-1/2 -translate-y-1/2 ">
            <p className=" text-7xl md:text-8xl font-bebas font-semibold">
              <span className="font-LaBelleAurore text-4xl text-[#9b9b9b] font-normal">
                About
              </span>
              <br /> ThemeWorx <span className="text-red-600">.</span>
            </p>
            <p className=" text-lg md:text-lg font-poppins w-full">
              ThemeWorx is a collection of VS Code themes built for developers
              who care about focus as much as aesthetics. Every color choice is
              intentional designed to reduce eye strain, improve readability,
              and keep distractions out of your workflow.
            </p>
          </div>

          <img
            src={HeroImage}
            alt=""
            className="w-full h-full object-cover md:object-cover right-0"
          />
        </div>

        {/* Header */}
        {/* <div className=" w-full h-auto mb-16 p-5 md:p-10 lg:p-20">
          <h1 className="text-5xl font-bold text-white mb-15 ">The Vision</h1>
          <div className="w-full h-auto  flex flex-col md:flex-row items-center ">
            <img src={VisionImage} alt=""  className=" h-full w-full md:w-[20rem] lg:w-[15rem] rounded-2xl "/>
            <div className="md:p-5 lg:p-10  mt-10 md:mt-0 ">
              <p className="text-gray-400 leading-relaxed text-2xl md:text-lg  ">
                <span className="font-bold">Uhh… not <span className="italic">this</span> Vision.</span><br/><br/>
                Anyway, ThemeWorx was born from a simple frustration: why do most VS Code themes force you to choose between looking good and working well?
                <br/>
                After years of switching between themes - too bright, too dull, too distracting, I decided to build something different. A theme that respects your eyes, your code, and your time.   
                ThemeWorx is the result of that vision: a theme that delivers both beauty and function without compromise. 
              </p>
            </div>
          </div>
        </div> */}

        <div className="my-20 w-full auto p-5 md:px-10 lg:px-20 font-poppins  ">
          <h1 className="text-5xl font-bold text-white mb-10 ">
            The Vision<span className="text-red-600 pl-2">.</span>
          </h1>
          <div className="w-full h-auto flex flex-col md:flex-row items-center  ">
            <div className="h-full w-full md:w-[40%] lg:w-[20%]   ">
              <img
                src={VisionImage}
                alt=""
                className=" h-full w-full rounded-2xl "
              />
            </div>

            <div className=" md:w-[80%] pl-0 md:pl-5 lg:pl-10  mt-10 md:mt-0   ">
              <p className="text-[#808080] leading-relaxed text-lg md:text-lg  ">
                <span className="font-bold">
                  Uhh… not <span className="italic">this</span> Vision.
                </span>
                <br />
                <br />
                Anyway, ThemeWorx was born from a simple frustration: why do
                most VS Code themes force you to choose between looking good and
                working well?
                <br />
                After years of switching between themes - too bright, too dull,
                too distracting, I decided to build something different. A theme
                that respects your eyes, your code, and your time. ThemeWorx is
                the result of that vision: a theme that delivers both beauty and
                function without compromise.
              </p>
            </div>
          </div>
        </div>

        {/* About Sections */}

        <div className=" mb-20 w-full h-auto p-5 md:px-10 lg:px-20 font-poppins ">
          <h1 className="text-5xl font-bold text-white mb-10 ">
            The Creator<span className="text-red-600 pl-2">.</span>
          </h1>
          <div className="w-full h-auto flex flex-col md:flex-row items-center  ">
            <div className="h-full w-full md:w-[40%] lg:w-[20%]  ">
              <img
                src={Creator}
                alt=""
                className=" h-full w-full rounded-2xl "
              />
            </div>

            <div className=" md:w-[80%] pl-0 md:pl-5 lg:pl-10  mt-10 md:mt-0  ">
              <p className="text-[#808080] leading-relaxed text-lg md:text-lg  ">
                Hi, I’m Prabhat — a perfectly normal human being who absolutely
                did not intend to spend hours arguing with a hex color about
                whether it feels more “menacing” or “emotionally distant.” I
                survive on late-night binges and unfinished side projects. I
                notice UI inconsistencies faster than social cues, have trust
                issues with default themes, and once broke my editor just to see
                if I could make it prettier while doing it. ThemeWorx exists
                because “one more episode” and “one last tweak” are lies we keep
                believing. I've changed my editor themes more often than
                passwords. Fueled by coffee and surrounded by fake CRT monitors
                from 80's control room. If synthwave had a code editor, this
                would be it. ☕✨
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-10 ">
                <a
                  href="https://github.com/prabhat1001"
                  className="text-[#808080] hover:text-white transition-colors"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-12 h-12 md:w-8 md:h-8 mr-2" />
                </a>
                <a
                  href="https://twitter.com/PrabhatSar10"
                  className="text-[#808080] hover:text-white transition-colors"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareXTwitter className="w-12 h-12 md:w-8 md:h-8 mr-2  " />
                </a>
                <a
                  href="https://www.linkedin.com/in/prabhatkumarsaraswat/"
                  className="text-[#808080] hover:text-white transition-colors"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-12 h-12 md:w-8 md:h-8 mr-2 " />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className=" px-5 md:px-20 font-poppins py-8" id="faq">
          <h1 className="text-5xl font-bold my-2 text-white">
            FAQ<span className="text-red-600 pl-2">.</span>
          </h1>
          <p className=" text-lg text-[#808080]">
            Here’s everything people ask more often.
          </p>
          <div className="space-y-3 my-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-2 rounded-xl overflow-hidden transition-colors ${
                  openFaq === index
                    ? "border-amber-500/60 bg-amber-950/20"
                    : "border-[#504f4f] bg-[#131313] opacity-80 hover:opacity-100"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span
                    className={`font-medium pr-4 transition-colors ${
                      openFaq === index ? "text-amber-400" : "text-[#c2c2c2]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index
                        ? "text-amber-400 rotate-180"
                        : "text-gray-600"
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openFaq === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-4 text-amber-100/70 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" px-5 md:px-20 font-poppins my-10 lg:my-20"><Form/></div>

        {/* Bottom Naming */}
                <div className='w-full h-auto flex justify-center items-center overflow-hidden '>
                  <img src={Branding} alt="Branding" className='w-full px-5 mt-[2rem] object-contain' />
                </div>
      </div>
    </div>
  );
}
