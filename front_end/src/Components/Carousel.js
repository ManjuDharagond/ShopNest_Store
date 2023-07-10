

import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://sslimages.shoppersstop.com/sys-master/root/h06/h0f/30223702196254/private-brand_Top-Banner-web_200623.jpg" alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://sslimages.shoppersstop.com/sys-master/root/h26/h0e/30322125504542/indianwear_Top-Banner-web_030723.jpg" alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://sslimages.shoppersstop.com/sys-master/root/h99/h00/30322125111326/westernwear_Top-Banner-web_030723.jpg" alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://sslimages.shoppersstop.com/sys-master/root/he5/h11/30322125635614/footwear_Top-Banner-web_030723.jpg" alt="Fourth slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
    </div>
  );
};

export default Carousel;
