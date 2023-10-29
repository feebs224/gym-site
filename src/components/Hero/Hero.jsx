import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div class="subheading">
            <span>Let us help you shape your ideal body!</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now!</button>

        <div className="heart-rate">
          <img src={Heart} alt="heart emoji" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        <img
          src={hero_image}
          alt="athletic man tying shoelaces"
          className="hero-image"
        />
        <img
          src={hero_image_back}
          alt="athletic man tying shoelaces"
          className="hero-image-back"
        />

        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
