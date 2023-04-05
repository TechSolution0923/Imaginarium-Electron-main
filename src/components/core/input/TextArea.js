import * as React from "react";

export default function TextArea(props) {
  const { label, placeholder } = props;
  return (
    <div>
      <label className="mb-1 text-[9px] leading-5 font-extrabold tracking-[.21em] text-white">
        {label}
      </label>

      <textarea
        name="synopsis"
        className="px-2 py-1.5 w-full h-20 bg-[#0E0E0E] border border-[#404040] focus:border-white placeholder-[#5F5F5F] focus:outline-none rounded-md text-[12px] focus:ring-1 text-white"
        placeholder={placeholder}
      />
    </div>
  );
}
