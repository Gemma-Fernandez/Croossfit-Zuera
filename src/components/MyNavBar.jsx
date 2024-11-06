import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/CrossFit-Zuera-ic-207x300.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function MyNavBar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded); //alternar el estado del menu
  const handleClick = () => setExpanded(false); //cerrar el menu cuando se hace click

  return (
    <Navbar expand="lg" className="custom-navbar" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <img src={logo} alt="logo" style={{ width: "70px" }} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <Nav.Link id="enlacesNav" as={Link} to="/box" onClick={handleClick}> El Box </Nav.Link>
                <Nav.Link id="enlacesNav" as={Link} to="/clases" onClick={handleClick}> Clases </Nav.Link>
                <Nav.Link id="enlacesNav" as={Link} to="/tarifas" onClick={handleClick}> Tarifas </Nav.Link>
                <Nav.Link id="enlacesNav" as={Link} to="/horarios" onClick={handleClick}> Horarios </Nav.Link>
                <Nav.Link id="enlacesNav" as={Link} to="/coach" onClick={handleClick}> Coaches </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
