import { useEffect, useState } from "react";
import SignInView from "./signIn.view";
import { useSelector } from "react-redux";
import { TRootState } from "../../../store/store";
import { useNavigate } from "react-router-dom";

const SignInModel: React.FC = () => {
  const [signUpView, setSignUpView] = useState(true);
  const isAuth = useSelector((state: TRootState) => state.userSlice.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/profile");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return <SignInView signUpView={signUpView} setSignUpView={setSignUpView} />;
};

export default SignInModel;
