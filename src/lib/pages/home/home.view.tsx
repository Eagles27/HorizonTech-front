import Header from "../../components/molecules/header";
import TeamCard from "../../components/molecules/teamCard";
import ValeurCard from "../../components/molecules/valeurCard";
import EarsIcon from "../../icons/earsIcon";
import teamMembers from "../../../utils/teamMembers.json";
import Footer from "../../components/molecules/footer";

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
      <div
        className="headerContainer"
        style={{
          width: "100%",
          height: "10%",
        }}
      >
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
        <h1 style={{ margin: 0 }}>VIDEO {text}</h1>
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
        className="valuesContainer"
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
      <div
        id="NotreEquipe"
        className="teamContainer"
        style={{ backgroundColor: "#FECDA6" }}
      >
        {/* Le H1 doit être modifié par le component mainTitle */}
        <h1
          style={{
            paddingTop: "60px",
            textAlign: "center",
            margin: 0,
            fontWeight: "600",
            fontSize: "40px",
          }}
        >
          Notre équipe
        </h1>
        <div className="membersContainer" style={{ padding: "5%" }}>
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              description={member.description}
              alignRight={member.alignRight}
            />
          ))}
        </div>
      </div>
      <div className="footerContainer" style={{ width: "100%", height: "30%" }}>
        <Footer />
      </div>
    </div>
  );
};
export default HomeView;
