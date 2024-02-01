import ProfileMesDiscussionsView from "./profileMesDiscussions.view";

const ProfileMesDiscussionsModel: React.FC = () => {
  const tempData = [
    {
      firstname: "Marie",
      lastname: "Dupont",
      role: "Marraine",
      dreamJob: "Santé",
    },
    {
      firstname: "Marie",
      lastname: "Dupont",
      role: "Marraine",
      dreamJob: "Santé",
    },
    {
      firstname: "Marie",
      lastname: "Dupont",
      role: "Marraine",
      dreamJob: "Santé",
    },
    {
      firstname: "Marie",
      lastname: "Dupont",
      role: "Marraine",
      dreamJob: "Santé",
    },
  ];
  return <ProfileMesDiscussionsView tempData={tempData} />;
};

export default ProfileMesDiscussionsModel;
