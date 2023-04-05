import * as React from "react";
import { Link } from "react-router-dom";

import MainSubNavbar from "./MainSubNavbar";

import { ProjectContext } from "../../../../pages/context/ProjectContext";

import {
  RecentIcon,
  MovieIcon,
  SeriesIcon,
  BooksIcon,
  DropDownIcon,
} from "../../../Svg";

export default function DashboardSubNavbar() {
  function toggleMenu() {
    var menu = document.getElementById("menu");

    menu.classList.toggle("hidden");
    menu.classList.toggle("w-auto");
    menu.classList.toggle("h-auto");
  }

  const { setSelected } = React.useContext(ProjectContext);
  const [projectsType, setProjectsType] = React.useState("ALL PROJECTS");
  const [openProjectsType, setOpenProjectsType] = React.useState(false);
  const [checkedShowFinish, setCheckedShowFinsh] = React.useState(false);
  const [projectType, setProjectType] = React.useState(1);

  return (
    <div className="flex w-full items-center justify-center h-14 bg-[#0E0E0E]">
      <MainSubNavbar />

      <div className="w-full flex items-center justify-between">
        <div
          id="menu"
          className="hidden sm:visible sm:fixed sm:left-14 sm:top-28 z-50 sm:w-[115px] sm:bg-[#1e1e1e] sm:rounded-tr-lg sm:rounded-bl-lg
            md:visible md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:top-0 md:left-0  "
        >
          <button
            className={
              "!inline-flex flex-row p-4 space-x-2 h-full cursor-pointer hover:bg-[#1F1F1F] focus:bg-black-rgba outline-none" +
              +(projectType === 1 ? "active" : null)
            }
            onClick={() => {
              setProjectType(1);
              setSelected("Recent");
            }}
          >
            <RecentIcon />
            <span className="text-white">Recent</span>
          </button>
          <button
            className={
              "!inline-flex flex-row p-4 space-x-2 h-full cursor-pointer hover:bg-[#1F1F1F] focus:bg-black-rgba outline-none " +
              (projectType === 2 ? "active" : null)
            }
            onClick={() => {
              setProjectType(2);
              setSelected("Movie");
            }}
          >
            <MovieIcon />
            <span className="text-white">Movies</span>
          </button>
          <button
            className={
              "!inline-flex flex-row p-4 space-x-2 h-full cursor-pointer hover:bg-[#1F1F1F] focus:bg-black-rgba outline-none " +
              (projectType === 3 ? "active" : null)
            }
            onClick={() => {
              setProjectType(3);
              setSelected("TV Series");
            }}
          >
            <SeriesIcon />
            <span className="text-white">Series</span>
          </button>
          <button
            className={
              "!inline-flex flex-row p-4 space-x-2 h-full cursor-pointer hover:bg-[#1F1F1F] focus:bg-black-rgba outline-none " +
              (projectType === 4 ? "active" : null)
            }
            onClick={() => {
              setProjectType(4);
              setSelected("Book");
            }}
          >
            <BooksIcon />
            <span className="text-white">Books</span>
          </button>
        </div>
        <div className="flex items-center md:hidden">
          <button
            className="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
            onClick={() => {
              toggleMenu();
            }}
          >
            &#9776;
          </button>
        </div>

        <div className="flex items-center flex-row justify-between">
          <div className="flex items-center">
            <label className="mr-4 flex flex-row items-center font-extrabold text-white text-[9px] leading-5 cursor-pointer tracking-[.21em] uppercase">
              <input
                type="checkbox"
                className="mr-3 bg-[#0E0E0E] cursor-pointer 
          w-[14px] h-[14px] border border-[#404040] rounded-[4px] checked:bg-[#0A0A0A] hover:bg-[#0E0E0E] focus:bg-[#0A0A0A]"
                checked={checkedShowFinish}
                onChange={() => {
                  setCheckedShowFinsh(!checkedShowFinish);
                }}
              />
              Show finished projects
            </label>

            <div className="dropdown">
              <div
                tabIndex="0"
                className="mr-4 p-1.5 w-32 h-8 bg-[#161616] border border-[#404040] rounded-[4px]"
                onClick={() => {
                  setOpenProjectsType(true);
                }}
                name="projects"
                id="projects"
              >
                <div className="flex justify-between">
                  <label className="ml-1.5 font-extrabold text-center text-white text-[9px] leading-5">
                    {projectsType}
                  </label>

                  <button>
                    <DropDownIcon />
                  </button>
                </div>
              </div>

              {openProjectsType ? (
                <ul
                  tabIndex="0"
                  className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mt-2 shadow bg-[#161616] border border-[#2B2B2B] w-32 h-24 rounded-[4px]"
                >
                  <li
                    className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                    onClick={() => {
                      setProjectsType("ALL PROJECTS");
                      setOpenProjectsType(false);
                    }}
                  >
                    ALL PROJECTS
                  </li>
                  <li
                    className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                    onClick={() => {
                      setProjectsType("YOUR PROJECTS");
                      setOpenProjectsType(false);
                    }}
                  >
                    YOUR PROJECTS
                  </li>
                  <li
                    className="flex flex-row px-2 py-1.5 h-8 font-extrabold text-center text-white text-[9px] leading-5 hover:bg-[#5D5D5D]"
                    onClick={() => {
                      setProjectsType("SHARED WITH YOU");
                      setOpenProjectsType(false);
                    }}
                  >
                    SHARED WITH YOU
                  </li>
                </ul>
              ) : null}
            </div>

            <Link
              className="mr-4 flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-gradient-to-r from-[#FEAC6D] to-[#AE61ED] font-extrabold text-[10px] tracking-widest leading-5 hover:opacity-80"
              to="/project/new"
            >
              NEW PROJECT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
