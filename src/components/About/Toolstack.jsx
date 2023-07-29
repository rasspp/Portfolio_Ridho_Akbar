import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiFigma, SiWindows, SiVercel, SiVite } from "react-icons/si";

function Toolstack() {
   return (
      <Row className="hover-area">
         <Col md={12}>
            <h1 className="project-heading text-start">
               <strong className="strong-animation">Tools</strong> I use
               <hr />
            </h1>
         </Col>

         <div className="container-tech-icons">
            <Col xs={4} md={2} className="tech-icons tool">
               <SiWindows />
               <p>Windows 10</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons tool">
               <SiVisualstudiocode />
               <p>VS Code</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons tool">
               <SiPostman />
               <p>Postman</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons tool">
               <SiFigma />
               <p>Figma</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons tool">
               <SiVercel />
               <p>Vercel</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons tool">
               <SiVite />
               <p>Vite JS</p>
            </Col>
         </div>
      </Row>
   );
}

export default Toolstack;
