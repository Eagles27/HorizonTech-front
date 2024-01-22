const BanerHome: React.FC = () => {
  return (
    <div
      className="bannerContent"
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#FECDA6",
        display: "flex",
      }}
    >
      <div
        className="imageContent"
        style={{
          width: "65%",
          height: "100%",
          display: "flex",
        }}
      >
        <img
          src="bannerImg.png"
          alt="Image de la bannière de la page d'accueil"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "bottom",
          }}
        />
      </div>
      <div
        className="textContent"
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          padding: "0 5%",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "3vw",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
            color: "#FFFFFF",
          }}
        >
          Ensemble,
        </h1>
        <h1
          style={{
            margin: 0,
            fontSize: "3vw",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
            color: "#FFFFFF",
          }}
        >
          pensons l'avenir !
        </h1>
      </div>
    </div>
  );
};

export default BanerHome;
