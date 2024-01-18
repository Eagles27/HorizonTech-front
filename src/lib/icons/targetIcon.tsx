interface IProps {
  size?: number;
}

const TargetIcon: React.FC<IProps> = () => {
  return (
    <svg
      width="262"
      height="262"
      viewBox="0 0 262 262"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M240.842 67.8282C249.141 84.3797 253.812 103.066 253.812 122.812V139.188C253.812 207.015 198.827 262 131 262C63.1725 262 8.1875 207.015 8.1875 139.188V122.812C8.1875 54.985 63.1725 0 131 0C146.289 0 160.95 2.80096 174.48 7.92357C178.797 2.92724 185.106 0 191.801 0C201.656 0 210.404 6.3057 213.521 15.6543L217.633 27.9919L229.971 32.1045C239.319 35.2207 245.625 43.9694 245.625 53.8236C245.625 58.9615 243.901 63.8712 240.842 67.8282Z"
        fill="#FECDA6"
      />
      <path
        d="M219.571 63.7654C230.857 80.6614 237.438 100.968 237.438 122.812V139.188C237.438 197.971 189.784 245.625 131 245.625C72.2162 245.625 24.5625 197.971 24.5625 139.188V122.812C24.5625 64.0287 72.2162 16.375 131 16.375C148.778 16.375 165.538 20.7335 180.269 28.4402L186.377 19.2779C187.586 17.4643 189.622 16.375 191.801 16.375C194.607 16.375 197.099 18.1705 197.986 20.8325L203.393 37.0538C204.208 39.4987 206.126 41.4171 208.571 42.2321L224.792 47.6392C227.454 48.5265 229.25 51.0177 229.25 53.8236C229.25 56.0033 228.161 58.0387 226.347 59.2478L219.571 63.7654Z"
        fill="#F74339"
      />
      <circle
        cx="131"
        cy="122.812"
        r="106.438"
        fill="url(#paint0_linear_209_7825)"
      />
      <circle cx="131" cy="122.812" r="81.875" fill="white" />
      <circle
        cx="131"
        cy="122.812"
        r="57.3125"
        fill="url(#paint1_linear_209_7825)"
      />
      <circle cx="131" cy="122.812" r="32.75" fill="white" />
      <path
        d="M226.875 75.2708C228.359 74.2816 229.25 72.6164 229.25 70.8332V54.4582C229.25 51.5128 226.862 49.125 223.917 49.125H204.688C200.166 49.125 196.5 45.4593 196.5 40.9375V21.7082C196.5 18.7628 194.112 16.375 191.167 16.375C189.384 16.375 187.718 17.2662 186.729 18.7499L173.313 38.8749C172.416 40.2198 171.938 41.8001 171.938 43.4165V53.9211C171.938 56.0926 171.075 58.1751 169.539 59.7106L126.204 103.046C124.032 105.218 122.812 108.163 122.812 111.234V127.609C122.812 134.003 127.997 139.188 134.391 139.188C137.462 139.188 140.407 137.968 142.579 135.796L185.914 92.4606C187.45 90.9251 189.532 90.0625 191.704 90.0625H202.209C203.825 90.0625 205.405 89.584 206.75 88.6874L226.875 75.2708Z"
        fill="#815C13"
      />
      <path
        d="M185.914 76.0856L142.579 119.421C140.407 121.593 137.462 122.812 134.391 122.812C127.997 122.812 122.812 117.628 122.812 111.234C122.812 108.163 124.032 105.218 126.204 103.046L169.539 59.7106C171.075 58.1751 171.938 56.0926 171.938 53.9211V43.4165C171.938 41.8001 172.416 40.2198 173.313 38.8749L186.377 19.2779C187.586 17.4643 189.622 16.375 191.801 16.375C194.607 16.375 197.099 18.1705 197.986 20.8325L203.393 37.0538C204.208 39.4987 206.126 41.4171 208.571 42.2321L224.792 47.6392C227.454 48.5265 229.25 51.0177 229.25 53.8236C229.25 56.0033 228.161 58.0387 226.347 59.2478L206.75 72.3124C205.405 73.209 203.825 73.6875 202.209 73.6875H191.704C189.532 73.6875 187.45 74.5501 185.914 76.0856Z"
        fill="#FEAA01"
      />
      <defs>
        <linearGradient
          id="paint0_linear_209_7825"
          x1="131"
          y1="16.375"
          x2="131"
          y2="229.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF5B22" />
          <stop offset="1" stop-color="#FF6860" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_209_7825"
          x1="131"
          y1="65.5"
          x2="131"
          y2="180.125"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF5B22" />
          <stop offset="1" stop-color="#FF6860" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TargetIcon;
