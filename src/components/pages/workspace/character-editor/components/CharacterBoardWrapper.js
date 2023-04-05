import * as React from "react";

export default function CharacterBoardWrapper(props) {
  const { children } = props;
  return (
    <div className="w-full mt-8">{children}</div>
  );
}
