import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import AvatarIcon from "../../icons/avatarIcon";
import IconButton from "../atoms/iconButton";
import { useSelector } from "react-redux";
import { TRootState } from "../../../store/store";

const Header: React.FC = () => {
  const isAuth = useSelector((state: TRootState) => state.userSlice.isAuth);
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
        <Link style={{ textDecoration: "none" }} to="/">
          <h1 style={{ color: "#000", fontWeight: "normal", margin: 0 }}>
            HorizonTech
          </h1>
        </Link>
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
        <HashLink
          style={{ color: "#FF5B22", textDecoration: "none" }}
          to="/#QuiSommesNous"
        >
          Notre histoire
        </HashLink>
        <div className="margin" style={{ marginRight: "15%" }} />
        <HashLink
          style={{
            color: "#FF5B22",
            textDecoration: "none",
          }}
          to="/#NotreEquipe"
        >
          Notre équipe
        </HashLink>
        <div className="margin" style={{ marginRight: "15%" }} />
        <Link
          style={{
            color: "#FF5B22",
            textDecoration: "none",
          }}
          to="/metier-pedia"
        >
          Métier-Pédia
        </Link>
      </ul>
      <Link to={isAuth ? "/profile" : "signup-signin"}>
        <IconButton icon={<AvatarIcon />} />
      </Link>
    </nav>
  );
};

export default Header;
