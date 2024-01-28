import WaitingContactCard from "../../molecules/waitingContactCard";

interface ProfileWaitingContactViewProps {
  tempData: {
    lastname: string;
    firstname: string;
  }[];
}

const ProfileWaitingContactView: React.FC<ProfileWaitingContactViewProps> = ({
  tempData,
}) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        overflowY: "auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr ",
        gridTemplateRows: "1fr 1fr",
        flexGrow: 1,
        gap: "5vh",
        boxSizing: "border-box",
        padding: "2%",
      }}
    >
      {tempData.map((data) => (
        <div
          className="cardContainer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <WaitingContactCard
            firstname={data.firstname}
            lastname={data.lastname}
          />
        </div>
      ))}
    </div>
  );
};

export default ProfileWaitingContactView;
