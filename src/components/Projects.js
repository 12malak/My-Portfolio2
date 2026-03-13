import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj1.png";
import projImg2 from "../assets/img/proj2.png";
import projImg3 from "../assets/img/proj33.png";
import projImg4 from "../assets/img/proj44.png";
import projImg5 from "../assets/img/proj5.png";
import projImg6 from "../assets/img/proj66.png";
import projImg7 from "../assets/img/hadiyyeeh.png";
import projImg8 from "../assets/img/basma.png";
import projImg9 from "../assets/img/kasselsoft.png";
import projImg10 from "../assets/img/blue2.png";
import projImg11 from "../assets/img/alamari.png";
import projImg12 from "../assets/img/Kayan.png";
import projImg13 from "../assets/img/Firas.png";
import projImg14 from "../assets/img/Luxury.png";
import projImg15 from "../assets/img/medanconsulting (2).png";
import projImg16 from "../assets/img/ryadh.png";
import projImg17 from "../assets/img/mahallystore.png";
import projImg18 from "../assets/img/Archipolis.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Alamari Group",
      description: "Real Estate Company Website ",
      imgUrl: projImg11,
      demoLink: "https://alamari-group.com/",
      category: "wordpress"
    },
     {
      title: "Mahally",
      description: "Digital Marketplace for Local Businesses ",
      imgUrl: projImg17,
      demoLink: "https://mahallystore.com/ar/",
      category: "wordpress"
    },
     {
      title: "Medan Consulting Company",
      description: "Medan Consulting Company (MCC) ",
      imgUrl: projImg15,
      demoLink: "https://alamari-group.com/",
      category: "wordpress"
    },
    {
      title: "Blue Mark Agency",
      description: "WordPress agency website + SEO.",
      imgUrl: projImg10,
      demoLink: "https://ba9maonline.com/",
      category: "wordpress"
    },
     {
      title: "AlRiyadh Academy",
      description: " for Training and Development ",
      imgUrl: projImg16,
      demoLink: "httpsryadh.space",
      category: "wordpress"
    },
    {
      title: "Kayan Engineering Consultancy",
      description: "WordPress site with translation.",
      imgUrl: projImg12,
      demoLink: "https://kayanconsultant.com/home-en/",
      category: "wordpress"
    },
    {
  title: "Firas Engineering Consultancy",
  description: " The site showcases their portfolio across villas, towers, industrial, and government projects with a clean design and smooth user experience.",
  imgUrl: projImg13,
  demoLink: "https://firas-eng.com/",
  category: "wordpress"
}
,
 {
      title: "Luxury Yacht Rental Dubai",
      description: "Built a bilingual WordPress site for a Dubai-based luxury yacht rental company with booking features and elegant design."

,
      imgUrl: projImg14,
      demoLink: "https://primeyacht.ae/",
      category: "wordpress"
    },
    {
      title: "Basma",
      description: "Tawjihi platform using React/Node.",
      imgUrl: projImg8,
      githubLink: "https://github.com/12malak/Basma-front",
      demoLink: "https://ba9maonline.com/",
      category: "react-node"
    },
    {
      title: "Kasselsoft",
      description: "React/Node bilingual job site.",
      imgUrl: projImg9,
      githubLink: "https://github.com/12malak/kasselsoft_frontend",
      demoLink: "https://www.kasselsoft.com/",
      category: "react-node"
    },
    {
      title: "Archipolis",
      description: " integrated commercial and showroom complex",
      imgUrl: projImg18,
      demoLink: "https://darkorchid-goat-815420.hostingersite.com/",
      category: "wordpress"
    },
     {
      title: "Hadiyyeh",
      description: "E-commerce with eco products.",
      imgUrl: projImg7,
      githubLink: "https://github.com/12malak/hadiyyeh",
      demoLink: "https://hadiyyeh.com/",
      category: "react-node"
    },
    {
      title: "Friends of wheat allergy sufferers",
      description: "Site for gluten-free alternatives.",
      imgUrl: projImg6,
      githubLink: "https://github.com/12malak/master-malak",
     category: "react-node"
    },
    {
      title: "ArtRealm",
      description: "Art platform using React.",
      imgUrl: projImg1,
      githubLink: "https://github.com/12malak/ArtRealm-1redux",
      category: "react-node"
    },
    {
      title: "Goodbye anemia",
      description: "Medical site for anemia help.",
      imgUrl: projImg5,
      githubLink: "https://github.com/12malak/masterpiece",
      demoLink: "https://12malak.github.io/masterpiece/",
      category: "other"
    },
    {
      title: "Resort Finder",
      description: "Booking site for resorts.",
      imgUrl: projImg2,
      githubLink: "https://github.com/12malak/Resort-",
     category: "react-node"
    },
    {
      title: "PixelPro",
      description: "Front-end quiz platform.",
      imgUrl: projImg4,
      githubLink: "https://github.com/12malak/project",
      demoLink: "https://bashar-alamoush.github.io/Organization/",
      category: "other"
    },
    {
      title: "Give Life",
      description: "Animal charity website.",
      imgUrl: projImg3,
      githubLink: "https://github.com/12malak/charity",
     category: "react-node"
    }
  ];

  const filterProjects = (category) => {
    if (category === "all") return projects;
    return projects.filter((project) => project.category === category);
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My Projects</h2>
                
                  <Tab.Container id="projects-tabs" defaultActiveKey="all">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                   <Nav.Item>
  <Nav.Link eventKey="all" className="custom-tab">All</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="wordpress" className="custom-tab">WordPress</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="react-node" className="custom-tab">Web Development</Nav.Link>
</Nav.Item>

                    </Nav>
                    <Tab.Content>
                      {["all", "wordpress", "react-node"].map((key) => (
                        <Tab.Pane eventKey={key} key={key}>
                          <Row>
                            {filterProjects(key).map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
