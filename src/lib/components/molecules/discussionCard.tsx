import EmailIcon from "../../icons/emailIcon";
import ButtonWithIcon from "../atoms/buttonWithIcon";

interface DiscussionCardProps {
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  dreamJob?: string;
  avatar?: string;
}

const DiscussionCard: React.FC<DiscussionCardProps> = ({
  firstname,
  lastname,
  email,
  role,
  dreamJob = "",
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
          width: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
      <div
        style={{
          width: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          boxSizing: "border-box",
          paddingRight: "2%",
        }}
      >
        <a
          href={`mailto:${email}`}
          style={{ width: "100%", textDecoration: "none" }}
        >
          <ButtonWithIcon text="Contacter" icon={<EmailIcon />} />
        </a>
      </div>
    </div>
  );
};

export default DiscussionCard;
