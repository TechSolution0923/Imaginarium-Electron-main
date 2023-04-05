import React from "react";
import { TrashIcon } from "../../Svg";
import RoleChooser from "./RoleChooser";

const Collabrator = (props) => {
    const { item, onChange } = props;

    // onChange(item.id, role);
    const roleChanged = (role) => {
        onChange(item.id, role)
    }

    return (
        <div className="w-full h-10 flex items-center gap-6 justify-between">
            <div className="flex items-center p-0 gap-5 w-[200px] h-full">
                <div className="avatar placeholder">
                    <div className="bg-[#161616] text-white rounded-full w-10 ">
                        {item.avatar}
                    </div>
                </div>
                <div className="text-xl text-white">
                    {item.name}
                </div>
            </div>
            <div className="w-[400px] h-full p-8 flex items-center text-xl text-[#5F5F5F]">
                {item.gmail}
            </div>
            <RoleChooser role={item.role} setR onChange={(role) => roleChanged(role)} disabled={item.disabled} />
            {
                item.disabled ?
                    <button className="w-10 h-10 flex items-center justify-center rounded text-gray" disabled>
                        <TrashIcon />
                    </button>
                    :
                    <button className="w-10 h-10 flex items-center justify-center rounded hover:bg-[#404040] text-white">
                        <TrashIcon />
                    </button>
            }
        </div>
    )
}

export default Collabrator