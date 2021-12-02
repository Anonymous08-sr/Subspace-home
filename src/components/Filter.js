import React from "react";
import { GoCalendar } from "react-icons/go";
import { RiArrowDropDownLine } from "react-icons/ri";

const Filter = () => {
  return (
    <div className="filter">
      <div class="row">
        <div class="column cln-icon">
          <GoCalendar />
          <span className="cln-span">
            {" "}
            Past 30 days <RiArrowDropDownLine />
          </span>
        </div>
        <div class="column cln-right">
          <p>12 Oct 2021&nbsp;&nbsp; to &nbsp;&nbsp; 12 Nov 2021</p>
        </div>
      </div>
      <div class="row2">
        <div class="column cln2-left">
          <span>
            {" "}
            Current Balance:<span>&#8377;</span>2.2L{" "}
          </span>
        </div>
        <div class="column cln2-right">
          <a href="#" className="settlement">
            View Settlements
          </a>
        </div>
      </div>
    </div>
  );
};

export default Filter;
