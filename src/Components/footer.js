import React from "react";
import "./footer.css";
import CurrencyConverter from "./screen/currencyConverter";

const footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <p>&copy; 2022 DevHire</p>
      </div>
      {/* <div className="btn">
        <button>Naira</button>
      </div> */}
      <div className="currency">
        <CurrencyConverter />
      </div>
    </div>
  );
};

export default footer;
