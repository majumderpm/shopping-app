import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bannerone from '../../assets/images/banne.jpg';
import bannertwo from '../../assets/images/bannertwo.jpg';
import bannerthree from '../../assets/images/bannerthree.jpg';
import '../Home/Home.css';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container-fluid">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bannerone}
          alt="First slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bannertwo}
          alt="Second slide"
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bannerthree}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
    </div>
  );
}


export default Banner;