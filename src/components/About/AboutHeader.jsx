/* eslint-disable react/no-unescaped-entities */
import { Row, Col, Card } from "react-bootstrap";
import heroAbout from "./../../Assets/hero_image/hero_about.svg";

function AboutHeader() {
   return (
      <Row>
         <Col md={7} className="about-content">
            <h1 className="heading-content-about">
               Who <strong>AM I</strong>
            </h1>
            <Card className="content-about">
               <Card.Body>
                  <div className="about-me mb-0">
                     <p>
                        I am <strong> Ridho Akbar </strong>
                        from <strong> South Sumatra, Indonesian.</strong>
                        <br />I am a student graduating from Vocational High School Utama Bakti Palembang in 2021. I also have experience using Figma for
                        slicing designs to code. And now I am a <strong>Freelancer</strong> Web Development.
                     </p>
                  </div>

                  <div className="quotes">
                     <p>"here are no smart people but stupid people who want to try!" </p>
                  </div>
               </Card.Body>
            </Card>
         </Col>
         <Col md={5} className="about-img">
            <img src={heroAbout} alt="about" className="img-fluid" />
         </Col>
      </Row>
   );
}

export default AboutHeader;
