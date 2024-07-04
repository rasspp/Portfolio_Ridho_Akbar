import React, { useState } from "react";
import { FaEnvelope,  FaLinkedin, FaCode, FaWhatsapp } from 'react-icons/fa';
import { RiScissorsCutLine, RiStackLine } from "react-icons/ri";
import { MdOutlineDesignServices, MdOutlineTimeline, MdOutlineCleaningServices, MdGTranslate } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { SiTailwindcss } from 'react-icons/si';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BsEmojiKiss } from "react-icons/bs";

interface Description {
  key: string;
  value: string;
  icon?: JSX.Element;
}

interface Section {
  title: string;
  description: Description[];
}

const sections: Section[] = [
  {
    title: 'Opening',
    description: [
      { key: 'first', value: "Hello, I'm Ridho Akbar, a Full-Stack JavaScript developer, but I'm an expert in Frontend Development." },
    ],
  },
  {
    title: 'Experience',
    description: [
      { key: 'first', value: "I have 2 years of experience as a freelance web developer. Besides working on web projects, I love exploring new things in tech." },
    ],
  },
  {
    title: 'Collaborate',
    description: [
      { key: 'first', value: "I'm very open to working part-time, full-time, onsite, remote, or on a time contract." },
    ],
  },
  {
    title: 'Freelance',
    description: [
      { key: 'first', value: 'I have worked on various freelance projects, ranging from frontend development using React.js, Node.js, and UI/UX design, to projects involving backend development and enhancing website security.' },
    ],
  },
  {
    title: 'Contact Me',
    description: [
      { key: 'email', value: 'ridho8977@gmail.com', icon: <FaEnvelope /> },
      { key: 'phone', value: '+62 878 6020 6587', icon: <FaWhatsapp /> },
      { key: 'linkedin', value: 'linkedin.com/in/ridhoakbartherass', icon: <FaLinkedin /> },
    ],
  },
  {
    title: 'Closing',
    description: [
      { key: 'first', value: 'Thank you, Muach!...', icon: <BsEmojiKiss /> },
    ],
  },
];

const About: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>('Opening');

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section id="about" className="flex flex-col justify-center items-center p-4 w-full h-full text-gray-800 rounded-md shadow-lg backdrop-blur-sm md:p-8 sm bg-blue-300/10">
      <div className="grid overflow-y-auto grid-cols-1 gap-8 max-w-4xl h-full sm:grid-cols-2">
        {/* Card */}
        <div className="flex flex-col rounded-md md:overflow-y-auto card">
          <div className="p-6 w-full text-white bg-gray-800 rounded-md shadow-lg">
            <div className="mb-4">
              <h3 className="flex justify-between items-center text-2xl font-semibold">
                <span>Who me?</span>
                <span></span>
              </h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {/* Start Accordion */}
              {sections.map((section, index) => (
                <div key={index} className="w-full">
                  <h6 className="flex justify-between items-center pb-1 mb-2 text-lg font-semibold border-b-2 cursor-pointer hover:underline" onClick={() => toggleSection(section.title)}>
                    {section.title}
                    {activeSection === section.title ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </h6>
                  <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${activeSection === section.title ? 'max-h-screen' : 'max-h-0'} w-full grid grid-cols-1 text-sm mt-2 border-l-4 border-teal-300 pl-4 pt-2 leading-5 bg-white bg-opacity-20 rounded-md`}>
                    {section.description.map((desc, descIndex) => (
                      <p key={descIndex} className="flex items-center pb-2">
                        {desc.icon && <span className="mr-2">{desc.icon}</span>}
                        {desc.value}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Development Skills Section */}
        <div className="p-0">
          <h2 className="pb-3 mb-5 text-2xl font-semibold text-white border-b-2">Development Skills</h2>
          <div className="grid grid-cols-2 gap-4 *:bg-white/90 *:p-3 *:pr-0 *:rounded-md hover:*:neumorphism text-gray-800 *:flex *:items-center hover:*:pl-4 *:gap-3 *:">
            <div>
              <RiStackLine className="text-3xl" />
              <span>Dev MERN Stack</span>
            </div>
            <div>
              <CiMobile3 className="text-3xl" />
              <span>Mobile Friendly</span>
            </div>
            <div>
              <RiScissorsCutLine className="text-3xl" />
              <span>Slicing UI</span>
            </div>
            <div>
              <SiTailwindcss className="text-3xl" />
              <span className="leading-5"> Tailwind <br /> Framework</span>
            </div>
            <div>
              <MdGTranslate className="text-3xl" />
              <span className="leading-5">Translate Design <br /> to Code</span>
            </div>
            <div>
              <MdOutlineDesignServices className="text-3xl" />
              <span>Understand UI/UX</span>
            </div>
            <div>
              <FaCode className="text-3xl" />
              <span>Reusable Code</span>
            </div>
            <div>
              <MdOutlineCleaningServices className="text-3xl" />
              <span>Clean Code</span>
            </div>
            <div>
              <BsFire className="text-3xl" />
              <span>RESTful API</span>
            </div>
            <div>
              <MdOutlineTimeline className="text-3xl" />
              <span>State Management</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
