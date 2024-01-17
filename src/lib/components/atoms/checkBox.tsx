import React, { useState } from "react";

interface CheckBoxProps {
  text: string;
  onClick?: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ text, onClick }) => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    if (onClick) {
      onClick();
    }
  };

  const containerStyles = {
    display: "flex",
    alignItems: "center",
    marginRight: "10px",
  };

  const checkboxStyles = {
    cursor: "pointer",
  };

  const labelStyles = {
    fontFamily: "Inter",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    marginLeft: "3px",
    color: isChecked ? "#FF5B22" : "#000000",
  };

  return (
    <div style={containerStyles}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={checkboxStyles}
      />
      <label style={labelStyles}>{text}</label>
    </div>
  );
};

export default CheckBox;
