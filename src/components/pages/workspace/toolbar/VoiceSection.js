import React, { useEffect, useRef, useState } from "react";
import {
  DropDownIcon,
  PenIcon,
  PlusIcon,
  TimesIcon,
  VoiceIcon,
  VoiceLine,
} from "../../../Svg";
import { CgPlayButtonO } from "react-icons/cg";

const VoiceSection = () => {
  const [isOpen, setOpen] = useState(false);
  const [isVoiceOpen, setVoiceOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("All");
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("0");
  const [voiceState, setVoiceState] = useState(0);

  // 0 before start, 1 starting 2 End & Save
  const time_minute = useRef(null);
  const time_second = useRef(null);
  const handleSelectChange = (val) => {
    setSelectValue(val);
  };

  useEffect(() => {
    let handle = 0;
    if (voiceState === 1) {
      handle = setInterval(() => {
        TimeCount();
      }, 1000);
    }
    return () => clearInterval(handle);
  });

  const RecordingStart = () => {
    setVoiceState(1);
  };

  const RecordingEnd = () => {
    setVoiceState(2);
  };

  const FinishVoice = () => {
    setMinute("0");
    setSecond("00");
    setVoiceState(0);
    setVoiceOpen(false);
  };

  function TimeCount() {
    let min = Number(time_minute.current.textContent);
    let sec = Number(time_second.current.textContent);
    if (sec === 59) {
      sec = 0;
      min++;
    } else {
      sec++;
    }
    if (min > 59) {
      min = 0;
    }
    sec < 10 ? setSecond("0" + sec) : setSecond(sec);
    setMinute(min);
  }

  return (
    <div>
      <div className="flex items-start justify-between p-3 gap-3 border-b border-[#262626]">
        <div
          className="px-4 py-1.5 h-10 bg-[#161616] border border-[#404040] cursor-pointer rounded-[4px] w-full flex items-center gap-2 hover:bg-[#404040] "
          onClick={() => setVoiceOpen(true)}
        >
          <PlusIcon />
          <label className="text-white uppercase text-xs tracking-[.21rem] cursor-pointer">
            Add New
          </label>
        </div>
        {isVoiceOpen && (
          <div className="z-50 drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact  shadow bg-[#2B2B2B] border border-[#161616] rounded-[4px] w-[400px] absolute right-[25rem]">
            <div className=" flex flex-row justify-between items-center py-[14px] w-full h-12 border-b border-[#161616]">
              <label className="ml-[24px] text-xs text-white font-extrabold leading-5 tracking-[.21em]">
                New Voice Memo
              </label>
              <button
                className="mr-[10px] w-8 h-8 flex items-center justify-center rounded hover:bg-[#4F4F4F]"
                onClick={() => FinishVoice()}
              >
                <TimesIcon />
              </button>
            </div>
            {(voiceState === 0 || voiceState === 1) && (
              <div className="flex h-32 items-center justify-center px-[24px]  w-full border-b border-[#161616]">
                <span className="text-7xl font-bold text-[#CDCDCD] flex items-center justify-center gap-2">
                  <span ref={time_minute}>{minute}</span>
                  <span>:</span>
                  <span ref={time_second}>{second}</span>
                </span>
              </div>
            )}
            {voiceState === 2 && (
              <div className="flex flex-col h-32 items-center justify-center px-[24px] gap-2 w-full border-b border-[#161616]">
                <div className="flex w-full gap-4 items-end justify-between">
                  <input
                    type="text"
                    name="name"
                    className="mt-1 px-2 py-1.5 w-[70%] h-8 bg-[#161616] border border-[#404040] focus:border-white placeholder-[#5F5F5F] focus:outline-none rounded-md text-[12px] text-white"
                    placeholder="Enter name "
                  />
                  <div className=" border border-[#2b2b2b] bg-[#0E0E0E] rounded-2xl h-8 w-16 flex items-center justify-center">
                    <label className="text-xs uppercase tracking-[.21rem] text-white">
                      <span>{minute}</span>
                      <span>:</span>
                      <span>{second}</span>
                    </label>
                  </div>
                </div>
                <div className="flex w-full gap-4 items-center justify-between">
                  <div className="text-[#1DAEFF] w-14 h-14  flex">
                    <CgPlayButtonO size={"50"} />
                  </div>
                  <div>
                    <VoiceLine />
                  </div>
                </div>
              </div>
            )}
            <div className="flex h-20 items-center justify-center px-[24px]  w-full">
              {voiceState === 0 && (
                <div
                  className="w-16 h-16 rounded-full cursor-pointer flex justify-center items-center"
                  style={{
                    background:
                      " linear-gradient(90deg, #FEAC6D 0%, #AE61ED 100%)",
                  }}
                  onClick={() => {
                    RecordingStart();
                  }}
                >
                  <VoiceIcon />
                </div>
              )}
              {voiceState === 1 && (
                <div className="flex w-16 h-16" onClick={() => RecordingEnd()}>
                  <div
                    className="animate-ping absolute w-16 h-16 rounded-full opacity-40 cursor-pointer"
                    style={{
                      background:
                        " linear-gradient(90deg, #FEAC6D 0%, #AE61ED 100%)",
                    }}
                  />
                  <div
                    className="flex items-center justify-center rounded-full h-16 w-16 "
                    style={{
                      background:
                        " linear-gradient(90deg, #FEAC6D 0%, #AE61ED 100%)",
                    }}
                  >
                    <div className="w-6 h-6 bg-white rounded" />
                  </div>
                </div>
              )}
              {voiceState === 2 && (
                <div className="flex justify-end w-full gap-4">
                  <button className=" w-28 h-10 border border-[#404040] rounded tracking-widest text-white uppercase">
                    Delete
                  </button>
                  <button
                    className=" w-28 h-10 border border-[#404040] rounded tracking-widest text-white uppercase"
                    style={{
                      background:
                        "linear-gradient(90deg, #FEAC6D 0%, #AE61ED 100%)",
                    }}
                    onClick={FinishVoice}
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="dropdown w-full">
          <div
            tabIndex="0"
            className="px-2 py-1.5 h-10 bg-[#161616] border border-[#404040] cursor-pointer rounded-[4px] w-full flex justify-between relative"
            onClick={() => {
              setOpen(true);
            }}
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-2 ">
                <label className="text-white uppercase text-xs tracking-widest">
                  {selectValue}
                </label>
              </div>

              <button className="absolute right-2">
                <DropDownIcon />
              </button>
            </div>
          </div>
          {isOpen ? (
            <ul
              tabIndex="0"
              className="list-none p-0 drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mt-1 shadow bg-[#161616] border border-[#464646] w-full max-h-fit rounded-[4px]"
            >
              <li
                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D] tracking-widest uppercase"
                onClick={(e) => {
                  handleSelectChange(e.currentTarget.textContent);
                  setOpen(false);
                }}
              >
                All
              </li>
              <li
                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D] tracking-widest uppercase"
                onClick={(e) => {
                  handleSelectChange(e.currentTarget.textContent);
                  setOpen(false);
                }}
              >
                Text
              </li>
              <li
                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D] tracking-widest uppercase"
                onClick={(e) => {
                  handleSelectChange(e.currentTarget.textContent);
                  setOpen(false);
                }}
              >
                Characters
              </li>
              <li
                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D] tracking-widest uppercase"
                onClick={(e) => {
                  handleSelectChange(e.currentTarget.textContent);
                  setOpen(false);
                }}
              >
                Locations
              </li>
            </ul>
          ) : null}
        </div>
      </div>
      <div className="max-h-[calc(100vh-220px)] overflow-auto CustomScroll">
        <div className="flex items-start flex-col justify-between p-3 gap-3 border-b border-[#262626]">
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              className="border border-[#2B2B2B]  flex flex-col p-4 gap-4 w-full rounded"
              key={index}
            >
              <div className="flex justify-between w-full">
                <div className="flex items-center justify-between gap-2 w-full">
                  <label className="text-white uppercase text-xs tracking-[.21rem]">
                    Voice Memo Name
                  </label>
                  <div className="text-white uppercase text-xs tracking-[.21rem] w-5 h-5 hover:bg-[#404040] rounded flex items-center justify-center">
                    <PenIcon />
                  </div>
                </div>
              </div>
              <div className="w-full h-fit flex  justify-between items-center">
                <div
                  className={index % 2 ? "text-[#1DAEFF]" : " w-14 h-14  flex"}
                >
                  <CgPlayButtonO size={"50"} />
                </div>
                <div>
                  {index % 2 ? (
                    <img
                    className="w-[90%]"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/workspace/VoiceLineLight.png"
                      }
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-[90%]"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/workspace/VoiceLineDark.png"
                      }
                      alt=""
                    />
                  )}
                </div>
                <div className=" border border-[#2b2b2b] bg-[#0E0E0E] rounded-2xl h-8 w-16 flex items-center justify-center">
                  <label className="text-xs uppercase tracking-[.21rem] text-white">
                    1:45
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center justify-center gap-2">
                  <label className="text-xs uppercase tracking-[.21rem]">
                    Irina
                  </label>
                </div>
                <div className="flex justify-between gap-2">
                  <label className="uppercase text-xs tracking-[.21rem]">
                    2 Days Ago
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoiceSection;
