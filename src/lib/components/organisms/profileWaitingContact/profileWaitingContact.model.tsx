import ProfileWaitingContactView from "./profileWaitingContact.view";

const ProfileWaitingContactModel: React.FC = () => {
  const tempData = [
    {
      lastname: "Dupont",
      firstname: "Marie",
    },
    {
      lastname: "Dupont",
      firstname: "Marie",
    },
    {
      lastname: "Dupont",
      firstname: "Marie",
    },
    {
      lastname: "Dupont",
      firstname: "Marie",
    },
    {
      lastname: "Dupont",
      firstname: "Marie",
    },
    {
      lastname: "Dupont",
      firstname: "Marie",
    },
  ];

  return <ProfileWaitingContactView tempData={tempData} />;
};

export default ProfileWaitingContactModel;
