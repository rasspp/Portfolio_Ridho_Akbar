import { Container, Row, Col } from "react-bootstrap";
import PortfolioCard from "./PortfolioCards";
import damatiza from "./../../assets/portfolio/damatiza.png";
import dashboard_zuppasoup from "./../../assets/portfolio/dashboard_zuupasoup.png";
import add_event_zuppasoup from "./../../assets/portfolio/addEvent_zuppasoup.png";
import login_page_zuppasoup from "./../../assets/portfolio/loginPage_zuppasoup.png";

function Portfolios() {
   function BookingApp() {
      return (
         <div>
            <p>
               This Booking Application is designed to provide an efficient user experience for ease of use. This web app has been actively utilized by my
               client.
            </p>
            <p>
               <b className="text-dark">Technology and Features: </b>
            </p>
            <ul>
               <li className="mb-3">
                  <div className="text-dark">MERN Stack:</div> I utilize the MERN technology stack (MongoDB, Express.js, React.js, Node.js) to ensure fast and
                  robust performance.
               </li>
               <li className="mb-3">
                  <div className="text-dark"> Tailwind CSS: </div>To enable ease of development for other developers, I use Tailwind CSS, which is user-friendly
                  and easily extendable.
               </li>
               <li className="mb-3">
                  <div className="text-dark">Full Calendar Integration:</div> A significant contribution from a third-party tech is Full Calendar. It provides a
                  clean, dynamic, and customizable view.
               </li>
               <li className="mb-3">
                  <div className="text-dark"> Reusable Code:</div> Every section of the code is designed to be reusable, facilitating future development and
                  feature expansion.
               </li>
            </ul>
            <p>The simplicity of the design meets the needs of my client, ensuring a user-friendly experience.</p>

            <p>
               As <span className="text-dark">a developer</span>, after communication and revisions, the web application now allows login and registration. To
               address the client's reluctance to log in and register, I decided to enable event addition on the home page, with event customization available
               only after logging in.
            </p>
         </div>
      );
   }

   function Rasshop() {
      return (
         <div>
            <h4>This is Rasshop</h4>
            <p>
               This Booking Application is built with a focus on a quick user experience, allowing users to effortlessly book events and track their schedules.
               Users feel comfortable and engaged while using this application, and it has already been utilized by my client.
            </p>
         </div>
      );
   }

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
            </Row>
         </Container>
      </Container>
   );
}

export default Portfolios;
