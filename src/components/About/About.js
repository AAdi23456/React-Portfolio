/**
 * The function renders the About section of a website, including information about the user's
 * professional skillset, tools they use, and a Github component.
 * @returns The `About` component is being returned, which contains the `Techstack`, `Toolstack`, and
 * `Github` components wrapped in a `Container` and a `Particle` component.
 */
import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container id="about" fluid className="about-section">
      <Particle />
      <Container>
        <Row
          style={{ justifyContent: "center", margin: "-50px" }}
          id="skills"
        ></Row>
        <h1 className="project-heading skills-section">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
