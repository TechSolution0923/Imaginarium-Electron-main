import * as React from "react";

export default function CharacterEditorWrapper(props) {
  return (
    <div className="flex-auto relative h-[calc(100vh-112px)] overflow-auto bg-black">
      {props.children}
    </div>
  );
}
