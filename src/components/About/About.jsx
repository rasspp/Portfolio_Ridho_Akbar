import { Container } from "react-bootstrap";
import AboutHeader from "./AboutHeader";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";

function About() {
   return (
      <Container fluid className="about-section">
         <Container>
            <AboutHeader />

            <Techstack />

            <Toolstack />

            <Github />
         </Container>
      </Container>
   );
}

export default About;
