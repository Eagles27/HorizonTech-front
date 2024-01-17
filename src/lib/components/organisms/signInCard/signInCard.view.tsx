import React, { useState } from "react";
import CheckBox from "../../atoms/checkBox";
import SimpleButton from "../../atoms/simpleButton";
import TextInput from "../../atoms/textInput";

// Choisir meilleure méthode pour récup les données pour backend

const SignInCardView: React.FC = () => {
  // Methode 1 : recup par groupe de données
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    adresseMail: "",
    motdepasse: "",
    confirmationmotdepasse: "",
  });

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };
  const handleSubmit = () => {
    console.log("Données inscription:", formData);
  };

  // Methode 2 : recopier ça pour chaque donnée
  // const handleEmailInputChange = (value: string) => {
  //   console.log("Nouvelle valeur de l'email:", value);
  // };

  return (
    <div className="SignInCardComponent">
      <div
        className="Checkbox"
        style={{ paddingLeft: "150px", display: "flex" }}
      >
        <CheckBox text="Etudiante" />
        <CheckBox text="Marraine" />
      </div>
      <br />
      <TextInput
        placeholder="Prénom"
        onInputChange={(value) => handleInputChange("prenom", value)}
        marginRight="20px"
      />
      <TextInput
        placeholder="Nom de famille "
        onInputChange={(value) => handleInputChange("nom", value)}
        width="30%"
      />
      <br />
      <br />
      <TextInput
        placeholder="Adresse mail "
        onInputChange={(value) => handleInputChange("adresseMail", value)}
        width="56%"
      />
      <br />
      <br />
      <TextInput
        placeholder="Mot de passe"
        onInputChange={(value) => handleInputChange("motdepasse", value)}
        marginRight="20px"
        typemdp="password"
        width="30%"
      />
      <TextInput
        placeholder="Confirmer le mot de passe"
        onInputChange={(value) =>
          handleInputChange("confirmationmotdepasse", value)
        }
        typemdp="password"
      />
      <br />
      <br />
      <br />
      <div className="Button" style={{ paddingRight: "400px" }}>
        {/* mettre le handlesubmit ici si choisit méthode 1 */}
        <SimpleButton text="M'inscrire" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default SignInCardView;
