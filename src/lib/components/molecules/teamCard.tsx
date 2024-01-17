import AvatarIcon from "../../icons/avatarIcon";

interface TeamCardPrompt {
  image?: React.ReactNode;
  name: string;
  description: string;
  alignRight?: boolean;
}

const TeamCard: React.FC<TeamCardPrompt> = ({
  image = <AvatarIcon size={100} />,
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
      {image}
      <div
        className="textsContainer"
        style={{
          marginLeft: alignRight ? "0px" : "10px",
          marginRight: alignRight ? "10px" : "0px",
          textAlign: alignRight ? "right" : "left",
        }}
      >
        <h2 style={{ fontSize: "20px", fontWeight: "600", margin: 0 }}>
          {name}
        </h2>
        <div className="margin" style={{ marginTop: "5px" }} />
        <p style={{ margin: 0, color: "#00000099" }}>{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
