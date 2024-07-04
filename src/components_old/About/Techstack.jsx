import { Row, Col } from "react-bootstrap";
import { DiHtml5, DiCss3, DiSass, DiJavascript1, DiReact, DiNodejs, DiMongodb, DiBootstrap, DiGit } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMysql } from "react-icons/si";

function Techstack() {
   const techIcons = [
      { icon: <DiHtml5 />, name: "HTML" },
      { icon: <DiCss3 />, name: "CSS" },
      { icon: <DiSass />, name: "SCSS" },
      { icon: <DiBootstrap />, name: "Bootstrap" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <DiJavascript1 />, name: "Javascript" },
      { icon: <DiMongodb />, name: "Mongo DB" },
      { icon: <SiExpress />, name: "Express JS" },
      { icon: <DiReact />, name: "React JS" },
      { icon: <DiNodejs />, name: "Node JS" },
      { icon: <FaPhp />, name: "PHP" },
      { icon: <SiMysql />, name: "Mysql" },
      { icon: <DiGit />, name: "Git" },
   ];

   return (
      <Row className="hover-area">
         <Col md={12}>
            <h1 className="project-heading text-start">
               Professional <strong className="strong-animation">Skills </strong>
               <hr />
            </h1>
         </Col>

         <div className="container-tech-icons">
            {techIcons.map((tech, index) => (
               <Col xs={4} md={2} className="tech-icons" key={index}>
                  {tech.icon}
                  <p>{tech.name}</p>
               </Col>
            ))}
         </div>
      </Row>
   );
}

export default Techstack;
