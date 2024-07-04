import React, { useRef, useEffect } from 'react';
import { CgCloseR } from "react-icons/cg";


interface ModalImagesProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; title: string }[];
}

const ModalImages: React.FC<ModalImagesProps> = ({ isOpen, onClose, images }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className='absolute -top-96 -bottom-96 -right-96 -left-96 bg-black/80 z-0 '> </div>
      <div ref={modalRef} className="bg-gray-800 overflow-y-auto  border border-blue-300 z-10 rounded-lg shadow-lg min-h-fit w-fit max-w-4xl max-h-[90%] relative pb-12">
        <button
          className="absolute -bottom-0 left-2 md:left-auto md:right-2 flex items-center justify-between w-24 bg-gray-800 border border-blue-300 hover:border-blue-400 gap-2 rounded-md text-base m-2 p-2 text-blue-300 hover:text-blue-400 focus:outline-none"
          onClick={onClose}
        >
          <CgCloseR className="text-3xl"/> 
          
          Close
        </button>
        <div className="flex flex-wrap gap-4 p-4">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={image.src}
                alt={image.title}
                className="rounded-t-md object-cover w-96 md:w-[270px] h-52 border border-blue-300"
              />
              <h3 className="w-full rounded-b-md text-base py-1 border-t-2 border-gray-600 text-gray-600 bg-blue-300 drop-shadow[2px_2px_black] font-semibold text-center capitalize">{image.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalImages;
