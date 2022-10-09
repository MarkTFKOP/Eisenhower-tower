import React from "react";
import { Container, Navbar } from "react-bootstrap";
export default function NavbarComponent() {
  return (
    <Navbar style={{ background: "white" }}>
      <Container>
        <Navbar.Brand href="#home">Eisenhower tower</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
