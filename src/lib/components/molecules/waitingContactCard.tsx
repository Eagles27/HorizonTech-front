import ArrowRightIcon from "../../icons/arrowRightIcon";
import ButtonWithIcon from "../atoms/buttonWithIcon";

interface WaitingContactCardProps {
  firstname: string;
  lastname: string;
  studyLevel?: string;
  dreamJob?: string;
  imageUrl?: string;
}

const WaitingContactCard: React.FC<WaitingContactCardProps> = ({
  firstname,
  lastname,
  studyLevel = "Etudiante universitaire",
  dreamJob = "Santé",
  imageUrl = "/avatarImage.png",
}) => {
  return (
    <div
      className="cardContainer"
      style={{
        width: "50%",
        maxHeight: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.20)",
        boxSizing: "border-box",
        padding: "4%",
        gap: "20px",
      }}
    >
      <h2 style={{ margin: 0, fontSize: "1.2vw" }}>
        {firstname + " " + lastname}
      </h2>
      <div
        className="descriptionContent"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "rgba(0, 0, 0, 0.30)",
          fontSize: "0.7vw",
          fontWeight: 400,
        }}
      >
        <h3 style={{ margin: 0 }}>{studyLevel}</h3>
        <h3 style={{ margin: 0 }}>{dreamJob}</h3>
      </div>
      <div className="imageContainer">
        <img src={imageUrl} alt="profile picture" />
      </div>
      <ButtonWithIcon
        text="Commencer à discuter"
        icon={<ArrowRightIcon />}
        onClick={() => {}}
      />
    </div>
  );
};

export default WaitingContactCard;
