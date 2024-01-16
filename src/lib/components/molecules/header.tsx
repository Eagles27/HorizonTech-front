import React from "react";
import { Link } from "react-router-dom";
import AvatarIcon from "../../icons/avatarIcon";
import IconButton from "../atoms/iconButton";

const Header: React.FC = () => {
  return (
    <nav
      className="navbar"
      style={{
        width: "100%",
        height: "100%",
        color: "#FF5B22",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div className="logoContainer" style={{ width: "10%" }}>
        <h1 style={{ color: "#000", fontWeight: "normal", margin: 0 }}>
          HorizonTech
        </h1>
      </div>
      <ul
        className="linksContainer"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "55%",
          fontWeight: "400",
          fontSize: "16px",
        }}
      >
        <Link style={{ color: "#FF5B22", textDecoration: "none" }} to="/">
          Notre histoire
        </Link>
        <div className="margin" style={{ marginRight: "15%" }} />
        <Link
          style={{
            color: "#FF5B22",
            textDecoration: "none",
          }}
          to="/chat"
        >
          Notre équipe
        </Link>
        <div className="margin" style={{ marginRight: "15%" }} />
        <Link
          style={{
            color: "#FF5B22",
            textDecoration: "none",
          }}
          to="/chat"
        >
          Métier-Pédia
        </Link>
      </ul>
      <IconButton icon={<AvatarIcon />} />
    </nav>
  );
};

export default Header;
