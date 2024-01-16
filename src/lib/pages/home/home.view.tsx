import Header from "../../components/molecules/header";
import ValeurCard from "../../components/molecules/valeurCard";
import EarsIcon from "../../icons/earsIcon";
import TitleAccueil from "../../components/atoms/titleAccueil";

interface IProps {
  text: string;
}

const HomeView: React.FC<IProps> = ({ text }) => {
  return (
    <div
      className="appContainer"
      style={{
        width: "100vw",
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      <div className="headerContainer" style={{ width: "100%", height: "10%" }}>
        <Header />
      </div>
      <div
        className="imgAccueilContainer"
        style={{
          height: "90%",
          backgroundColor: "#FECDA6",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
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
          {text}
          Ensemble,
          <br />
          pensons l'avenir !
        </h1>
      </div>
      <div
        className="QuisommesnousContainer"
        style={{
          minHeight: "40%",
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          flex: "1 0 0",
          width: 600,
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <TitleAccueil title="Qui sommes-nous ?" />
        <div style={{}}>
          <p
            style={{
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              color: "rgba(0, 0, 0, 0.65)",
            }}
          >
            Horizon Tech est une initiative passionnée qui s'engage à briser les
            barrières pour l'intégration des jeunes femmes dans le monde
            scientifique. Nous croyons en un avenir où l'égalité des genres
            transcende toutes les disciplines, en particulier dans les domaines
            scientifiques où les femmes sont souvent sous-représentées.
          </p>
        </div>
      </div>
      <div
        className="storyContainer"
        style={{
          backgroundColor: "blue",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Notre Histoire</h1>
      </div>
      <div
        className="teamContainer"
        style={{
          backgroundColor: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div className="containerExample">
          <ValeurCard
            title="Hello"
            image={<EarsIcon />}
            description="jdkdksksksskskskksskskskskskskskk"
          />
        </div>
        <div className="containerExample">
          <ValeurCard
            title="Hello"
            image={<EarsIcon />}
            description="jdkdksksksskskskksskskskskskskskk"
          />
        </div>
      </div>
    </div>
  );
};
export default HomeView;
