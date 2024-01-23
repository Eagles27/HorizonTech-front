import { TForm } from "../../../types/form";
import CheckBox from "../atoms/checkBox";
import SimpleButton from "../atoms/simpleButton";

interface FormSubjectProps {
  formSubject: TForm;
}

const FormSubject: React.FC<FormSubjectProps> = ({ formSubject }) => {
  // TODO: Add logic to handle checkbox state
  return (
    <div
      className="formContainer"
      style={{
        backgroundColor: "white",
        boxSizing: "border-box",
        borderRadius: "3px",
        padding: "3%",
      }}
    >
      {formSubject.map((subject, index) => (
        <div className="formSectionContainer" key={index}>
          <h2 style={{ maxWidth: "79%", fontSize: "1.2vw" }}>
            {index + 1}
            {". "}
            {subject.question}
          </h2>
          {subject.response.map((response, index) => (
            <CheckBox
              labelSize="1vw"
              key={index}
              text={response}
              checked={false}
              onChange={() => console.log("Hello")}
            />
          ))}
        </div>
      ))}
      <div
        className="buttonContainer"
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "3%",
        }}
      >
        <SimpleButton
          text="Soumettre"
          width="20%"
          padding="12px 0px"
          onClick={() => console.log("Hello")}
        />
      </div>
    </div>
  );
};

export default FormSubject;
