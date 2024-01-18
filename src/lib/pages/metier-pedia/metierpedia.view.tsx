import SimpleButton from "../../components/atoms/simpleButton";
import TitleAccueil from "../../components/atoms/titleAccueil";
import Footer from "../../components/molecules/footer";
import Header from "../../components/molecules/header";
import TextInput from "../../components/atoms/textInput";
import MetierCard from "../../components/molecules/metierCard";
import ButtonAndIconButton from "../../components/atoms/buttonAndIcon";
import ArrowBottomIcon from "../../icons/arrowbottomIcon";

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
          <SimpleButton text="Rechercher" padding="8px 0" />
        </div>
      </div>
      <div
        className="jobCardContainer"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          padding: "2% 0",
          alignItems: "center",
          maxWidth: "90%",
          margin: "0 auto",
        }}
      >
        {/* Insérer un mapping de la card métier qui est à faire */}
        <MetierCard
          image={
            <img
              src="doctorImg.png"
              alt="Métier de médecin "
              style={{ width: "100%" }}
            />
          }
          title="Médecin"
          description="Un médecin est un professionnel de la santé qualifié, spécialisé dans le diagnostic, le traitement et la prévention des maladies."
          button
        />

        <MetierCard
          image={
            <img
              src="doctorImg.png"
              alt="Métier de médecin "
              style={{ width: "100%" }}
            />
          }
          title="Médecin"
          description="Un médecin est un professionnel de la santé qualifié, spécialisé dans le diagnostic, le traitement et la prévention des maladies."
          button
        />

        <MetierCard
          image={
            <img
              src="doctorImg.png"
              alt="Métier de médecin "
              style={{ width: "100%" }}
            />
          }
          title="Médecin"
          description="Un médecin est un professionnel de la santé qualifié, spécialisé dans le diagnostic, le traitement et la prévention des maladies."
          button
        />
        <MetierCard
          image={
            <img
              src="doctorImg.png"
              alt="Métier de médecin "
              style={{ width: "100%" }}
            />
          }
          title="Médecin"
          description="Un médecin est un professionnel de la santé qualifié, spécialisé dans le diagnostic, le traitement et la prévention des maladies."
          button
        />
      </div>
      <div
        className="buttonNextContainer"
        style={{ width: "8%", background: "#FFFFFF", margin: "0 auto" }}
      >
        <ButtonAndIconButton
          text="Voir plus"
          padding="8px 0"
          color="#FFFFFF"
          textColor="#FF5B22"
          hoverColor="#FFA500"
          borderColor="##FF5B22"
          image={<ArrowBottomIcon />}
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
