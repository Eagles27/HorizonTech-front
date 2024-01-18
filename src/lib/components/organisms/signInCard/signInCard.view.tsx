import SimpleButton from "../../atoms/simpleButton";
import TextInput from "../../atoms/textInput";

const SignInCardView: React.FC = () => {
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
        onInputChange={() => {}}
      />
      <TextInput
        placeholder="Mot de passe"
        width="70%"
        onInputChange={() => {}}
        typemdp="password"
      />
      <SimpleButton text="Me connecter" padding="8px 20px" />
    </div>
  );
};

export default SignInCardView;
