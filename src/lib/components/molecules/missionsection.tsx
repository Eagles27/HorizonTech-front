import TargetIcon from "../../icons/targetIcon";

interface ImissionSectionProps {
  image?: React.ReactNode;
}

const MissionSection: React.FC<ImissionSectionProps> = ({
  image = <TargetIcon />,
}) => {
  return (
    <div
      className="ContentContainer"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        className="MissionContextContainer"
        style={{
          width: "60%",
          color: "#000000A6",
          textAlign: "justify",
          fontSize: "1.1vw",
        }}
      >
        <p>
          Notre mission chez Horizon Tech est claire : créer un pont entre les
          femmes déjà établies dans le monde professionnel et les jeunes filles
          pleines de potentiel qui aspirent à une carrière dans les sciences.
        </p>
        <p>
          Nous sommes conscients que la représentation joue un rôle crucial dans
          l'inspiration des générations futures, c'est pourquoi notre plateforme
          web innovante vise à connecter des femmes scientifiques accomplies
          avec des collégiennes, lycéennes et étudiantes ambitieuses.
        </p>
        <p>
          Grâce à notre plateforme interactive, nous offrons aux jeunes femmes
          la possibilité unique de s'engager dans des dialogues significatifs
          avec des modèles féminins exceptionnels dans le domaine scientifique.
          Ces interactions vont bien au-delà des simples discussions sur les
          carrières scientifiques ; elles permettent également de partager des
          expériences, des conseils pratiques et d'offrir un soutien crucial
          pour surmonter les défis propres à ce parcours.
        </p>
        <p>
          Notre communauté chez Horizon Tech repose sur la conviction que la
          diversité des perspectives est essentielle pour stimuler l'innovation.
          En éliminant les obstacles qui freinent l'accès des jeunes femmes aux
          milieux scientifiques, nous contribuons à créer un avenir où l'équité
          règne dans tous les laboratoires, bureaux et institutions académiques.
        </p>
      </div>
      <div className="imageContainer" style={{}}>
        {image}
      </div>
    </div>
  );
};

export default MissionSection;
