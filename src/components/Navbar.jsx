import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import rass_logo from "./../assets/navbar/logo7.png";
import rass_logo_hover from "./../assets/navbar/rass_logo_lightgreen.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsBriefcase, BsBook } from "react-icons/bs";

function NavBar() {
   const [expand, updateExpanded] = useState(false);
   const [navColour, updateNavbar] = useState(false);
   const [currentPath, setCurrentPath] = useState(window.location.pathname);
   const [logoHovered, setLogoHovered] = useState(false);

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

   const handleNavLinkClick = (path) => {
      updateExpanded(false);
      setCurrentPath(path);
   };

   const navLink = "d-flex justify-content-center align-items-center gap-1";

   return (
      <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
         <Container>
            <Navbar.Brand href="/home" className="d-flex">
               <div className="logo-container" onMouseEnter={() => setLogoHovered(true)} onMouseLeave={() => setLogoHovered(false)}>
                  <img src={logoHovered ? rass_logo_hover : rass_logo} className="img-fluid logo" alt="brand" />
               </div>
               {/* <p className="navbar-brand">Rass</p> */}
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
                     <Nav.Link className={`${navLink} ${currentPath === "/" ? "active" : ""}`} as={Link} to="/" onClick={() => handleNavLinkClick("/")}>
                        <AiOutlineHome className="mb-1" /> Home
                     </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                     <Nav.Link
                        className={`${navLink} ${currentPath === "/about" ? "active" : ""}`}
                        as={Link}
                        to="/about"
                        onClick={() => handleNavLinkClick("/about")}
                     >
                        <AiOutlineUser className="mb-1" /> About Me
                     </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                     <Nav.Link
                        className={`${navLink} ${currentPath === "/portfolios" ? "active" : ""}`}
                        as={Link}
                        to="/portfolios"
                        onClick={() => handleNavLinkClick("/portfolios")}
                     >
                        <BsBriefcase className="mb-1" /> Portfolios
                     </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                     <Nav.Link
                        className={`${navLink} ${currentPath === "/experience" ? "active" : ""}`}
                        as={Link}
                        to="/experience"
                        onClick={() => handleNavLinkClick("/experience")}
                     >
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
