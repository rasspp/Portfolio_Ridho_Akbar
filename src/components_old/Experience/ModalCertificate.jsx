/* eslint-disable react/prop-types */
import { Button, Modal } from "react-bootstrap";
import { BsAwardFill } from "react-icons/bs";
import { useState } from "react";

export function ModalCertificate({ image }) {
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
               <img src={image} alt="Image Responsive Web Design Certificate" width={"100%"} />
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
