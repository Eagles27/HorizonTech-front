import Footer from "../../components/molecules/footer";
import Header from "../../components/molecules/header";
import SignInCardModel from "../../components/organisms/signInCard/signInCard.model";

const SignInView: React.FC = () => {
  return (
    <div className="appContainer" style={{ height: "100vh" }}>
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
        className="contentContainer"
        style={{ display: "flex", height: "70%" }}
      >
        <SignInCardModel />
        <div
          className="imageContainer"
          style={{ backgroundColor: "red", width: "40%" }}
        ></div>
      </div>
      <div
        className="footerContainer"
        style={{ width: "100%", height: "10%", paddingTop: "30px" }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default SignInView;
