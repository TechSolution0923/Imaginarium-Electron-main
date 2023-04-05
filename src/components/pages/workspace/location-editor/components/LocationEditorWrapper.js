import * as React from "react";

export default function LocationEditorWrapper(props) {
  return (
    <div className="w-full h-[calc(100vh-112px)] overflow-auto bg-black">
      <div className="w-full h-fit p-10 overflow-auto bg-black grid gap-10 grid-cols-2 4xl:grid-cols-4">
        {props.children}
      </div>
    </div>
  );
}
