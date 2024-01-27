import { useState } from "react";
import { TUser } from "../../../../types/user";
import ProfileSectionFinalView from "./profileSectionFinal.view";
import { useAppDispatch } from "../../../../store/store";
import { disconnectUser } from "../../../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { resetFormAnswer } from "../../../../store/formAnswerSlice";

interface ProfileSectionFinalModelProps {
  user: TUser;
}

const ProfileSectionFinalModel: React.FC<ProfileSectionFinalModelProps> = ({
  user,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const linksTitle =
    user.role === "Etudiante"
      ? [
          "Informations",
          "Favoris Fiche métier",
          "Trouve ta marraine",
          "Mes discussions",
        ]
      : [
          "Informations",
          "Demande en attente",
          "Ecole proche de chez vous",
          "Mes discussions",
        ];

  const [linkActive, setLinkActive] = useState<string>("Informations");

  const handleDisconnect = () => {
    dispatch(resetFormAnswer());
    dispatch(disconnectUser());
    navigate("/");
  };

  return (
    <ProfileSectionFinalView
      user={user}
      linkTitles={linksTitle}
      linkActive={linkActive}
      setLinkActive={setLinkActive}
      handleDisconnect={handleDisconnect}
    />
  );
};

export default ProfileSectionFinalModel;
