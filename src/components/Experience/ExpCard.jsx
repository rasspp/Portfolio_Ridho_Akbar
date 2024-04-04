/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Col, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { ExpCardDatas } from "./ExpCardDatas";
import { useState } from "react";
import { FaBootstrap, FaFigma, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiTailwindcss, SiVite } from "react-icons/si";
import { FaQuestionCircle } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

export function ExpCard({ dataType }) {
   const experienceData = ExpCardDatas[dataType];

   const [showModal, setShowModal] = useState(false);

   const handleClose = () => setShowModal(false);
   const handleShow = () => setShowModal(true);

   const iconMappings = {
      Javascript: <IoLogoJavascript />,
      ReactJs: <FaReact />,
      MongoDb: <SiMongodb />,
      NodeJs: <FaNodeJs />,
      PHP: <FaPhp />,
      ExpressJs: <SiExpress />,
      ViteJs: <SiVite />,
      TailwindCss: <SiTailwindcss />,
      Bootstrap: <FaBootstrap />,
      Mysql: <GrMysql />,
      Figma: <FaFigma />,
      Default: <FaQuestionCircle />,
   };

   function ModalNotAccess() {
      return (
         <Modal show={showModal} onHide={handleClose} className="certificate-modal privacy">
            <Modal.Header closeButton>
               <Modal.Title>Website cannot be accessed!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Sorry, due to an agreement with the client.</Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>
      );
   }

   return (
      <Col xs={12} md={12} xl={5} className="container-card">
         <div className="card">
            {experienceData.achievements ? (
               experienceData.achievements.map((achievements, index) => (
                  <div key={index}>
                     <h2>{experienceData.title}</h2>
                     <div className="date">
                        <p>{experienceData.date}</p>
                        <p className="role">{experienceData.role}</p>
                     </div>
                     <div className="skills-set">
                        {experienceData.techIcons.map((icon, index) => {
                           const renderedIcon = iconMappings[icon] || iconMappings.default;

                           const tooltip = <Tooltip id={`tooltip-${index}`}>{icon}</Tooltip>;

                           return (
                              <OverlayTrigger key={index} placement="top" overlay={tooltip}>
                                 <div>{renderedIcon}</div>
                              </OverlayTrigger>
                           );
                        })}
                     </div>

                     <div className="card-content">
                        <ul>
                           <li>{achievements.first}</li>
                           <li>{achievements.second}</li>
                           <li>{achievements.third}</li>
                           <li>{achievements.fourth}</li>
                           <li>
                              {experienceData.goto === "privacy" ? (
                                 <a href="#" onClick={handleShow}>
                                    Visit the website
                                 </a>
                              ) : (
                                 <a href={experienceData.goto} target="_blank" rel="noreferrer">
                                    Visit the website.
                                 </a>
                              )}

                              <ModalNotAccess />
                           </li>
                        </ul>
                     </div>
                  </div>
               ))
            ) : (
               <div>
                  <h2 className="education">{experienceData.title}</h2>
                  <div className="card-content">
                     <ul type="1">
                        {experienceData.exp.map((item, index) => (
                           <li key={index}>{item}</li>
                        ))}
                     </ul>
                  </div>
               </div>
            )}
         </div>
      </Col>
   );
}
