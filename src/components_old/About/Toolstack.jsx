import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiFigma, SiWindows, SiVercel, SiVite } from "react-icons/si";

function Toolstack() {
   const tools = [
      { icon: <SiWindows />, name: "Windows 10" },
      { icon: <SiVisualstudiocode />, name: "VS Code" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <SiFigma />, name: "Figma" },
      { icon: <SiVercel />, name: "Vercel" },
      { icon: <SiVite />, name: "Vite JS" },
   ];

   return (
      <Row className="hover-area">
         <Col md={12}>
            <h1 className="project-heading text-start">
               <strong className="strong-animation">Tools</strong> I use
               <hr />
            </h1>
         </Col>

         <div className="container-tech-icons">
            {tools.map((tool, index) => (
               <Col xs={4} md={2} className="tech-icons tool" key={index}>
                  {tool.icon}
                  <p>{tool.name}</p>
               </Col>
            ))}
         </div>
      </Row>
   );
}

export default Toolstack;
