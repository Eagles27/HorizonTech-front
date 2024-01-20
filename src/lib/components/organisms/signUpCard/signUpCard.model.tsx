import { useState } from "react";
import SignUpCardView from "../signUpCard/signUpCard.view";
import { TUserPostBody } from "../../../../types/user";

type TCheckedOption = "Etudiante" | "Marraine";

const SignUpCardModel: React.FC = () => {
  const [checkedOption, setCheckedOption] =
    useState<TCheckedOption>("Etudiante");

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

  const checkPassword = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      setPasswordNotMatching(true);
    } else {
      setPasswordNotMatching(false);
    }
  };

  const handleCheck = (option: TCheckedOption) => {
    setCheckedOption(option);
  };

  const handleSignUp = () => {
    console.log(formValues);
  };

  console.log(checkedOption);
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
