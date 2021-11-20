import React from "react";

import "./welcome.css";

function Welcome() {
  return (
    <div className='homepage__welcome overflow-hidden' id='welcome'>
      <div className='row no-gutters text-center'>
        <h1>Welcome to Sepay Kids!</h1>
        <div className='col-md-6 d-none d-md-block'>
          <img className='img-fluid' src='/assets/homepage/welcome.svg' alt='' />
        </div>
        <div className='col-12 col-md-6 d-flex align-items-center homepage__welcome-text'>
          <p className='fs-3 mx-5 mx-md-0 text-md-start'>
            Sepay Kids is a Sepay Studio program dedicated to developing educational games
            for children. Sepay Kids offers games that are both entertaining and
            informative for children's growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
