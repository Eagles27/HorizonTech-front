interface TitleCardProps {
  title: string;
}

const TitleCard: React.FC<TitleCardProps> = ({ title }) => {
  return (
    <div
      className="cardContent"
      style={{
        height: "100%",
        width: "100%",
        minWidth: "10vw",
        boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.20)",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2%",
      }}
    >
      <h2
        style={{
          margin: 0,
          color: "#FF5B22",
          fontSize: "0.8vw",
          fontWeight: 600,
        }}
      >
        {title}
      </h2>
    </div>
  );
};

export default TitleCard;
