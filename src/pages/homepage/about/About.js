import React from "react";

import "./about.css";

function About() {
  return (
    <div className='homepage__about' id='about'>
      <div className='container-fluid container-xxl align-item-center text-center'>
        <h1>The Teams</h1>
        <div className='d-flex align-items-center justify-content-center flex-column flex-xl-row'>
          <div className='row row-cols-1 mx-5 text-start'>
            <div className='col my-3 p-4 homepage__about-role color1'>
              <h1 className='fs-2'>Game Designer</h1>
              <p>Create and develop of game concepts and the environment.</p>
            </div>
            <div className='col my-3 p-4 homepage__about-role color2'>
              <h1 className='fs-2'>Programmer</h1>
              <p>
                Convert game concepts into PC, console, or mobile phone games using
                programming languages.
              </p>
            </div>
          </div>
          <div className='d-none d-xl-block'>
            <img src='/assets/homepage/about.svg' alt='' />
          </div>
          <div className='row row-cols-1 mx-5 text-start'>
            <div className='col my-3 p-4 homepage__about-role color2'>
              <h1 className='fs-2'>Project Manager</h1>
              <p>
                Make high-quality artwork for a game's texture, characters, environment,
                or specific components.
              </p>
            </div>
            <div className='col my-3 p-4 homepage__about-role color1'>
              <h1 className='fs-2'>2D/3D Artist</h1>
              <p>
                Play a key part in project planning, execution, monitoring, control, and
                closure
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
