import React from "react";
import Slider from "react-slick";

import data from "../../../productData";

import "./gallery.css";

function Slide(props) {
  return (
    <div key={props.key} className='d-flex align-items-center justify-content-center'>
      <a
        href={`/products/${props.productId}`}
        className={`com__slide color${Math.floor(
          Math.random() * 3 + 1
        )} pt-5 px-5 m-5 a-none`}
      >
        <img className='w-100' src={props.logoUri} alt='' />
        <div className='p-2'>
          <h2>{props.productName}</h2>
          <p>{props.productGenre}</p>
        </div>
      </a>
    </div>
  );
}

function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    customPaging: (i) => <div className='homepage__gallery-slider-dots'></div>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='homepage__gallery text-center' id='games'>
      <div className='container-fluid align-item-center'>
        <h1>Games</h1>
        <Slider {...settings}>
          {data.map((index) => {
            return (
              <Slide
                key={index.productId}
                productId={index.productId}
                logoUri={index.logoUri}
                productName={index.productName}
                productGenre={index.productGenre}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Gallery;
