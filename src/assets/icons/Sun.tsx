interface ISunProps {
  fill: string;
}

const Sun = ({ fill }: ISunProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className="sun"
    >
      <g clipPath="url(#clip0_216_924)">
        <path
          d="M4.99984 7.08335C6.15043 7.08335 7.08317 6.15061 7.08317 5.00002C7.08317 3.84943 6.15043 2.91669 4.99984 2.91669C3.84924 2.91669 2.9165 3.84943 2.9165 5.00002C2.9165 6.15061 3.84924 7.08335 4.99984 7.08335Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 0.416687V1.25002"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 8.75V9.58333"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.7583 1.75836L2.34997 2.35003"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.6499 7.65002L8.24157 8.24169"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.416504 5H1.24984"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.75 5H9.58333"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.7583 8.24169L2.34997 7.65002"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.6499 2.35003L8.24157 1.75836"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_216_859">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Sun;
