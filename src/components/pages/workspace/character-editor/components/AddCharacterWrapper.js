import * as React from "react";

export default function AddCharacterWrapper(props) {
  return (
    <div className="absolute flex justify-center items-center w-[120px] h-[228px] top-0 left-[calc(50%-60px)] pt-10">
      {props.children}
    </div>
  );
}
