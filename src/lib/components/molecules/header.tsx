import React from "react";
import { Link } from "react-router-dom";
import WhiteButton from "../atoms/whiteButton";
import BlueButton from "../atoms/blueButton";

const Header: React.FC = () => {
  return (
    <nav
      className="navbar"
      style={{
        width: "100%",
        height: "100%",
        color: "#109BD2",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="logoContainer" style={{ width: "10%" }}>
        <h1 style={{ margin: 0 }}>LOGO</h1>
      </div>
      <ul className="linksContainer" style={{ width: "60%", display: "flex" }}>
        <Link style={{ color: "#109BD2", textDecoration: "none" }} to="/">
          Accueil
        </Link>
        <div className="margin" style={{ marginRight: "5%" }} />
        <Link
          style={{
            color: "#109BD2",
            textDecoration: "none",
          }}
          to="/chat"
        >
          Chat
        </Link>
      </ul>
      <div
        className="buttonContainer"
        style={{ width: "30%", display: "flex" }}
      >
        <WhiteButton text="Connexion" />
        <div className="margin" style={{ marginRight: "5%" }} />
        <BlueButton text="Inscription" />
        <div className="margin" style={{ marginLeft: "2%" }} />
      </div>
    </nav>
  );
};

export default Header;
