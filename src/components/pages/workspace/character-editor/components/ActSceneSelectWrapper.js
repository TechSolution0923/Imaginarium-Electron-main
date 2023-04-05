import * as React from "react";

export default function ActSceneSelectWrapper(props) {
  return (
    <div className="absolute z-10 grid grid-cols-2 gap-2 top-0 left-[calc(50%-164px)] w-[328px] p-4 bg-black rounded-xl">
      {props.children}
    </div>
  );
}
