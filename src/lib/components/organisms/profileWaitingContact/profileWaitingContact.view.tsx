import { TUsers } from "../../../../types/user";
import ClockIcon from "../../../icons/clockIcon";
import WaitingContactCard from "../../molecules/waitingContactCard";

interface ProfileWaitingContactViewProps {
  waitingContact: TUsers | null;
  handleAcceptContact: (id: string) => void;
}

const ProfileWaitingContactView: React.FC<ProfileWaitingContactViewProps> = ({
  waitingContact,
  handleAcceptContact,
}) => {
  return waitingContact?.length === 0 ? (
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
        Vous n'avez pas encore de demande de contact en attente, ca ne saurait
        tarder !
      </h2>
    </div>
  ) : (
    <div
      style={{
        height: "100%",
        width: "100%",
        overflowY: "auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr ",
        gridTemplateRows: "1fr 1fr",
        flexGrow: 1,
        gap: "5vh",
        boxSizing: "border-box",
        padding: "2%",
      }}
    >
      {waitingContact?.map((contact) => (
        <div
          key={contact._id}
          className="cardContainer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <WaitingContactCard
            firstname={contact.firstname}
            lastname={contact.lastname}
            onClick={() => handleAcceptContact(contact._id)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProfileWaitingContactView;
