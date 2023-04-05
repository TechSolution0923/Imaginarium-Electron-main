import React, { useState } from "react";
import { DropDownIcon } from "../../Svg";

const RoleChooser = (props) => {

    const { role, disabled, onChange } = props;
    const [userRole, setUserRole] = useState(role);
    const [isOpenRole, setOpenRole] = useState(false);
    const handleRoleChange = (val) => {
        setUserRole(val);
        onChange(val);
    }

    return (
        <div className="dropdown w-[20%] ">
            {
                disabled ?
                    <div tabIndex="0"
                        className="px-2 py-1.5 h-12 bg-[#161616] border border-[#404040] cursor-pointer rounded-[4px] w-full flex justify-between relative opacity-30">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 ">
                                <label className="text-white  text-base tracking-widest">
                                    {userRole}
                                </label>
                            </div>

                            <button className="absolute right-2">
                                <DropDownIcon />
                            </button>
                        </div>
                    </div>
                    :
                    <div
                        tabIndex="0"
                        className="px-2 py-1.5 h-12 bg-[#161616] border border-[#404040] cursor-pointer rounded-[4px] w-full flex justify-between relative"
                        onClick={() => {
                            setOpenRole(true);
                        }}
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 ">
                                <label className="text-white  text-base tracking-widest">
                                    {userRole}
                                </label>
                            </div>

                            <button className="absolute right-2">
                                <DropDownIcon />
                            </button>
                        </div>

                    </div>
            }
            {isOpenRole ? (
                <ul
                    tabIndex="0"
                    className="list-none p-0 drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mt-1 shadow bg-[#161616] border border-[#464646] w-full max-h-fit rounded-[4px]"
                >
                    <li
                        className="flex flex-row px-2 py-1.5 h-10 items-center text-center text-white text-base leading-5 border-b border-[#464646] hover:bg-[#5D5D5D] tracking-widest "
                        onClick={(e) => {
                            handleRoleChange(e.currentTarget.textContent);
                            setOpenRole(false);
                        }}
                    >
                        Owner
                    </li>
                    <li
                        className="flex flex-row px-2 py-1.5 h-10 items-center text-center text-white text-base leading-5 border-b border-[#464646] hover:bg-[#5D5D5D] tracking-widest "
                        onClick={(e) => {
                            handleRoleChange(e.currentTarget.textContent);
                            setOpenRole(false);
                        }}
                    >
                        Collaborator
                    </li>
                    <li
                        className="flex flex-row px-2 py-1.5 h-10 items-center text-center text-white text-base leading-5 border-b border-[#464646] hover:bg-[#5D5D5D] tracking-widest "
                        onClick={(e) => {
                            handleRoleChange(e.currentTarget.textContent);
                            setOpenRole(false);
                        }}
                    >
                        Co-Writer
                    </li>
                    <li
                        className="flex flex-row px-2 py-1.5 h-10 items-center text-center text-white text-base leading-5 border-b border-[#464646] hover:bg-[#5D5D5D] tracking-widest "
                        onClick={(e) => {
                            handleRoleChange(e.currentTarget.textContent);
                            setOpenRole(false);
                        }}
                    >
                        Viewer
                    </li>
                </ul>
            ) : null}
        </div>
    )
}

export default RoleChooser