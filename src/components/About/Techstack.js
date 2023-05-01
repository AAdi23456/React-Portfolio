/**
 * The function exports a React component that displays a row of icons representing various
 * technologies used in web development.
 * @returns The `Techstack` component is being returned, which renders a `Row` component from
 * `react-bootstrap` containing several `Col` components with icons from various libraries such as
 * `react-icons/di` and `react-icons/si`.
 */
import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgHTML } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiMysql
} from "react-icons/di";
import { FaRedis } from 'react-icons/fa';
import {
  SiRedux,
  SiExpress,
  SiBootstrap,
  SiChakraui,
  faMysql,
} from "react-icons/si";
//import RedisIcon from './RedisIcon';
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiChakraui />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
    </Row>
  );
}

export default Techstack;
