import { TFormAnswers } from "../../../../types/formAnswer";
import SimpleInformationCard from "../../atoms/simpleInformationCard";

interface ProfileInformationsViewProps {
  formAnswer: TFormAnswers;
  titles: string[];
}

const ProfileInformationsView: React.FC<ProfileInformationsViewProps> = ({
  formAnswer,
  titles,
}) => {
  return (
    <div
      className="informationContent"
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
      }}
    >
      <div
        className="firstSection"
        style={{
          width: "90%",
          height: "80%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "20px",
          boxSizing: "border-box",
          padding: "2%",
        }}
      >
        {formAnswer.responses.slice(0, -1).map((information, index) => (
          <SimpleInformationCard
            key={index}
            title={titles[index]}
            description={information.response}
          />
        ))}
      </div>
      <div
        className="secondSection"
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SimpleInformationCard
          title={titles[titles.length - 1]}
          description={
            formAnswer.responses[formAnswer.responses.length - 1].response
          }
        />
      </div>
    </div>
  );
};

export default ProfileInformationsView;
