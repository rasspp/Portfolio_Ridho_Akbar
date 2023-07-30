import { Container, Row, Col } from "react-bootstrap";
import PortfolioCard from "./PortfolioCards";
import damatiza from "./../../assets/portfolio/damatiza.png";

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
                        imgPath={damatiza}
                        demo={false}
                        title="testing"
                        description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                        ghUrl="#"
                        demoUrl="#"
                     />
                  </Col>

                  <Col xl={4} className="project-card">
                     <PortfolioCard
                        imgPath={damatiza}
                        demo={false}
                        title="testing"
                        description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
                        ghUrl="#"
                        demoUrl="#"
                     />
                  </Col>

                  <Col xl={4} className="project-card">
                     <PortfolioCard
                        imgPath={damatiza}
                        demo={false}
                        title="testing"
                        description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
                        ghUrl="#"
                        demoUrl="#"
                     />
                  </Col>
               </Col>
            </Row>
         </Container>
      </Container>
   );
}

export default Portfolios;
