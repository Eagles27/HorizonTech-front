import { TUser } from "../../../types/user";
import Footer from "../../components/molecules/footer";
import Header from "../../components/molecules/header";
import ProfileSectionFinalModel from "../../components/organisms/profileSectionFinal/profileSectionFinal.model";
import ProfileSectionFormModel from "../../components/organisms/profileSectionForm/profileSectionForm.model";

interface ProfileViewProps {
  user: TUser | null;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user }) => {
  return (
    <div
      className="appContainer"
      style={{ height: "100vh", width: "100vw", overflowY: "scroll" }}
    >
      <div className="headerContainer" style={{ width: "100%", height: "10%" }}>
        <Header />
      </div>
      <div className="contentContainer">
        {user?.finishedSignup ? (
          <ProfileSectionFinalModel user={user} />
        ) : (
          <ProfileSectionFormModel user={user} />
        )}
      </div>
      <div
        className="footerContainer"
        style={{ width: "100%", height: "30%", paddingTop: "40px" }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default ProfileView;
