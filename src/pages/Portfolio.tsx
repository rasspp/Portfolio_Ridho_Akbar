import React, { useState, useEffect } from "react";
import { PiImages } from "react-icons/pi";
import ModalImages from './../components/ModalImages';
import portfolioData from './../data/portfolio.json';
import { AiOutlineEye } from "react-icons/ai";
import { IoIosEyeOff } from "react-icons/io";
import StackIcons from './../components/StackIcons';
import { BsStack } from "react-icons/bs";

interface Image {
  src: string;
  title: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  images: Image[];
  description: string;
  link: string;
  stack: string[];
}

const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<Image[]>([]);
  const [showStackIcons, setShowStackIcons] = useState<boolean>(false);

  useEffect(() => {
    setProjects(portfolioData);
  }, []);

  const openModal = (images: Image[]) => {
    setModalImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleStackIcons = () => {
    setShowStackIcons(!showStackIcons);
  };

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="flex flex-col p-4 space-y-4 w-full h-full rounded-md backdrop-blur-sm md:p-8 sm bg-blue-300/10">
      <div className="grid overflow-y-auto grid-cols-2 gap-2">
        <header className="grid grid-cols-1 col-span-2 gap-2 items-center py-2 pt-3 mb-3 md:grid-cols-2">
          <div className="flex justify-center items-center p-1 bg-gray-800 rounded-md border h-fit text-white/90">
            <h2 className="p-1 ml-1 font-semibold">Portfolio</h2>
          </div>

          {/* Dropdown Category */}
          <div className="grid grid-cols-1 col-span-2 gap-3 md:col-span-1">
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-2 font-semibold text-gray-800 rounded-md border border-gray-300 cursor-pointer bg-white/90 focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
            >
              <option value="all">All Categories</option>
              <option value="client">Client</option>
              <option value="case">Case</option>
            </select>
          </div>
        </header>

        <div className="col-span-2 w-full h-1 bg-white rounded-md"></div>

        <div className="grid overflow-y-auto grid-cols-1 col-span-2 gap-3 pt-1 pb-2 w-full h-full rounded-xl md:grid-cols-3">
          {filteredProjects.map(project => (
            <div key={project.id} className="gap-2 justify-between p-4 pb-4 h-auto rounded-md bg-white/90 hover:pt-5 hover:pb-3 hover:pl-5 hover:pr-3 hover:neumorphism">
              <img src={project.images[0].src} alt={project.title} className="object-cover mb-4 w-full h-40 rounded-md border border-gray-800" loading="lazy" />
              <div className="grid grid-cols-1 justify-between mb-2">
                <h2 className="pb-2 text-xl font-semibold leading-5 text-gray-800 border-b-2 border-gray-800">
                  {project.title}
                </h2>

                <div className="flex justify-between items-center mt-2">

                  {/* Category */}
                  <div className="px-2 ml-2 text-base bg-blue-300 rounded-md border border-gray-800 neumorphism-x">
                    {project.category}
                  </div>

                  <div className="flex items-center *:flex *:items-center *:justify-center  *:rounded-md *:px-1 *:w-10 *:h-8 *:border *:border-gray-800 gap-1 hover:*:neumorphism-mini">

                    {/* Stack Icons */}
                    <button
                      className="text-xl"
                      onClick={toggleStackIcons}
                    >
                      <BsStack />
                    </button>

                    {/* See Project */}
                    {project.link ? (
                      <a href={project.link} className="text-2xl" title={`See ${project.title}`} target="_blank" rel="noopener noreferrer">
                        <AiOutlineEye />
                      </a>
                    ) : (
                      <div className="text-2xl">
                        <IoIosEyeOff />
                      </div>
                    )}

                    {/* Modal image show */}
                    <PiImages
                      className="text-sm"
                      onClick={() => openModal(project.images)}
                    />
                  </div>
                </div>
              </div>

              <p className="p-2 text-sm font-normal leading-4 text-gray-800 rounded-md border border-gray-800 bg-white/70">{project.description}</p>

              {/* Stack Icons */}
              {showStackIcons && (
                <div className="flex overflow-hidden flex-wrap col-span-2 gap-2 justify-center items-center pb-1 mt-3 w-full stack h-fit">
                  {project.stack.map((tech, index) => (
                    <div key={index} className="flex justify-center items-center w-10 h-10 text-2xl bg-blue-300 rounded-md neumorphism-x">
                      {StackIcons[tech.toLowerCase()]}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal Component */}
      <ModalImages
        isOpen={isModalOpen}
        onClose={closeModal}
        images={modalImages}
      />
    </section>
  );
};

export default Portfolio;
