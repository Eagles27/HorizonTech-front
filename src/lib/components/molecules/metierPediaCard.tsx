import ArrowRightIcon from "../../icons/arrowRightIcon";
import ButtonWithIcon from "../atoms/buttonWithIcon";

interface MetierPediaCardProps {
  title: string;
  description: string;
  image: string;
  id: string;
}

const MetierPediaCard: React.FC<MetierPediaCardProps> = ({
  title,
  description,
  image,
  id,
}) => {
  return (
    <div
      className="cardContainer"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="cardContent"
        style={{
          width: "90%",
          height: "100%",
          boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.20)",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ borderRadius: "5px", objectFit: "cover" }}
        />
        <h2 style={{ margin: "5px 0", fontSize: "1.4vw" }}>{title}</h2>
        <p style={{ margin: "5px 0", fontSize: "1vw" }}>{description}</p>
        <div
          className="buttonContainer"
          style={{ width: "40%", marginTop: "3px" }}
        >
          <ButtonWithIcon
            text="Découvrir"
            icon={<ArrowRightIcon />}
            onClick={() => alert(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default MetierPediaCard;
