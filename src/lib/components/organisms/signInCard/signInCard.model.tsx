import { useState } from "react";
import { useAppDispatch } from "../../../../store/store";
import { loginUser } from "../../../../store/userSlice";
import SignInCardView from "./signInCard.view";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignInCardModel: React.FC = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

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
      dispatch(loginUser(formValues)).then(() => {
        navigate("/profile");
      });
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message);
        setRequiredFieldsMissing({ email: false, password: false });
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
