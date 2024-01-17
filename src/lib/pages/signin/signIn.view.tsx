import NavBarSign from "../../components/molecules/navBarSign";
import Footer from "../../components/molecules/footer";
import Header from "../../components/molecules/header";

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
        style={{
          display: "flex",
          height: "70%",
        }}
      >
        <div
          className="SignContainer"
          style={{
            backgroundColor: "white",
            textAlign: "center",
            marginTop: "110px",
            width: "60%",
          }}
        >
          <NavBarSign />
        </div>
        <div className="imageContainer" style={{ width: "40%" }}>
          <img
            src="ImgSignUpIn.jpg"
            alt="Image de la bannière de la page d'accueil"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              paddingLeft: "50px",
              paddingTop: "30px",
            }}
          />
        </div>
      </div>
      <br />
      <div
        className="footerContainer"
        style={{ width: "100%", height: "30%", paddingTop: "30px" }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default SignInView;
