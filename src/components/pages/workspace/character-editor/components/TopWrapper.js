import * as React from "react";

export default function TopWrapper(props) {
  return (
    <div className="grid grid-cols-2 gap-32 h-[228px]">{props.children}</div>
  );
}
