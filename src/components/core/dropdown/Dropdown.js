import * as React from "react";

// icons
import { DropDownIcon } from "../../Svg";

export const Dropdown = (props) => {
  const { menus, label } = props;
  const [currentMenu, setCurrentMenu] = React.useState(menus[0]);
  const [openDropdown, setOpenDropdown] = React.useState(false);

  return (
    <div className="dropdown">
      {label && (
        <label className="flex flex-start font-extrabold uppercase leading-5 text-[9px] text-white tracking-[.21em]">
          {label}
        </label>
      )}
      <div
        tabIndex="0"
        className="px-2 py-1.5 h-8 bg-[#0E0E0E] border border-[#404040] rounded-[4px]"
        name="projects"
        id="projects"
        onClick={() => {
          setOpenDropdown(true);
        }}
      >
        <div className="flex justify-between">
          <label className="text-center text-white text-[12px] leading-5">
            {currentMenu}
          </label>

          <button>
            <DropDownIcon />
          </button>
        </div>
      </div>

      {openDropdown ? (
        <ul
          tabIndex="0"
          className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mt-1 shadow bg-[#0E0E0E] border-x border-t border-[#464646] w-full rounded-[4px]"
        >
          {menus &&
            menus.map((menu, index) => (
              <li
                key={index}
                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D] cursor-pointer"
                onClick={() => {
                  setCurrentMenu(menu);
                  setOpenDropdown(false);
                }}
              >
                {menu}
              </li>
            ))}
        </ul>
      ) : null}
    </div>
  );
};
