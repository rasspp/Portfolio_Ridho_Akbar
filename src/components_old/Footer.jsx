import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const [ig, twt, lnk, gh] = [
   "https://www.instagram.com/ridhotherass",
   "https://twitter.com/rass",
   "https://www.linkedin.com/in/ridhoakbartherass/",
   "https://github.com/rasspp",
];

function Footer() {
   let date = new Date();
   let year = date.getFullYear();
   return (
      <Container fluid className="footer">
         <Row>
            <Col xs={8} className="footer-content">
               <Col md="6" className="credit">
                  <h3>Dev by Ridho Akbar</h3>
               </Col>
               <Col md="6" className="copyright">
                  <h3>Copyright ©{year} </h3>
               </Col>
            </Col>
            <Col xs={4} className="footer-icons">
               <ul>
                  <li>
                     <a href={ig} target="_blank" rel="noopener noreferrer">
                        <AiFillInstagram />
                     </a>
                  </li>
                  <li>
                     <a href={twt} target="_blank" rel="noopener noreferrer">
                        <AiOutlineTwitter />
                     </a>
                  </li>
                  <li>
                     <a href={lnk} target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                     </a>
                  </li>
                  <li>
                     <a href={gh} target="_blank" rel="noopener noreferrer">
                        <AiFillGithub />
                     </a>
                  </li>
               </ul>
            </Col>
         </Row>
      </Container>
   );
}

export default Footer;
