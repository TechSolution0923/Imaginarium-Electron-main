import * as React from "react";

export default function InputText(props) {
  return (
    <input
      className="px-2 py-1.5 w-full h-8 bg-[#161616] border border-[#404040] ring-offset-0 focus:border-white focus:outline-none placeholder-[#5F5F5F] rounded-md text-[12px] text-white"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}
