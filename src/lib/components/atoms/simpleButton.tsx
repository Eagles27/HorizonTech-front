import { useState } from "react";

interface ButtonProps {
  text: string;
  color?: string;
  padding?: string;
  onClick?: () => void;
}

const SimpleButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  color = "#FF5B22",
  padding = "8px 12px",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    justifyContent: "space-between",
    borderRadius: "3px",
    background: color,
    padding: padding,
    border: "none",
    cursor: "pointer",
    color: "#fff",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%",
    letterSpacing: "-0.12px",
    transition: "background 0.3s ease",
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
    </button>
  );
};

export default SimpleButton;
