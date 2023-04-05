import * as React from "react";
import { Link } from "react-router-dom";

import MainSubNavbar from "./MainSubNavbar";

import { BackIcon, EditIcon } from "../../../Svg";

export default function EditSubNavbar() {
  return (
    <div className="flex w-full h-14 bg-neutral-840">
      <MainSubNavbar />
      <div className="w-full flex justify-between">
        <div>
          <Link
            className="!inline-flex flex-row p-4 space-x-2 h-full"
            to="/dashboard"
          >
            <BackIcon />
            <span className="text-white">Back</span>
          </Link>
          <div className="!inline-flex flex-row p-4 space-x-2 h-full hover:bg-[#1F1F1F] cursor-pointer">
            <EditIcon />
            <span className="text-white">Edit Project</span>
          </div>
        </div>
        <div className="flex items-center flex-row justify-between">
          <div className="flex items-center">
            <button className="mr-7 flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-gradient-to-r from-[#FEAC6D] to-[#AE61ED] font-extrabold text-[10px] tracking-widest leading-5 hover:opacity-80">
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
