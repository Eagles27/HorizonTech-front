import SimpleButton from "../../atoms/simpleButton";
import TextInput from "../../atoms/textInput";

const SignUpCardView: React.FC = () => {
  const handleEmailInputChange = (value: string) => {
    console.log("Nouvelle valeur de l'email:", value);
  };
  return (
    <div className="SignUpCardComponent" style={{ width: "100%" }}>
      <br />
      <TextInput
        placeholder="Adresse mail "
        onInputChange={handleEmailInputChange}
        padding="11px 290px 10px 10px"
      />
      <br />
      <br />
      <TextInput
        placeholder="Mot de passe"
        onInputChange={handleEmailInputChange}
        padding="11px 290px 10px 10px"
        typemdp="password"
      />

      <br />
      <br />
      <br />
      <div className="Button" style={{ paddingRight: "370px" }}>
        <SimpleButton text="Me connecter" />
      </div>
    </div>
  );
};

export default SignUpCardView;
