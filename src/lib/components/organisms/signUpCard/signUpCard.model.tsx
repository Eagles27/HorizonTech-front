import { useState } from "react";
import SignUpCardView from "../signUpCard/signUpCard.view";
import { TUserPostBody } from "../../../../types/user";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../../../store/store";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../../../store/userSlice";

type TCheckedOption = "Etudiante" | "Marraine";

const SignUpCardModel: React.FC = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [checkedOption, setCheckedOption] =
    useState<TCheckedOption>("Etudiante");

  const handleCheck = (option: TCheckedOption) => {
    setCheckedOption(option);
    setFormValues({ ...formValues, role: option });
  };

  const [formValues, setFormValues] = useState<TUserPostBody>({
    role: checkedOption,
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    finishedSignup: false,
  });

  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [passwordNotMatching, setPasswordNotMatching] =
    useState<boolean>(false);

  const [requiredFieldsMissing, setRequiredFieldsMissing] = useState({
    firstname: false,
    lastname: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const checkPassword = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      setPasswordNotMatching(true);
    } else {
      setPasswordNotMatching(false);
    }
  };

  const checkRequiredFields = () => {
    if (formValues.firstname === "") {
      requiredFieldsMissing.firstname = true;
    }
    if (formValues.lastname === "") {
      requiredFieldsMissing.lastname = true;
    }
    if (formValues.email === "") {
      requiredFieldsMissing.email = true;
    }
    if (formValues.password === "") {
      requiredFieldsMissing.password = true;
    }
    if (confirmPassword === "") {
      requiredFieldsMissing.confirmPassword = true;
    }
    setRequiredFieldsMissing(requiredFieldsMissing);
  };

  const minimumPasswordLength = () => {
    if (formValues.password.length < 8) {
      return true;
    }
    return false;
  };

  const handleSignUp = () => {
    try {
      checkRequiredFields();
      if (
        requiredFieldsMissing.firstname === true ||
        requiredFieldsMissing.lastname === true ||
        requiredFieldsMissing.email === true ||
        requiredFieldsMissing.password === true ||
        requiredFieldsMissing.confirmPassword === true
      ) {
        throw new Error("Veuillez remplir tous les champs");
      }
      if (minimumPasswordLength()) {
        throw new Error("Le mot de passe doit contenir au moins 8 caractères");
      }
      dispatch(signUpUser(formValues)).then(() => {
        navigate("/profile");
      });
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message);
        setRequiredFieldsMissing({
          firstname: false,
          lastname: false,
          email: false,
          password: false,
          confirmPassword: false,
        });
        return;
      }
      toast.error("Une erreur est survenue");
    }
  };

  return (
    <SignUpCardView
      handleCheck={handleCheck}
      checkedOption={checkedOption}
      setFormValues={setFormValues}
      formValues={formValues}
      handleSignUp={handleSignUp}
      passwordNotMatching={passwordNotMatching}
      checkPassword={checkPassword}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
    />
  );
};

export default SignUpCardModel;
