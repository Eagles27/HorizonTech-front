import { useState } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const BlueButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "10px",
    background: "#109BD2",
    padding: "8px 12px",
    border: "none",
    cursor: "pointer",
    color: "#fff",
    fontSize: "12px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%",
    letterSpacing: "-0.12px",
    transition: "background 0.3s ease",
    width: "100%",
  };

  const buttonBackground = isHovered ? "#272727" : "#109BD2";

  return (
    <button
      type="button"
      style={{ ...styles, background: buttonBackground }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ textAlign: "center", flexGrow: 1 }}> {text}</div>
    </button>
  );
};

export default BlueButton;
