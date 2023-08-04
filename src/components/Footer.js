import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/781588.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <h2 style={{color:"white"}}>MF</h2>
            <p className="mt-0"> 0790441532
</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/malak-alfarwan-320308226/"><img src={navIcon1} alt="" /></a>
             
               
             <a href="https://www.linkedin.com/in/malak-alfarwan-320308226/"><img src={navIcon2} alt="" /></a>
             <a href="https://github.com/12malak"><img style={{width:"20px" , height:"20px"}} src={navIcon3} alt="" /></a>

            </div>

            
            <p>Made By  Malak Alfarwan</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
