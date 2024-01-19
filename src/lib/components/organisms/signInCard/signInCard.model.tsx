import { useState } from "react";
import { useAppDispatch } from "../../../../store/store";
import { loginUser } from "../../../../store/userSlice";
import SignInCardView from "./signInCard.view";
import { toast } from "react-toastify";

const SignInCardModel: React.FC = () => {
  const dispatch = useAppDispatch();

  const [requiredFieldsMissing, setRequiredFieldsMissing] = useState({
    email: false,
    password: false,
  });
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const checkRequiredFields = () => {
    if (formValues.email === "") {
      requiredFieldsMissing.email = true;
    }
    if (formValues.password === "") {
      requiredFieldsMissing.password = true;
    }
    setRequiredFieldsMissing(requiredFieldsMissing);
  };

  const handleSignIn = () => {
    try {
      checkRequiredFields();
      if (
        requiredFieldsMissing.email === true ||
        requiredFieldsMissing.password === true
      ) {
        throw new Error("Veuillez remplir tous les champs");
      }
      dispatch(loginUser(formValues));
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message);
        return;
      }
      toast.error("Une erreur est survenue");
    }
  };

  return (
    <SignInCardView
      handleSignIn={handleSignIn}
      setFormValues={setFormValues}
      formValues={formValues}
    />
  );
};

export default SignInCardModel;
