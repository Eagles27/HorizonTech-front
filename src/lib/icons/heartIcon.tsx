interface IProps {
  size?: number;
}

const HeartIcon: React.FC<IProps> = ({ size = 56 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 57 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.8337 32.6667C48.3103 29.26 51.8337 25.1767 51.8337 19.8333C51.8337 16.4297 50.4816 13.1655 48.0749 10.7588C45.6681 8.35208 42.4039 7 39.0003 7C34.8937 7 32.0003 8.16667 28.5003 11.6667C25.0003 8.16667 22.107 7 18.0003 7C14.5967 7 11.3325 8.35208 8.92579 10.7588C6.51907 13.1655 5.16699 16.4297 5.16699 19.8333C5.16699 25.2 8.66699 29.2833 12.167 32.6667L28.5003 49L44.8337 32.6667Z"
        stroke="#FF5B22"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.4994 11.666L21.5928 18.5727C21.1187 19.0433 20.7424 19.6031 20.4856 20.2198C20.2289 20.8366 20.0967 21.498 20.0967 22.166C20.0967 22.834 20.2289 23.4955 20.4856 24.1122C20.7424 24.7289 21.1187 25.2887 21.5928 25.7593C23.5061 27.6727 26.5628 27.7427 28.5928 25.9227L33.4228 21.4893C34.6334 20.3908 36.2097 19.7823 37.8444 19.7823C39.4792 19.7823 41.0554 20.3908 42.2661 21.4893L49.1728 27.696"
        stroke="#FF5B22"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.4997 35.0007L37.833 30.334"
        stroke="#FF5B22"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.4997 42.0007L30.833 37.334"
        stroke="#FF5B22"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HeartIcon;
