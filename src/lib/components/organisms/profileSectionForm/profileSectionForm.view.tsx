import { TForm } from "../../../../types/form";
import { TFormPostBody } from "../../../../types/formAnswer";
import FormSubject from "../../molecules/formSubject";

interface ProfileSectionFormViewProps {
  title: string;
  description: string;
  formSubject: TForm;
  formResponse: TFormPostBody;
  setFormResponse: (formResponse: TFormPostBody) => void;
  handleClick: () => void;
}

const ProfileSectionFormView: React.FC<ProfileSectionFormViewProps> = ({
  title,
  description,
  formSubject,
  formResponse,
  setFormResponse,
  handleClick,
}) => {
  return (
    <div className="pageContent" style={{ height: "100%", width: "100%" }}>
      <div
        className="presentationSection"
        style={{
          height: "30%",
          padding: "3%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "2vw", fontWeight: 600 }}>{title}</h1>
        <p
          style={{
            margin: 0,
            fontSize: "1.1vw",
            fontWeight: 500,
            width: "70%",
            textAlign: "justify",
          }}
        >
          {description}
        </p>

        <div
          className="imageContainer"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src="formImage.jpg" alt="illustration image" />
        </div>
      </div>
      <div
        className="formSection"
        style={{
          minHeight: "1300px",
          backgroundColor: "#FF5B22",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormSubject
          formSubject={formSubject}
          formResponse={formResponse}
          setFormResponse={setFormResponse}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default ProfileSectionFormView;
