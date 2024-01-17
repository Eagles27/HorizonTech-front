import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer: React.FC = () => {
  return (
    <footer
      className="navbar"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3>HorizonTech</h3>
      <ul
        className="linksComponent"
        style={{
          display: "flex",
          width: "80%",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
          borderBottom: "3px solid #ECECEC",
          padding: "0 0 20px 0",
        }}
      >
        <HashLink
          style={{
            textDecoration: "none",
            color: "black",
            minWidth: "15%",
            textAlign: "center",
          }}
          to="/#QuiSommesNous"
        >
          Notre Histoire
        </HashLink>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            minWidth: "15%",
            textAlign: "center",
          }}
          to="/metier-pedia"
        >
          Métier-Pédia
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            minWidth: "15%",
            textAlign: "center",
          }}
          to="/signup-signin"
        >
          Connexion/Inscription
        </Link>
      </ul>
      <p style={{ fontSize: "12px" }}>2024 - HorizonTech</p>
    </footer>
  );
};

export default Footer;
