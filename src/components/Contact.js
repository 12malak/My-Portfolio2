import { useState } from "react";
import React, { useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/girl5.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';


export const Contact = () => {
 

  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});



  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");
  //   let response = await fetch("http://localhost:5000/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(formDetails),
  //   });
  //   setButtonText("Send");
  //   let result = await response.json();
  //   setFormDetails(formInitialDetails);
  //   if (result.code == 200) {
  //     setStatus({ succes: true, message: 'Message sent successfully'});
  //   } else {
  //     setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
  //   }
  // };

  /////////////////////////////////

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs.sendForm('service_06xtq83', 'template_46i2a8h', form.current, 'AclbIjJ91dYnyOFgI')
  
      .then((result) => {
        setButtonText("Send");
          console.log(result.text);
          setStatus({ succes: true, message: 'Message sent successfully'});
      }, (error) => {
          console.log(error.text);
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
      });
     
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""}  src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
               
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                   
                      <input type="text"  name="to_name" placeholder="First Name" />
                    </Col>
                    
                    <Col size={12} sm={6} className="px-1">
                      <input type="email"  name="from_name" placeholder="Email Address" />
                    </Col>
                   
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" placeholder="Message" ></textarea>
                      <button type="submit" value="Send"><span>{buttonText}</span></button>
                      {/* <input type="submit" value="Send" /> */}
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
               
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
