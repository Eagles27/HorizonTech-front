import AcceptMatchIcon from "../../../icons/acceptMatchIcon";
import PassMatchIcon from "../../../icons/passMatchIcon";
import IconButton from "../../atoms/iconButton";
import TitleCard from "../../atoms/titleCard";
import AvatarPresentation from "../../molecules/avatarPresentation";

interface ProfileTrouveTaMarraineViewProps {
  tempData: string[];
}

const ProfileTrouveTaMarraineView: React.FC<
  ProfileTrouveTaMarraineViewProps
> = ({ tempData }) => {
  return (
    <div
      className="cardContent"
      style={{
        height: "100%",
        width: "40%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#FFF",
        boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.20)",
        boxSizing: "border-box",
        padding: "1%",
        margin: "2%",
        gap: "20px",
        flexGrow: 1,
      }}
    >
      <AvatarPresentation
        firstname="Mélissa"
        lastname="Dupont"
        role="Marraine"
      />
      <div
        className="informationContainer"
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {tempData.map((data, index) => (
          <TitleCard key={index} title={data} />
        ))}
      </div>
      <div
        className="buttonContainer"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "10%",
        }}
      >
        <IconButton icon={<PassMatchIcon />} />
        <IconButton icon={<AcceptMatchIcon />} />
      </div>
    </div>
  );
};

export default ProfileTrouveTaMarraineView;
