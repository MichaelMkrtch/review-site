type StarIconProps = {
  color: string;
};

export function StarIcon({ color, ...props }: StarIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill="none"
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M15 .594a2.229 2.229 0 0 0-2.014 1.277L9.583 8.739a1.06 1.06 0 0 0-.026.049 1.041 1.041 0 0 0-.05.008l-7.493 1.11a2.229 2.229 0 0 0-1.322 3.832l5.486 5.29.013.011a.064.064 0 0 1 .019.058v.009L4.903 26.75v.003a2.25 2.25 0 0 0 3.27 2.372l6.75-3.568a.193.193 0 0 1 .154 0l6.75 3.566a2.248 2.248 0 0 0 3.272-2.37l-1.307-7.65v-.007c-.004-.008-.002-.021 0-.03a.064.064 0 0 1 .017-.028l.013-.01 5.484-5.293a2.229 2.229 0 0 0-1.322-3.83l-7.492-1.11a1.041 1.041 0 0 0-.05-.008 1.06 1.06 0 0 0-.025-.05l-3.403-6.867A2.229 2.229 0 0 0 15 .594Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function MagnifyingGlassIcon({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      viewBox="-0.57 -0.57 16 16"
      {...props}
    >
      <g
        stroke="#D3D4D9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.14}
      >
        <path d="M6.369 12.206a5.838 5.838 0 1 0 0-11.675 5.838 5.838 0 0 0 0 11.675ZM14.33 14.33l-3.716-3.716" />
      </g>
    </svg>
  );
}
