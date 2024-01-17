interface ItitleCardProps {
  texte: string;
}

const TitleCard: React.FC<ItitleCardProps> = ({ texte }) => {
  return (
    <div
      className="titleContainer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <div className="texteContainer">
        <h1 style={{ fontSize: "32px" }}>{texte}</h1>
      </div>
    </div>
  );
};

export default TitleCard;
