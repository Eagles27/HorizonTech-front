const AcceptMatchIcon: React.FC = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_428_9316)">
        <circle cx="50" cy="46" r="45" fill="#FF5B22" />
      </g>
      <path
        d="M50 20V71"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M76 46L25 46"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <defs>
        <filter
          id="filter0_d_428_9316"
          x="0"
          y="0"
          width="100"
          height="100"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_428_9316"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_428_9316"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default AcceptMatchIcon;
