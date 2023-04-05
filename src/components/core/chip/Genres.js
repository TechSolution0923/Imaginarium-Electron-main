import * as React from "react";

export default function Genres(props) {
  const [genresShow, setGenresShow] = React.useState(true);
  return (
    <div>
      {genresShow ? (
        <div className="mr-2 mb-2 flex justify-center items-center justify-between w-auto h-6 rounded-[15px] px-2 py-0.5 border border-[#404040]">
          <GenresImage src={props.src} alt={props.alt} />
          <GenresText>{props.children}</GenresText>
          <GenresButton
            onClick={() => {
              setGenresShow(false);
            }}
          />
        </div>
      ) : null}
    </div>
  );
}

export const GenresImage = (props) => {
  return <img className="w-4 h-4" src={props.src} alt={props.alt} />;
};

export const GenresText = (props) => {
  return (
    <label className="mr-1 ml-1 text-[9px] font-bold text-white leading-5 tracking-[.21em]">
      {props.children}
    </label>
  );
};

export const GenresButton = (props) => {
  return (
    <button onClick={props.onClick}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_3124_7384"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="4"
          y="3"
          width="9"
          height="9"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.94283 8L11.8048 5.138C12.0655 4.87733 12.0655 4.456 11.8048 4.19533C11.5442 3.93467 11.1228 3.93467 10.8622 4.19533L8.00017 7.05733L5.13817 4.19533C4.8775 3.93467 4.45617 3.93467 4.1955 4.19533C3.93483 4.456 3.93483 4.87733 4.1955 5.138L7.0575 8L4.1955 10.862C3.93483 11.1227 3.93483 11.544 4.1955 11.8047C4.3255 11.9347 4.49617 12 4.66683 12C4.8375 12 5.00817 11.9347 5.13817 11.8047L8.00017 8.94267L10.8622 11.8047C10.9922 11.9347 11.1628 12 11.3335 12C11.5042 12 11.6748 11.9347 11.8048 11.8047C12.0655 11.544 12.0655 11.1227 11.8048 10.862L8.94283 8Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_3124_7384)">
          <rect width="16" height="16" fill="#5F5F5F" />
        </g>
      </svg>
    </button>
  );
};
