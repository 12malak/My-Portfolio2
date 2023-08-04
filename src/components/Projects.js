import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj1.png";
import projImg2 from "../assets/img/proj2.png";
import projImg3 from "../assets/img/proj33.png";
import projImg4 from "../assets/img/proj44.png";
import projImg5 from "../assets/img/proj5.png";
import projImg6 from "../assets/img/proj66.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [

    {
      title: "Friends of wheat allergy sufferers",
      description: "I designed my website specifically for wheat allergy patients to help them search for healthy and diverse alternatives to meet their nutritional needs",
      imgUrl: projImg6,
     
      githubLink: "https://github.com/12malak/master-malak"
    },
    {
      title: "ArtRealm",
      description: "is a digital platform for artists and art enthusiasts to explore, showcase, and connect with the world of art.",
      imgUrl: projImg1,
      githubLink: "https://github.com/12malak/ArtRealm-1redux"
    },
    
    {
      title: "Goodbye anemia",
      description: "We have dedicated an entire site for you to treat anemia by displaying various medical prescriptions and the most important vegetables and fruits that help treat anemia",
      imgUrl: projImg5,
      githubLink: " https://github.com/12malak/masterpiece"
     
    },

    {
      title: "Resort Finder",
      description: "ResortFinder is a comprehensive platform that facilitates resort reservations for users seeking a relaxing getaway.",
      imgUrl: projImg2,
      githubLink: "https://github.com/12malak/Resort-"
    },
    
    {
      title: "PixelPro",
      description: "This repository is dedicated to the Front-End Quiz, a resource designed to test and improve your knowledge of HTML, CSS, and JavaScript - the core technologies of front-end web development.",
      imgUrl:projImg4,
      githubLink: "https://github.com/12malak/project#this-repository-is-dedicated-to-the-front-end-quiz-a-resource-designed-to-test-and-improve-your-knowledge-of-html-css-and-javascript---the-core-technologies-of-front-end-web-development"
    },
    {
      title: "Give Life",
      description: "is an inspiring team project dedicated to developing a comprehensive and engaging animal charity website.",
      imgUrl: projImg3,
     
      githubLink: " https://github.com/12malak/charity"
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                {/* <h2>Projects</h2> */}
                {/* <p>
                My portfolio features a variety of real-world projects that demonstrate my skills and experience in web development. Each project is unique and showcases my ability to solve complex problems, work with different technologies, and manage projects effectively.
                </p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">

                {/*/////////////////////////// pills */}

                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">My Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" id="Education">My Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">My Experience</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <div  className="text-center">
<h2>Bachelor’s Software Engineering
 
                     </h2> 
                     <span>Zarqa University - information technology 
collage</span>
<p>
Gain a solid understanding of the principles, methods, and tools used to design, develop, test, and maintain software systems. Learn a range of topics, including object-oriented programming (OOP), data structures, algorithms, database design, and software engineering.
</p>
</div>

<div  className="text-center">
<h2> Php + SQL Developer
 
                     </h2> 
                     <span>course in beprogrammer
</span>
<p>
Completed an intensive internship focused on PHP application development, gaining practical experience in both front-end and back-end development using HTML, CSS, MySQL, and PHP.
</p>
</div>
                    <div className="text-center">
                    <h2>Full Stack Web Developer
                     </h2> 
                     <span>Coding Academy by Orange 7 Months
Full-stack Bootcamp</span>
                      <p>  
                      I have experience in developing and maintaining web applications using React.js and other related technologies .I have also participated in code reviews and provided constructive feedback to other developers. I understand the importance of code quality and am committed to following best practices and industry standards to produce maintainable and scalable code.
</p>
 
</div>

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    
                    <div className="text-center">
                    {/* <h2>Full Stack Web Developer
                     </h2> 
                     <span>Coding Academy by Orange 7 Months
                                Full-stack Bootcamp</span> */}
                     
                      <p>  
                      Collaborated with <span >team members</span>  on group projects, utilizing effective communication and task coordination to deliver project milestones.</p>
                      <p>  
                      Worked extensively with <span >Trello</span>  as an agile project
management tool, ensuring efficient organization and task
tracking within groups.
                      </p>
                      <p>  
                      Utilized <span >GitHub</span>  organization to manage code repositories,
enabling seamless collaboration and version control.
                      </p>
                      <p>  
                      Acquired experience in using version control systemslike <span >Git</span> to manage code and collaborate with peers
                   </p>
 
</div>
                    </Tab.Pane>
                 
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
