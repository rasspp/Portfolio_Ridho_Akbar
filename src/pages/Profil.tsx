import React from "react";
import TechProfile from "./../components/profil/TechProfile"
import HeroProfile from "./../components/profil/HeroProfile"

import Statistic from "./../components/profil/Statistic";
import ProfilCard from "../components/profil/ProfilCard";

import { Analytics } from "@vercel/analytics/react"


const Profil: React.FC = () => {
  return (
    <section
      id="profil"
      className="flex flex-col justify-center p-4 w-full h-full rounded-md backdrop-blur-sm md:p-8 sm bg-blue-300/10"
    >
      <Analytics/>
      
      <div className="grid overflow-y-auto grid-cols-1 gap-6 rounded-xl lg:grid-cols-2">
        <div className="grid grid-cols-1 h-full">
         <HeroProfile/>

          <TechProfile/>
          
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
