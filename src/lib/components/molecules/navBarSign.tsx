import { useState } from "react";
import NavButton from "../atoms/navButton";

interface NavBarSignProps {
  onValueChange: (value: boolean) => void;
}

const NavBarSign: React.FC<NavBarSignProps> = ({ onValueChange }) => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = (isActive: boolean) => {
    setIsActive(isActive);
    onValueChange(isActive);
  };
  return (
    <div
      className="NavBar"
      style={{
        width: "100%",
        marginBottom: "20px",
      }}
    >
      <NavButton
        text="Inscription"
        isActive={isActive}
        onClick={() => handleClick(true)}
      />
      <NavButton
        text="Connexion"
        isActive={!isActive}
        onClick={() => handleClick(false)}
      />
    </div>
  );
};

export default NavBarSign;
