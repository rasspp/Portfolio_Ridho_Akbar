import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineContentCopy } from "react-icons/md";

const ProfilCard: React.FC = () => {
  const whatsappNumber = "087860206587"; 
  const whatsappMessage = "Permisi Mas Ridho";
  const phoneNumber = "087860206587"; // Ganti dengan nomor telepon yang benar
  const [isCopied, setIsCopied] = useState(false);
  const [showMailHint, setShowMailHint] = useState(false);

  const handlePhoneClick = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const handleMailClick = () => {
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
      setShowMailHint(true);
      setTimeout(() => setShowMailHint(false), 3000);
    }
  };

  const email = "ridho8977@gmail.com";
  const subject = "Pemesan";
  const body = "Halo, saya ingin memesan jasa pembuatan website. Bisakah Anda memberikan informasi lebih lanjut mengenai harga dan waktu pengerjaan? Terima kasih.";

  return (
    <div className="grid overflow-hidden overflow-y-auto grid-cols-12 items-center px-3 w-full h-32 bg-transparent rounded-lg border shadow-md backdrop-blur md:overflow-hidden md:grid-cols-7">
      <img
        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
        alt="Profile"
        className="object-cover col-span-3 m-4 w-16 h-16 rounded-full border-2 border-blue-300 md:col-span-2 md:w-24 md:h-24"
      />

      <div className="flex flex-col col-span-6 px-4 py-2 pt-5 md:col-span-3">
        <h2 className="text-lg font-semibold text-white drop-shadow-[2px_2px_1px_black]">Ridho Akbar</h2>
        <p className="text-gray-200 text-sm drop-shadow-[2px_2px_1px_black]">Javascript Developer</p>

        <div className="flex gap-3 items-center">
          <div className="bg-gray-900 border text-white flex items-center gap-3 text-center text-xs font-bold py-1 px-2 rounded mt-2 hover:bg-transparent transition-all hover:drop-shadow-[2px_2px_2px_black]">
            Contact Me
            <HiArrowNarrowRight className="text-xl text-white drop-shadow-[1px_1px_1px_black]" />
          </div>
        </div>
      </div>

      <div className="col-span-3 md:col-span-2 overflow-y-auto pb-5 h-auto md:h-full flex flex-wrap pt-3 md:pt-5 items-center *:flex *:justify-between *:items-center *:gap-3 *:border *:rounded-md *:px-2 *:py-2 md:*:px-4 md:*:py-3 gap-2 *:filter *:drop-shadow-[2px_2px_2px_black] hover:*:border-blue-400">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          className="text-green-400"
          title="Whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp />
        </a>

        <a href="linkedin.com/in/ridhoakbartherass" className="text-blue-400" title="LinkedIn" target="_blank">
          <FaLinkedin />
        </a>
        <a
          href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
          className="text-blue-400"
          title="Email"
          target="_blank"
          onClick={handleMailClick}
        >
          <IoMdMail />
        </a>
        <button onClick={handlePhoneClick} className="text-blue-200" title="Copy Number Phone">
          <MdOutlineContentCopy />
        </button>
      </div>

      {isCopied && (
        <div className="fixed right-4 bottom-4 p-2 text-white bg-gray-800 rounded-md shadow-md">
          Nomor telepon berhasil disalin!
        </div>
      )}

    </div>
  );
};

export default ProfilCard;
