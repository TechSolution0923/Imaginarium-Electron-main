import * as React from "react";
import { Link } from "react-router-dom";

export default function PrimaryLink(props) {
  const { label, to, handleClick } = props;
  return (
    <Link
      className="mt-4 flex justify-center rounded-md px-[9px] py-[6px] text-center w-[100px] h-8 text-white bg-gradient-to-r from-[#FEAC6D] to-[#AE61ED] font-bold text-[10px] tracking-[.25em] leading-5"
      to={to}
      onClick={() => handleClick()}
    >
      {label}
    </Link>
  );
}
