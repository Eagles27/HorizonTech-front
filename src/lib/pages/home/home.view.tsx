import Header from "../../components/molecules/header";

interface IProps {
  text: string;
}

const HomeView: React.FC<IProps> = ({ text }) => {
  return (
    <div
      className="appContainer"
      style={{
        width: "100vw",
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      <div className="headerContainer" style={{ width: "100%", height: "10%" }}>
        <Header />
      </div>
      <div
        className="videoContainer"
        style={{
          height: "90%",
          backgroundColor: "green",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>VIDEO {text}</h1>
      </div>
      <div
        className="storyContainer"
        style={{
          backgroundColor: "blue",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Notre Histoire</h1>
      </div>
      <div
        className="teamContainer"
        style={{
          backgroundColor: "red",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Notre Equipe</h1>
      </div>
    </div>
  );
};
export default HomeView;
