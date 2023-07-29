import { Row, Col } from "react-bootstrap";
import { DiHtml5, DiCss3, DiSass, DiJavascript1, DiReact, DiNodejs, DiMongodb, DiBootstrap, DiGit } from "react-icons/di";
import { SiTailwindcss, SiExpress } from "react-icons/si";

function Techstack() {
   return (
      <Row className="hover-area">
         <Col md={12}>
            <h1 className="project-heading text-start">
               Professional <strong className="strong-animation">Skills </strong>
               <hr />
            </h1>
         </Col>

         <div className="container-tech-icons">
            <Col xs={4} md={2} className="tech-icons">
               <DiHtml5 />
               <p>HTML</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <DiCss3 />
               <p>CSS</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <DiSass />
               <p>SCSS</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <DiBootstrap />
               <p>Bootstrap</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <SiTailwindcss />
               <p>Tailwind</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <DiJavascript1 />
               <p>Javascript</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <DiMongodb />
               <p>Mongo DB</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <SiExpress />
               <p>Express JS</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <DiReact />
               <p>React JS</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <DiNodejs />
               <p>Node JS</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <DiGit />
               <p>Git</p>
            </Col>
         </div>
      </Row>
   );
}

export default Techstack;
