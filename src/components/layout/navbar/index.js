import * as React from "react";
import { Link, useLocation } from "react-router-dom";

import { AuthContext } from "../../../pages/context/AuthContext";
import Checkbox from "../../core/common/Checkbox";
import InputText from "../../core/common/InputText";

import {
  BaseIcon,
  SearchIcon,
  BellIcon,
  ImageAlarmIcon,
  PersonAlarmIcon,
  DropDownIcon,
  SmallSearchIcon,
  TextSearchIcon,
  CharacterSearchIcon,
  LocationSearchIcon,
} from "../../Svg";

const MainMenu = [
  {
    icon: <BaseIcon />,
  },
];

const WorkSpaceMenu = [
  {
    name: "John Wick Chapter 4",
    active: true,
  },
  {
    name: "Apple Trees",
    active: false,
  },
  {
    name: "Young Katyusha",
    active: false,
  },
];
export default function Navbar(props) {
  const location = useLocation();
  const { setIsAuthenticated } = React.useContext(AuthContext);
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);
  const [showAlarmModal, setShowAlarmModal] = React.useState(false);
  const [showSettingModal, setShowSettingModal] = React.useState(false);
  const [languageType, setLanguageType] = React.useState("English");
  const [theme, setTheme] = React.useState(true);
  const [openTab, setOpenTab] = React.useState(1);
  const [searchDropdownMenu, setSearchDropdownMenu] = React.useState(false);
  const [setSearchDropdownValue] = React.useState("");

  const [initRecentItemCount, setInitRecentItemCount] = React.useState(15);
  const [initAutoSaveCount, setInitAutoSaveCount] = React.useState(15);
  const [initBackupItemCount, setInitBackuptItemCount] = React.useState(1000);

  const [checkedGeneralSpeech, setCheckedGeneralSpeech] = React.useState(false);
  const [checkedGeneralScroll, setCheckedGeneralScroll] = React.useState(false);
  const [checkedGeneralCapitalize, setCheckedGeneralCapitalize] =
    React.useState(false);
  const [checkedGeneralAutomatically, setCheckedGeneralAutomatically] =
    React.useState(false);
  const [checkedGeneralShow, setCheckedGeneralShow] = React.useState(false);
  const [checkedAnonymousAuto, setCheckedAnonymousAuto] = React.useState(false);
  const [checkedAutosaveAuto, setCheckedAutosaveAuto] = React.useState(false);
  const [checkedAutosaveAsk, setCheckedAutosaveAsk] = React.useState(false);
  const [checkedBackupAuto, setCheckedBackupAuto] = React.useState(false);
  const [checkedFormatScan, setCheckedFormatScan] = React.useState(false);
  const [checkedFormatAlways, setCheckedFormatAlways] = React.useState(false);

  function handleSearchChange(event) {
    setSearchDropdownValue(event.target.value);
  }

  function handleTheme(event) {
    setTheme(event.target.value);
  }

  if (location.pathname === "/") {
    return null;
  }

  if (location.pathname === "/login") {
    return null;
  }
  if (location.pathname === "/reset-password") {
    return null;
  }
  if (location.pathname === "/register") {
    return null;
  }
  if (location.pathname === "/reset-email") {
    return <></>;
  } else {
    return (
      <div className="w-full h-14 bg-[#161616] select-none">
        <div className="bg-[#161616] p-0 min-h-0 flex flex-row w-full items-center justify-between">
          <div className="tabs bg-[#161616] flex w-fit">
            {MainMenu.map((menu, index) => (
              <MainMenuItem icon={menu.icon} key={index} />
            ))}
            {location.pathname === "/workspace"
              ? WorkSpaceMenu.map((menu, index) => (
                  <WorkSpaceItem
                    name={menu.name}
                    active={menu.active}
                    key={index}
                  />
                ))
              : ""}
          </div>
          <div className="flex items-center">
            <div className="w-fit">
              <div className="search">
                <div className="mr-6 w-[32px] h-[32px] min-h-0 p-0 bg-transparent hover:bg-[#4F4F4F] active:bg-[#4F4F4F] border-none cursor-pointer rounded-[4px]">
                  <label
                    htmlFor="my-modal-4"
                    className="btn modal-button w-[32px] h-[32px] min-h-0 p-0 bg-transparent hover:bg-[#4F4F4F] active:bg-[#4F4F4F] border-none rounded-[4px]"
                  >
                    <SearchIcon />
                  </label>
                </div>

                <input
                  type="checkbox"
                  id="my-modal-4"
                  className="modal-toggle"
                />
                <label htmlFor="my-modal-4" className="modal">
                  <div className="flex flex-col drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] z-50 absolute top-[90px] left-1/2 -translate-x-1/2 translate-y-[85px] w-[400px] rounded-md">
                    <div className="flex flex-row items-center justify-between w-full h-[40px] bg-[#161616] border border-[#404040] rounded-[4px] p p-[10px]">
                      <button>
                        <SmallSearchIcon />
                      </button>
                      <input
                        className="ml-2 ring-offset-0 focus:border-[#161616] bg-transparent border-[#161616] w-full h-[36px] text-white focus:outline-none text-[12px] placeholder-[#5F5F5F]"
                        type="text"
                        placeholder="Search Text, Characters, Locations..."
                        onChange={handleSearchChange}
                        onMouseDown={() => {
                          setSearchDropdownMenu(!searchDropdownMenu);
                        }}
                      />
                    </div>

                    {searchDropdownMenu ? (
                      <div className="mt-2 flex flex-col w-full border border-[#2B2B2B]">
                        <div className="flex flex-row items-center px-2 py-1.5 bg-[#161616]  border-b border-[#2B2B2B]">
                          <TextSearchIcon />
                          <label className="ml-1.5 mr-1.5 w-[328px] text-[12px] text-white text-left font-extrabold leading-5">
                            ...kentucky fried chicken...
                          </label>
                          <label className="text-[12px] text-[#5F5F5F]">
                            Text
                          </label>
                        </div>
                        <div className="flex flex-row items-center px-2 py-1.5 bg-[#161616]  border-b border-[#2B2B2B]">
                          <CharacterSearchIcon />
                          <label className="ml-1.5 mr-1.5 w-[328px] text-[12px] text-white text-left font-extrabold leading-5">
                            Keeanu Reeves
                          </label>
                          <label className="text-[12px] text-[#5F5F5F]">
                            Characters
                          </label>
                        </div>
                        <div className="flex flex-row items-center px-2 py-1.5 bg-[#161616]  border-b border-[#2B2B2B]">
                          <LocationSearchIcon />
                          <label className="ml-1.5 mr-1.5 w-[328px] text-[12px] text-white text-left font-extrabold leading-5">
                            Main Kentucky Street
                          </label>
                          <label className="text-[12px] text-[#5F5F5F]">
                            Locations
                          </label>
                        </div>
                        <div className="flex flex-row items-center px-2 py-1.5 bg-[#161616] ">
                          <input type="checkbox" />
                          <label className="ml-1.5 mr-1.5 w-[328px] text-[12px] text-white text-left font-extrabold leading-5">
                            Scroll keys mimic MS Word
                          </label>
                          <label className="text-[12px] text-[#5F5F5F]">
                            Settings
                          </label>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </label>
              </div>
            </div>

            <div className="mr-6 dropdown dropdown-end p-0 w-[32px] h-[32px] flex items-center justify-center hover:bg-[#4F4F4F] active:bg-[#4F4F4F] focus:bg-[#4F4F4F] rounded-[4px]">
              <button
                tabIndex="0"
                className={
                  "w-[32px] h-[32px] flex items-center justify-center rounded-[4px] active:bg-[#4F4F4F] focus:bg-[#4F4F4F] " +
                  (showAlarmModal ? "active" : null)
                }
                onClick={() => {
                  setShowAlarmModal(true);
                }}
              >
                <BellIcon />
              </button>
              {showAlarmModal === true && (
                <ul
                  tabIndex="0"
                  className="cursor-pointer drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mt-[260px] shadow bg-[#2B2B2B] border border-[#161616] rounded-[4px] w-[400px]"
                >
                  <div className="alarm-modal-header flex flex-row justify-between items-center py-[14px] w-full h-8 border-b border-[#161616]">
                    <label className="ml-[24px] text-[9px] text-white font-extrabold leading-5 tracking-[.21em]">
                      NOTIFICATIONS
                    </label>
                    <button
                      className="mr-[10px] hover:bg-[#4F4F4F]"
                      onClick={() => {
                        setShowAlarmModal(false);
                      }}
                    >
                      <img
                        className="w-[20px] h-[20px]"
                        src="assets/img/dashboard/close.png"
                        alt="close"
                      />
                    </button>
                  </div>
                  <div className="alarm-modal-content flex flex-col px-[24px] py-[16px] w-full">
                    <label className="text-[9px] text-white font-extrabold leading-5 tracking-[.21em]">
                      TODAY
                    </label>
                    <div className="image-alarm mt-3 flex flex-row justify-between items-center">
                      <ImageAlarmIcon />
                      <div className="w-[250px]">
                        <label className="text-[#1DAEFF] text-[12px] leading-5">
                          Andrey Mashkov
                        </label>
                        &nbsp;
                        <label className="text-white text-[12px] leading-5">
                          added New Location to the project
                        </label>
                        &nbsp;
                        <label className="text-[#1DAEFF] text-[12px] leading-5">
                          Apple Trees
                        </label>
                      </div>
                      <div>
                        <label className="text-[#5F5F5F] text-[9px] font-extrabold leading-5 tracking-[.1em]">
                          14:02
                        </label>
                      </div>
                    </div>
                    <div className="image-alarm mt-3 flex flex-row justify-between items-center">
                      <PersonAlarmIcon />
                      <div className="w-[250px]">
                        <label className="text-[#1DAEFF] text-[12px] leading-5">
                          Andrey Mashkov
                        </label>
                        &nbsp;
                        <label className="text-white text-[12px] leading-5">
                          added New Location to the project
                        </label>
                        &nbsp;
                        <label className="text-[#1DAEFF] text-[12px] leading-5">
                          Apple Trees
                        </label>
                      </div>
                      <div>
                        <label className="text-[#5F5F5F] text-[9px] font-extrabold leading-5 tracking-[.1em]">
                          14:02
                        </label>
                      </div>
                    </div>
                  </div>
                </ul>
              )}
            </div>

            <div className="dropdown dropdown-end mr-6">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="assets/img/dashboard/Avatar.png" alt="Avatar" />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="cursor-pointer drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mt-3 shadow bg-[#161616] border border-[#464646] w-32 h-40 mr-2 rounded-[4px]"
              >
                <Link
                  className="cursor-pointer flex flex-row px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D] rounded-t-[4px]"
                  to="/profile"
                >
                  <img
                    className="cursor-pointer p-0 w-5 h-5"
                    src="assets/img/dashboard/person.png"
                    alt="profile"
                  />
                  <label className="cursor-pointer p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em]">
                    PROFILE
                  </label>
                </Link>
                <button className="cursor-pointer flex flex-row px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D]">
                  <img
                    className="cursor-pointer p-0 w-5 h-5"
                    src="assets/img/dashboard/shield.png"
                    alt="shield"
                  />
                  <label className="cursor-pointer p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em]">
                    PRIVACY
                  </label>
                </button>
                <button
                  className="cursor-pointer flex flex-row px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D]"
                  onClick={() => {
                    setShowSettingModal(true);
                  }}
                >
                  <img
                    className="cursor-pointer p-0 w-5 h-5"
                    src="assets/img/dashboard/settings.png"
                    alt="settings"
                  />
                  <label className="cursor-pointer p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em]">
                    SETTINGS
                  </label>
                </button>
                <button className="cursor-pointer flex flex-row px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D]">
                  <img
                    className="cursor-pointer p-0 w-5 h-5"
                    src="assets/img/dashboard/question-mark-circle.png"
                    alt="FAQ"
                  />
                  <label className="cursor-pointer p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em]">
                    FAQ
                  </label>
                </button>
                <button
                  className="cursor-pointer flex flex-row px-2 py-1.5 h-8 hover:bg-[#5D5D5D] rounded-b-[4px]"
                  onClick={() => {
                    setShowLogoutModal(true);
                  }}
                >
                  <img
                    className="cursor-pointer p-0 w-5 h-5"
                    src="assets/img/dashboard/log-out.png"
                    alt="log-out"
                  />
                  <label className="cursor-pointer p-0 ml-2 text-[9px] text-[#DD5E5E] font-extrabold leading-5 tracking-[.21em]">
                    LOG OUT
                  </label>
                </button>
              </ul>
            </div>
          </div>
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
        {showSettingModal ? (
          <div className="z-20 fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[585px] bg-[#2B2B2B] border border-[#161616] rounded-md">
            <div className="setting-modal-header flex flex-row justify-between items-center py-[14px] w-full h-8 border-b border-[#161616]">
              <label className="ml-[24px] text-[9px] text-white font-extrabold leading-5 tracking-[.21em]">
                SETTINGS
              </label>
              <button
                className="mr-[10px] hover:bg-[#4F4F4F]"
                onClick={() => {
                  setShowSettingModal(false);
                }}
              >
                <img
                  className="w-[20px] h-[20px]"
                  src="assets/img/dashboard/close.png"
                  alt="close"
                />
              </button>
            </div>
            <div className="setting-modal-tab">
              <div className="flex flex-row items-center h-[44px] border-b border-[#161616]">
                <button
                  className={
                    "px-4 py-3 text-[14px] text-center leading-5 " +
                    (openTab === 1 ? "text-white" : "text-[#5F5F5F]")
                  }
                  onClick={() => {
                    setOpenTab(1);
                  }}
                >
                  General
                </button>
                <button
                  className={
                    "px-4 py-3 text-[14px] text-center leading-5 " +
                    (openTab === 2 ? "text-white" : "text-[#5F5F5F]")
                  }
                  onClick={() => {
                    setOpenTab(2);
                  }}
                >
                  Auto-Save & Backup
                </button>
                <button
                  className={
                    "px-4 py-3 text-[14px] text-center leading-5 " +
                    (openTab === 3 ? "text-white" : "text-[#5F5F5F]")
                  }
                  onClick={() => {
                    setOpenTab(3);
                  }}
                >
                  Format Assistant
                </button>
              </div>
            </div>

            {openTab === 1 && (
              <div className="general-tab-content">
                <div className="general-1-tab-content px-[24px] py-[16px] flex flex-col border-b border-[#161616]">
                  <label className="text-[9px] font-extrabold leading-5 text-white tracking-[.21em]">
                    GENERAL
                  </label>
                  <div className="mt-3">
                    <Checkbox
                      checked={checkedGeneralSpeech}
                      onChange={() => {
                        setCheckedGeneralSpeech(!checkedGeneralSpeech);
                      }}
                    >
                      Speech commands
                    </Checkbox>
                  </div>

                  <div className="mt-3">
                    <Checkbox
                      checked={checkedGeneralScroll}
                      onChange={() => {
                        setCheckedGeneralScroll(!checkedGeneralScroll);
                      }}
                    >
                      Scroll keys mimic MS Word
                    </Checkbox>
                  </div>
                  <div className="mt-3">
                    <Checkbox
                      checked={checkedGeneralCapitalize}
                      onChange={() => {
                        setCheckedGeneralCapitalize(!checkedGeneralCapitalize);
                      }}
                    >
                      Capitalize first word of a sentence
                    </Checkbox>
                  </div>
                  <div className="mt-3">
                    <Checkbox
                      checked={checkedGeneralAutomatically}
                      onChange={() => {
                        setCheckedGeneralAutomatically(
                          !checkedGeneralAutomatically
                        );
                      }}
                    >
                      Automatically check for updates
                    </Checkbox>
                  </div>
                  <div className="mt-3">
                    <Checkbox
                      checked={checkedGeneralShow}
                      onChange={() => {
                        setCheckedGeneralShow(!checkedGeneralShow);
                      }}
                    >
                      Show welcome screen on launch
                    </Checkbox>
                  </div>
                  <div className="mt-2 flex flex-row items-center">
                    <label className="text-white text-[12px] leading-5 mr-3">
                      Recent Items
                    </label>
                    <div className="w-20">
                      <InputText
                        type="text"
                        name="autosave-count"
                        value={initRecentItemCount}
                        onChange={(e) => setInitRecentItemCount(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-2 flex flex-row items-center">
                    <label className="text-white text-[12px] leading-5">
                      Language
                    </label>
                    <div className="dropdown">
                      <div
                        tabIndex="0"
                        className="ml-7 p-1.5 w-32 h-8 bg-[#161616] border border-[#404040] rounded-[4px]"
                        name="projects"
                        id="projects"
                      >
                        <div className="flex justify-between">
                          <label className="ml-1.5 text-center text-white text-[12px] leading-5">
                            {languageType}
                          </label>

                          <button>
                            <DropDownIcon />
                          </button>
                        </div>
                      </div>
                      <ul
                        tabIndex="0"
                        className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content ml-[28px] shadow bg-[#161616] border border-[#464646] w-32 h-24 rounded-[4px]"
                      >
                        <li
                          className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                          onClick={() => {
                            setLanguageType("English");
                          }}
                        >
                          English
                        </li>
                        <li
                          className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                          onClick={() => {
                            setLanguageType("Русский");
                          }}
                        >
                          Русский
                        </li>
                        <li
                          className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                          onClick={() => {
                            setLanguageType("Espanol");
                          }}
                        >
                          Espanol
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="general-2-tab-content px-[24px] py-[16px] flex flex-col border-b border-[#161616]">
                  <label className="text-[9px] font-extrabold leading-5 text-white tracking-[.21em]">
                    APPEARANCE
                  </label>
                  <div className="flex flex-row items-center mt-3">
                    <input
                      className="w-[18px] h-[18px] border border-[#404040] bg-[#0E0E0E] checked:bg-[#0E0E0E] hover:bg-[#0E0E0E] cursor-pointer"
                      type="radio"
                      name="theme"
                      value="light"
                      defaultChecked={theme}
                      onChange={handleTheme}
                    />
                    <label className="ml-3 text-[12px] leading-5 text-white">
                      Light Mode
                    </label>
                    <input
                      className="ml-3 w-[18px] h-[18px] border border-[#404040] bg-[#0E0E0E] checked:bg-[#0E0E0E] hover:bg-[#0E0E0E] cursor-pointer"
                      type="radio"
                      name="theme"
                      value="dark"
                      onChange={handleTheme}
                    />
                    <label className="ml-3 text-[12px] leading-5 text-white">
                      Dark Mode
                    </label>
                  </div>
                </div>
                <div className="general-3-tab-content px-[24px] py-[16px] flex flex-col">
                  <label className="text-[9px] font-extrabold leading-5 text-white tracking-[.21em]">
                    ANONYMOUS DIAGNOSTIC
                  </label>
                  <div className="mt-3">
                    <Checkbox
                      checked={checkedAnonymousAuto}
                      onChange={() => {
                        setCheckedAnonymousAuto(!checkedAnonymousAuto);
                      }}
                    >
                      Automatically send
                    </Checkbox>
                  </div>
                  <label className="mt-1.5 text-white text-[10px] leading-5">
                    Help Imaginarium improve its products and services by
                    sharing anonymous diagnostic and usage data.
                  </label>
                </div>
              </div>
            )}

            {openTab === 2 && (
              <div className="autosave-tab-content">
                <div className="autosave-1-tab-content px-[24px] py-[16px] border-b border-[#161616]">
                  <label className="text-[9px] font-extrabold leading-5 text-white tracking-[.21em]">
                    AUTO-SAVE
                  </label>

                  <div className="mt-3 flex flex-row items-center">
                    <Checkbox
                      checked={checkedAutosaveAuto}
                      onChange={() => {
                        setCheckedAutosaveAuto(!checkedAutosaveAuto);
                      }}
                    >
                      Auto-Save every
                    </Checkbox>
                    <div className="ml-3 flex flex-row items-center">
                      <div className="w-20">
                        <InputText
                          name="autosave-count"
                          value={initAutoSaveCount}
                          onChange={(e) => setInitAutoSaveCount(e.target.value)}
                          type="number"
                        />
                      </div>
                      <label className="ml-3 text-white text-[12px] leading-5">
                        Auto-Save every
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <Checkbox
                      checked={checkedAutosaveAsk}
                      onChange={() => {
                        setCheckedAutosaveAsk(!checkedAutosaveAsk);
                      }}
                    >
                      Ask before Auto-Save
                    </Checkbox>
                  </div>
                </div>
                <div className="autosave-2-tab-content px-[24px] py-[16px]">
                  <label className="text-[9px] font-extrabold leading-5 text-white tracking-[.21em]">
                    BACKUP
                  </label>
                  <div className="mt-3 flex flex0row items-center">
                    <Checkbox
                      checked={checkedBackupAuto}
                      onChange={() => {
                        setCheckedBackupAuto(!checkedBackupAuto);
                      }}
                    >
                      Auto-Backup enabled
                    </Checkbox>
                  </div>

                  <div className="flex flex-row items-center mt-3">
                    <label className="text-white text-[12px] leading-5">
                      Backup folder file count:
                    </label>
                    <div className="ml-3 w-20">
                      <InputText
                        name="backup-count"
                        value={initBackupItemCount}
                        onChange={(e) =>
                          setInitBackuptItemCount(e.target.value)
                        }
                        type="number"
                      />
                    </div>
                  </div>
                  <label className="mt-1 text-white text-[10px] leading-5">
                    /Users/juliaellei/Library/Application
                    Support/Imaginarium/Imaginarium 0.1/Backup/
                  </label>
                </div>
              </div>
            )}

            {openTab === 3 && (
              <div className="format-tab-content">
                <div className="px-[24px] py-[16px]">
                  <div className="flex flex-row items-center">
                    <Checkbox
                      checked={checkedFormatScan}
                      onChange={() => {
                        setCheckedFormatScan(!checkedFormatScan);
                      }}
                    >
                      Scan for format errors before printing
                    </Checkbox>
                  </div>
                  <div className="mt-3">
                    <Checkbox
                      checked={checkedFormatAlways}
                      onChange={() => {
                        setCheckedFormatAlways(!checkedFormatAlways);
                      }}
                    >
                      Always ask me before printing
                    </Checkbox>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>
    );
  }
}

export const MainMenuItem = (props) => {
  return (
    <div className="!inline-flex flex-row p-4 h-full hover:bg-neutral-800 hover:cursor-pointer">
      {props.icon}
    </div>
  );
};

export const WorkSpaceItem = (props) => {
  const tabClass =
    `tab flex text-white p-3 h-full ` +
    (props.active ? "bg-[#0E0E0E]" : "bg-[#161616]");

  return (
    <div className={tabClass}>
      {props.name}
      {props.active && (
        <div className="w-4 h-4 rounded-md hover:bg-slate-700 flex items-center justify-center ml-2">
          &times;
        </div>
      )}
    </div>
  );
};
