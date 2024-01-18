interface CheckBoxProps {
  text: string;
  checked: boolean;
  onChange: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ text, checked, onChange }) => {
  const containerStyles = {
    //aligner texte et checkbox
    display: "flex",
    alignItems: "center",
    marginRight: "10px",
  };

  const labelStyles = {
    fontFamily: "Inter",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    marginLeft: "3px",
    color: checked ? "#FF5B22" : "#000000",
  };

  return (
    <div style={containerStyles}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <label style={labelStyles}>{text}</label>
    </div>
  );
};

export default CheckBox;
