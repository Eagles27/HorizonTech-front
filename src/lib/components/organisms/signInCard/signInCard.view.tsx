import CheckBox from "../../atoms/checkBox";
import SimpleButton from "../../atoms/simpleButton";
import TextInput from "../../atoms/textInput";

const SignInCardView: React.FC = () => {
  const handleEmailInputChange = (value: string) => {
    console.log("Nouvelle valeur de l'email:", value);
  };
  return (
    <div className="SignInCardComponent" style={{ width: "100%" }}>
      <div
        className="Checkbox"
        style={{ paddingLeft: "145px", display: "flex" }}
      >
        <CheckBox text="Etudiante" />
        <CheckBox text="Marraine" />
      </div>
      <br />
      <TextInput
        placeholder="Prénom"
        onInputChange={handleEmailInputChange}
        marginRight="20px"
        padding="11px 0px 10px 10px"
      />
      <TextInput
        placeholder="Nom de famille "
        onInputChange={handleEmailInputChange}
        padding="11px 95px 10px 10px"
      />
      <br />
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
        marginRight="20px"
        padding="11px 50px 10px 10px"
        typemdp="password"
      />
      <TextInput
        placeholder="Confirmer le mot de passe"
        onInputChange={handleEmailInputChange}
        padding="11px 50px 10px 10px"
        typemdp="password"
      />
      <br />
      <br />
      <br />
      <div className="Button" style={{ paddingRight: "400px" }}>
        <SimpleButton text="M'inscrire" />
      </div>
    </div>
  );
};

export default SignInCardView;
