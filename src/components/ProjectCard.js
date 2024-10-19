import { Col } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubLink, demoLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <Button
            className="But"
            style={{ fontSize: "15px", color: "#121212", backgroundColor: "#fff", fontWeight: "700" }}
            href={githubLink}
            target="_blank"
          >
            GitHub
          </Button>
          
          {demoLink && (
            <Button
              className="But"
              style={{ fontSize: "15px", color: "#121212", backgroundColor: "#fff", fontWeight: "700" }}
              href={demoLink}
              target="_blank"
            >
              Demo
            </Button>
          )}
        </div>
      </div>
    </Col>
  );
}
