import ProfileInformationsView from "./profileInformations.view";

const ProfileInformationsModel: React.FC = () => {
  const tempInformation = [
    {
      title: "Niveau d'étude",
      description: "Etudiante universitaire",
    },
    {
      title: "Secteur",
      description: "Santé",
    },
    {
      title: "Activité de loisir",
      description: "Loisirs créatifs (arts,musiques…)",
    },
    {
      title: "Type de voyage",
      description:
        " Culturelle : visites de musées, sites historiques, monuments, etc.",
    },
    {
      title: "Activité bénévoles ou engagement sociaux",
      description: "Non, pas actuellement impliquée",
    },
  ];
  return <ProfileInformationsView tempInformations={tempInformation} />;
};

export default ProfileInformationsModel;
