import { useEffect, useState } from "react";
import { TUser } from "../../../../types/user";
import ProfileSectionFormView from "./profileSectionForm.view";
import { useSelector } from "react-redux";
import { TRootState, useAppDispatch } from "../../../../store/store";
import { getFormSubject } from "../../../../store/formSubjectSlice";
import { TFormPostBody } from "../../../../types/formAnswer";
import { toast } from "react-toastify";
import { postFormAnswer } from "../../../../store/formAnswerSlice";
import { getUserInfo } from "../../../../store/userSlice";

interface ProfileSectionFormProps {
  user: TUser | null;
}

const ProfileSectionFormModel: React.FC<ProfileSectionFormProps> = ({
  user,
}) => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const formSubject = useSelector(
    (state: TRootState) => state.formSubjectSlice.subject,
  );
  const token = useSelector((state: TRootState) => state.userSlice.token);

  const [formResponse, setFormResponse] = useState<TFormPostBody>({
    responses: formSubject?.map((subject) => ({
      question: subject.question,
      response: "",
    })),
  });

  useEffect(() => {
    dispatch(getFormSubject());
    if (user?.role === "Etudiante") {
      setTitle(
        "Félicitations pour ton inscription sur HorizonTech en tant que Filleule !",
      );
      setDescription(
        "Pour maximiser ton expérience, prends un moment pour répondre à quelques questions dans notre questionnaire. Cela nous aidera à te mettre en contact avec des utilisatrices partageant tes centresd'intérêt et travaillant dans les domaines que tu recherches. Nous sommes impatients de te connecter avec des personnes inspirantes !",
      );
    } else {
      setTitle(
        "Félicitations pour ton inscription sur HorizonTech en tant que Marraine !",
      );
      setDescription(
        "Dorénavant, nous vous invitons à remplir notre questionnaire composé de quelques questions. Cela nous permettra de vous mettre en relation avec des futurs filleuls partageant vos centres d'intérêt et désirant évoluer dans le même domaine que celui que vous avez indiqué. Votre participation nous aidera à créer des connections significatives. Merci de prendre quelques instants pour compléter le questionnaire !",
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const checkRequiredFields = (): boolean => {
    let requiredFieldsMissing = false;
    formResponse.responses.forEach((response) => {
      if (response.response === "") {
        requiredFieldsMissing = true;
      }
    });
    return requiredFieldsMissing;
  };

  const handleClick = () => {
    if (checkRequiredFields()) {
      toast.error("Veuillez répondre à toutes les questions");
      return;
    }
    try {
      dispatch(
        postFormAnswer({ formAnswer: formResponse, headerValue: token }),
      ).then(() => {
        dispatch(getUserInfo(token));
        //TO-DO Rajouter un dispatch pour récupérer les réponses du questionnaire
      });
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message);
        return;
      }
      toast.error("Une erreur est survenue");
    }
  };

  return (
    <ProfileSectionFormView
      title={title}
      description={description}
      formSubject={formSubject}
      formResponse={formResponse}
      setFormResponse={setFormResponse}
      handleClick={handleClick}
    />
  );
};

export default ProfileSectionFormModel;
