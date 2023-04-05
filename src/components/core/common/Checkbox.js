// import "./style.css";

export default function Checkbox(props) {
  return (
    <label className="flex flex-row items-center text-white text-[12px] leading-5 cursor-pointer">
      <input
        type="checkbox"
        className="mr-3 bg-[#0E0E0E] cursor-pointer 
        w-[14px] h-[14px] border border-[#404040] rounded-[4px] checked:bg-[#0E0E0E] hover:bg-[#0E0E0E] focus:outline-none"
        checked={props.checked}
        onChange={props.onChange}
      />

      {props.children}
    </label>
  );
}
