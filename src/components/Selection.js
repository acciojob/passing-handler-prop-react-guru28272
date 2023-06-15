import React, { useState } from "react";
// import "../styles/Child.css";

const Selection = (props) => {
  const { applyColor } = props;

  const [color, setColor] = useState("");

  const updateSelectionStyle = (backgroundColor) => {
    setColor(backgroundColor);
  };

  return (
    <div
      className="fix-box"
      onClick={() => applyColor(updateSelectionStyle)}
      style={{ background: color.background }}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};
export default Selection;
