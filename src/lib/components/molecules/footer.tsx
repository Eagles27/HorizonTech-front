import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <nav
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
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            minWidth: "15%",
            textAlign: "center",
          }}
          to="/"
        >
          Notre Histoire
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            minWidth: "15%",
            textAlign: "center",
          }}
          to="/"
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
          to="/"
        >
          Connexion/Inscription
        </Link>
      </ul>
      <p style={{ fontSize: "12px" }}>2024 - HorizonTech</p>
    </nav>
  );
};

export default Footer;
