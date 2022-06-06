import React from "react";

const Stroke = () => {
  // eslint-disable-next-line
  const style = {
    "@media (max-width: 600px)": {
      display: "none",
    },
  };
  return (
    <div className="stroke">
      <p style={{ border: "1px solid grey", height: "2060px" }}></p>
    </div>
  );
};

export default Stroke;
