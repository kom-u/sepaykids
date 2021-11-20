import React from "react";
import { useParams } from "react-router-dom";

import data from "../../productData";

import "./product.css";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Product() {
  const id = useParams().productId;

  const product = data.find((i) => i.productId === id);

  return (
    <div className='product'>
      <Header />
      <div className='product__detail mb-5 mt-3'>
        <div className='container'>
          <h1 className='mb-4 text-center text-xl-start'>{product.productName}</h1>
          <div className='row'>
            <div className='col-xl-6 d-flex align-item-center justify-content-center my-5'>
              <img className='product__detail-image' src={product.logoUri} alt='' />
            </div>
            <div className='col-xl-6'>
              <p className='fs-4'>{product.productDesc}</p>
              <div className='my-5 text-center text-xl-start'>
                <a href={product.playstoreUri}>
                  <img
                    className='product__detail-playstore'
                    src='/assets/playstore.svg'
                    alt=''
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
