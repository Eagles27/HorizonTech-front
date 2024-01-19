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
    <div
      className="SignUpCardComponent"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "20px",
        alignItems: "flex-start",
      }}
    >
      <TextInput
        placeholder="Adresse mail"
        width="99%"
        padding="11px 0px 11px 11px"
        onInputChange={(email) => setFormValues({ ...formValues, email })}
      />
      <TextInput
        placeholder="Mot de passe"
        width="70%"
        onInputChange={(password) => {
          setFormValues({ ...formValues, password: password });
        }}
        typemdp="password"
      />
      <SimpleButton
        text="Me connecter"
        padding="8px 20px"
        onClick={handleSignIn}
      />
    </div>
  );
};

export default SignInCardView;
