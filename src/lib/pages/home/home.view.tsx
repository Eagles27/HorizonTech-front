import Header from "../../components/molecules/header";
import ValeurCard from "../../components/molecules/valeurCard";
import EarsIcon from "../../icons/earsIcon";

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
          display: "block",
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
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div className="containerExample">
          <ValeurCard
            title="Hello"
            image={<EarsIcon />}
            description="jdkdksksksskskskksskskskskskskskk"
          />
        </div>
        <div className="containerExample">
          <ValeurCard
            title="Hello"
            image={<EarsIcon />}
            description="jdkdksksksskskskksskskskskskskskk"
          />
        </div>
      </div>
    </div>
  );
};
export default HomeView;
