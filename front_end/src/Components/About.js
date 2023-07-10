import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <div>
      <Navbar/>
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6">
          <img
            src="https://media.istockphoto.com/id/1029895828/vector/shopping-bag-with-cart-logo-design-illustrator.jpg?s=612x612&w=0&k=20&c=HE8fwTY9FmqkEMY9qI-NFeQEo-g0cxE5xu6_fvZZrY0="
            className="img-fluid"
            alt="About"
          />
        </div>
        <div className="col-lg-6">
          <div className="about-content">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eu semper mi. Duis ac elit eget nunc congue tincidunt. Aliquam
              erat volutpat. Phasellus malesuada ipsum auctor feugiat
              efficitur. Morbi vitae rhoncus elit, vitae tempor lorem. Sed
              efficitur dolor sit amet metus fermentum tincidunt.
            </p>
            <p>
              Sed lacinia vestibulum leo in laoreet. Nullam a ligula eu est
              fringilla iaculis. Sed bibendum volutpat nunc sed aliquet.
              Maecenas at condimentum nulla, ut pharetra lectus. Sed malesuada
              ante a consectetur pulvinar.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default About;
