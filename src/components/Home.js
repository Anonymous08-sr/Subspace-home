import React from "react";

import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-content">
        <Sidebar />
      </div>
      <div className="right-content">
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
