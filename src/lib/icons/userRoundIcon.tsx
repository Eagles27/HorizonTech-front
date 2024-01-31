interface IProps {
  size?: number;
}

const UserRoundIcon: React.FC<IProps> = ({ size = 56 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 57 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42.5003 49.0007C42.5003 44.0499 40.5337 39.302 37.033 35.8013C33.5323 32.3006 28.7844 30.334 23.8337 30.334C18.883 30.334 14.135 32.3006 10.6343 35.8013C7.13365 39.302 5.16699 44.0499 5.16699 49.0007"
        stroke="#FF5B22"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.8337 30.3333C30.277 30.3333 35.5003 25.11 35.5003 18.6667C35.5003 12.2233 30.277 7 23.8337 7C17.3903 7 12.167 12.2233 12.167 18.6667C12.167 25.11 17.3903 30.3333 23.8337 30.3333Z"
        stroke="#FF5B22"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51.8335 46.6661C51.8335 38.8028 47.1669 31.4995 42.5002 27.9995C44.0342 26.8486 45.2608 25.3373 46.0715 23.5994C46.8822 21.8615 47.2521 19.9506 47.1482 18.0357C47.0444 16.1208 46.4702 14.261 45.4763 12.6209C44.4824 10.9809 43.0996 9.61109 41.4502 8.63281"
        stroke="#FF5B22"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserRoundIcon;
