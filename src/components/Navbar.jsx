import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import logo from "";
// import { CgFileDocument } from "react-icons/cg";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsBriefcase, BsBook } from "react-icons/bs";

function NavBar() {
   const [expand, updateExpanded] = useState(false);
   const [navColour, updateNavbar] = useState(false);

   useEffect(() => {
      function scrollHandler() {
         if (window.scrollY >= 20) {
            updateNavbar(true);
         } else {
            updateNavbar(false);
         }
      }

      window.addEventListener("scroll", scrollHandler);

      return () => {
         window.removeEventListener("scroll", scrollHandler);
      };
   });

   const navLink = "d-flex justify-content-center align-items-center gap-1";

   return (
      <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
         <Container>
            <Navbar.Brand href="/home" className="d-flex">
               {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
               <p className="navbar-brand">Rass</p>
            </Navbar.Brand>
            <Navbar.Toggle
               aria-controls="responsive-navbar-nav"
               onClick={() => {
                  updateExpanded(expand ? false : "expanded");
               }}
            >
               <span></span>
               <span></span>
               <span></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="ms-auto" defaultActiveKey="#home">
                  <Nav.Item>
                     <Nav.Link className={navLink} as={Link} to="/" onClick={() => updateExpanded(false)}>
                        <AiOutlineHome className="mb-1" /> Home
                     </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                     <Nav.Link className={navLink} as={Link} to="/about" onClick={() => updateExpanded(false)}>
                        <AiOutlineUser className="mb-1" /> About Me
                     </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                     <Nav.Link className={navLink} as={Link} to="/portfolios" onClick={() => updateExpanded(false)}>
                        <BsBriefcase className="mb-1" /> Portfolios
                     </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                     <Nav.Link className={navLink} as={Link} to="/experience" onClick={() => updateExpanded(false)}>
                        <BsBook /> Experience
                     </Nav.Link>
                  </Nav.Item>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default NavBar;
