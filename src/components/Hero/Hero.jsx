import React from 'react';
import { Button } from '../../atoms';
import { images } from '../../constants';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero-image">
        <img src={images.hero} alt="come shop now" />
      </div>
      <div className="hero-details">
        <div className="title">
          <h3>hot deals this week</h3>
        </div>
        <div className="detail">
          <h1>
            <span>sale up 50% </span>
            <br />
            <span>modern clothings</span>
          </h1>
        </div>
        <div className="hero__button">
          <Button title="view now" color="inherit" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
