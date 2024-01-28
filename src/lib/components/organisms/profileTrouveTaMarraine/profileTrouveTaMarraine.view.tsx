import { TUser } from "../../../../types/user";
import AcceptMatchIcon from "../../../icons/acceptMatchIcon";
import ClockIcon from "../../../icons/clockIcon";
import PassMatchIcon from "../../../icons/passMatchIcon";
import IconButton from "../../atoms/iconButton";
import SimpleButton from "../../atoms/simpleButton";
import TitleCard from "../../atoms/titleCard";
import AvatarPresentation from "../../molecules/avatarPresentation";

interface ProfileTrouveTaMarraineViewProps {
  tempData: string[];
  marraine: TUser | null;
  handleNextMarraine: () => void;
  handleAddMarraine: () => void;
  handleRefreshMarraine: () => void;
}

const ProfileTrouveTaMarraineView: React.FC<
  ProfileTrouveTaMarraineViewProps
> = ({
  tempData,
  marraine,
  handleNextMarraine,
  handleAddMarraine,
  handleRefreshMarraine,
}) => {
  return marraine === null ? (
    <div
      className="errorContent"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <ClockIcon />
      <h2
        style={{
          margin: 0,
          width: "60%",
          color: "#FF5B22",
          fontSize: "1.2vw",
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        En attendant que d’autres marraines arrivent... Clique sur le bouton
        ci-dessous pour revoir celles déjà passées.
      </h2>
      <SimpleButton
        text="Voir les marraines passées"
        width="20%"
        onClick={handleRefreshMarraine}
      />
    </div>
  ) : (
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
        firstname={marraine?.firstname || ""}
        lastname={marraine?.lastname || ""}
        role={marraine?.role || ""}
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
        <IconButton icon={<PassMatchIcon />} onClick={handleNextMarraine} />
        <IconButton icon={<AcceptMatchIcon />} onClick={handleAddMarraine} />
      </div>
    </div>
  );
};

export default ProfileTrouveTaMarraineView;
