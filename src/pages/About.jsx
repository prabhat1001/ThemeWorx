import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaChevronDown, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import HeroImage from "../assets/ThemeBG.png";
import VisionImage from "../assets/vision.jpg"

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState(null);

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

  const faqs = [
    {
      question: "What is ThemeWorx?",
      answer:
        "ThemeWorx is a carefully crafted VS Code theme designed to provide the perfect balance between aesthetics and functionality. It's built to reduce eye strain during long coding sessions while making your code look beautiful.",
    },
    {
      question: "Is ThemeWorx really free?",
      answer:
        "Yes! ThemeWorx is completely free and open-source. There are no hidden costs, premium versions, or subscriptions. We believe great development tools should be accessible to everyone.",
    },
    {
      question: "How do I install ThemeWorx?",
      answer:
        "You can install ThemeWorx directly from the VS Code marketplace. Just search for 'ThemeWorx' in the Extensions panel, click install, and then select it from your color theme preferences. Alternatively, you can download it from our GitHub repository.",
    },
    {
      question: "Does ThemeWorx support all programming languages?",
      answer:
        "Absolutely! ThemeWorx provides syntax highlighting for over 200+ programming languages and file types. Whether you're writing JavaScript, Python, Go, Rust, or any other language, ThemeWorx has you covered.",
    },
    {
      question: "Can I customize ThemeWorx colors?",
      answer:
        "While ThemeWorx is designed to work beautifully out of the box, you can always customize specific colors through VS Code's settings.json file. We've also included multiple variants (dark, darker, darkest) to suit different preferences.",
    },
    {
      question: "Does ThemeWorx work with other VS Code extensions?",
      answer:
        "Yes! ThemeWorx is fully compatible with all VS Code extensions. We've tested it extensively with popular extensions like GitLens, Prettier, ESLint, and many others to ensure a seamless experience.",
    },
    {
      question: "How often is ThemeWorx updated?",
      answer:
        "We actively maintain ThemeWorx and release updates regularly. This includes improvements based on user feedback, support for new VS Code features, and refinements to color tokens for better readability.",
    },
    {
      question: "Can I contribute to ThemeWorx?",
      answer:
        "We welcome contributions! ThemeWorx is open-source on GitHub. Whether you want to report bugs, suggest improvements, or contribute code, we'd love to have you as part of the community.",
    },
    {
      question: "What makes ThemeWorx different from other themes?",
      answer:
        "ThemeWorx was built with three core principles: readability first, zero eye strain, and consistent token coloring. Unlike many themes that prioritize looks over function, ThemeWorx delivers both without compromise.",
    },
    {
      question: "Will ThemeWorx slow down my VS Code?",
      answer:
        "Not at all! ThemeWorx is optimized for performance. It's a lightweight theme that loads instantly and has zero impact on your editor's performance, even in large projects.",
    },
  ];

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
            <p className=" text-2xl md:text-lg font-poppins w-full">
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
        <div className=" w-full h-auto mb-16 p-5 md:p-10 lg:p-20">
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
        </div>

        {/* About Sections */}
        <div className="space-y-12 mb-20">

          <div className=" w-full h-auto mb-16 p-5 md:p-10 lg:p-20">
          <h1 className="text-5xl font-bold text-white mb-15 ">The Creator</h1>
          <div className="w-full h-auto  flex flex-col md:flex-row items-center ">

            <div className=" md:pr-5 lg:pr-10  mt-10 md:mt-0 ">
              <p className="text-gray-400 leading-relaxed text-2xl md:text-lg  ">
                  Hi, I’m Prabhat — a perfectly normal human being who
                  absolutely did not intend to spend hours arguing with a hex
                  color about whether it feels more “menacing” or “emotionally
                  distant.” I survive on late-night fandom binges, unfinished
                  side projects, and the dangerous belief that this next tweak
                  will fix everything. I notice UI inconsistencies faster than
                  social cues, have trust issues with default themes, and once
                  broke my editor just to see if I could make it prettier while
                  doing it. ThemeWorx exists because I refuse to code in boring environments and apparently also refuse to rest. You’re
                  witnessing the result of that lifestyle choice.
              </p>
              <div className="mt-5 text-gray-400 leading-relaxed text-2xl md:text-lg ">
                  <ul>
                    Fun facts about the creator:
                    <li>
                      - Believes dark themes boost productivity (science
                      pending).
                    </li>
                    <li>
                      - Has rewatched movies “for inspiration” and taken zero
                      notes.
                    </li>
                    <li>- Changes editor themes more often than passwords.</li>
                    <li>
                      - Thinks "Just One more episode, wouldn't hurt much!"
                    </li>
                  </ul>
              </div>
              {/* Social Links */}
                <div className="flex items-center gap-3 mt-10">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-8 h-8 mr-2 " />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="w-8 h-8 mr-2  " />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-8 h-8 mr-2 " />
                  </a>
                </div>
            </div>

            <img src={VisionImage} alt=""  className=" h-full w-full md:w-[20rem] lg:w-[15rem] rounded-2xl "/>
          </div>
        </div>
          
        </div>

        {/* FAQ Section */}
        <div className="mb-16" id="faq">
          <h2 className="text-3xl font-bold mb-8 text-white">FAQ</h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#393939] bg-[#141414] rounded-lg overflow-hidden hover:border-[#4a4a4a] transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-white pr-4">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`w-4 h-4 flex-shrink-0 text-gray-500 transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
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
                  <div className="px-6 pb-4 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="border border-[#393939] bg-[#141414] rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-3 text-white">
            Ready to Try ThemeWorx?
          </h2>
          <p className="text-gray-400 mb-6">
            Download and install it free from the VS Code marketplace.
          </p>
          <button className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors">
            Get ThemeWorx
          </button>
        </div>
      </div>
    </div>
  );
}
