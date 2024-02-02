interface SimpleInformationCardProps {
  title: string;
  description: string;
}

const SimpleInformationCard: React.FC<SimpleInformationCardProps> = ({
  title,
  description,
}) => {
  return (
    <div
      className="cardContent"
      style={{
        height: "100%",
        width: "100%",
        minHeight: "20vh",
        boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.20)",
        backgroundColor: "#FFF",
        boxSizing: "border-box",
        padding: "3%",
        display: "flex",
        flexDirection: "column",
        gap: "3vh",
      }}
    >
      <h1
        style={{
          margin: 0,
          color: "#FF5B22",
          fontSize: "1.2vw",
          fontWeight: 600,
        }}
      >
        {title}
      </h1>

      <h2
        style={{
          margin: 0,
          color: "#000",
          fontSize: "1.1vw",
          fontWeight: 400,
          textAlign: "center",
        }}
      >
        {description}
      </h2>
    </div>
  );
};

export default SimpleInformationCard;
