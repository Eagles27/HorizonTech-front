import SimpleButton from "../../components/atoms/simpleButton";
import TitleAccueil from "../../components/atoms/titleAccueil";
import Footer from "../../components/molecules/footer";
import Header from "../../components/molecules/header";
import TextInput from "../../components/atoms/textInput";
import MetierPediaCard from "../../components/molecules/metierPediaCard";
import ButtonWithIcon from "../../components/atoms/buttonWithIcon";
import ArrowDownIcon from "../../icons/arrowDownIcon";

// Retirer l'improt ci-dessous une fois le back en place
import metierPediaTemp from "../../../utils/metierPediaTemp.json";

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
        <p
          style={{
            color: "#000000BF",
            textAlign: "center",
            width: "60%",
            fontSize: "1.1vw",
          }}
        >
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
          justifyContent: "center",
          margin: "30px 0",
          gap: "20px",
        }}
      >
        <TextInput
          placeholder="Le métier que je recherche..."
          width="60%"
          onInputChange={() => {}}
        />
        <div
          className="ButtonContainer"
          style={{ width: "20%", height: "100%" }}
        >
          <SimpleButton text="Rechercher" padding="8px 0" />
        </div>
      </div>
      <div
        className="gridSection"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "20px",
        }}
      >
        {metierPediaTemp.map((metier) => (
          <MetierPediaCard
            key={metier.id}
            image={metier.image}
            title={metier.title}
            description={metier.description}
            id={metier.id}
          />
        ))}
      </div>
      <div
        className="buttonContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "30px 0",
          width: "100%",
        }}
      >
        <ButtonWithIcon
          text="Voir plus"
          icon={<ArrowDownIcon />}
          color="white"
          border="1px solid #FF5B22"
          fontColor="#FF5B22"
          width="20%"
        />
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
