import { Container, Row, Col } from "react-bootstrap";
import PortfolioCard from "./PortfolioCards";
// import damatiza from "./../../assets/portfolio/damatiza.png";
import dashboard_zuppasoup from "./../../assets/portfolio/dashboard_zuupasoup.png";
import add_event_zuppasoup from "./../../assets/portfolio/addEvent_zuppasoup.png";
import login_page_zuppasoup from "./../../assets/portfolio/loginPage_zuppasoup.png";
import { BookingApp } from "./PortfolioDatas/BookingApp";
// import { Rasshop } from "./PortfolioDatas/Rasshop";

function Portfolios() {
   return (
      <Container fluid className="project-section">
         <Container>
            <Row className="hover-area">
               <Col md={12} className="content-project project-heading">
                  <h1>
                     The Latest My<strong className="strong-animation"> Portfolio </strong>
                  </h1>
                  <hr />
                  <p>&quot;A diploma is a sign of having attended school, not a sign of having engaged in critical thinking.&quot;</p>
               </Col>

               <Col md={12} className="portfolios">
                  <Col xl={4} className="project-card">
                     <PortfolioCard
                        imgPath1={dashboard_zuppasoup}
                        imgPath2={add_event_zuppasoup}
                        imgPath3={login_page_zuppasoup}
                        demo={false}
                        title="Booking App"
                        description={<BookingApp />}
                        ghUrl="privacy"
                        demoUrl="privacy"
                     />
                  </Col>
               </Col>

               {/* <Col md={12} className="portfolios">
                  <Col xl={4} className="project-card">
                     <PortfolioCard
                        imgPath1={dashboard_zuppasoup} 
                        imgPath2={add_event_zuppasoup}
                        imgPath3={login_page_zuppasoup}
                        demo={false}
                        title="Rassop"
                        description={<Rasshop />}
                        ghUrl="privacy"
                        demoUrl="privacy"
                     />
                  </Col>
               </Col> */}
            </Row>
         </Container>
      </Container>
   );
}

export default Portfolios;
