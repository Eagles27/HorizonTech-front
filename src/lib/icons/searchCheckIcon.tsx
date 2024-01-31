interface IProps {
  size?: number;
}

const SearchCheckIcon: React.FC<IProps> = ({ size = 56 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 57 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.167 25.6667L23.8337 30.3333L33.167 21"
        stroke="#FF5B22"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.1667 44.3333C36.476 44.3333 44.8333 35.976 44.8333 25.6667C44.8333 15.3574 36.476 7 26.1667 7C15.8574 7 7.5 15.3574 7.5 25.6667C7.5 35.976 15.8574 44.3333 26.1667 44.3333Z"
        stroke="#FF5B22"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M49.5001 49.0001L39.4668 38.9668"
        stroke="#FF5B22"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchCheckIcon;
