import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaProjectDiagram, FaRegCalendarAlt } from 'react-icons/fa';
import { GrGroup } from 'react-icons/gr';
import { BsDownload } from 'react-icons/bs';
import { LiaFileContractSolid } from 'react-icons/lia';
import { TbCloudFog } from 'react-icons/tb';
import axios from 'axios';

import portfolioData from './../../data/portfolio.json';
import freelanceData from './../../data/freelance.json';

import pdf from './Ridho_Akbar_CV.pdf';

const Statistic: React.FC = () => {
  const startYear = 2022;
  const startMonth = 3; // Maret
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; 
  const experienceYears = currentYear - startYear + (currentMonth >= startMonth ? 0 : -1);

  const [showDownloadConfirmation, setShowDownloadConfirmation] = useState(false);
  const [viewCount, setViewCount] = useState(0);

  const handleDownloadCV = () => {
    setShowDownloadConfirmation(true);
  };

  const handleCancelDownload = () => {
    setShowDownloadConfirmation(false);
  };

  const handleConfirmDownload = () => {
    setShowDownloadConfirmation(false);
    window.location.href = "pdf";
  };

  useEffect(() => {
    const fetchData = async () => {
      const sheetID = 'YOUR_SHEET_ID'; // ganti dengan ID Google Sheet Anda
      const apiKey = 'YOUR_API_KEY'; // ganti dengan API Key Anda
      const range = 'Sheet1!A1'; // ganti dengan range yang sesuai di Google Sheet Anda
      
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${apiKey}`;
      
      try {
        const response = await axios.get(url);
        const newViewCount = parseInt(response.data.values[0][0]);
        setViewCount(newViewCount);

        // Update view count di Google Sheets
        const updateUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?valueInputOption=USER_ENTERED&key=${apiKey}`;
        await axios.put(updateUrl, {
          range: range,
          majorDimension: "ROWS",
          values: [[newViewCount + 1]]
        });
      } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
      }
    };

    fetchData();
  }, []);

  const projectCount = portfolioData.length;
  const clientCount = freelanceData.length;

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
      <Link to="/portfolio" className="">
        <div className="flex flex-col justify-center items-center h-32 text-center text-gray-800 rounded-lg border bg-white/90 hover:neumorphism hover:pt-1 hover:pl-1">
          <FaProjectDiagram className="mx-auto mb-2 text-3xl" />
          <p className="text-xl font-bold">{projectCount}</p>
          <p className="text-xl font-semibold">Projects</p>
        </div>
      </Link>

      <Link to="/freelance" className="">
        <div className="flex flex-col justify-center items-center h-32 text-center text-gray-800 rounded-lg border bg-white/90 hover:neumorphism hover:pt-1 hover:pl-1">
          <GrGroup className="mx-auto mb-2 text-3xl" />
          <p className="text-xl font-bold">{clientCount}</p>
          <p className="text-xl font-semibold">Clients</p>
        </div>
      </Link>

       <div className="flex flex-col justify-center items-center h-32 text-gray-800 rounded-lg border bg-white/90 hover:neumorphism hover:pt-1 hover:pl-1">
        <LiaFileContractSolid className="mx-auto mb-2 text-3xl" />
        <p className="text-xl font-bold">{viewCount}</p>
        <p className="text-xl font-semibold">Views</p>
      </div>

      <div className="flex flex-col justify-center items-center h-32 text-center text-gray-800 rounded-lg border bg-white/90 hover:neumorphism hover:pt-1 hover:pl-1">
        <FaRegCalendarAlt  className="mx-auto mb-2 text-3xl" />
        <p className="text-xl font-semibold">
          <span className="font-bold">{experienceYears}</span> Years
        </p>
        <p className="text-xl font-semibold">Experience</p>
      </div>

      <div
        className="flex flex-col justify-center items-center h-32 text-center text-gray-800 rounded-lg border cursor-pointer bg-white/90 hover:neumorphism hover:pt-1 hover:pl-1"
        onClick={handleDownloadCV}
      >
        <BsDownload className="mx-auto mb-2 text-3xl" />
        <p className="flex flex-col text-xl font-semibold">
          Download <span>CV</span>
        </p>
      </div>

      {showDownloadConfirmation && (
        <div className="flex fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50">
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <p className="mb-2 text-lg font-semibold">Download CV?</p>
            <div className="flex justify-end">
              <button
                onClick={handleCancelDownload}
                className="px-4 py-2 mr-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDownload}
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}

      <a href="https://example.com/cv" target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col justify-center items-center h-32 text-center text-gray-800 rounded-lg border bg-white/90 hover:neumorphism hover:pt-1 hover:pl-1">
          <TbCloudFog className="mx-auto mb-2 text-3xl" />
          <p className="flex flex-col text-xl font-semibold">
            Check <span>Online CV</span>
          </p>
        </div>
      </a>
    </div>
  );
};

export default Statistic;
