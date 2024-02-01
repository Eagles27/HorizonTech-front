interface DiscussionCardProps {
  firstname: string;
  lastname: string;
  role: string;
  dreamJob: string;
  avatar?: string;
}

const DiscussionCard: React.FC<DiscussionCardProps> = ({
  firstname,
  lastname,
  role,
  dreamJob,
  avatar = "avatarImage.png",
}) => {
  return (
    <div
      className="cardContent"
      style={{
        height: "100%",

        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.20)",
        boxSizing: "border-box",
        gap: "2vw",
        padding: "1%",
      }}
    >
      <img
        src={avatar}
        alt="image de profile"
        style={{ width: "20%", height: "100%", objectFit: "contain" }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2vw",
          fontSize: "1.4vw",
          fontWeight: 300,
        }}
      >
        <h2 style={{ margin: 0, fontWeight: 600, fontSize: "1.4vw" }}>
          {firstname} {lastname}
        </h2>
        <p style={{ fontStyle: "italic" }}>
          {role}
          {", "}
          {dreamJob}
        </p>
      </div>
    </div>
  );
};

export default DiscussionCard;
