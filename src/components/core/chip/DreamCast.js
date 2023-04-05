import * as React from "react";

export default function DreamCast(props) {
  const [showDreamCast, setShowDreamCast] = React.useState(true);
  return (
    <div>
      {showDreamCast ? (
        <div className="mr-4 mb-2 flex flex-col justify-center items-center justify-between w-20 h-28">
          <div className="flex flex-row items-start">
            <DreamCastImage src={props.src} alt={props.alt} />
            <DreamCastButton
              onClick={() => {
                setShowDreamCast(false);
              }}
            />
          </div>
          <DreamCastText>{props.name}</DreamCastText>
        </div>
      ) : null}
    </div>
  );
}

export const DreamCastImage = (props) => {
  return (
    <img
      className="relative z-0 rounded-[40px] w-20 h-20 border border-[#404040]"
      src={props.src}
      alt={props.alt}
    />
  );
};

export const DreamCastText = (props) => {
  return (
    <label className="uppercase mt-2 text-center text-[9px] font-bold text-white leading-3 tracking-[.21em]">
      {props.children}
    </label>
  );
};

export const DreamCastButton = (props) => {
  return (
    <button className="z-10 -ml-7" onClick={props.onClick}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_3124_17098)">
          <path
            d="M8 14C8 8.47715 12.4772 4 18 4V4C23.5228 4 28 8.47715 28 14V14C28 19.5228 23.5228 24 18 24V24C12.4772 24 8 19.5228 8 14V14Z"
            fill="#DD5E5E"
          />
          <path
            d="M18.94 13.9999L21.8066 11.1399C21.9322 11.0144 22.0027 10.8441 22.0027 10.6666C22.0027 10.4891 21.9322 10.3188 21.8066 10.1933C21.6811 10.0677 21.5108 9.99721 21.3333 9.99721C21.1558 9.99721 20.9855 10.0677 20.86 10.1933L18 13.0599L15.14 10.1933C15.0144 10.0677 14.8442 9.99721 14.6666 9.99721C14.4891 9.99721 14.3188 10.0677 14.1933 10.1933C14.0678 10.3188 13.9972 10.4891 13.9972 10.6666C13.9972 10.8441 14.0678 11.0144 14.1933 11.1399L17.06 13.9999L14.1933 16.8599C14.1308 16.9219 14.0812 16.9956 14.0474 17.0769C14.0135 17.1581 13.9961 17.2453 13.9961 17.3333C13.9961 17.4213 14.0135 17.5084 14.0474 17.5897C14.0812 17.6709 14.1308 17.7446 14.1933 17.8066C14.2553 17.8691 14.329 17.9187 14.4102 17.9525C14.4915 17.9864 14.5786 18.0038 14.6666 18.0038C14.7546 18.0038 14.8418 17.9864 14.923 17.9525C15.0042 17.9187 15.078 17.8691 15.14 17.8066L18 14.9399L20.86 17.8066C20.9219 17.8691 20.9957 17.9187 21.0769 17.9525C21.1581 17.9864 21.2453 18.0038 21.3333 18.0038C21.4213 18.0038 21.5084 17.9864 21.5897 17.9525C21.6709 17.9187 21.7446 17.8691 21.8066 17.8066C21.8691 17.7446 21.9187 17.6709 21.9526 17.5897C21.9864 17.5084 22.0038 17.4213 22.0038 17.3333C22.0038 17.2453 21.9864 17.1581 21.9526 17.0769C21.9187 16.9956 21.8691 16.9219 21.8066 16.8599L18.94 13.9999Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_3124_17098"
            x="0"
            y="0"
            width="36"
            height="36"
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
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_3124_17098"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_3124_17098"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </button>
  );
};

export const PlusButton = () => {
  return (
    <button>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_3124_17071"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="4"
          y="4"
          width="16"
          height="16"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 11H13V5C13 4.447 12.552 4 12 4C11.448 4 11 4.447 11 5V11H5C4.448 11 4 11.447 4 12C4 12.553 4.448 13 5 13H11V19C11 19.553 11.448 20 12 20C12.552 20 13 19.553 13 19V13H19C19.552 13 20 12.553 20 12C20 11.447 19.552 11 19 11Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_3124_17071)">
          <rect width="24" height="24" fill="#1DAEFF" />
        </g>
      </svg>
    </button>
  );
};
