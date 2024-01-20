import { TUserPostBodyLogin } from "../../../../types/user";
import SimpleButton from "../../atoms/simpleButton";
import TextInput from "../../atoms/textInput";

interface SignInCardViewProps {
  handleSignIn: () => void;
  setFormValues: (formValues: TUserPostBodyLogin) => void;
  formValues: TUserPostBodyLogin;
}

const SignInCardView: React.FC<SignInCardViewProps> = ({
  handleSignIn,
  setFormValues,
  formValues,
}) => {
  return (
    <form
      className="SignUpCardComponent"
      onSubmit={(e) => {
        e.preventDefault();
        handleSignIn();
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "20px",
        alignItems: "flex-start",
      }}
    >
      <TextInput
        id="emailInput"
        placeholder="Adresse mail"
        width="99%"
        padding="11px 0px 11px 11px"
        autoFill="username"
        onInputChange={(email) => setFormValues({ ...formValues, email })}
      />
      <TextInput
        id="passwordInput"
        placeholder="Mot de passe"
        width="70%"
        onInputChange={(password) => {
          setFormValues({ ...formValues, password: password });
        }}
        typemdp="password"
        autoFill="current-password"
      />
      <SimpleButton type="submit" text="Me connecter" padding="8px 20px" />
    </form>
  );
};

export default SignInCardView;
