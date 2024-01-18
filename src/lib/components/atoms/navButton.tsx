interface ButtonProps {
  text: string;
  onClick?: () => void;
  isActive: boolean;
}

const NavButton: React.FC<ButtonProps> = ({ text, onClick, isActive }) => {
  const styles = {
    background: "none",
    cursor: "pointer",
    color: isActive ? "#FF5B22" : "rgba(0, 0, 0, 0.50)",
    border: "none",
    borderBottom: isActive
      ? "1.5px solid #FF5B22"
      : "1.5px solid rgba(0, 0, 0, 0.50)",
    width: "50%",
    fontWeight: isActive ? 700 : 500,
  };

  const textStyles = {
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    lineHeight: "normal",
    marginBottom: "10px",
  };

  return (
    <button type="button" style={styles} onClick={onClick}>
      <div style={textStyles}>{text}</div>
    </button>
  );
};

export default NavButton;
