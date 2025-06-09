import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj1.png";
import projImg2 from "../assets/img/proj2.png";
import projImg3 from "../assets/img/proj33.png";
import projImg4 from "../assets/img/proj44.png";
import projImg5 from "../assets/img/proj5.png";
import projImg6 from "../assets/img/proj66.png";
import projImg7 from "../assets/img/Mazr3tna2.png";
import projImg8 from "../assets/img/basma.png";
import projImg9 from "../assets/img/kasselsoft.png";
import projImg10 from "../assets/img/blue2.png";
import projImg11 from "../assets/img/rum.png";
import projImg12 from "../assets/img/Kayan.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Rum Legend Luxury & Camp",
      description: "A WordPress tourism website about Wadi Rum to display tourism services, prices and reservations.",
      imgUrl: projImg11, // Add appropriate image
  
      demoLink: "https://legendcamps.com/"
    },
    {
      title: "Blue Mark Agency",
      description: "Developed a comprehensive WordPress website for Blue Mark Agency as a freelance project, showcasing their expertise . Additionally, implemented SEO strategies using the Yoast Plugin to enhance search engine visibility and improve website performance.",
      imgUrl: projImg10, // Add appropriate image
    
      demoLink: "https://ba9maonline.com/"
    }, 
      {
      title: "Kayan Engineering Consultancy",
      description: "A WordPress site offering the services of Starat Engineering Company in architectural design and supervision, with translation enabled.",
      imgUrl: projImg12, // Add appropriate image
    
      demoLink: "https://kayanconsultant.com/home-en/"
    }, 
   
    {
      title: "Basma",
      description: "This educational platform is designed specifically for Tawjihi students. It offers high-quality educational content with robust security against unauthorized access and misuse.",
      imgUrl: projImg8, // Add appropriate image
      githubLink: "https://github.com/12malak/Basma-front",
      demoLink: "https://ba9maonline.com/"
    },
    {
      title: "Kasselsoft",
      description: "A bilingual website with an intuitive control panel for managing job listings and blog content. Features sorting and managing job duration in Arabic and English.",
      imgUrl: projImg9, // Add appropriate image
      githubLink: "https://github.com/12malak/kasselsoft_frontend",
      demoLink: "https://www.kasselsoft.com/en"
    },
    {
      title: "Mazr3tna",
      description: " Focused on promoting sustainable living, it offers organic foods and hand-crafted pottery. The platform ensures an easy, seamless shopping experience, providing customers with the ability to browse, purchase, and enjoy the benefits of eco-friendly, locally sourced goods. ",
      imgUrl: projImg7, // Add appropriate image
      githubLink: "https://github.com/12malak/hadiyyeh",
      demoLink: "https://mazr3tna.com/en"
    },
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
      githubLink: " https://github.com/12malak/masterpiece",
      demoLink: "https://12malak.github.io/masterpiece/"
     
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
      githubLink: "https://github.com/12malak/project#this-repository-is-dedicated-to-the-front-end-quiz-a-resource-designed-to-test-and-improve-your-knowledge-of-html-css-and-javascript---the-core-technologies-of-front-end-web-development",
      demoLink: "https://bashar-alamoush.github.io/Organization/"
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
                    <div className="text-center">
                    <h2>Full Stack Web Developer
                     </h2> 
                     <span>Coding Academy by Orange 7 Months
Full-stack Bootcamp</span>
                      <p>  
                      I have experience in developing and maintaining web applications using React.js and other related technologies .I have also participated in code reviews and provided constructive feedback to other developers. I understand the importance of code quality and am committed to following best practices and industry standards to produce maintainable and scalable code.
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

                    <div  className="text-center">
<h2>Bachelor’s Software Engineering
 
                     </h2> 
                     <span>Zarqa University - information technology 
collage</span>
<p>
Gain a solid understanding of the principles, methods, and tools used to design, develop, test, and maintain software systems. Learn a range of topics, including object-oriented programming (OOP), data structures, algorithms, database design, and software engineering.
</p>
</div>


                   
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
  <div className="text-center">
    <h2>Full Stack Developer at KasselSoft</h2>
    <p>Designed and developed full-stack web applications using <span >MySQL, Express, React, and Node.js</span>.</p>
    <p>Built scalable <span>RESTful APIs</span> and implemented secure authentication using <span >JWT</span>, while optimizing database performance.</p>
    <p>Contributed to systems development, including an <span >educational platform</span> and an <span >e-commerce solution</span>.</p>
    <p>Utilized <span >Git</span> and <span >GitHub</span> for version control and collaborative development.</p>
    <p>Applied <span >Agile methodologies</span> to ensure effective project management and iterative solution delivery.</p>
    <p>Strong understanding of <span >Object-Oriented Programming (OOP)</span> principles, with proficiency in optimizing code through <span >Algorithms & Data Structures</span>.</p>
    <p><strong>Technologies:</strong> <span >JavaScript, MongoDB, Express.js, React, Node.js, SQL</span>.</p>
    
    <h2>Trainee at Coding Academy by Orange</h2>
    <p>Completed an intensive Full Stack Web Development course in collaboration with <span >Simplon.co</span> and <span >Princess Sumaya University for Technology (PSUT)</span>.</p>
    <p>Gained in-depth knowledge of front-end and back-end technologies, as well as <span >Agile methodologies</span> for collaborative projects.</p>
    <p>Developed hands-on experience in <span >JavaScript, Node.js, React.js, SQL,</span> and <span >MongoDB</span> through various practical projects.</p>
    <p>Strengthened skills in <span>team collaboration</span>,<span>problem-solving</span> , and <span>real-world software development practices</span>.</p>
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
