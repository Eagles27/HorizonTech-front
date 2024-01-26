interface ProfileNavButtonProps {
  text: string;
  isActive: boolean;
  onClick?: () => void;
}

const ProfileNavButton: React.FC<ProfileNavButtonProps> = ({
  text,
  isActive,
  onClick,
}) => {
  return (
    <button
      className="profileNavButtonContent"
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        boxSizing: "border-box",
        width: "100%",
        height: "80%",
        padding: "5%",
        backgroundColor: isActive ? "#FECDA6" : "transparent",
        border: "none",
        borderLeft: isActive ? "4px solid#FF5B22" : "none",
      }}
    >
      <h3
        style={{
          margin: 0,
          color: isActive ? "#FF5B22" : "#858585",
          fontSize: "0.8vw",
          fontWeight: isActive ? 700 : 400,
        }}
      >
        {text}
      </h3>
    </button>
  );
};

export default ProfileNavButton;
