import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavbarContent() {
  window.onload = function () {
    window.scrollTo(0, 0);
  };

  const navbarRef = useRef(null);
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const navbarHeight = navbarRef.current.offsetHeight;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar
        ref={navbarRef}
        fixed="top"
        key="md"
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Offcanvas
              id="basic-navbar-nav"
              aria-labelledby="basic-navbar-nav"
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={() => scrollToSection("home")} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => scrollToSection("pricing")}
                    to="/pricing"
                  >
                    Pricing
                  </Nav.Link>
                  <Nav.Link onClick={() => scrollToSection("location")} to="/">
                    Contact
                  </Nav.Link>
                  <Nav.Link onClick={() => scrollToSection("about")} to="/">
                    About Us
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarContent;
