import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaProjectDiagram, FaRegCalendarAlt } from 'react-icons/fa';
import { FaRegFilePdf } from 'react-icons/fa6';
import { GrGroup } from 'react-icons/gr';
import { AiOutlineEye } from 'react-icons/ai';
import { TbCloudFog } from 'react-icons/tb';
import ReactGA from 'react-ga';

import portfolioData from './../../data/portfolio.json';
import freelanceData from './../../data/freelance.json';

import pdf from '/Ridho_Akbar_CV.pdf';

const Statistic: React.FC = () => {
  const startYear = 2022;
  const startMonth = 3; // Maret
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const experienceYears =
    currentYear - startYear + (currentMonth >= startMonth ? 0 : -1);

  const [showDownloadConfirmation, setShowDownloadConfirmation] =
    useState(false);
  const [visitCount, setVisitCount] = useState<number>(0); // Tipe data visitCount diperbarui menjadi number

  const handleDownloadCV = () => {
    setShowDownloadConfirmation(true);
  };

  const handleCancelDownload = () => {
    setShowDownloadConfirmation(false);
  };

  const handleConfirmDownload = () => {
    setShowDownloadConfirmation(false);
    window.open(pdf, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    // Inisialisasi Google Analytics
    ReactGA.initialize('G-WRM85F9TBL'); // Ganti dengan ID pelacakan Anda
    ReactGA.pageview(window.location.pathname + window.location.search);

    // Ambil data jumlah pengunjung dari Google Analytics
    const fetchData = async () => {
      try {
      const response: {totalsForAllResults: {[key: string]: string}} | undefined = await ReactGA.ga('get', 'G-WRM85F9TBL', 'pageviews', {
          'page': window.location.pathname, 
          'start-date': '7daysAgo',
          'end-date': 'today',
        }) as {totalsForAllResults: {[key: string]: string}} | undefined;
  
        if (response?.totalsForAllResults?.['ga:pageviews']) {
          setVisitCount(parseInt(response.totalsForAllResults['ga:pageviews'], 10));
        } else {
          console.error('Invalid response from Google Analytics:', response);
        }
      } catch (error) {
        console.error('Error fetching data from Google Analytics:', error);
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
        <AiOutlineEye className="mx-auto mb-2 text-3xl" />
        <p className="text-xl font-bold">{visitCount}</p>
        <p className="text-xl font-semibold">Visits</p>
      </div>

      <div className="flex flex-col justify-center items-center h-32 text-center text-gray-800 rounded-lg border bg-white/90 hover:neumorphism hover:pt-1 hover:pl-1">
        <FaRegCalendarAlt className="mx-auto mb-2 text-3xl" />
        <p className="text-xl font-semibold">
          <span className="font-bold">{experienceYears}</span> Years
        </p>
        <p className="text-xl font-semibold">Experience</p>
      </div>

      <div
        className="flex flex-col justify-center items-center h-32 text-center text-gray-800 rounded-lg border cursor-pointer bg-white/90 hover:neumorphism hover:pt-1 hover:pl-1"
        onClick={handleDownloadCV}
      >
        <FaRegFilePdf className="mx-auto mb-2 text-3xl" />
        <p className="flex flex-col text-xl font-semibold">
          Open <span>PDF CV</span>
        </p>
      </div>

      {showDownloadConfirmation && (
        <div className="flex fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50">
          <div className="p-4 text-gray-800 bg-white rounded-lg shadow-lg">
            <p className="mb-2 text-lg font-semibold">Open PDF CV?</p>
            <div className="flex justify-end">
              <button
                onClick={handleCancelDownload}
                className="px-4 py-2 mr-2 font-bold text-blue-400 bg-gray-800 rounded hover:bg-gray-900"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDownload}
                className="px-4 py-2 font-bold bg-blue-400 rounded te xt-gray-800 hover:bg-blue-500"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}

      <a
        href="https://example.com/cv"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex flex-col justify-center items-center h-32 text-center text-gray-800 rounded-lg border bg-white/90 hover:neumorphism hover:pt-1 hover:pl-1">
          <TbCloudFog className="mx-auto mb-2 text-3xl" />
          <p className="flex flex-col text-xl font-semibold">!!!!!</p>
        </div>
      </a>
    </div>
  );
};

export default Statistic;
