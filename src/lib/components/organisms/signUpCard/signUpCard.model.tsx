import { useState } from "react";
import SignUpCardView from "../signUpCard/signUpCard.view";

const SignUpCardModel: React.FC = () => {
  const [checkedOption, setCheckedOption] = useState<string | null>(null);

  const handleCheck = (option: string) => {
    setCheckedOption(option);
  };
  return (
    <SignUpCardView handleCheck={handleCheck} checkedOption={checkedOption} />
  );
};

export default SignUpCardModel;
