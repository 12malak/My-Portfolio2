import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const experiences = [
{
  role: "WordPress Developer",
  company: "Blue Mark Agency",
  period: "Feb 2025 – Present",
  description:
  "As a dedicated WordPress Developer, I create modern and responsive websites focused on performance and SEO. I work with Elementor, customize themes and plugins, and build user-friendly designs that meet client goals.",

  technologies: ["WordPress", "Elementor", "PHP", "JavaScript", "ACF", "WooCommerce"],
}
,
{
  role: "WordPress Intern",
  company: "Education For Employment – Jordan",
  period: "Jan 2025 – Mar 2025",
  description:
    "Participated in a hands-on WordPress training program focused on building websites for blogs, small businesses, and online stores. Gained foundational experience using Elementor and WooCommerce, and learned the basics of freelancing and client communication.",
  technologies: ["WordPress", "Elementor", "WooCommerce", "HTML", "CSS"]
}


,
  {
    role: "Full Stack Developer",
    company: "KasselSoft",
    period: "Feb 2024 – Oct 2024",
    description:
      "Designed and developed full-stack applications. Built scalable APIs, implemented authentication, and developed educational and e-commerce platforms.",
    technologies: ["Html","css", "Bootstrap" ,"React", "Node.js", "Express", "SQL"],
  },
  {
    role: "Trainee Developer",
    company: "Coding Academy by Orange",
    period: "Feb 2023 – Aug 2023",
    description:
      "Completed an intensive Full Stack Web Development course. Gained experience with Agile, hands-on projects, and collaborative work.",
    technologies: [ "Bootstrap","Tailwind","JavaScript", "React", "Node.js", "MongoDB", "SQL","PostgresSQL"],
  },
];

const MyExperience = () => {
  return (
  <section id="experience" className="my-5">
  <Container>
    <h2 className="text-center mb-5" style={{ fontWeight: 700, fontSize: "45px", color: "#fff" }}>
      My Experience
    </h2>
    <div className="timeline position-relative">
      {experiences.map((exp, index) => (
       <Row className="timeline-item align-items-start" key={index}>
  {/* Left side card */}
  <Col md={5} className={`d-none d-md-block`}>
    {index % 2 !== 0 && (
      <div className="timeline-content ms-auto text-start">
        <h4>{exp.role} – <span>{exp.company}</span></h4>
        <p className="text-muted">{exp.period}</p>
        <p>{exp.description}</p>
        <div className="tech-stack justify-content-start d-flex flex-wrap">
          {exp.technologies.map((tech, i) => (
            <span className="tech-badge" key={i}>{tech}</span>
          ))}
        </div>
      </div>
    )}
  </Col>

  {/* Dot */}
  <Col xs={2} md={2} className="d-flex justify-content-center position-relative">
    <div className="timeline-dot"></div>
  </Col>

  {/* Right side card */}
  <Col md={5} xs={12} className="d-none d-md-block">
    {index % 2 === 0 && (
      <div className="timeline-content me-auto text-start">
        <h4>{exp.role} – <span>{exp.company}</span></h4>
        <p className="text-muted">{exp.period}</p>
        <p>{exp.description}</p>
        <div className="tech-stack d-flex flex-wrap">
          {exp.technologies.map((tech, i) => (
            <span className="tech-badge" key={i}>{tech}</span>
          ))}
        </div>
      </div>
    )}
  </Col>

  {/* Mobile full width */}
  <Col xs={12} className="d-md-none mt-3">
    <div className="timeline-content">
      <h4>{exp.role} – <span>{exp.company}</span></h4>
      <p className="text-muted">{exp.period}</p>
      <p>{exp.description}</p>
      <div className="tech-stack d-flex flex-wrap">
        {exp.technologies.map((tech, i) => (
          <span className="tech-badge" key={i}>{tech}</span>
        ))}
      </div>
    </div>
  </Col>
</Row>

      ))}
    </div>
  </Container>
</section>

  );
};

export default MyExperience;
