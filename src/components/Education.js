import React from 'react';

import cert1 from '../assets/img/efe.png';
import cert2 from '../assets/img/orange2.jpeg';

export const Education = () => {
  return (
    <section className="education" id="Certificate">
      <div className="container">
        <h2>My Certificate</h2>
        <div className="certificates">
          <div className="certificate-card">
            
            <img src={cert1} alt="Certificate 1" />
             {/* <h3>WordPress Development</h3> */}
            {/* <p>Orange Coding Academy - 2023</p> */}
          </div>
          <div className="certificate-card">
             {/* <h3>Full Stack Development</h3> */}
            {/* <p>Orange Coding Academy - 2023</p> */}
            <img src={cert2} alt="Certificate 2" />
           
          </div>
        </div>
      </div>
    </section>
  );
};
