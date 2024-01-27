import SimpleInformationCard from "../../atoms/simpleInformationCard";

interface ProfileInformationsViewProps {
  tempInformations: {
    title: string;
    description: string;
  }[];
}

const ProfileInformationsView: React.FC<ProfileInformationsViewProps> = ({
  tempInformations,
}) => {
  return (
    <div
      className="informationContent"
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
      }}
    >
      <div
        className="firstSection"
        style={{
          width: "90%",
          height: "80%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "20px",
          boxSizing: "border-box",
          padding: "2%",
        }}
      >
        {tempInformations.slice(0, -1).map((information, index) => (
          <SimpleInformationCard
            key={index}
            title={information.title}
            description={information.description}
          />
        ))}
      </div>
      <div
        className="secondSection"
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SimpleInformationCard
          title={tempInformations[tempInformations.length - 1].title}
          description={
            tempInformations[tempInformations.length - 1].description
          }
        />
      </div>
    </div>
  );
};

export default ProfileInformationsView;
