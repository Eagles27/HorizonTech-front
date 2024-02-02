import { useSelector } from "react-redux";
import { TRootState } from "../../../../store/store";
import ProfileInformationsView from "./profileInformations.view";

const ProfileInformationsModel: React.FC = () => {
  const formAnswer = useSelector(
    (state: TRootState) => state.formAnswerSlice.formAnswer,
  );
  const titles = [
    "Niveau d'étude",
    "Secteur",
    "Activité de loisir",
    "Type de voyage",
    "Activité bénévoles ou engagement sociaux",
  ];
  return <ProfileInformationsView formAnswer={formAnswer} titles={titles} />;
};

export default ProfileInformationsModel;
