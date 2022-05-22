import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.png";
import netflix from "../../Assets/Projects/netflix.gif";
import CRM from "../../Assets/Projects/crmapp.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="NetFlix Clone"
              description="Netflix Clone Users Signup and create password select payment methods and seclect mode than after payment done redirect Lofin page wihich contains Shows and Movies. Tech that is used Node JS , React JS , MongoDB"
              link="https://www.loom.com/share/bb0a5d6349e44338aeab34cc7c03a758"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CRM}
              isBlog={false}
              title="CRM Task Manger"
              description="CRM Task Manfer that Users Raise Complains and one Engineer Alot one complain by Admin and approved engineer by admin , track progress of complain Email notification  Tech I used  - Node JS , MongoDB, "
              link="https://github.com/aryamanish1234/CERM-backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="React-Redux todo App "
              description="Its Simple CRUD operation using React- redux In this user Add task Get all the list and Filter accoring to completed or not completed and Update the task delete also perform  "
              link="https://todo-app-task30.netlify.app/"
            />
          </Col>

    
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
