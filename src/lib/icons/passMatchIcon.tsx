const PassMatchIcon: React.FC = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_428_9313)">
        <circle cx="50" cy="46" r="45" fill="#FF5B22" />
      </g>
      <path
        d="M13 46L53 69.094V22.906L13 46ZM95 42L49 42V50L95 50V42Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_428_9313"
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
            result="effect1_dropShadow_428_9313"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_428_9313"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default PassMatchIcon;
