import * as React from "react";
// core components
import InputText from "../../components/core/common/InputText";
import Genres from "../../components/core/chip/Genres";
import Tag from "../../components/core/chip/Tag";
import DreamCast from "../../components/core/chip/DreamCast";
import SimilarMovie from "../../components/core/chip/SimilarMovie";

import {
  BigPlusButtonIcon,
  DropDownIcon,
  SmallPlusButtonIcon,
  LoglinePlusIcon,
} from "../../components/Svg";

export default function EditProject() {
  const [projectType, setProjectType] = React.useState(1);
  const [initAct, setInitAct] = React.useState("School1");
  const [openAct, setOpenAct] = React.useState(false);
  const [showUpload, setShowUpload] = React.useState(true);
  const [initScene, setInitScene] = React.useState("");
  const [projectName, setProjectName] = React.useState("");
  const [projectTagline, setProjectTagline] = React.useState("");
  const [showLoglineModal, setShowLoglineModal] = React.useState(false);

  function loadFile(event) {
    const image = document.getElementById("output");
    console.log("image" + image);
    image.src = URL.createObjectURL(event.target.files[0]);
    if (image.src !== null) {
      setShowUpload(false);
    }
  }

  function deleteFile(event) {
    document.getElementById("output").removeAttribute("src");
    document
      .getElementById("output")
      .setAttribute("src", "assets/img/dashboard/poster.png");
    // URL.revokeObjectURL(image.src);
  }

  return (
    <>
      <div className="flex px-[6.25%] py-[3.3%] bg-[#0A0A0A] w-full h-[calc(100vh-112px)] overflow-auto">
        <div className="flex w-[70%] h-full">
          <div className="flex w-full">
            <div className="flex flex-col w-1/2">
              <div className="flex flex-row w-full justify-between ">
                <div className="project-name flex flex-col w-full">
                  <label className="mb-1 text-[9px] leading-5 font-extrabold tracking-[.21em] text-white">
                    PROJECT NAME
                  </label>
                  <InputText
                    type="text"
                    name="name"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="Ex. John Wick 4"
                  />
                </div>

                <div className="project-type ml-4">
                  <label className="mb-1 text-[9px] leading-5 font-extrabold tracking-[.21em] text-white">
                    PROJECT TYPE
                  </label>

                  <div className="flex flex-row justify-between bg-[#161616] border border-[#404040] w-full h-8 p-1 rounded-md">
                    <button
                      className={
                        "h-6 px-1 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-md focus:outline-none " +
                        (projectType === 1 ? "bg-[#1DAEFF]" : "bg-transparent")
                      }
                      onClick={() => {
                        setProjectType(1);
                      }}
                    >
                      MOVIE
                    </button>
                    <button
                      className={
                        "ml-1 h-6 px-1 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-md focus:outline-none " +
                        (projectType === 2 ? "bg-[#1DAEFF]" : "bg-transparent")
                      }
                      onClick={() => {
                        setProjectType(2);
                      }}
                    >
                      SERIES
                    </button>
                    <button
                      className={
                        "ml-1 h-6 px-1 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-md focus:outline-none " +
                        (projectType === 3 ? "bg-[#1DAEFF]" : "bg-transparent")
                      }
                      onClick={() => {
                        setProjectType(3);
                      }}
                    >
                      BOOK
                    </button>
                  </div>
                </div>
              </div>
              <div className="project-logline mt-4">
                <div className="flex flex-row mb-1">
                  <label className="text-[9px] leading-5 font-extrabold tracking-[.21em] text-white">
                    LOGLINE
                  </label>
                  <button
                    className="ml-2 w-5 h-5 flex items-center justify-center hover:bg-[#404040]"
                    onClick={() => {
                      setShowLoglineModal(true);
                    }}
                  >
                    <img
                      className=" w-4 h-4"
                      src="assets/img/dashboard/info.png"
                      alt="info"
                    />
                  </button>
                </div>
                <textarea
                  name="logline"
                  className="px-2 py-1.5 w-full h-20 bg-[#161616] border border-[#404040] focus:border-white placeholder-[#5F5F5F] focus:outline-none rounded-md text-[12px] focus:ring-1 text-white"
                  placeholder="Ex. John Wick 4"
                />
              </div>

              <div className="project-genres mt-4">
                <label className="text-[9px] leading-5 font-extrabold tracking-[.21em] text-white">
                  GENRES
                </label>
                <div className="mt-1">
                  <div className="flex flex-wrap w-full">
                    <Genres
                      src="assets/img/dashboard/genres1.png"
                      alt="genres1"
                    >
                      ACTION
                    </Genres>
                    <Genres
                      src="assets/img/dashboard/genres2.png"
                      alt="genres2"
                    >
                      MYSTERY
                    </Genres>
                    <Genres
                      src="assets/img/dashboard/genres3.png"
                      alt="genres3"
                    >
                      ADVENTURE
                    </Genres>
                    <Genres
                      src="assets/img/dashboard/genres4.png"
                      alt="genres4"
                    >
                      THRILLER
                    </Genres>
                    <button className="mr-2 mb-2 flex justify-center items-center w-auto h-6 rounded-[15px] px-1 py-0.5 border border-[#404040] outline-none">
                      <SmallPlusButtonIcon />
                    </button>
                  </div>
                </div>
              </div>

              <div className="project-dreamcast mt-2">
                <label className="text-[9px] leading-5 font-extrabold tracking-[.21em] text-white">
                  DREAM CAST
                </label>
                <div className="mt-1">
                  <div className="flex flex-wrap w-full">
                    <DreamCast
                      src="assets/img/dashboard/dreamcast1.png"
                      alt="dreamcast1"
                      name="Keanu Reeves"
                    />
                    <DreamCast
                      src="assets/img/dashboard/dreamcast2.png"
                      alt="dreamcast2"
                      name="Keanu Reeves"
                    />
                    <DreamCast
                      src="assets/img/dashboard/dreamcast3.png"
                      alt="dreamcast3"
                      name="Keanu Reeves"
                    />
                    <div className="mr-4 mb-2 flex flex-col justify-center items-center w-20 h-28 outline-none">
                      <button className="flex justify-center items-center border border-[#404040] w-20 h-20 rounded-[40px] outline-none">
                        <BigPlusButtonIcon />
                      </button>
                      <label className="uppercase mt-2 text-center text-[#1DAEFF] text-[9px] font-bold  leading-3 tracking-[.21em] cursor-pointer">
                        ADD
                        <br />
                        ACTOR
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-1/2 ml-4">
              <div className="project-tagline">
                <label className="mb-1 text-[9px] leading-5 font-extrabold tracking-[.21em] text-white">
                  TAGLINE
                </label>
                <InputText
                  type="text"
                  name="tagline"
                  value={projectTagline}
                  onChange={(e) => setProjectTagline(e.target.value)}
                  placeholder="Ex. What’s going on when everything in fire?"
                />
              </div>
              <div className="project-synopsis mt-4">
                <label className="mb-1 text-[9px] leading-5 font-extrabold tracking-[.21em] text-white">
                  SYNOPSIS
                </label>

                <textarea
                  name="synopsis"
                  className="px-2 py-1.5 w-full h-20 bg-[#161616] border border-[#404040] focus:border-white placeholder-[#5F5F5F] focus:outline-none rounded-md text-[12px] focus:ring-1 text-white"
                  placeholder="Ex. John Wick 4"
                />
              </div>

              <div className="project-tags mt-4">
                <label className="mb-1 text-[9px] leading-5 font-extrabold tracking-[.21em] text-white">
                  TAGS
                </label>
                <div className="mt-1">
                  <div className="flex flex-wrap w-full">
                    <Tag>Action</Tag>
                    <Tag>Killer</Tag>
                    <Tag>Thriller</Tag>
                    <Tag>Speeding</Tag>
                    <Tag>Fantasy</Tag>
                    <button className="mr-2 mb-2 flex justify-center items-center w-auto h-6 rounded-[15px] px-1 py-0.5 border border-[#404040] outline-none">
                      <SmallPlusButtonIcon />
                    </button>
                  </div>
                </div>
              </div>

              <div className="project-similarmovies mt-2">
                <label className=" text-[9px] leading-5 font-extrabold tracking-[.21em] text-white">
                  SIMILAR MOVIES
                </label>
                <div className="mt-1">
                  <div className="flex flex-wrap w-full">
                    <SimilarMovie
                      src="assets/img/dashboard/similarmovie1.png"
                      alt="movie1"
                      name="Three Palmes"
                    />
                    <SimilarMovie
                      src="assets/img/dashboard/similarmovie2.png"
                      alt="movie2"
                      name="Three Palmes"
                    />
                    <SimilarMovie
                      src="assets/img/dashboard/similarmovie3.png"
                      alt="movie3"
                      name="Three Palmes"
                    />
                    <div className="mr-4 mb-2 flex flex-col justify-center items-center w-20 h-[132px] outline-none">
                      <button className="flex justify-center items-center border border-[#404040] w-20 h-[100px] rounded-[4px]">
                        <BigPlusButtonIcon />
                      </button>
                      <label className="uppercase mt-2 text-center text-[#1DAEFF] text-[9px] font-bold  leading-3 tracking-[.21em] cursor-pointer">
                        ADD
                        <br />
                        MOVIE
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[30%] h-full ml-4">
          <div className="flex flex-col w-full h-full">
            <div className="flew flex-row">
              <div className="project-scenes">
                <label className="mb-1 text-[9px] leading-5 font-extrabold tracking-[.21em] text-white">
                  SCENES PER ACT
                </label>

                <div className="flex flex-row w-full justify-between">
                  <div className="dropdown w-[47.5%]">
                    <div
                      tabIndex="0"
                      className="px-2 py-1.5 h-8 bg-[#161616] border border-[#404040] rounded-[4px]"
                      name="projects"
                      id="projects"
                      onClick={() => {
                        setOpenAct(true);
                      }}
                    >
                      <div className="flex justify-between">
                        <label className="text-center text-white text-[12px] leading-5">
                          {initAct}
                        </label>

                        <button>
                          <DropDownIcon />
                        </button>
                      </div>
                    </div>

                    {openAct ? (
                      <ul
                        tabIndex="0"
                        className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mt-3 shadow bg-[#161616] border border-[#464646] w-full h-32 rounded-[4px]"
                      >
                        <li
                          className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                          onClick={() => {
                            setInitAct("School 1");
                            setOpenAct(false);
                          }}
                        >
                          School 1
                        </li>
                        <li
                          className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                          onClick={() => {
                            setInitAct("School 2");
                            setOpenAct(false);
                          }}
                        >
                          School 2
                        </li>
                        <li
                          className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                          onClick={() => {
                            setInitAct("School 3");
                            setOpenAct(false);
                          }}
                        >
                          School 3
                        </li>
                        <li
                          className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                          onClick={() => {
                            setInitAct("Custom");
                            setOpenAct(false);
                          }}
                        >
                          Custom
                        </li>
                      </ul>
                    ) : null}
                  </div>

                  <div className="flex bg-[#161616] border border-[#404040] h-8 px-1 py-1.5 w-[47.5%] rounded-md">
                    <div className="flex w-full items-center justify-between">
                      <input
                        className="px-2 py-1.5 w-3/4 h-6 bg-transparent ring-offset-0 border-[#161616] text-center focus:border-[#161616] focus:outline-none placeholder-[#5F5F5F] rounded-md text-[12px] text-white"
                        name="scenenumber"
                        value={initScene}
                        onChange={(e) => setInitScene(e.target.value)}
                        type="number"
                      />
                      <label className="text-[#5F5F5F] text-[12px] leading-5">
                        scenes
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-poster mt-4 h-[75%]">
              <label className="mb-1 text-[9px] leading-5 font-extrabold tracking-[.21em] text-white">
                POSTER
              </label>
              <div className="relative z-0 flex justify-center items-center w-full h-full">
                <img
                  id="output"
                  className="w-full h-full z-20 bg-cover bg-no-repeat"
                  src="assets/img/dashboard/Poster.png"
                  alt=""
                />
                <input
                  type="file"
                  className="hidden"
                  name="image"
                  id="file"
                  onChange={loadFile}
                />

                {showUpload === true && (
                  <button className="absolute z-20 flex justify-center items-center bottom-4 w-36 h-8 bg-[#1DAEFF] py-0.5 rounded-md focus:outline-none">
                    <label
                      htmlFor="file"
                      className="text-white text-[9px] leading-5 tracking-[.21em]"
                      style={{ cursor: "pointer" }}
                    >
                      UPLOAD POSTER
                    </label>
                  </button>
                )}

                {showUpload === false && (
                  <div className="absolute z-20 flex bottom-4 items-center justify-center">
                    <button className="w-auto h-8 bg-[#1DAEFF] px-3 py-0.5 opacity-[90] rounded-md text-white text-[9px] leading-5 tracking-[.21em] cursor-pointer">
                      UPLOAD POSTER
                    </button>
                    <button
                      className="ml-4 w-auto h-8 bg-[#DD5E5E] px-3 py-0.5 opacity-[90] rounded-md text-white text-[9px] leading-5 tracking-[.21em] cursor-pointer"
                      onClick={() => {
                        deleteFile();
                        setShowUpload(true);
                      }}
                    >
                      DELETE POSTER
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showLoglineModal ? (
        <>
          <div className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] z-10 fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto bg-[#2B2B2B] border border-[#161616] rounded-md">
            <div className="edit-modal-header flex flex-row justify-between items-center py-[14px] w-full h-8 border-b border-[#161616]">
              <label className="ml-[24px] text-[9px] text-white font-extrabold leading-5 tracking-[.21em] uppercase">
                Logline Formula
              </label>
              <button
                className="mr-[10px] hover:bg-[#4F4F4F]"
                onClick={() => {
                  setShowLoglineModal(false);
                }}
              >
                <img
                  className="w-[20px] h-[20px]"
                  src="assets/img/dashboard/close.png"
                  alt="close"
                />
              </button>
            </div>
            <div className="edit-modal-content flex flex-col items-center justify-center px-[24px] py-4">
              <div className=" flex items-center justify-center w-full h-[36px] bg-[#E67E22] opacity-40 rounded-[8px]">
                <label className="text-[#FBC87E] text-[16px] leading-5 tracking-[.66px]">
                  Inciting Incident
                </label>
              </div>
              <div className="mt-3 mb-3">
                <LoglinePlusIcon />
              </div>
              <div className=" flex items-center justify-center w-full h-[36px] bg-[#3498DB] opacity-40 rounded-[8px]">
                <label className="text-[#8DCDF8] text-[16px] leading-5 tracking-[.66px]">
                  Protagonist
                </label>
              </div>
              <div className="mt-3 mb-3">
                <LoglinePlusIcon />
              </div>
              <div className=" flex items-center justify-center w-full h-[36px] bg-[#9B59B6] opacity-40 rounded-[8px]">
                <label className="text-[#D9AAEC] text-[16px] leading-5 tracking-[.66px]">
                  Action
                </label>
              </div>
              <div className="mt-3 mb-3">
                <LoglinePlusIcon />
              </div>
              <div className=" flex items-center justify-center w-full h-[36px] bg-[#E74C3C] opacity-40 rounded-[8px]">
                <label className="text-[#FC8083] text-[16px] leading-5 tracking-[.66px]">
                  Antagonist
                </label>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
