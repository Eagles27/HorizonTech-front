import CheckBox from "../../atoms/checkBox";
import SimpleButton from "../../atoms/simpleButton";
import TextInput from "../../atoms/textInput";

interface SignUpCardViewProps {
  checkedOption: string | null;
  handleCheck: (option: string) => void;
}

const SignUpCardView: React.FC<SignUpCardViewProps> = ({
  checkedOption,
  handleCheck,
}) => {
  return (
    <div
      className="SignInCardComponent"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "20px",
        alignItems: "flex-start",
      }}
    >
      <div className="checkBoxContainer" style={{ display: "flex" }}>
        <CheckBox
          text="Etudiante"
          checked={checkedOption === "Etudiante"}
          onChange={() => handleCheck("Etudiante")}
        />
        <CheckBox
          text="Marraine"
          checked={checkedOption === "Marraine"}
          onChange={() => handleCheck("Marraine")}
        />
      </div>
      <div
        className="firstSectionComponent"
        style={{ display: "flex", gap: "15px", width: "100%" }}
      >
        <TextInput placeholder="Prénom" width="40%" onInputChange={() => {}} />
        <TextInput placeholder="Nom" width="60%" onInputChange={() => {}} />
      </div>
      <div
        className="SecondSectionComponent"
        style={{ display: "flex", width: "100%" }}
      >
        <TextInput
          placeholder="Adresse mail"
          width="100%"
          onInputChange={() => {}}
        />
      </div>
      <div
        className="ThirdSectionComponent"
        style={{ display: "flex", gap: "15px", width: "100%" }}
      >
        <TextInput
          placeholder="Mot de passe"
          width="60%"
          typemdp="password"
          onInputChange={() => {}}
        />
        <TextInput
          placeholder="Confirmer le mot de passe"
          width="40%"
          typemdp="password"
          onInputChange={() => {}}
        />
      </div>
      <SimpleButton text="M'inscrire" padding="8px 20px" />
    </div>
  );
};

export default SignUpCardView;
