import React from "react";
import Header from "../components/Header";

const Award = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="awards">
          <div class="resume-section-content">
            <h2 class="mb-5">Awards & Certifications</h2>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                    NCC B and C cretificates
                    voluteering -civil Rights and Socila Action
                
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Cretificate of completion - iplant training on Python received from Karanadu Technologies limited
              </li>
              
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Award;
