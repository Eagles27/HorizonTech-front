import { useEffect, useState } from "react";
import { TUser } from "../../../../types/user";
import ProfileSectionFinalView from "./profileSectionFinal.view";
import { TRootState, useAppDispatch } from "../../../../store/store";
import { disconnectUser } from "../../../../store/userSlice";
import { useNavigate } from "react-router-dom";
import {
  getFormAnswerById,
  resetFormAnswer,
} from "../../../../store/formAnswerSlice";
import { useSelector } from "react-redux";

interface ProfileSectionFinalModelProps {
  user: TUser;
}

const ProfileSectionFinalModel: React.FC<ProfileSectionFinalModelProps> = ({
  user,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useSelector((state: TRootState) => state.userSlice.token);

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

  useEffect(() => {
    dispatch(getFormAnswerById({ id: user._id, headerValue: token }));
  }, [dispatch, user, token]);

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
