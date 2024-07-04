import React from "react";
import {  FaJsSquare, FaReact, FaNode, FaHtml5, FaCss3Alt, FaBootstrap, FaVuejs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiTailwindcss, SiTypescript, SiExpress, SiDaisyui, SiMui } from 'react-icons/si';
import { FaCode, FaLaptopCode } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";

import Statistic from "./../components/profil/Statistic";
import ProfilCard from "./../components/ProfilCard";

const Profil: React.FC = () => {
  return (
    <section
      id="profil"
      className="flex flex-col justify-center p-4 w-full h-full rounded-md backdrop-blur-sm md:p-8 sm bg-blue-300/10"
    >
      <div className="grid overflow-y-auto grid-cols-1 gap-6 rounded-xl lg:grid-cols-2">
        <div className="grid grid-cols-1 h-full">
          {/* Grid col 1 */}
          <div className="flex overflow-hidden relative flex-col items-end p-5 w-full h-72 rounded-r-full rounded-bl-lg neumorphism md:h-8/12 sm:w-full">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-64 h-64 rounded-full border-4 border-l-blue-300 border-r-blue-300 border-y-gray-900 shadow-md p-1 filter drop-shadow-[8px_12px_4px_rgba(0,0,0,0.9)] hover:rotate-12  active:-rotate-12 transition-all cursor-pointer"
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

          <div className="p-3 mt-5 w-full text-center rounded-lg transition-transform transform md:h-32 md:overflow-y-auto sm:w-full neumorphism">
            <div className=" w-full flex flex-wrap gap-y-4 gap-x-2 md:gap-x-5 justify-center text-center *:bg-gray-900 *:p-1 md:*:p-2 items-center *:text-md :bg-gray-900 *:w-2/12 md:*:w-[12%] *:h-12 *:cursor-help  *:neumorphism-x *:rounded-md *:filter *:drop-shadow-[2px_4px_1px_rgba(0,0,0,0.9)] hover:*:drop-shadow-[0px_0px_2px_rgba(0,0,0,0.9)] ">

              <FaJsSquare className="text-yellow-500" title="Javascript" />
              <SiTypescript className="text-blue-500" title="Typescript" />
              <TbBrandNextjs className="text-blue-200" title="Next Js" />
              <SiMongodb className="text-green-500" title="Mongo db" />
              <SiExpress className="text-blue-200" title="Express Js" />
              <FaReact className="text-blue-500" title="React Js" />
              <FaNode className="text-green-500" title="Node Js" />
              <FaVuejs className="text-green-500" title="Vue Js" />
              <SiTailwindcss className="text-blue-500" title="Tailwind Css" />
              <SiMui className="text-blue-500" title="Material UI" />
              <SiDaisyui className="text-blue-500" title="Daisy UI" />
              <SiMysql className="text-blue-500" title="Mysql" />
              <FaBootstrap className="text-blue-500" title="Bootstrap 5" />
              <FaHtml5 className="text-orange-500" title="Html 5" />
              <FaCss3Alt className="text-blue-600" title="Css 3" />
              <FaGitAlt className="text-red-500" title="Git" />
            </div>
          </div>
        </div>

        {/* Grid col 2 */}
        <div className="grid grid-cols-1 gap-6 w-full h-full rounded-lg md:overflow-y-auto md:h-9/12 text-white/90">
          <Statistic/>

          <div className="flex flex-col justify-center items-center mb-5 h-40 text-white rounded-lg">
            <ProfilCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profil;
