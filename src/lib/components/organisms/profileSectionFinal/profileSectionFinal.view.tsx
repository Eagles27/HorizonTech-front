import { TUser } from "../../../../types/user";
import ArrowRightIcon from "../../../icons/arrowRightIcon";
import WorkInProgressIcon from "../../../icons/workInProgessIcon";
import ButtonWithIcon from "../../atoms/buttonWithIcon";
import ProfileNavButton from "../../atoms/profileNavButton";
import AvatarPresentation from "../../molecules/avatarPresentation";
import ProfileInformationsModel from "../profileInformations/profileInformations.model";
import ProfileTrouveTaMarraineModel from "../profileTrouveTaMarraine/profileTrouveTaMarraine.model";
import ProfileWaitingContactModel from "../profileWaitingContact/profileWaitingContact.model";

interface ProfileSectionFinalViewProps {
  user: TUser;
  linkTitles: string[];
  linkActive: string;
  setLinkActive: (link: string) => void;
  handleDisconnect: () => void;
}

const ProfileSectionFinalView: React.FC<ProfileSectionFinalViewProps> = ({
  user,
  linkTitles,
  linkActive,
  setLinkActive,
  handleDisconnect,
}) => {
  return (
    <div
      className="appContent"
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#FECDA6",
        boxSizing: "border-box",
        padding: "2%",
        gap: "20px",
      }}
    >
      <div
        className="firstColumn"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: "#FFF",
          boxShadow: " 0px 1px 5px 0px rgba(0, 0, 0, 0.20)",
          minHeight: "70vh",
          width: "20%",
          boxSizing: "border-box",
          padding: "2%",
        }}
      >
        <AvatarPresentation
          firstname={user.firstname}
          lastname={user.lastname}
          role={user.role}
        />
        <nav
          className="navSection"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            gap: "10px",
            marginBottom: "10%",
          }}
        >
          {linkTitles.map((linkTitle, index) => (
            <ProfileNavButton
              key={index}
              text={linkTitle}
              isActive={linkTitle === linkActive}
              onClick={() => setLinkActive(linkTitle)}
            />
          ))}
        </nav>
        <ButtonWithIcon
          icon={<ArrowRightIcon />}
          text="Se déconnecter"
          onClick={handleDisconnect}
        />
      </div>
      <div
        className="secondColumn"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFF",
          boxShadow: " 0px 1px 5px 0px rgba(0, 0, 0, 0.20)",
          minHeight: "80vh",
          maxHeight: "80vh",
          width: "80%",
        }}
      >
        {(() => {
          switch (linkActive) {
            case "Informations":
              return <ProfileInformationsModel />;
            case "Trouve ta marraine":
              return <ProfileTrouveTaMarraineModel />;
            case "Demande en attente":
              return <ProfileWaitingContactModel />;
            default:
              return <WorkInProgressIcon />;
          }
        })()}
      </div>
    </div>
  );
};

export default ProfileSectionFinalView;
