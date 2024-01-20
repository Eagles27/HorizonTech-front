import { useState } from "react";

interface TextInputProps {
  placeholder: string;
  customBorderRadius?: string;
  wasAnError?: boolean;
  padding?: string;
  width?: string;
  marginRight?: string;
  typemdp?: "text" | "password";
  autoFill?: "current-password" | "username" | "new-password";
  id?: string | undefined;
  onInputChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  customBorderRadius = "2px",
  wasAnError = false,
  padding = "11px 12px",
  width = "20%",
  marginRight,
  typemdp = "text",
  autoFill = "off",
  id,
  onInputChange,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onInputChange(event.target.value);
  };

  const border = wasAnError ? "1.5px solid #FF5B22" : "1px solid #767676";

  return (
    <input
      id={id}
      type={typemdp}
      value={inputValue}
      onChange={handleInputChange}
      autoComplete={autoFill}
      style={{
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
        width,
      }}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
