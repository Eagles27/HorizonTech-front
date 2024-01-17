interface IProps {
  size?: number;
}

const AvatarIcon: React.FC<IProps> = ({ size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 33.334C30 30.6818 28.9464 28.1383 27.0711 26.2629C25.1957 24.3876 22.6522 23.334 20 23.334C17.3478 23.334 14.8043 24.3876 12.9289 26.2629C11.0536 28.1383 10 30.6818 10 33.334"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.9997 23.3333C23.6816 23.3333 26.6663 20.3486 26.6663 16.6667C26.6663 12.9848 23.6816 10 19.9997 10C16.3178 10 13.333 12.9848 13.333 16.6667C13.333 20.3486 16.3178 23.3333 19.9997 23.3333Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.9997 36.6673C29.2044 36.6673 36.6663 29.2054 36.6663 20.0007C36.6663 10.7959 29.2044 3.33398 19.9997 3.33398C10.7949 3.33398 3.33301 10.7959 3.33301 20.0007C3.33301 29.2054 10.7949 36.6673 19.9997 36.6673Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default AvatarIcon;
