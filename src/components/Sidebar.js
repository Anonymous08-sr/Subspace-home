import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <img src="images/logo (1).png" alt="logo" />
      </div>
      <div className="sidebar-items">
        <a href="#home">
          <i class="fa fa-fw fa-home" style={{ color: "#53B9EA" }}></i> Home
        </a>
        <a href="#transactions">
          <i class="fa fa-fw fa-exchange" style={{ color: "#53B9EA" }}></i>{" "}
          Transactions
        </a>
        <a href="#plans">
          <i class="fa fa-fw fa-paper-plane" style={{ color: "#F05050" }}></i>{" "}
          Subscription Plans
        </a>
        <a href="#settlement">
          <i class="fa fa-fw fa-check" style={{ color: "#27C24C" }}></i>{" "}
          Settlement
        </a>
        <a href="#disputes">
          <i
            class="fa fa-fw fa-exclamation-circle"
            style={{ color: "#F05050" }}
          ></i>{" "}
          Disputes
        </a>
        <a href="#refunds">
          <i class="fa fa-fw fa-share-square" style={{ color: "#27C24B" }}></i>{" "}
          Refunds
        </a>
        <a href="#customers">
          <i class="fa fa-fw fa-users" style={{ color: "#FBE165" }}></i>{" "}
          Customers
        </a>
        <a href="#offers">
          <i class="fa fa-fw fa-percent" style={{ color: "#27C24C" }}></i>{" "}
          Offers
        </a>
        <a href="#points">
          <i class="fa fa-fw fa-gift" style={{ color: "#F05050" }}></i> Reward
          Points
        </a>
        <a href="#account">
          <i class="fa fa-fw fa-user-circle" style={{ color: "#53B9EA" }}></i>{" "}
          My Account
        </a>
        <a href="#settings">
          <i class="fa fa-fw fa-cog" style={{ color: " #FBE165" }}></i>
          Settings
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
