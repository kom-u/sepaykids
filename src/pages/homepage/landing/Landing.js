import React from "react";

import "./landing.css";

function Landing() {
  return (
    <div className='homepage__landing' id='home'>
      <div className='container-md overflow-hidden'>
        <div className='row '>
          <div className='col-12 col-md-6 d-flex flex-column align-items-center justify-content-center homepage__landing-cta'>
            <h1>Let's play with us!</h1>
            <a href='#welcome' className='px-3 py-2 fs-4 homepage__landing-button'>
              Start
            </a>
          </div>
          <div className='col-md-6 d-none d-md-block'>
            <img className='img-fluid' src='/assets/homepage/landing.svg' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
