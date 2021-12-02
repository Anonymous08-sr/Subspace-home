import React from "react";

const Payment = () => {
  return (
    <div className="payment-details">
      <div className="volume">
        <h4>Payment Volume</h4>
        <p>6.72L</p>
      </div>
      <div className="no-payments">
        <h4>Number of Payments</h4>
        <p>2.12K</p>
      </div>
      <div className="refund">
        <h4>Number of Refunds</h4>
        <p>44</p>
      </div>
    </div>
  );
};

export default Payment;
