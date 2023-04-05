import React from "react";
import { CopyLinkIcon, DetailIcon, IconicIcon, PenIcon } from "../../../Svg";

const CommentDialog = (props) => {
    const { setState } = props;
    return (
        <div className="z-10 absolute top-[15rem] right-[25%] flex flex-col">
            <div className="flex flex-col items-end ">
                <ul
                    tabIndex="0"
                    className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content shadow bg-[#2B2B2B] border border-[#161616] rounded-[4px] w-[400px] p-4  "
                >
                    <div className="flex  gap-4 items-start justify-start">
                        <div className="avatar placeholder w-10">
                            <div className="bg-[#2b2b2b] text-white rounded-full ">
                                <img src="assets/img/dashboard/Avatar15.png" alt="Avatar" />
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-4">
                            <div className="flex items-center justify-between gap-4 w-full">
                                <div className="flex gap-2">
                                    <label className="text-white text-md tracking-widest">
                                        Irina
                                    </label>
                                    <label className="text-md text-[#5F5F5F]">
                                        16 hours ago
                                    </label>
                                </div>
                                <div className="flex gap-3 ">
                                    {/* <div tabIndex={0} className="text-white uppercase text-xs tracking-[.21rem] w-7 h-7 hover:bg-[#404040] rounded flex items-center justify-center " onClick={() => setSmallOpen(true)}><MoreVerticalIcon /></div> */}
                                    <div className="dropdown dropdown-end h-7">
                                        <button tabIndex="0">
                                            <DetailIcon className="hover:bg-[#404040] cursor-pointer rounded w-7 h-7" />
                                        </button>
                                        <ul
                                            tabIndex="0"
                                            className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mr-3 shadow bg-[#161616] border border-[#464646] w-[148px] h-16 mt-0 rounded-[4px]"
                                        >
                                            <div
                                                className="flex items-center px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D]"
                                            >
                                                <PenIcon />
                                                <label className="p-0 ml-2 text-[9px] font-extrabold uppercase text-white leading-5 tracking-[.21em]">
                                                    Open
                                                </label>
                                            </div>
                                            <div
                                                className="flex items-center px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D]"
                                            >
                                                <CopyLinkIcon />
                                                <label className="p-0 ml-2 text-[9px] font-extrabold uppercase text-white leading-5 tracking-[.21em]">
                                                    Copy Link
                                                </label>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="text-white uppercase text-xs tracking-[.21rem] w-7 h-7 hover:bg-[#404040] rounded flex items-center justify-center cursor-pointer" onClick={() => setState(false)} ><IconicIcon /></div>
                                </div>

                            </div>
                            <div className="text-base text-white">
                                Need to change this paragraph. Because we already updated hero information
                            </div>
                            <div className="text-md text-[#5F5F5F]">
                                2 minutes ago
                            </div>
                            <div className="text-base text-white">
                                Need to change this paragraph. Because we already updated hero information
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
            <div className="flex flex-col items-end ">
                <ul
                    tabIndex="0"
                    className=" drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content shadow bg-[#2B2B2B] border border-[#161616] rounded-[4px] w-[400px] p-4  "
                >
                    <div className="flex  gap-4 items-start justify-start">
                        <div className="avatar placeholder w-10">
                            <div className="bg-[#2b2b2b] text-white rounded-full ">
                                <img src="assets/img/dashboard/Avatar13.png" alt="Avatar" />
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-4">
                            <div className="flex items-center justify-between gap-4 w-full">
                                <div className="flex gap-2">
                                    <label className="text-white text-md tracking-widest">
                                        Julia
                                    </label>
                                    <label className="text-md text-[#5F5F5F]">
                                        Just now
                                    </label>
                                </div>
                                <div className="flex gap-3 ">
                                    <div className="text-white uppercase text-xs tracking-[.21rem] w-7 h-7 hover:bg-[#404040] rounded flex items-center justify-center cursor-pointer" onClick={() => setState(false)}><IconicIcon /></div>
                                </div>

                            </div>
                            <div className="text-base text-white">
                                Need to change this paragraph. Because we already updated hero information
                            </div>
                            <div className="flex gap-2 justify-between">
                                <div className="text-md text-[#5F5F5F]">
                                    2 minutes ago
                                </div>
                                <div className="flex gap-3 ">
                                    <div className="text-white uppercase text-xs tracking-[.21rem] w-7 h-7 hover:bg-[#404040] rounded flex items-center justify-center cursor-pointer" onClick={() => setState(false)} ><IconicIcon /></div>
                                </div>
                            </div>
                            <div className="text-base text-white">
                                Need to change this paragraph. Because we already updated hero information
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
            <div className="bg-[#CDCDCD] rounded border border-white px-2 mr-10 text-black  w-[420px] text-[14px] mt-3" >finback cat shark chub. Pearl danion Manta Ray pearl perfch</div>
        </div>
    )
}

export default CommentDialog