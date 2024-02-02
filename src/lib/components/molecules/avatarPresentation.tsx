interface AvatarPresentationProps {
  firstname: string;
  lastname: string;
  role: string;
  imageUrl?: string;
}

const AvatarPresentation: React.FC<AvatarPresentationProps> = ({
  firstname,
  lastname,
  role,
  imageUrl = "/avatarImage.png",
}) => {
  return (
    <div
      className="avatarPresentationContent"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <img src={imageUrl} alt="profile picture" />
      <h2 style={{ margin: 0, fontSize: "1.4vw", fontWeight: 600 }}>
        {firstname} {lastname}
      </h2>
      <h3
        style={{
          margin: 0,
          fontSize: "1vw",
          color: "rgba(0, 0, 0, 0.30)",
          fontWeight: 400,
        }}
      >
        {role}
      </h3>
    </div>
  );
};

export default AvatarPresentation;
