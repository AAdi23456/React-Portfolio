/**
 * The function returns a row of icons representing various tools and technologies.
 * @returns The `Toolstack` component is being returned, which renders a row of icons representing
 * various tools and technologies.
 */
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify,
  SiCycling74
} from "react-icons/si";
import {VscJson} from "react-icons/vsc";
import {ImNpm} from "react-icons/im";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCycling74 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscJson />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <ImNpm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
    </Row>
  );
}

export default Toolstack;
