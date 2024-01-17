import { useState } from "react";

interface TextInputProps {
  placeholder: string;
  customBorderRadius?: string;
  wasAnError?: boolean;
  padding?: string;
  onInputChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  customBorderRadius = "2px",
  wasAnError = false,
  padding = "8px 12px",
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
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      style={{
        fontSize: "12px",
        fontFamily: "Poppins",
        fontStyle: "italic",
        fontWeight: "250",
        lineHeight: "150%",
        letterSpacing: "-0.12px",
        background: "none",
        borderRadius: customBorderRadius,
        border,
        outline: "none",
        padding,
        width: "100%",
      }}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
