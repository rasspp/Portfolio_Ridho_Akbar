import { Container, Row, Col } from "react-bootstrap";
// import myImg from "./../../assets/hero_image/ridhoakbar.png";
import myImg from "./../../assets/hero_image/ridhoakbar.png";
import Tilt from "react-parallax-tilt";

function Home() {
   return (
      <section>
         <Container fluid className="home-section" id="home">
            <Container className="home-content">
               <Row>
                  <Col md={8} className="home-heading ps-4 ps-md-5">
                     <div className="home-typewriter">
                        <h1 className="heading">
                           Welcome to <strong>My Personal Website</strong>
                        </h1>
                     </div>

                     <hr />

                     <h1 className="heading-name">
                        My Name is
                        <strong className="main-name strong-animation"> Ridho Akbar</strong>
                     </h1>

                     <p className="profession">
                        I am is a <strong> Frontend Developer</strong>
                     </p>
                  </Col>

                  <Col md={4} className="hero-home">
                     <Tilt>
                        <img src={myImg} className="img-fluid" alt="My Picture" loading="lazy" />
                     </Tilt>
                  </Col>
               </Row>
            </Container>
         </Container>
      </section>
   );
}

export default Home;
