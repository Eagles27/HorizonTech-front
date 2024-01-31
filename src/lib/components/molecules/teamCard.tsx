interface TeamCardPrompt {
  avatar: string;
  name: string;
  description: string;
  alignRight?: boolean;
}

const TeamCard: React.FC<TeamCardPrompt> = ({
  avatar,
  name,
  description,
  alignRight = false,
}) => {
  return (
    <div
      className="cardMemberContainer"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: alignRight ? "row-reverse" : "row",
      }}
    >
      <img src={avatar} />
      <div
        className="textsContainer"
        style={{
          marginLeft: alignRight ? "0px" : "10px",
          marginRight: alignRight ? "10px" : "0px",
          textAlign: alignRight ? "right" : "left",
        }}
      >
        <h2 style={{ fontSize: "1.7vw", fontWeight: "600", margin: 0 }}>
          {name}
        </h2>
        <div className="margin" style={{ marginTop: "5px" }} />
        <p style={{ margin: 0, color: "#00000099", fontSize: "1.1vw" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
