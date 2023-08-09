/* eslint-disable react/prop-types */
import { Col, Row } from "react-bootstrap";
import { ExpCard } from "./ExpCard";

export const ExpSection = ({ section, h2Start, h2End }) => {
   return (
      <Row className="hover-area">
         <Col md={12} className={`content-experience ${section}`}>
            <div className="project-heading">
               <h1>
                  {h2Start} <strong className="strong-animation"> {section} </strong> {h2End}
               </h1>
               <hr />
            </div>

            {section == "work" ? (
               <div className="experience-cards">
                  <ExpCard type="artatixData" />
                  <ExpCard type="damatizaData" />
               </div>
            ) : (
               <div className="experience-cards">
                  <ExpCard type="formalEducationData" />
                  <ExpCard type="informalEducationData" />
               </div>
            )}
         </Col>
      </Row>
   );
};
