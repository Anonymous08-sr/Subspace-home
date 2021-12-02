import React from "react";

const Process = () => {
  return (
    <div className="process-container">
      <div className="process-title">
        <h4>Your are just steps away from enabling live payments</h4>
        <p>
          Submit a few KYC details and start accepting payments from your
          customers
        </p>
      </div>
      <div className="process-details">
        <img
          src="images/Frame 96.png"
          className="process-ellipse"
          alt="tick"
        ></img>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <img src="images/Ellipse 3.png" alt="Ellipse"></img>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <img src="images/Ellipse 3.png" alt="Ellipse"></img>
        <div className="further-process">
          <h4>Contact Details</h4>
          <div className="kyc">
            <h4>Live payments and Settlements</h4>
            <p>
              Submit a few KYC details to start accepting payments and receive
              settlement in your account
            </p>
            <button type="submit" className="payment-btn">
              Submit KYC
            </button>
          </div>
          <div className="payment">
            <h4>Account Activation</h4>
            <p>
              Get all the KYC details approved to complete the account
              activation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
