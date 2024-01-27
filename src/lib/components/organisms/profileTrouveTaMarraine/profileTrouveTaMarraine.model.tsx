import ProfileTrouveTaMarraineView from "./profileTrouveTaMarraine.view";

const ProfileTrouveTaMarraineModel: React.FC = () => {
  const tempData = [
    "Santé",
    "Loisirs créatifs (arts,musiques…)",
    " Culturelle : visites de musées, sites historiques",
  ];
  return <ProfileTrouveTaMarraineView tempData={tempData} />;
};

export default ProfileTrouveTaMarraineModel;
