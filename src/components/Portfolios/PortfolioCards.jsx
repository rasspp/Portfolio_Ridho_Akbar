/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function PortfolioCards({ title, imgPath1, imgPath2, imgPath3, description, ghUrl, demo, demoUrl }) {
   const [showModal, setShowModal] = useState(false);
   const [selectedImg, setSelectedImg] = useState(null);

   const handleModalOpen = (imgPath) => {
      setSelectedImg(imgPath);
      setShowModal(true);
   };

   const handleModalClose = () => {
      setSelectedImg(null);
      setShowModal(false);
   };

   const shouldDisplayImages = imgPath1 || imgPath2 || imgPath3;

   const isPrivacyMessage = ghUrl === "privacy" || demoUrl === "privacy";

   const handlePrivacyAlert = () => {
      event.preventDefault();
      alert("The information is kept confidential to protect client privacy.");
   };

   return (
      <Card className="project-card-view">
         <Card.Body className="project-card-body">
            <div className="content">
               <div className="image">
                  <Card.Title className="title ">{title}</Card.Title>
                  <hr />
                  <div className="project-card-content">
                     {shouldDisplayImages && (
                        <div>
                           {imgPath1 && (
                              <div className="image">
                                 <Card.Img variant="top" src={imgPath1} alt="card-img" loading="lazy" onClick={() => handleModalOpen(imgPath1)} />
                              </div>
                           )}
                           {imgPath2 && (
                              <Card.Img
                                 className="image"
                                 variant="top"
                                 src={imgPath2}
                                 alt="card-img"
                                 loading="lazy"
                                 onClick={() => handleModalOpen(imgPath2)}
                              />
                           )}
                           {imgPath3 && (
                              <Card.Img
                                 className="image"
                                 variant="top"
                                 src={imgPath3}
                                 alt="card-img"
                                 loading="lazy"
                                 onClick={() => handleModalOpen(imgPath3)}
                              />
                           )}
                        </div>
                     )}
                  </div>
               </div>
               <div className="description">
                  <Card.Title className="title">Description</Card.Title>
                  <hr />
                  <Card.Text className={`desc`}>{description}</Card.Text>
               </div>
            </div>
            <div className="project-link">
               <a
                  className="github"
                  href={isPrivacyMessage ? "#" : ghUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={isPrivacyMessage ? handlePrivacyAlert : null}
               >
                  <BsGithub />
               </a>
               {"\n"}
               {"\n"}
               {!demo && demoUrl && (
                  <a
                     className="demo"
                     href={isPrivacyMessage ? "#" : demoUrl}
                     target="_blank"
                     rel="noreferrer"
                     onClick={isPrivacyMessage ? handlePrivacyAlert : null}
                  >
                     <CgWebsite />
                  </a>
               )}
            </div>

            {/* Modal */}
            <Modal show={showModal} onHide={handleModalClose} centered>
               <Modal.Body>{selectedImg && <img src={selectedImg} alt="modal-img" className="modal-image" />}</Modal.Body>
            </Modal>
         </Card.Body>
      </Card>
   );
}

export default PortfolioCards;
