import React from "react";
import Filter from "./Filter";

import Navbar from "./Navbar";
import Payment from "./Payment";
import Process from "./Process";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <h3>Welcome to your Dashbaoard, Grow90</h3>
      <Process />
      <Filter />
      <Payment />
    </div>
  );
};

export default Dashboard;
