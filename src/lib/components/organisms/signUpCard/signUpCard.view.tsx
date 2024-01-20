import { TUserPostBody } from "../../../../types/user";
import CheckBox from "../../atoms/checkBox";
import SimpleButton from "../../atoms/simpleButton";
import TextInput from "../../atoms/textInput";

type TCheckedOption = "Etudiante" | "Marraine";

interface SignUpCardViewProps {
  checkedOption: TCheckedOption;
  formValues: TUserPostBody;
  passwordNotMatching: boolean;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  checkPassword: (password: string, confirmPassword: string) => void;
  handleCheck: (option: TCheckedOption) => void;
  setFormValues: (formValues: TUserPostBody) => void;
  handleSignUp: () => void;
}

const SignUpCardView: React.FC<SignUpCardViewProps> = ({
  checkedOption,
  handleCheck,
  setFormValues,
  formValues,
  handleSignUp,
  passwordNotMatching,
  checkPassword,
  confirmPassword,
  setConfirmPassword,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSignUp();
      }}
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
        <TextInput
          id="firstNameInput"
          placeholder="Prénom"
          width="40%"
          onInputChange={(input) => {
            setFormValues({ ...formValues, firstname: input });
          }}
        />
        <TextInput
          id="lastNameInput"
          placeholder="Nom"
          width="60%"
          onInputChange={(input) => {
            setFormValues({ ...formValues, lastname: input });
          }}
        />
      </div>
      <div
        className="SecondSectionComponent"
        style={{ display: "flex", width: "100%" }}
      >
        <TextInput
          id="emailSignUpInput"
          placeholder="Adresse mail"
          width="100%"
          onInputChange={(input) => {
            setFormValues({ ...formValues, email: input });
          }}
        />
      </div>
      <div
        className="ThirdSectionComponent"
        style={{ display: "flex", gap: "15px", width: "100%" }}
      >
        <TextInput
          id="passwordSignUpInput"
          placeholder="Mot de passe"
          width="60%"
          typemdp="password"
          wasAnError={passwordNotMatching}
          onInputChange={(input) => {
            setFormValues({ ...formValues, password: input });
            checkPassword(input, confirmPassword);
          }}
        />
        <TextInput
          id="confirmPasswordSignUpInput"
          placeholder="Confirmer le mot de passe"
          width="40%"
          typemdp="password"
          wasAnError={passwordNotMatching}
          onInputChange={(input) => {
            setConfirmPassword(input);
            checkPassword(formValues.password, input);
          }}
        />
      </div>
      <SimpleButton type="submit" text="M'inscrire" padding="8px 20px" />
    </form>
  );
};

export default SignUpCardView;
