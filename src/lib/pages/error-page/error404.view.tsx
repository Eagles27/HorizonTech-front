import Footer from "../../components/molecules/footer";
import Header from "../../components/molecules/header";

const Error404View: React.FC = () => {
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
          textAlign: "center",
          padding: "40px",
        }}
      >
        <div
          className="text404"
          style={{
            color: "#FF5B22",
            fontFamily: "Inter",
            fontSize: "128px",
            fontStyle: "normal",
            fontWeight: 800,
            lineHeight: "normal",
          }}
        >
          404
          <div
            className="textphrase404"
            style={{
              fontSize: "40px",
              fontWeight: 500,
            }}
          >
            Oops... Cette page est introuvable.
          </div>
        </div>
      </div>

      <div
        className="footerContainer"
        style={{ width: "100%", height: "20%", paddingTop: "5px" }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Error404View;
