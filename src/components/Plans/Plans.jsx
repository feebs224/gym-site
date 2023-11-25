import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">START YOUR</span>
        <span>JOURNEY</span>
        <span className="stroke-text">WITH US NOW</span>
      </div>

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="white check" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span className="benefits">See More Benefits</span>
            </div>
            <button className="btn">Join Now!</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
