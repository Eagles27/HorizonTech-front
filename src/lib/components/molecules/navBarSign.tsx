import React, { useState } from "react";
import NavButton from "../atoms/navButton";
import SignInCardModel from "../../components/organisms/signInCard/signInCard.model";
import SignUpCardModel from "../organisms/signUpCard/signUpCard.model";

const NavBarSign: React.FC = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleSignInClick = () => {
    setShowSignIn(false);
  };

  const handleSignUpClick = () => {
    setShowSignIn(true);
  };

  return (
    <div className="NavBar">
      <NavButton
        text="Inscription"
        onClick={handleSignUpClick}
        isActive={showSignIn}
      />
      <NavButton
        text="Connexion"
        onClick={handleSignInClick}
        isActive={!showSignIn}
      />

      {showSignIn ? (
        <p>
          <SignInCardModel />
        </p>
      ) : (
        <p>
          <SignUpCardModel />
        </p>
      )}
    </div>
  );
};

export default NavBarSign;
