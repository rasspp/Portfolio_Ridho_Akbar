import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { FaProjectDiagram } from 'react-icons/fa';
import { BsFillPersonLinesFill } from "react-icons/bs";
import { TbFolderDollar } from "react-icons/tb";


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`fixed md:absolute w-20 md:w-auto bottom-0 md:-top-10 md-bottom-auto right-0 z-50 overflow-hidden border-2 md:border-none rounded-md  ${isOpen ? 'h-auto' : 'h-16'} flex flex-col md:flex-row items-center justify-center gap-5 p-2 bg-white/20 md:bg-transparent backdrop-blur-lg rounded-b-md md:rounded-none transition-all duration-500 `}>
            <div className={`flex flex-col md:flex-row items-center gap-2 mt-4 md:mt-0 transition-transform duration-500 *:border-2 *:p-3  *:rounded-md hover:*:border-white *:border-transparent  ${isOpen ? 'translate-y-0 *:border-white' : 'absolute md:static -top-72 md:top-0 md:translate-y-0 '} drop-shadow-[2px_2px_2px_black]`}>
                <NavLink
                    to="/profil"
                    className={({ isActive }) => ` m-btn  ${isActive ? 'z-50 text-blue-300' : 'text-gray-800 bg-blue-300 z-0 backdrop-blur'} transition-all duration-300`}
                    title="Profil"
                >
                    <BsPersonCircle className="w-8 h-8"/>
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => ` m-btn ${isActive ? ' text-blue-300 z-50' : 'text-gray-800 bg-blue-300 z-0 backdrop-blur'} transition-all duration-300`}
                    title="About"
                >
                    <BsFillPersonLinesFill className="w-8 h-8"/>
                </NavLink>
                <NavLink
                    to="/portfolio"
                    className={({ isActive }) => ` m-btn ${isActive ? ' z-50 text-blue-300' : 'text-gray-800 bg-blue-300 z-0 backdrop-blur'} transition-all duration-300`}
                    title="Portfolio"
                >
                    <FaProjectDiagram  className="w-8 h-8"/>
                </NavLink>
                <NavLink
                    to="/freelance"
                    className={({ isActive }) => ` m-btn ${isActive ? ' z-50 text-blue-300' : 'text-gray-800 bg-blue-300 z-0 backdrop-blur'} transition-all duration-300`}
                    title="Freelance"
                >
                    <TbFolderDollar className="w-8 h-8"/>
                </NavLink>
            </div>

            <button className="w-10 h-10 hamburger md:hidden flex flex-col justify-center items-center gap-1 *:w-7 *:h-[2px] *:bg-black *:transition-all drop-shadow-[2px_2px_2px_black]" onClick={toggleNavbar}>
                <div className={`${isOpen ? 'rotate-45' : ''}`}></div>
                <div className={`${isOpen ? '':''}`}></div>
                <div className={`${isOpen ? 'rotate-45' : ''}`}></div>
            </button>
        </nav>
    );
};

export default Navbar;


