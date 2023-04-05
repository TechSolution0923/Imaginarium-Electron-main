import * as React from "react";

// project context
import { ProjectContext } from "../../../../pages/context/ProjectContext";

import MainSubNavbar from "./MainSubNavbar";

import RoleChooser from "../../../core/common/RoleChooser";
import Collabrator from "../../../core/common/Collabrator";
import ExportModal from "../../../core/common/ExportModal";

import {
  TextSearchIcon,
  CharacterSearchIcon,
  LocationSearchIcon,
  ShareIcon,
  HeadPhoneIcon,
  ScriptView,
  OneWindow,
  PageViewIcon,
  ScriptViewIcon,
  InfinityPageViewIcon,
  SplitViewIcon,
  OnePageViewIcon,
  TimesIcon,
  DownloadRIghtIcon,
  SettingIcon,
  MicIcon,
  MicOffIcon,
  CollapseIcon,
  AlertTriIcon,
  TalkIcon,
  DropDownIcon,
  MWRecordingIcon,
} from "../../../Svg";

export default function WorkSpaceNavbar() {
  const { currentProjectType, setCurrentProjectType } =
    React.useContext(ProjectContext);

  function toggleMenu() {
    var menu = document.getElementById("menu");

    menu.classList.toggle("hidden");
    menu.classList.toggle("w-auto");
    menu.classList.toggle("h-auto");
  }

  const CollabratorData = [
    {
      id: 1,
      avatar: <img src="assets/img/dashboard/Avatar.png" alt="avatar" />,
      name: "Julia(You)",
      gmail: "juliaellei@gmail.com",
      role: "Owner",
      disabled: true,
    },
    {
      id: 2,
      avatar: <span className="text-xs">MW</span>,
      name: "Margaret",
      gmail: "margoanderson@gmail.com",
      role: "Co-Writer",
      disabled: false,
    },
    {
      id: 3,
      avatar: <img src="assets/img/dashboard/Avatar.png" alt="avatar" />,
      name: "William",
      gmail: "williamtetcher@gmail.com",
      role: "Collaborator",
      disabled: false,
    },
    {
      id: 4,
      avatar: <img src="assets/img/dashboard/Avatar.png" alt="avatar" />,
      name: "Irina",
      gmail: "irinasmith@gmail.com",
      role: "Viewer",
      disabled: false,
    },
    {
      id: 5,
      avatar: <img src="assets/img/dashboard/Avatar.png" alt="avatar" />,
      name: "Tali’Zora",
      gmail: "talizora@gmail.com",
      role: "Co-Writer",
      disabled: false,
    },
    {
      id: 6,
      avatar: <img src="assets/img/dashboard/Avatar.png" alt="avatar" />,
      name: "Kasumi",
      gmail: "kasumi@gmail.com",
      role: "Collaborator",
      disabled: false,
    },
    {
      id: 7,
      avatar: <img src="assets/img/dashboard/Avatar.png" alt="avatar" />,
      name: "Stephen King",
      gmail: "stephenking@gmail.com",
      role: "Co-Writer",
      disabled: false,
    },
  ];

  // const [projectType, setProjectType] = React.useState(1);
  const [isOpenScript, setOpenScript] = React.useState(false);
  const [isOpenPage, setOpenPage] = React.useState(false);
  const [isHeaderPhoneModal, setHeaderPhoneModal] = React.useState(false);
  const [isVoiceChatSettingModal, setVoiceChatSettingModal] =
    React.useState(false);
  const [isShareModal, setShareModal] = React.useState(false);
  const [columns, setColumns] = React.useState(CollabratorData);
  const [gmailVal, setGmailVal] = React.useState("stephenking@gmail.com");
  const [role, setRole] = React.useState("Co-writer");
  const [isLinkChecked, setLinkChecked] = React.useState(false);
  const [showExportModal, setShowExportModal] = React.useState(false);
  const [projectForm, setProjectForm] = React.useState(
    "Microsoft Word (*.docx)"
  );
  const [microVoiceChatForm, setMicroVoiceChatForm] = React.useState(
    "Default - Speakers (Logitech PRO X Wirele..."
  );
  const [isOpenMircoVoiceChatForm, setOpenMicroVoiceChatForm] =
    React.useState(false);

  const [speakerVoiceChatForm, setSpeakerVoiceChatForm] = React.useState(
    "Default - Speakers (Logitech PRO X Wirele..."
  );
  const [isOpenSpeakerVoiceChatForm, setOpenSpeakerVoiceChatForm] =
    React.useState(false);
  const microVoiceChatFormRef = React.useRef(null);
  const speakerVoiceChatFormRef = React.useRef(null);
  const [isVoiceCollapased, setVoiceCollapase] = React.useState(false);

  const handleGmailVal = (val) => {
    setGmailVal(val);
  };

  const onChangeCollabrator = (key, value) => {
    setColumns(
      columns.map((item, index) => {
        return item.id === key ? { ...item, role: value } : item;
      })
    );
  };

  const handleLinkScene = () => {
    setLinkChecked(!isLinkChecked);
  };

  React.useEffect(() => {
    function handleClickOutSide(e) {
      if (
        microVoiceChatFormRef.current &&
        !microVoiceChatFormRef.current.contains(e.target)
      ) {
        setOpenMicroVoiceChatForm(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [microVoiceChatFormRef]);

  React.useEffect(() => {
    function handleClickOutSide(e) {
      if (
        speakerVoiceChatFormRef.current &&
        !speakerVoiceChatFormRef.current.contains(e.target)
      ) {
        setOpenSpeakerVoiceChatForm(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [speakerVoiceChatFormRef]);

  return (
    <div className="flex w-full h-14 bg-neutral-840 select-none">
      <MainSubNavbar />
      <div className="w-full flex items-center justify-between">
        <div
          id="menu"
          className="hidden sm:visible sm:fixed sm:left-14 sm:top-28 sm:bg-[#1e1e1e] sm:rounded-tr-lg sm:rounded-bl-lg
            md:visible md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:top-0 md:left-0  "
        >
          <button
            className={
              "!inline-flex flex-row p-4 space-x-2 h-full cursor-pointer  outline-none	items-center " +
              (currentProjectType === 1 ? "bg-black-rgba" : "bg-[#0E0E0E]")
            }
            onClick={() => {
              setCurrentProjectType(1);
            }}
          >
            <TextSearchIcon />
            <span className="text-white">Text</span>
          </button>
          <button
            className={
              "!inline-flex flex-row p-4 space-x-2 h-full cursor-pointer  outline-none items-cen+ter " +
              (currentProjectType === 2 ? "bg-black-rgba" : "bg-[#0E0E0E]")
            }
            onClick={() => {
              setCurrentProjectType(2);
            }}
          >
            <CharacterSearchIcon />
            <span className="text-white">Character</span>
          </button>
          <button
            className={
              "flex flex-row p-4 space-x-2 h-full cursor-pointer  outline-none items-center " +
              (currentProjectType === 3 ? "bg-black-rgba" : "bg-[#0E0E0E]")
            }
            onClick={() => {
              setCurrentProjectType(3);
            }}
          >
            <LocationSearchIcon />
            <span className="text-white">Locations</span>
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
        <div className="flex items-center flex-row justify-center ">
          <div className="max-w-2xl text-white text-sm breadcrumbs">
            <ul>
              <li>John Wick Chapter 4</li>
              <li>Act 1</li>
              <li>Scene 1 - No Scene Title</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center flex-row justify-between">
          <div className="flex items-center gap-2">
            {currentProjectType === 1 && (
              <>
                <div className="dropdown w-10 h-10 flex justify-center items-center hover:bg-[#2b2b2b]">
                  <div tabIndex="0" onClick={() => setOpenScript(true)}>
                    <div className=" rounded cursor-pointer">
                      <ScriptView />
                    </div>
                  </div>
                  {isOpenScript && (
                    <ul
                      tabIndex="0"
                      className="list-none p-0 drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mt-[150px] ml-[120px] shadow bg-[#161616] border border-[#464646] w-40 max-h-fit rounded-[4px]"
                    >
                      <button className="cursor-pointer flex flex-row items-center px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D] gap-2">
                        <InfinityPageViewIcon />

                        <label className="cursor-pointer p-0 ml-1 text-[9px] font-extrabold text-white leading-5 tracking-[.21em]">
                          SCRIPT VIEW
                        </label>
                      </button>
                      <button className="cursor-pointer flex flex-row items-center px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D] gap-2">
                        <PageViewIcon />
                        <label className="cursor-pointer p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em]">
                          PAGE VIEW
                        </label>
                      </button>
                      <button className="cursor-pointer flex flex-row items-center px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D] gap-2">
                        <ScriptViewIcon />

                        <label className="cursor-pointer p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em]">
                          INFINITY PAGE
                        </label>
                      </button>
                    </ul>
                  )}
                </div>

                <div className="dropdown w-10 h-10 flex justify-center items-center hover:bg-[#2b2b2b]">
                  <div tabIndex={0} onClick={() => setOpenPage(true)}>
                    <div className="bg-[#2b2b2b] rounded cursor-pointer">
                      <OneWindow />
                    </div>
                  </div>
                  {isOpenPage && (
                    <ul
                      tabIndex="0"
                      className="list-none p-0 drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mt-[120px] ml-[120px] shadow bg-[#161616] border border-[#464646] w-40 max-h-fit rounded-[4px]"
                    >
                      <button className="cursor-pointer flex flex-row items-center px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D] gap-2">
                        <OnePageViewIcon />

                        <label className="cursor-pointer p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em]">
                          ONE SCREEN
                        </label>
                      </button>
                      <button className="cursor-pointer flex flex-row items-center px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D] gap-2">
                        <SplitViewIcon />
                        <label className="cursor-pointer p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em]">
                          SPLIT SCREEN
                        </label>
                      </button>
                    </ul>
                  )}
                </div>
              </>
            )}

            <div
              className={
                isVoiceCollapased
                  ? "flex flex-row items-center gap-x-2"
                  : "rounded-[24px] flex flex-row items-center gap-x-2 border border-[#1DAEFF]"
              }
            >
              {!isVoiceCollapased && (
                <div className="dropdown">
                  <div className="w-8 h-8 flex justify-center items-center bg-[#0E0E0E] border border-[#404040] rounded-full hover:bg-[#2b2b2b]">
                    <MicIcon />
                  </div>
                </div>
              )}

              <div className="dropdown">
                <div
                  className="placeholder cursor-pointer"
                  onClick={() => {
                    setHeaderPhoneModal(
                      (isHeaderPhoneModal) => !isHeaderPhoneModal
                    );
                    setVoiceChatSettingModal(false);
                  }}
                >
                  <div className="flex justify-center items-center bg-[#0E0E0E] w-8 h-8 border border-[#404040] rounded-full hover:bg-[#2b2b2b]">
                    <HeadPhoneIcon />
                  </div>
                </div>
                {isHeaderPhoneModal && (
                  <ul className="cursor-pointer drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact !visible !opacity-100 !transition-none !transform-none dropdown-content shadow bg-[#2B2B2B] border border-[#161616] rounded-[4px] w-[300px] mt-8 -ml-80 mr-6">
                    <div className=" flex flex-row justify-between items-center py-[14px] w-full h-14 border-b border-[#161616]  pl-5">
                      <div className="avatar placeholder">
                        <div className="bg-[#2b2b2b] text-white rounded-full w-9">
                          <img
                            src="assets/img/dashboard/Avatar14.png"
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      <div className="flex w-full justify-end gap-2">
                        <button className="w-8 h-8 text-[#F39C12]">
                          <AlertTriIcon />
                        </button>
                        <button className="rounded w-8 h-8 flex items-center justify-center bg-[#DD5E5E] border border-[#404040] hover:bg-[#5F5F5F]">
                          <MicOffIcon />
                        </button>
                        <div className="dropdown w-8 h-8">
                          <button
                            className="border border-[#404040] rounded w-8 h-8 flex items-center justify-center hover:bg-[#5F5F5F]"
                            onClick={(e) => {
                              setVoiceChatSettingModal(
                                (isVoiceChatSettingModal) =>
                                  !isVoiceChatSettingModal
                              );

                              e.stopPropagation();
                            }}
                          >
                            <SettingIcon />
                          </button>
                          {isVoiceChatSettingModal && (
                            <ul className="list-none mt-36 w-[332px] ml-[-210px] drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content !visible !opacity-100 !transition-none !transform-none shadow bg-[#161616] border border-[#161616] rounded-[4px]">
                              <div className="flex flex-row justify-between w-full h-12 pl-[24px] pr-[14px] py-[14px] bg-[#2B2B2B]">
                                <p className="uppercase tracking-[.21em] text-white font-extrabold leading-5 text-[9px]">
                                  voice chat settings
                                </p>
                                <button
                                  className="hover:bg-[#4F4F4F]"
                                  onClick={() => {
                                    setVoiceChatSettingModal(false);
                                  }}
                                >
                                  <img
                                    className="w-[20px] h-[20px]"
                                    src="assets/img/dashboard/close.png"
                                    alt="close"
                                  />
                                </button>
                              </div>
                              <div className="w-full h-[92px] px-[24px] py-[16px] bg-[#2B2B2B] border-y border-[#161616]">
                                <div className="flex flex-col">
                                  <div className="flex flex-row">
                                    <MicIcon />
                                    <p className="uppercase tracking-[.21em] text-white font-extrabold leading-5 text-[9px] px-2">
                                      Microphone
                                    </p>
                                  </div>
                                  <div className="pt-2 flex flex-row w-[290px] justify-between">
                                    <div className="dropdown w-full">
                                      <div
                                        className="pl-2 pr-1.5 py-1.5 h-8 bg-[#161616] border border-[#404040] rounded-[4px]"
                                        name="chatforms"
                                        id="chatforms"
                                        tabIndex={0}
                                        onClick={() => {
                                          setOpenMicroVoiceChatForm(true);
                                        }}
                                      >
                                        <div className="flex justify-between w-full">
                                          <label className="cursor-pointer font-normal text-center text-white text-[12px] leading-5">
                                            {microVoiceChatForm}
                                          </label>

                                          <button>
                                            <DropDownIcon />
                                          </button>
                                        </div>
                                      </div>
                                      {isOpenMircoVoiceChatForm && (
                                        <ul
                                          ref={microVoiceChatFormRef}
                                          className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] mt-2 mr-[-290px] menu menu-compact dropdown-content !visible !opacity-100 !transition-none !transform-none shadow bg-[#161616] border border-[#464646] w-full h-24 rounded-[4px]"
                                        >
                                          <li
                                            className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                                            onClick={(e) => {
                                              setMicroVoiceChatForm(
                                                "Default - Speakers (Logitech PRO X Wirele..."
                                              );
                                              setOpenMicroVoiceChatForm(false);
                                            }}
                                          >
                                            Default - Microphone (Logitech PRO X
                                            Wireless)
                                          </li>
                                          <li
                                            className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                                            onClick={(e) => {
                                              setMicroVoiceChatForm(
                                                "Communications - Microphone (Logitech ..."
                                              );
                                              setOpenMicroVoiceChatForm(false);
                                            }}
                                          >
                                            Communications - Microphone
                                            (Logitech PRO X...
                                          </li>
                                          <li
                                            className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                                            onClick={(e) => {
                                              setMicroVoiceChatForm(
                                                "Microphone (Logitech c922 webcam)"
                                              );
                                              setOpenMicroVoiceChatForm(false);
                                            }}
                                          >
                                            Microphone (Logitech c922 webcam)
                                          </li>
                                        </ul>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="w-full h-[92px] px-[24px] py-[16px] bg-[#2B2B2B]">
                                <div className="flex flex-col">
                                  <div className="flex flex-row">
                                    <HeadPhoneIcon />
                                    <p className="uppercase tracking-[.21em] text-white font-extrabold leading-5 text-[9px] px-2">
                                      Microphone
                                    </p>
                                  </div>
                                  <div className="pt-2 flex flex-row w-[290px] justify-between">
                                    <div className="dropdown w-full">
                                      <div
                                        className="pl-2 pr-1.5 py-1.5 h-8 bg-[#161616] border border-[#404040] rounded-[4px]"
                                        name="chatforms"
                                        id="chatforms"
                                        tabIndex={0}
                                        onClick={() => {
                                          setOpenSpeakerVoiceChatForm(true);
                                        }}
                                      >
                                        <div className="flex justify-between w-full">
                                          <label className="cursor-pointer font-normal text-center text-white text-[12px] leading-5">
                                            {speakerVoiceChatForm}
                                          </label>

                                          <button>
                                            <DropDownIcon />
                                          </button>
                                        </div>
                                      </div>
                                      {isOpenSpeakerVoiceChatForm && (
                                        <ul
                                          ref={speakerVoiceChatFormRef}
                                          className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] mt-2 mr-[-290px] menu menu-compact dropdown-content !visible !opacity-100 !transition-none !transform-none shadow bg-[#161616] border border-[#464646] w-full h-24 rounded-[4px]"
                                        >
                                          <li
                                            className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                                            onClick={(e) => {
                                              setSpeakerVoiceChatForm(
                                                "Default - Speakers (Logitech PRO X Wirele..."
                                              );
                                              setOpenSpeakerVoiceChatForm(
                                                false
                                              );
                                            }}
                                          >
                                            Default - Microphone (Logitech PRO X
                                            Wireless)
                                          </li>
                                          <li
                                            className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                                            onClick={(e) => {
                                              setSpeakerVoiceChatForm(
                                                "Communications - Microphone (Logitech ..."
                                              );
                                              setOpenSpeakerVoiceChatForm(
                                                false
                                              );
                                            }}
                                          >
                                            Communications - Microphone
                                            (Logitech PRO X...
                                          </li>
                                          <li
                                            className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                                            onClick={(e) => {
                                              setSpeakerVoiceChatForm(
                                                "Microphone (Logitech c922 webcam)"
                                              );
                                              setOpenSpeakerVoiceChatForm(
                                                false
                                              );
                                            }}
                                          >
                                            Microphone (Logitech c922 webcam)
                                          </li>
                                        </ul>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ul>
                          )}
                        </div>

                        <button
                          className="border border-[#404040] rounded w-8 h-8 flex items-center justify-center hover:bg-[#5F5F5F]"
                          onClick={() => {
                            setHeaderPhoneModal(false);
                          }}
                        >
                          <DownloadRIghtIcon />
                        </button>

                        <button
                          className="border border-[#404040] mr-[10px] w-8 h-8 flex items-center justify-center rounded hover:bg-[#5F5F5F]"
                          onClick={() => {
                            setVoiceCollapase(!isVoiceCollapased);
                            setHeaderPhoneModal(
                              (isHeaderPhoneModal) => !isHeaderPhoneModal
                            );
                          }}
                        >
                          <CollapseIcon />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 w-full">
                      <div className="indicator">
                        <div className="indicator-item indicator-bottom top-4 right-1">
                          <TalkIcon />
                        </div>
                        <div className="avatar placeholder">
                          <div className="bg-[#161616] text-white rounded-full w-9 ">
                            <span className="text-xs">MW</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-base text-white">Margarett</div>
                    </div>
                    <div className="flex items-center gap-4 px-4 py-2 w-full">
                      <div className="indicator">
                        <div className="indicator-item indicator-bottom top-4 right-1">
                          <TalkIcon />
                        </div>
                        <div className="avatar placeholder">
                          <div className="bg-[#161616] text-white rounded-full w-9 ">
                            <img
                              src="assets/img/dashboard/Avatar16.png"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-base text-white">William</div>
                    </div>
                  </ul>
                )}
              </div>

              <div className="w-8 h-8 bg-[#0E0E0E] rounded-full hover:bg-[#2b2b2b]">
                <MWRecordingIcon />
              </div>

              <div>
                <img
                  className="w-[40px] h-[40px]"
                  alt="active"
                  src="assets/img/Active.png"
                />
              </div>
            </div>

            <div className="avatar placeholder">
              <div className="bg-[#2b2b2b] text-white rounded-full w-9">
                <img src="assets/img/dashboard/Avatar15.png" alt="Avatar" />
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="bg-[#2b2b2b] text-white rounded-full w-9">
                <img src="assets/img/dashboard/Avatar14.png" alt="Avatar" />
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="bg-[#2b2b2b] text-white rounded-full w-9">
                <img src="assets/img/dashboard/Avatar13.png" alt="Avatar" />
              </div>
            </div>

            <div
              className="avatar placeholder ml-3 cursor-pointer"
              onClick={() => setShareModal(true)}
            >
              <div className="bg-[#2b2b2b] text-white rounded w-10">
                <span className="text-xs">
                  <ShareIcon />
                </span>
              </div>
            </div>
            {isShareModal && (
              <div className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-full">
                <div className="absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto w-[960px]">
                  <div className=" gap-3 w-full bg-[#2b2b2b] border border-[#161616]">
                    {/* Header */}
                    <div className="px-6 py-4 flex justify-between items-center w-full border-b border-b-[#161616]">
                      <div className="text-sm text-white uppercase tracking-[.21em]">
                        Collaboration
                      </div>
                      <div
                        className="flex p-1 gap-1 w-10 h-10 rounded justify-center items-center hover:bg-[#404040] cursor-pointer"
                        onClick={() => setShareModal(false)}
                      >
                        <TimesIcon />
                      </div>
                    </div>
                    {/* Body */}
                    <div className="px-8 py-6 w-full flex flex-col gap-4 border-b border-b-[#161616]">
                      <div className="pb-3 gap-5 flex justify-between w-full ">
                        <input
                          className="px-2 py-1.5 w-[60%] h-12 bg-[#161616] border border-[#404040] ring-offset-0 outline-none placeholder-[#5F5F5F] rounded-md text-base text-white"
                          value={gmailVal}
                          onChange={(e) => handleGmailVal(e.target.value)}
                        />

                        <RoleChooser
                          role={role}
                          setRole={setRole}
                          disabled={false}
                        />

                        <button className="bg-[#1DAEFF] rounded gap-2 w-[20%] h-12 uppercase text-white text-base tracking-[.21em]">
                          Invite
                        </button>
                      </div>

                      {columns.map((item) => {
                        return (
                          <div key={item.id}>
                            <Collabrator
                              item={item}
                              onChange={(key, value) =>
                                onChangeCollabrator(key, value)
                              }
                              disabled={item.disabled}
                            />
                          </div>
                        );
                      })}
                    </div>
                    {/* footer */}
                    <div className="flex items-center p-6 gap-6 w-full">
                      <div
                        className="text-sm text-[#CDCDCD] tracking-[.21em] uppercase w-36 h-12 flex justify-center items-center hover:bg-[#404040] rounded border border-[#404040] cursor-pointer"
                        onClick={() => setShowExportModal(true)}
                      >
                        Export
                      </div>
                      {showExportModal && (
                        <ExportModal
                          setshowExportModal={setShowExportModal}
                          projectType={projectForm}
                          setProjectType={setProjectForm}
                        />
                      )}

                      <div className="text-sm text-[#CDCDCD] tracking-[.21em] uppercase w-36 h-12 flex justify-center items-center hover:bg-[#404040] rounded border border-[#404040] cursor-pointer">
                        Copy Link
                      </div>
                      <label className="flex flex-row items-center text-white text-[12px] leading-5 cursor-pointer">
                        <input
                          type="checkbox"
                          className="mr-3 bg-[#0E0E0E] cursor-pointer w-5 h-5 border border-[#404040] rounded checked:bg-[#0E0E0E] hover:bg-[#0E0E0E] focus:outline-none"
                          checked={isLinkChecked}
                          onChange={handleLinkScene}
                        />
                        <span className="text-sm tracking-[.21em] uppercase">
                          Link to Current Scene
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
