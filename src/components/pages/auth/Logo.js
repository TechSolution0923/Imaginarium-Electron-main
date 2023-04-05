import * as React from "react";

export default function Logo() {
  return (
    <>
      <img
        className="ml-2 w-10 h-10"
        src="assets/img/Union1.png"
        alt="Union1"
      />
      <img
        className="ml-4 w-50 h-6 items-baseline"
        src="assets/img/imaginarium.png"
        alt="imaginarium"
      />
      <div className="ml-2 -mt-2 w-5 h-2 font-bold text-sm text-[#5F5F5F] ">
        1.0
      </div>
    </>
  );
}
