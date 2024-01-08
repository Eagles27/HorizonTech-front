import Header from "../../components/molecules/header";

const ChatView: React.FC = () => {
  return (
    <div
      className="appContainer"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="headerContainer" style={{ width: "100%", height: "10%" }}>
        <Header />
      </div>
      <div
        className="columnsContainer"
        style={{ height: "90%", display: "flex" }}
      >
        <div
          className="contactsColumn"
          style={{ width: "30%", backgroundColor: "blue" }}
        >
          <h1>Contact</h1>
        </div>
        <div
          className="chatColumn"
          style={{ width: "100%", backgroundColor: "purple" }}
        >
          <h1>Chat</h1>
        </div>
        <div
          className="informationColumn"
          style={{ width: "30%", backgroundColor: "red" }}
        >
          <h1>Information</h1>
        </div>
      </div>
    </div>
  );
};
export default ChatView;
