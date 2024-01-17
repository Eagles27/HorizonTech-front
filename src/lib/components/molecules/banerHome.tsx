const BanerHome: React.FC = () => {
  return (
    <>
      {/* Image de la bannière  */}
      <img
        src="bannerImg.png"
        alt="Image de la bannière de la page d'accueil"
        style={{ maxWidth: "100%", maxHeight: "100%", paddingTop: "35px" }}
      />

      {/* Texte à coté de l'image  */}

      <h1
        style={{
          marginLeft: "20px",
          fontSize: "40px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          color: "#FFFFFF",
        }}
      >
        Ensemble,
        <br />
        pensons l'avenir !
      </h1>
    </>
  );
};

export default BanerHome;
