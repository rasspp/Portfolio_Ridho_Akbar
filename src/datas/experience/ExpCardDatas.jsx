/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsArrow90DegLeft, BsAwardFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import imageRWD from "./../../assets/experience/ResponsiveWD.png";

function ModalCertificate() {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   return (
      <>
         <Button className="certificate-button" variant="primary" onClick={handleShow}>
            <BsAwardFill />
         </Button>

         <Modal className="certificate-modal" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Responsive Web Design</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <img src={imageRWD} alt="Image Responsive Web Design Certificate" width={"100%"} />
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

export const ExpCardDatas = {
   artatixData: {
      title: "Artatix",
      date: "June - 2022 / October - 2022",
      achievements: [
         {
            first: "Work with multidisciplinary teams of UI/UX, QA, Backend, and Frontend to develop innovative solutions.",
            second: "Fixed bugs in Frontend to improve user experience.",
            third: "Implementing the filter design from UI/UX and making it responsive, so that users can easily perform searches on the website.",
            fourth: "Creating email notifications containing information about purchased products using HTML and CSS.",
         },
      ],
      goto: "https://artatix.co.id/",
   },

   damatizaData: {
      title: "Damatiza",
      date: "October - 2022 / December - 2022",
      achievements: [
         {
            first: "Working together with the same multidisciplinary team.",
            second: "Slicing design from figma to frontend to 100% similarity.",
            third: "Contribute from start to finish on this project",
            fourth: "Assisted in creating looping cards with a backend (PHP) to display dynamic content on the website.",
         },
      ],
      goto: "https://damatiza.com",
   },

   formalEducationData: {
      title: "Formal Education",
      date: "",
      exp: [
         <div className="formal-edu" key={"sd"}>
            <div>
               <p> SDN 242 Palembang </p>
               <p>( 2009 - 2015 )</p>
            </div>
         </div>,
         <div className="formal-edu" key={"smp"}>
            <div>
               <p>SMPN 52 Palembang</p>
               <p>( 2015 - 2018 )</p>
            </div>
         </div>,
         <div className="formal-edu" key={"smk"}>
            <div>
               <p>SMK Utama Bakti Palembang</p>
               <p>( 2018 - 2021 )</p>
            </div>
         </div>,
      ],
      goto: "https://damatiza.com",
   },

   informalEducationData: {
      title: "Informal Education",
      date: "",
      exp: [
         <li className="informal-edu" key="freeCodeCamp">
            Free Code Camp :
            <ul>
               <li className="not-line">
                  <div>
                     <BsArrow90DegLeft />
                     Responsive Web Design
                  </div>

                  {/* <button className="certificate">
                     <BsAwardFill />
                     <div className="certificate-view">
                        <img src={imageRWD} alt="Image Responsive Web Design Certificate" className="certificate-view" />
                     </div>
                  </button> */}

                  <ModalCertificate />

                  <a href="https://rasspp.github.io/freecodecamp-responsivewebdesign.github.io/" className="demo" target="_blank" rel="noreferrer">
                     <CgWebsite />
                  </a>
               </li>
            </ul>
         </li>,
         <li key="hackerrank">Hackker Rank</li>,
      ],
      goto: "https://damatiza.com",
   },
};
