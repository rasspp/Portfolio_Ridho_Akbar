import React, { useState, useEffect } from "react";
import { PiImages } from "react-icons/pi";
import ModalImages from "./../components/ModalImages";
import freelanceData from './../data/freelance.json';
import StackIcons from './../components/StackIcons';
import { AiOutlineEye } from "react-icons/ai";
import { IoIosEyeOff } from "react-icons/io";
import { BsStack } from "react-icons/bs";

interface Image {
  src: string;
  title: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  images: Image[];
  description: string;
  link: string;
  stack: string[];
}

const Freelance: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<Image[]>([]);
  const [showStackIcons, setShowStackIcons] = useState<boolean>(false);

  useEffect(() => {
    setProjects(freelanceData);
  }, []);


  const filteredProjects = projects.filter((project) => {
    return (
      (selectedCategory === "all" || project.category === selectedCategory) &&
      (selectedYear === "all" || project.year === selectedYear)
    );
  });

  const openModal = (images: Image[]) => {
    setModalImages(images);
    setIsModalOpen(true);
  };

  const toggleStackIcons = () => {
    setShowStackIcons(!showStackIcons);
  };

  return (
    <section id="freelance" className="flex flex-col p-4 w-full h-full rounded-md backdrop-blur-sm bg-blue-300/10 md:p-8 md:pt-10">
      <div className="grid overflow-hidden grid-cols-1 rounded-md h-fit">
        {/* Container Dropdowns */}
        <div className="grid grid-cols-2 gap-5 w-full md:grid-cols-2">
          <header className="grid grid-cols-1 col-span-2 gap-2 pt-1 md:grid-cols-2">

            <div className="flex justify-center items-center p-1 bg-gray-800 rounded-md border h-fit text-white/90">
              <h2 className="p-1 ml-1 font-semibold">Freelance Experience</h2>
            </div>

            <div className="grid grid-cols-2 gap-2 h-fit">
              {/* Category Dropdown */}
              <div className="grid grid-cols-1 gap-3">
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="p-2 font-semibold text-gray-800 rounded-md border border-gray-300 cursor-pointer bg-white/90 focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                >
                  <option value="all">All Categories </option>
                  <option value="web">Web </option>
                  <option value="software">Software </option>
                  <option value="no code">No Code </option>
                </select>
              </div>
              {/* Year Dropdown */}
              <div className="grid grid-cols-1 gap-3">
                <select
                  id="year"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="p-2 font-semibold text-gray-800 rounded-md border border-gray-300 cursor-pointer bg-white/90 focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                >
                  <option value="all">All Years</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
            </div>
          </header>
        </div>

        {/* Line */}
        <div className="col-span-2 mt-7 mb-3 h-1 bg-white rounded-md"></div>

        {/* Container Card */}
        <div className="max-h-[100%] overflow-y-auto grid grid-cols-1 col-span-2 gap-2 md:grid-cols-2">
          {filteredProjects.map((project) => (
            // Card
            <div
              key={project.id}
              className="p-3 py-4 text-gray-800 rounded-md border border-blue-300 hover:neumorphism hover:pl-4 hover:pt-5 hover:pb-3 bg-white/90"
            >
              <header className="flex flex-col">
                {/* Title Card */}
                <h2 className="flex justify-between pb-1 pl-2 mb-2 text-xl font-semibold border-b-2 border-gray-800" title="Title Project">
                  {project.title}

                  <span title="Development Year">
                    {/* Create Year */}
                    {project.year}
                  </span>
                </h2>

                <div className="flex gap-2 justify-between items-center pr-2 pl-2 text-sm font-semibold text-gray-800 capitalize info">

                  {/* Category */}
                  <div className="flex items-center px-2 h-5 text-gray-800 bg-blue-300 rounded-md neumorphism-x" title="Category">
                    {project.category}
                  </div>

                  <div className="flex gap-1">
                    <button
                      className="flex items-center px-1 text-base rounded-md border border-gray-800 hover:neumorphism-mini"
                      onClick={toggleStackIcons}
                    >
                      <BsStack />
                    </button>

                    {/* See Project */}
                    {project.link ? (
                      <a href={project.link} className="px-1 text-xl text-gray-800 rounded-md border border-gray-800 hover:neumorphism-mini" title={`See ${project.title}`} target="_blank" rel="noopener noreferrer">
                        <AiOutlineEye />
                      </a>
                    ) : (
                      <div className="px-1 text-xl text-gray-800 rounded-md border border-gray-800" title="Not Deployed">
                        <IoIosEyeOff />
                      </div>
                    )}

                    {/* Modal image show */}
                    <PiImages
                      className="w-8 hover:pl-[0.15rem] hover:pt-[0.15rem] text-2xl cursor-pointer border border-gray-800 rounded-md hover:neumorphism-mini"
                      onClick={() => openModal(project.images)}
                      title="show detail images"
                    />
                  </div>

                </div>
              </header>

              <p className="p-2 pt-2 mt-4 text-sm font-normal leading-4 text-gray-800 min-h-12">{project.description}</p>

              {/* Stack Icons */}
              {showStackIcons && (
                <div className="flex overflow-hidden flex-wrap col-span-2 gap-2 justify-center items-center pt-3 pb-1 mt-3 w-full border-t-2 border-gray-800 stack h-fit">
                  {project.stack.map((tech, index) => (
                    <div key={index} className="flex justify-center items-center w-10 h-10 text-2xl bg-blue-300 rounded-md neumorphism-x" title="">
                      {StackIcons[tech.toLowerCase()]}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <ModalImages
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={modalImages}
      />
    </section>
  );
};

export default Freelance;
