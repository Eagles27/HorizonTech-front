import Header from "../../components/molecules/header";
import ValeurCard from "../../components/molecules/valeurCard";
import EarsIcon from "../../icons/earsIcon";
import HeartIcon from "../../icons/heartIcon";
import SearchCheckIcon from "../../icons/searchCheckIcon";
import UserRoundIcon from "../../icons/userRoundIcon";
import TitleCard from "../../components/atoms/blacktitle";

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
        className="videoContainer"
        style={{
          height: "90%",
          backgroundColor: "green",
          display: "block",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>VIDEO {text}</h1>
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
        className="ValuesPageContainer"
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
          justifyContent: "space-around",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <TitleCard texte="Notre Mission"></TitleCard>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div style={{ width: "50vw", height: "50vh" }}>
          <p>
            Notre mission chez Horizon Tech est claire : créer un pont entre les
            femmes déjà établies dans le monde professionnel et les jeunes
            filles pleines de potentiel qui aspirent à une carrière dans les
            sciences. Nous sommes conscients que la représentation joue un rôle
            crucial dans l'inspiration des générations futures, c'est pourquoi
            notre plateforme web innovante vise à connecter des femmes
            scientifiques accomplies avec des collégiennes, lycéennes et
            étudiantes ambitieuses. Grâce à notre plateforme interactive, nous
            offrons aux jeunes femmes la possibilité unique de s'engager dans
            des dialogues significatifs avec des modèles féminins exceptionnels
            dans le domaine scientifique. Ces interactions vont bien au-delà des
            simples discussions sur les carrières scientifiques ; elles
            permettent également de partager des expériences, des conseils
            pratiques et d'offrir un soutien crucial pour surmonter les défis
            propres à ce parcours. Notre communauté chez Horizon Tech repose sur
            la conviction que la diversité des perspectives est essentielle pour
            stimuler l'innovation. En éliminant les obstacles qui freinent
            l'accès des jeunes femmes aux milieux scientifiques, nous
            contribuons à créer un avenir où l'équité règne dans tous les
            laboratoires, bureaux et institutions académiques.
          </p>
        </div>
        <div style={{ width: "15vw", marginRight: "10%" }}>
          <img
            src=".\..\target.png"
            alt="Transparence"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};
export default HomeView;
