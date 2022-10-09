import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
export default function Homepage() {
  const centerDiv = {
    display: "block",
    "margin-left": "auto",
    "margin-right": "auto",
  };
  return (
    <div>
      <div className="Homepage-parent">
        <section className="Homepage-Head"></section>
        <section className="Homepage-Body" style={centerDiv}>
          <Navbar />
          <Container>
            <Row>
              <Cards name={"Do it now"} styleBodyColor={"#D26c8c"} />
            </Row>
            <Row>
              <Cards name={"Decide when to do"} styleBodyColor={"#5dd4f1"} />
            </Row>
            <Row>
              <Cards name={"Deligate it"} styleBodyColor={"#6cb4d2"} />
            </Row>
            <Row>
              <Cards name={"Dump it"} styleBodyColor={"#Cbced0"} />
            </Row>
          </Container>
        </section>
        <section className="Homepage-Footer">
          <Footer />
        </section>
      </div>
    </div>
  );
}
