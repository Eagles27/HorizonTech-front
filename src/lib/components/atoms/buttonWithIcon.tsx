import React, { useState } from "react";

interface ButtonProps {
  text: string;
  icon: React.ReactNode;
  color?: string;
  fontColor?: string;
  padding?: string;
  border?: string;
  width?: string;
  onClick?: () => void;
}

const ButtonWithIcon: React.FC<ButtonProps> = ({
  text,
  onClick,
  color = "#FF5B22",
  fontColor = "#fff",
  padding = "8px 12px",
  border = "none",
  width = "100%",
  icon,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "3px",
    background: color,
    padding: padding,
    border: border,
    cursor: "pointer",
    color: fontColor,
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%",
    letterSpacing: "-0.12px",
    transition: "background 0.3s ease",
    width,
  };

  const buttonBackground = isHovered ? "#272727" : color;

  return (
    <button
      type="button"
      style={{ ...styles, background: buttonBackground }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ textAlign: "center", flexGrow: 1 }}> {text}</div>
      {icon}
    </button>
  );
};

export default ButtonWithIcon;
