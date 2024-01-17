import SimpleButton from "../../atoms/simpleButton";
import TextInput from "../../atoms/textInput";

const SignUpCardView: React.FC = () => {
  // Voir quelle méthode on utilise avant de tout recopier
  //Description méthode dans SignInCard.View
  const handleEmailInputChange = (value: string) => {
    console.log("Nouvelle valeur de l'email:", value);
  };
  return (
    <div className="SignUpCardComponent">
      <br />
      <TextInput
        placeholder="Adresse mail "
        onInputChange={handleEmailInputChange}
        width="56%"
      />
      <br />
      <br />
      <TextInput
        placeholder="Mot de passe"
        onInputChange={handleEmailInputChange}
        width="56%"
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
