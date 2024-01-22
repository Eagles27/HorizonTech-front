interface IvaleurCardProps {
  image: React.ReactNode;
  title: string;
  description: string;
}

const ValeurCard: React.FC<IvaleurCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div
      className="cardContainer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <div className="imageContainer" style={{ marginBottom: "20px" }}>
        {image}
      </div>
      <div className="titleContainer">
        <h1 style={{ fontSize: "1.5vw", margin: "0 5px", fontWeight: "600" }}>
          {title}
        </h1>
      </div>
      <div className="descriptionContainer" style={{ padding: "0 10%" }}>
        <p
          style={{ fontSize: "1.1vw", textAlign: "center", color: "#000000A6" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ValeurCard;
