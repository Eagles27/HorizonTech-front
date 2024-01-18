import NavBarSign from "../../components/molecules/navBarSign";
import Footer from "../../components/molecules/footer";
import Header from "../../components/molecules/header";
import SignInCardModel from "../../components/organisms/signInCard/signInCard.model";
import SignUpCardModel from "../../components/organisms/signUpCard/signUpCard.model";
import { useState } from "react";

const SignInView: React.FC = () => {
  const [signUpView, setSignUpView] = useState(true);
  return (
    <div
      className="appContainer"
      style={{ height: "100vh", width: "100vw", overflowY: "scroll" }}
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
        className="contentContainer"
        style={{
          display: "flex",
          minHeight: "70%",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <div
          className="SignContainer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            height: "100%",
            width: "50%",
          }}
        >
          <NavBarSign
            onValueChange={(signUpView) => setSignUpView(signUpView)}
          />
          {signUpView ? <SignUpCardModel /> : <SignInCardModel />}
        </div>
        <div
          className="imageContainer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="ImgSignUpIn.jpg"
            alt="Image de la bannière de la page d'accueil"
            style={{
              maxWidth: "70%",
              maxHeight: "70%",
            }}
          />
        </div>
      </div>
      <br />
      <div
        className="footerContainer"
        style={{ width: "100%", height: "20%", paddingTop: "5px" }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default SignInView;
