import * as React from "react";
import { Link } from "react-router-dom";

export default function SecondaryLink(props) {
  const { label, to } = props;
  
  return (
    <Link
      className="flex justify-center mt-3 no-underline bg-neutral-840 opacity-[.90] ring-offset-[1px] font-bold text-[10px] text-center leading-5 text-[#1daeff] tracking-wide"
      to={to}
    >
      {label}
    </Link>
  );
}
