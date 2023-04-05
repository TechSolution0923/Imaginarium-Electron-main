import React, { useState } from "react";
import { DropDownIcon } from "../../Svg";
const ExportModal = (props) => {
    const { setshowExportModal, projectType, setProjectType } = props;
    const [showExport, setShowExport] = useState(false);
    return (
        <>
            <div className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] z-10 fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto bg-[#2B2B2B] border border-[#161616] rounded-md">
                <div className="edit-modal-header flex flex-row justify-between items-center py-[14px] w-full h-8 border-b border-[#161616]">
                    <label className="ml-[24px] text-[9px] text-white font-extrabold leading-5 tracking-[.21em]">
                        EXPORT PROJECT
                    </label>
                    <button
                        className="mr-[10px] hover:bg-[#4F4F4F]"
                        onClick={() => {
                            setshowExportModal(false);
                        }}
                    >
                        <img
                            className="w-[20px] h-[20px]"
                            src="assets/img/dashboard/close.png"
                            alt="close"
                        />
                    </button>
                </div>
                <div className="edit-modal-content px-[24px] py-4 border-b border-[#161616]">
                    <div className="flex flex-col">
                        <div className="save">
                            <label className="text-white text-[9px] font-extrabold leading-5 tracking-[.21em]">
                                WHERE TO SAVE
                            </label>
                            <div className="mt-1 flex justify-between items-center bg-[#161616] border border-[#404040] w-full h-8 rounded-[4px]">
                                <label className="ml-2 text-[12px] leading-5 text-white">
                                    Documents
                                </label>
                                <input type="file" id="upload-file" className="" hidden />
                                <label className="cursor-pointer" htmlFor="upload-file">
                                    <img
                                        className="mr-1.5"
                                        src="assets/img/dashboard/folder.png"
                                        alt="folder"
                                    />
                                </label>
                            </div>
                            <label className="flex mt-3 text-white text-[9px] font-extrabold leading-5 tracking-[.21em]">
                                PROJECT FORMAT
                            </label>

                            <div className="flex w-full dropdown">
                                <div
                                    tabIndex="0"
                                    className="w-full h-8 bg-[#161616] border border-[#404040] rounded-[4px] flex items-center justify-between"
                                    onClick={() => {
                                        setShowExport(true);
                                    }}
                                    name="projects"
                                    id="projects"
                                >
                                    <label className="ml-2 text-center text-white text-[12px] leading-5">
                                        {projectType}
                                    </label>

                                    <button className="mr-1.5">
                                        <DropDownIcon />
                                    </button>
                                </div>

                                {showExport ? (
                                    <ul
                                        tabIndex="0"
                                        className="menu menu-compact dropdown-content mt-[40px] bg-[#161616] w-full h-[56px] rounded-[4px]"
                                    >
                                        <li
                                            className="bg-[#161616] flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border border-[#404040] hover:bg-[#5D5D5D]"
                                            onClick={() => {
                                                setProjectType("Microsoft Word Document (*.docx)");
                                                setShowExport(false);
                                            }}
                                        >
                                            Microsoft Word Document (*.docx)
                                        </li>
                                        <li
                                            className="bg-[#161616] flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-x border-[#404040] hover:bg-[#5D5D5D]"
                                            onClick={() => {
                                                setProjectType("HTML Document (*.html)");
                                                setShowExport(false);
                                            }}
                                        >
                                            HTML Document (*.html)
                                        </li>
                                        <li
                                            className="bg-[#161616] flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border border-[#404040] hover:bg-[#5D5D5D]"
                                            onClick={() => {
                                                setProjectType("Rich Text Format (*.rtf)");
                                                setShowExport(false);
                                            }}
                                        >
                                            Rich Text Format (*.rtf)
                                        </li>
                                        <li
                                            className="bg-[#161616] flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-x border-[#404040] hover:bg-[#5D5D5D]"
                                            onClick={() => {
                                                setProjectType("Plain Text (*.txt)");
                                                setShowExport(false);
                                            }}
                                        >
                                            Plain Text (*.txt)
                                        </li>
                                        <li
                                            className="bg-[#161616] flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border border-[#404040] hover:bg-[#5D5D5D]"
                                            onClick={() => {
                                                setProjectType("Text with Layout (*.txt)");
                                                setShowExport(false);
                                            }}
                                        >
                                            Text with Layout (*.txt)
                                        </li>
                                        <li
                                            className="bg-[#161616] flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-x border-[#404040] hover:bg-[#5D5D5D]"
                                            onClick={() => {
                                                setProjectType("Avid Script-Based Editing (*.txt)");
                                                setShowExport(false);
                                            }}
                                        >
                                            Avid Script-Based Editing (*.txt)
                                        </li>
                                        <li
                                            className="bg-[#161616] flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border border-[#404040] hover:bg-[#5D5D5D]"
                                            onClick={() => {
                                                setProjectType("Tab Delimited Dialogue (*.txt)");
                                                setShowExport(false);
                                            }}
                                        >
                                            Tab Delimited Dialogue (*.txt)
                                        </li>
                                    </ul>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end edit-modal-footer py-4 px-[24px]">
                    <button
                        className="cursor-pointer	flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-gradient-to-r from-[#FEAC6D] to-[#AE61ED] font-extrabold text-[10px] tracking-widest leading-5 hover:opacity-80"
                        onClick={() => {
                            setshowExportModal(false);
                        }}
                    >
                        SAVE
                    </button>
                </div>
            </div>
        </>
    )
}

export default ExportModal