interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <button
      type="button"
      style={{
        cursor: "pointer",
        backgroundColor: "transparent",
        border: "none",
      }}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
