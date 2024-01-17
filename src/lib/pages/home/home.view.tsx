import Header from "../../components/molecules/header";
import TeamCard from "../../components/molecules/teamCard";
import ValeurCard from "../../components/molecules/valeurCard";
import EarsIcon from "../../icons/earsIcon";
import HeartIcon from "../../icons/heartIcon";
import SearchCheckIcon from "../../icons/searchCheckIcon";
import UserRoundIcon from "../../icons/userRoundIcon";
import TitleCard from "../../components/atoms/blacktitle";
import MissionSection from "../../components/molecules/missionsection";
import teamMembers from "../../../utils/teamMembers.json";
import Footer from "../../components/molecules/footer";
import TitleAccueil from "../../components/atoms/titleAccueil";

const HomeView: React.FC = () => {
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
          width: 600,
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <TitleAccueil title="Qui sommes-nous ?" />
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
        className="valuesPageContainer"
        style={{
          backgroundColor: "#FECDA6",
        }}
      >
        <TitleCard texte="Nos valeurs"></TitleCard>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div className="ValuesContainers" style={{ width: "48%" }}>
            <ValeurCard
              title="Empathie"
              image={<EarsIcon />}
              description="L'empathie est le socle de notre mission chez Horizon Tech. 
            Elle nous permet de créer des connexions authentiques entre les femmes établies dans le monde scientifique 
            et les jeunes étudiantes. En comprenant et partageant les expériences uniques, l'empathie devient le moteur qui inspire,
             guide, et renforce notre communauté, propulsant ainsi les femmes vers des carrières scientifiques florissantes."
            />
          </div>

          <div className="ValuesContainers" style={{ width: "48%" }}>
            <ValeurCard
              title="Engagement"
              image={<HeartIcon />}
              description="L'engagement est le cœur battant d'Horizon Tech. 
            Il alimente notre mission de connecter les femmes scientifiques expérimentées avec les étudiantes. 
            Cet engagement va au-delà des simples conversations, créant une communauté solide 
            où le mentorat tangible propulse les femmes vers des carrières scientifiques florissantes. 
            Chez Horizon Tech, l'engagement forge un chemin vers un avenir où l'égalité des genres dans les sciences devient une réalité tangible."
            />
          </div>

          <div className="ValuesContainers" style={{ width: "48%" }}>
            <ValeurCard
              title="Collaboration"
              image={<UserRoundIcon />}
              description="La collaboration définit Horizon Tech. 
            Unissant les femmes chevronnées en sciences aux jeunes étudiantes, 
            nous formons une communauté où le partage d'idées et de connaissances propulse chacune vers l'avant. 
            Chez Horizon Tech, la collaboration transcende les générations, créant un avenir où ensemble, 
            nous épanouissons les femmes dans les sciences."
            />
          </div>

          <div className="ValuesContainers" style={{ width: "48%" }}>
            <ValeurCard
              title="Transparence"
              image={<SearchCheckIcon />}
              description="La transparence est la boussole d'Horizon Tech. 
            Nous croyons en l'importance de l'honnêteté et de la clarté dans toutes nos actions. 
            En favorisant la transparence, nous construisons une communauté basée sur la confiance, 
            où les femmes établies dans les sciences partagent ouvertement leurs expériences."
            />
          </div>
        </div>
      </div>
      <div
        className="MissionContainer"
        style={{
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TitleCard texte="Notre Mission"></TitleCard>
        <MissionSection />
      </div>
      <div
        id="NotreEquipe"
        className="teamContainer"
        style={{ backgroundColor: "#FECDA6" }}
      >
        {/* Le H1 doit être modifié par le component mainTitle */}
        <h1
          style={{
            paddingTop: "60px",
            textAlign: "center",
            margin: 0,
            fontWeight: "600",
            fontSize: "40px",
          }}
        >
          Notre équipe
        </h1>
        <div className="membersContainer" style={{ padding: "5%" }}>
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              description={member.description}
              alignRight={member.alignRight}
            />
          ))}
        </div>
      </div>
      <div className="footerContainer" style={{ width: "100%", height: "30%" }}>
        <Footer />
      </div>
    </div>
  );
};
export default HomeView;
