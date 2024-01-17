import { useState } from "react";

interface TextInputProps {
  placeholder: string;
  customBorderRadius?: string;
  wasAnError?: boolean;
  padding?: string;
  marginRight?: string;
  typemdp?: "text" | "password";
  onInputChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  customBorderRadius = "2px",
  wasAnError = false,
  padding = "11px 12px",
  marginRight = "",
  typemdp = "text",
  onInputChange,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onInputChange(event.target.value);
  };

  const border = wasAnError ? "1px solid #FF0000" : "1px solid #767676";

  return (
    <input
      type={typemdp}
      value={inputValue}
      onChange={handleInputChange}
      style={{
        color: "#A6A6A6",
        fontFamily: "Inter",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        background: "none",
        borderRadius: customBorderRadius,
        border,
        outline: "none",
        padding,
        marginRight,
      }}
      placeholder={placeholder}
    />
  );
};

export default TextInput;