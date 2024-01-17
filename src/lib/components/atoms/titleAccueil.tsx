interface ItitleProps {
  title: string;
}

const TitleAccueil: React.FC<ItitleProps> = ({ title }) => {
  const titleStyle = {
    color: "#000",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  };

  return (
    <div style={{ textAlign: "center", margin: "0 auto" }}>
      <h1 style={titleStyle}>{title}</h1>
    </div>
  );
};

export default TitleAccueil;
