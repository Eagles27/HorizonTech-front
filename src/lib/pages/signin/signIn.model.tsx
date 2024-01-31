import { useState } from "react";
import SignInView from "./signIn.view";

const SignInModel: React.FC = () => {
  const [signUpView, setSignUpView] = useState(true);

  return <SignInView signUpView={signUpView} setSignUpView={setSignUpView} />;
};

export default SignInModel;
