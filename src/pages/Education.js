import React from 'react';
import Header from "../components/Header";

const Education = () => {
  return (
    <>
    <div class="container-fluid p-0">
      <Header />
      <section class="resume-section" id="about">
        <div class="resume-section-content">
          <h1 class="mb-0">
           Bhavana 
            <span class="text-primary">  Skumar</span>
          </h1>
          <div class="subheading mb-5">
            kormangla · Banglore,  · 6362655876 ·
            <a href="mailto:name@email.com">bhvamap6428@gmail.com</a>
          </div>
          <p class="lead mb-5">
            Fresher -
                      to get an opportunity where i can make the best of my potential and contribute
                      to the organization's growth, to improve my skills, knowledge and achieve professional growth while
                      being resourceful, innovative and flexible.
          </p>
          <div class="social-icons">
            <a class="social-icon" href="#!">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a class="social-icon" href="#!">
              <i class="fab fa-instagram"></i>
            </a>
            <a class="social-icon" href="#!">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="social-icon" href="#!">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>
      <hr class="m-0" />

      <section class="resume-section" id="education">
        <div class="resume-section-content">
          <h2 class="mb-5">Education</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            
            <div class="flex-grow-1">
              <h3 class="mb-0">PES University</h3>
              <div class="subheading mb-3">Engineering</div>
              <div>B.tech in Computer scinece</div>
              <p>CGPA: 8.22</p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary"> 2021 - present  </span>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between">
            <div class="flex-grow-1">
              <h3 class="mb-0">SJP polytechnic</h3>
              <div class="subheading mb-3">Diploma</div>
              <p>Percentage: 91</p>
              <div>computer scinece</div>
            </div>

            <div class="flex-shrink-0">
              <span class="text-primary">Graduated 2021 </span>
            </div>
          </div>

          

        </div>
      </section>
      <hr class="m-0" />
    </div>
  </>
);
};


export default Education;