import { useState } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  color?: string;
  textColor?: string;
  hoverColor?: string;
  padding?: string;
  image: React.ReactNode;
  borderColor?: string;
}

const ButtonAndIconButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  color = "#FF5B22",
  textColor = "#FFFFFF",
  hoverColor = "#272727",
  padding = "8px 12px",
  image,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "3px",
    background: isHovered ? hoverColor : color,
    padding: padding,
    border: "1px solid #FF5B22",
    cursor: "pointer",
    color: textColor,
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%",
    letterSpacing: "-0.12px",
    transition: "background 0.3s ease",
    width: "100%",
  };

  return (
    <button
      type="button"
      style={styles}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="textContainer"
        style={{
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        {text}
      </div>
      <div
        className="imageContainer"
        style={{
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        {image}
      </div>
    </button>
  );
};

export default ButtonAndIconButton;
