// import React, { useState, useEffect } from "react";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './style.css';
// import { Link } from 'react-router-dom'

function CarouselBar() {
  // let [image, setImage] = useState([]);

  // useEffect(() => {
    //   const abortController = new AbortController()

    //   fetch('https://fakestoreapi.com/products?limit=3', { signal: abortController.signal })
    //     .then(response => response.json())
    //     .then(response => {
    //       setImage(response)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })

    //   return function cleanUp() {
    //     abortController.abort()
    //   }

    // })

    // let images = image
    return (

      // <Carousel className="mt-3">
      //   {images.map(item => {
      //     return <>
      //       <Carousel.Item key ={images[2].id}>
      //         <Link to={`/product/${images[2].id}`}>
      //         <img
      //           key ={images[2].id}
      //           className="d-block w-100"
      //           src={images[2].image}
      //           alt={images[2].title}
      //         />
      //           </Link>
      //       </Carousel.Item>
      //     </>
      //   })}
      // </Carousel>


      <Carousel className="mt-3">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/shirts"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/stars"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
}


export default CarouselBar
