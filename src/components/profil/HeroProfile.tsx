import React from "react"

import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FaCode, FaLaptopCode } from "react-icons/fa6";
import profilImage from "/Ridho_Akbar_Formal.png"

const TechProfile: React.FC = ()=> {
    return (
        <div className="flex overflow-hidden relative flex-col items-end p-5 w-full h-72 rounded-r-full rounded-bl-lg neumorphism md:h-8/12 sm:w-full">
            <img
              src={profilImage}
              className="w-64 h-64 rounded-full border-4 border-l-blue-300 border-r-blue-300 border-y-gray-900 shadow-md p-1 filter drop-shadow-[8px_12px_4px_rgba(0,0,0,0.9)] hover:rotate-12  active:-rotate-12 transition-all cursor-pointer"
              alt="Profil Ridho Akbar" 
            />

            <div className="w-full -mt-16 md:-mt-20 text-start *:filter *:drop-shadow-[8px_12px_4px_rgba(0,0,0,0.9)]">
              <h2 className="text-2xl font-semibold text-white">
                Ridho Akbar
              </h2>
              <hr className="border-blue-400" />
              <p className="flex flex-nowrap gap-2 items-center text-blue-200">Frontend Developer <FaCode className="text-xl text-blue-200" title="React Js" /> </p>
            </div>

            <div className="*:absolute *:filter *:drop-shadow-[8px_12px_4px_rgba(0,0,0,0.9)] hover:*:drop-shadow-[4px_6px_1px_rgba(0,0,0,0.9)] *:text-4xl">
              <FaReact className=" top-5  left-28 hover:left-[7.2rem] hover:rotate-45 transition-all text-blue-400  " />
              <FaLaptopCode className=" top-12 hover:top-[3.3rem] left-6 hover:left-[1.8rem] text-gray-100  " />
              <SiTailwindcss className=" top-28 hover:top-[7.3rem] left-16 hover:left-[4.3rem] text-blue-300  transition-all" />
              <SiTypescript className=" top-36 hover:top-[9.2rem] text-3xl left-28 hover:left-[7.2rem] text-blue-500 " />
            </div>
          </div>
    )
}

export default TechProfile;