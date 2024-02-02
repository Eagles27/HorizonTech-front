import { TUsers } from "../../../../types/user";
import ClockIcon from "../../../icons/clockIcon";
import DiscussionCard from "../../molecules/discussionCard";

interface ProfileMesDiscussionsViewProps {
  contacts: TUsers | null;
}

const ProfileMesDiscussionsView: React.FC<ProfileMesDiscussionsViewProps> = ({
  contacts,
}) => {
  return contacts?.length === 0 || contacts === null ? (
    <div
      className="errorContent"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <ClockIcon />
      <h2
        style={{
          margin: 0,
          width: "60%",
          color: "#FF5B22",
          fontSize: "1.2vw",
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        Vous n'avez pas encore de contacts, commencez à en ajouter !
      </h2>
    </div>
  ) : (
    <div
      style={{
        height: "100%",
        width: "100%",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        flexGrow: 1,
        gap: "5vh",
        boxSizing: "border-box",
        padding: "3%",
      }}
    >
      {contacts?.map((contact) => (
        <div
          key={contact._id}
          className="cardContainer"
          style={{
            width: "80%",
            height: "15vh",
            maxHeight: "150px",
          }}
        >
          <DiscussionCard
            firstname={contact.firstname}
            lastname={contact.lastname}
            email={contact.email}
            role={contact.role}
            dreamJob={contact.formAnswer?.responses[1].response}
          />
        </div>
      ))}
    </div>
  );
};

export default ProfileMesDiscussionsView;
