import * as React from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../../pages/context/AuthContext";
import { BrandIcon } from "../../../Svg";

export default function MainSubNavbar() {
  const { setIsAuthenticated } = React.useContext(AuthContext);
  const [openSubNav, setOpenSubNav] = React.useState(false);
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);

  return (
    <div>
      <div className="dropdown">
        <div
          tabIndex="0"
          className=" w-14 !inline-flex flex-row p-4 h-full hover:bg-[#1F1F1F] cursor-pointer"
          onClick={() => {
            setOpenSubNav(true);
          }}
        >
          <BrandIcon />
        </div>

        {openSubNav ? (
          <ul
            tabIndex="0"
            className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content ml-2 mt-2 shadow bg-[#161616] border border-[#2B2B2B] w-[160px] h-80 rounded-[4px]"
          >
            <Link
              className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#2B2B2B] hover:bg-[#5D5D5D]"
              to="/project/new"
            >
              New Project
            </Link>
            <li
              className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#2B2B2B] hover:bg-[#5D5D5D]"
              onClick={() => {
                setOpenSubNav(false);
              }}
            >
              Continue Writing
            </li>
            <li
              className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#2B2B2B] hover:bg-[#5D5D5D]"
              onClick={() => {
                setOpenSubNav(false);
              }}
            >
              Close Window
            </li>
            <li
              className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#2B2B2B] hover:bg-[#5D5D5D]"
              onClick={() => {
                setOpenSubNav(false);
              }}
            >
              Close Tab
            </li>
            <li
              className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#2B2B2B] hover:bg-[#5D5D5D]"
              onClick={() => {
                setOpenSubNav(false);
              }}
            >
              Reopen Closed Tab
            </li>
            <li
              className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#2B2B2B] hover:bg-[#5D5D5D]"
              onClick={() => {
                setOpenSubNav(false);
              }}
            >
              Interface Scale
            </li>
            <li
              className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#2B2B2B] hover:bg-[#5D5D5D]"
              onClick={() => {
                setOpenSubNav(false);
              }}
            >
              About Imaginarium
            </li>
            <li
              className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#2B2B2B] hover:bg-[#5D5D5D]"
              onClick={() => {
                setOpenSubNav(false);
              }}
            >
              Check for Updates
            </li>
            <li
              className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#2B2B2B] hover:bg-[#5D5D5D]"
              onClick={() => {
                setShowLogoutModal(true);
                setOpenSubNav(false);
              }}
            >
              Log Out
            </li>
            <li
              className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#2B2B2B] hover:bg-[#5D5D5D]"
              onClick={() => {
                setOpenSubNav(false);
              }}
            >
              Exit
            </li>
          </ul>
        ) : null}
      </div>

      {showLogoutModal ? (
        <div className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] z-10 absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto bg-[#2B2B2B] border border-[#161616] rounded-md">
          <div className="edit-modal-header flex flex-row justify-between items-center py-[14px] w-full h-8 border-b border-[#161616]">
            <label className="ml-[24px] text-[9px] text-white font-extrabold leading-5 tracking-[.21em]">
              LOGING OUT
            </label>
            <button
              className="mr-[10px] hover:bg-[#4F4F4F]"
              onClick={() => {
                setShowLogoutModal(false);
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
            <label className="text-white text-[12px] leading-5">
              You are about to sign out of your account. Confirm the action.
            </label>
          </div>
          <div className="flex justify-end edit-modal-footer py-4 px-[24px]">
            <button
              className="mr-4 flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-transparent border border-[#404040] font-extrabold text-[10px] tracking-widest leading-5 hover:bg-[#404040]"
              onClick={() => {
                setShowLogoutModal(false);
              }}
            >
              CANCEL
            </button>
            <Link
              className="cursor-pointer	flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-[#DD5E5E] font-extrabold text-[10px] tracking-widest leading-5 hover:opacity-80"
              to="/login"
              onClick={() => {
                setIsAuthenticated(false);
                localStorage.removeItem("auth");
              }}
            >
              LOG OUT
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
