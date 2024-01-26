import { TForm } from "../../../types/form";
import { TFormPostBody } from "../../../types/formAnswer";
import CheckBox from "../atoms/checkBox";
import SimpleButton from "../atoms/simpleButton";

interface FormSubjectProps {
  formSubject: TForm;
  formResponse: TFormPostBody;
  setFormResponse: (formResponse: TFormPostBody) => void;
}

const FormSubject: React.FC<FormSubjectProps> = ({
  formSubject,
  formResponse,
  setFormResponse,
}) => {
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
      {formSubject.map((subject, questionIndex) => (
        <div className="formSectionContainer" key={questionIndex}>
          <h2 style={{ maxWidth: "79%", fontSize: "1.2vw" }}>
            {questionIndex + 1}
            {". "}
            {subject.question}
          </h2>
          {subject.response.map((response, responseIndex) => (
            <CheckBox
              labelSize="1vw"
              key={responseIndex}
              text={response}
              checked={
                formResponse.responses[questionIndex]?.response === response
                  ? true
                  : false
              }
              onChange={() => {
                const newResponses = [...formResponse.responses];
                const responseIndex = newResponses.findIndex(
                  (r) => r.question === subject.question,
                );

                if (responseIndex !== -1) {
                  newResponses[responseIndex].response = response;
                } else {
                  newResponses.push({
                    question: subject.question,
                    response: response,
                  });
                }

                setFormResponse({
                  ...formResponse,
                  responses: newResponses,
                });
                console.log(formResponse);
              }}
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
          onClick={() => console.log(formResponse)}
        />
      </div>
    </div>
  );
};

export default FormSubject;
