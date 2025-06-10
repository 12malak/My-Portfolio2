import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from '../assets/img/logo.svg';

import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            {/* <img src={logo} alt="Logo" /> */}
            <h2 style={{color:"white"}}>MF</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#Certificate" className={activeLink === 'Certificate' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Certificate')}>Certificate</Nav.Link>
             
              <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Project</Nav.Link>
             
           
            <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Connect</Nav.Link>
           
            </Nav>
            <span className="navbar-text">
              {/* <div className="social-icon">
                <a href="https://www.linkedin.com/in/malak-alfarwan-320308226/"><img src={navIcon1} alt="" /></a>
             
               
                <a href="https://www.linkedin.com/in/malak-alfarwan-320308226/"><img src={navIcon3} alt="" /></a>
                <a href="https://github.com/12malak"><img style={{width:"20px" , height:"20px"}} src={navIcon2} alt="" /></a>

              </div> */}
              <HashLink to='https://drive.google.com/file/d/1HdrbGf7BwMAm715_A_vSuHAqxauJRkK8/view?usp=sharing'>

              {/* <HashLink to='https://drive.google.com/file/d/1a0gdFZGq6PwH0Hd78Yr2yZWg136CZgeZ/view?usp=sharing'> */}
  
                <button className="vvd"><span>
                {/* Let’s Connect */}
                My Resume
                
                </span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
