/* This is a React component called `Contact` that renders a section of a webpage with a title and an
image. It imports necessary components from the React Bootstrap library and an image file. The
`return` statement contains JSX code that defines the layout and content of the section. The
`Contact` component is exported to be used in other parts of the application. */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutCard from "./About/AboutCard";
import laptopImg from "../Assets/about.png";

const Contact = () => {
  return (
    <Container className="contact-section" id="contact">
      <Row style={{ justifyContent: "center" }}>
        <Col
          md={7}
          style={{
            justifyContent: "center",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
        >
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Connect with <strong className="purple">ME</strong>
          </h1>
          <AboutCard />
        </Col>
        <Col
          md={5}
          style={{ paddingTop: "120px", paddingBottom: "50px" }}
          className="about-img"
        >
          <img src={laptopImg} alt="about" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
