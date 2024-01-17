import SimpleButton from "../../components/atoms/simpleButton";
import TitleAccueil from "../../components/atoms/titleAccueil";
import Footer from "../../components/molecules/footer";
import Header from "../../components/molecules/header";
import TextInput from "../../components/molecules/textInput";

const MetierPediaView: React.FC = () => {
  return (
    <div
      className="appContainer"
      style={{
        width: "100vw",
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      <div
        className="headerContainer"
        style={{
          width: "100%",
          height: "10%",
        }}
      >
        <Header />
      </div>
      <div
        className="presentationContainer"
        style={{
          backgroundColor: "#FECDA6",
          minHeight: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TitleAccueil title="Découvrir mon futur métier" />
        <p style={{ color: "#000000BF", textAlign: "center", width: "63%" }}>
          Notre métier pédia fonctionne comme une bibliothèque virtuelle,
          regorgeant de fiches métier exhaustives. Son objectif est de vous
          aider à explorer et comprendre le paysage professionnel d’aujourd’hui.
          Grâce à une collection variée de fiches métier, cette ressource offre
          des informations détaillées sur diverses professions.
        </p>
      </div>
      <div
        className="searchBarContainer"
        style={{
          display: "flex",
          alignItems: "center",
          margin: "30px 100px",
          gap: "20px",
        }}
      >
        <TextInput
          placeholder="Le métier que je recherche..."
          onInputChange={() => {}}
        />
        <div className="ButtonContainer" style={{ width: "20%" }}>
          <SimpleButton text="Hello" padding="8px 0" />
        </div>
      </div>
      <div className="jobCardContainer">
        {/* Insérer un mapping de la card métier qui est à faire */}
        Section MétierPédia
      </div>
      <div
        className="footerContainer"
        style={{ width: "100%", height: "30%", paddingTop: "40px" }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default MetierPediaView;
