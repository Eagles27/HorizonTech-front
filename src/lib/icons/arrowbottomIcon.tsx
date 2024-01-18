interface IProps {
  size?: number;
}

const ArrowBottomIcon: React.FC<IProps> = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 3.3335V12.6668"
        stroke="#FF5B22"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 8L8.33333 12.6667L3.66667 8"
        stroke="#FF5B22"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowBottomIcon;
