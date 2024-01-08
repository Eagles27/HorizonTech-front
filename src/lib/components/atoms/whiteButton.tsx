import { useState } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const WhiteButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "10px",
    padding: "8px 12px",
    border: "2px solid #109BD2",
    cursor: "pointer",
    fontSize: "12px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%",
    letterSpacing: "-0.12px",
    transition: "background 0.2s ease",
    width: "100%",
  };

  const buttonBackground = isHovered ? "#109BD2" : "none";
  const fontColor = isHovered ? "white" : "#109BD2";

  return (
    <button
      type="button"
      style={{ ...styles, background: buttonBackground, color: fontColor }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ textAlign: "center", flexGrow: 1 }}> {text}</div>
    </button>
  );
};

export default WhiteButton;
