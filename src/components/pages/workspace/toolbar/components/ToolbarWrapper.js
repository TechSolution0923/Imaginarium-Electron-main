import * as React from "react";

export default function ToolbarWrapper(props) {
  const { children } = props;

  return <div className="w-[327px] bg-[#161616]  select-none">{children}</div>;
}
