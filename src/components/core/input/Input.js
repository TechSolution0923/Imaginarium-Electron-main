import * as React from "react";

export default function Input(props) {
  const { label, name, value, onChange, type, placeholder } = props;
  return (
    <div>
      <label className="flex flex-start font-extrabold uppercase text-[9px] text-white leading-5 tracking-[.21rem]">
        {label}
      </label>
      <input
        className="px-2 py-1.5 w-full h-8 bg-[#0E0E0E] border border-[#404040] ring-offset-0 focus:border-white focus:outline-none placeholder-[#5F5F5F] rounded-md text-[12px] text-white"
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
