import React from "react"
import {  FaJsSquare, FaReact, FaNode, FaHtml5, FaCss3Alt, FaBootstrap, FaVuejs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiTailwindcss, SiTypescript, SiExpress, SiDaisyui, SiMui } from 'react-icons/si';
import { TbBrandNextjs } from "react-icons/tb";

const TechProfile: React.FC =  ()=>{
    return (
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
    )
}

export default TechProfile;