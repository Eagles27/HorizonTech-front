import ArrowRightIcon from "../../icons/arrowrightIcon";
import ButtonAndIconButton from "../atoms/buttonAndIcon";

interface ImetierCardProps {
  image: React.ReactNode;
  title: string;
  description: string;
  button: boolean;
}

const MetierCard: React.FC<ImetierCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div
      className="cardContainer"
      style={{
        display: "flex",

        flexDirection: "column",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        borderRadius: "4px",
        marginBottom: "30px",
        maxWidth: "60%",
        maxHeight: "100%",
      }}
    >
      <div
        className="imageContainer"
        style={{
          borderRadius: "4px",
          padding: "0 10px",
          alignItems: "center",
          margin: "10px auto",
        }}
      >
        {image}
      </div>
      <div className="titleContainer">
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "600",
            padding: "0 10px",
            color: "#000000",
            justifyContent: "left",
          }}
        >
          {title}
        </h1>
      </div>
      <div
        className="descriptionContainer"
        style={{
          font: "inter",
          fontSize: "18px",
          color: "#000000",
          fontWeight: "400",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            textAlign: "left",
            color: "#000000A6",
            padding: "0 10px",
          }}
        >
          {description}
        </p>
      </div>
      <div
        className="buttonContainer"
        style={{
          maxWidth: "40%",
          borderRadius: "3px",
          padding: "10px, 15px, 10px, 15px",
          margin: "0 10px 10px",
        }}
      >
        <ButtonAndIconButton text="Découvrir" image={<ArrowRightIcon />} />
      </div>
    </div>
  );
};
export default MetierCard;
