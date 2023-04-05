import React, { useState } from "react";
import Checkbox from "../../../core/common/Checkbox";
import {
  CommentIcon,
  DropDownIcon,
  SettingIcon,
  TimesIcon,
} from "../../../Svg";
import CommentDialog from "./CommentDialog";

const CommentSection = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("ALL");
  const [isChecked, setChecked] = useState(false);
  const [isSetModal, setModal] = useState(false);
  const [isCommentOpen, setCommentOpen] = useState(false);
  // const [isSmallOpen, setSmallOpen] = useState(false);
  //   const [isSmallValue, setSmallValue] = useState("");

  const handleSelectChange = (val) => {
    setSelectValue(val);
  };
  // const handleSmallModal = (val) => {
  //     setSmallValue(val);
  // }
  const CommentData = [
    {
      title: "Text | Scene 1",
      comment: [
        {
          count: 1,
          replies: 2,
          content:
            "Need to change this paragraph. Because we already updated hero information.",
          name: "Irina",
          duration: "2 days ago",
        },
        {
          count: 1,
          replies: 2,
          content:
            "Need to change this paragraph. Because we already updated hero information.",
          name: "William",
          duration: "2 days ago",
        },
      ],
    },
    {
      title: "Locations",
      comment: [
        {
          count: 6,
          replies: 2,
          content:
            "Need to change this paragraph. Because we already updated hero information.",
          name: "Irina",
          duration: "2 days ago",
        },
      ],
    },
    {
      title: "Characters",
      comment: [
        {
          count: 3,
          replies: 2,
          content:
            "Need to change this paragraph. Because we already updated hero information.",
          name: "William",
          duration: "2 days ago",
        },
        {
          count: 4,
          replies: 2,
          content:
            "Need to change this paragraph. Because we already updated hero information.",
          name: "Irina",
          duration: "2 days ago",
        },
        {
          count: 5,
          replies: 3,
          content:
            "Need to change this paragraph. Because we already updated hero information.",
          name: "William",
          duration: "2 days ago",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="flex items-start justify-between p-3 gap-3 border-b border-[#262626]">
        <div className="dropdown w-full">
          <div
            tabIndex="0"
            className="px-2 py-1.5 h-10 bg-[#161616] border border-[#404040] cursor-pointer rounded-[4px] w-full flex justify-between "
            name="projects"
            id="projects"
            onClick={() => {
              setOpen(true);
            }}
          >
            <div className="flex justify-between items-center ">
              <div className="flex gap-2">
                <label className="text-center text-white text-[12px] leading-5">
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
                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                onClick={(e) => {
                  handleSelectChange(e.currentTarget.textContent);
                  setOpen(false);
                }}
              >
                All
              </li>
              <li
                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                onClick={(e) => {
                  handleSelectChange(e.currentTarget.textContent);
                  setOpen(false);
                }}
              >
                Only Yours
              </li>
            </ul>
          ) : null}
        </div>
        <div className="w-full">
          <div
            tabIndex="0"
            className="px-2 py-1.5 h-10 bg-[#161616] border border-[#404040] cursor-pointer rounded-[4px] w-full flex justify-between relative"
            name="projects"
            id="projects"
            onClick={() => {
              setOpen(true);
            }}
          >
            <Checkbox
              checked={isChecked}
              onChange={() => {
                setChecked(!isChecked);
              }}
            >
              Resolved
            </Checkbox>
          </div>
        </div>
        <div className=" dropdown dropdown-end p-0 w-10 h-10 flex items-center justify-center border border-[#404040] rounded-[4px]">
          <button
            tabIndex="0"
            className="w-10 h-10 flex items-center justify-center rounded-[4px]"
            onClick={() => {
              setModal(true);
            }}
          >
            <SettingIcon />
          </button>
          {isSetModal && (
            <ul
              tabIndex="0"
              className="cursor-pointer drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mt-[290px] shadow bg-[#2B2B2B] border border-[#161616] rounded-[4px] w-[400px]"
            >
              <div className=" flex flex-row justify-between items-center py-[14px] w-full h-12 border-b border-[#161616]">
                <label className="ml-[24px] text-xs text-white font-extrabold leading-5 tracking-[.21em]">
                  NOTIFICATIONS
                </label>
                <button
                  className="mr-[10px] w-8 h-8 flex items-center justify-center rounded hover:bg-[#4F4F4F]"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  <TimesIcon />
                </button>
              </div>
              <div className="flex flex-col px-[24px] py-[16px] w-full">
                <div className="w-full h-full flex flex-col gap-4">
                  <div className="text-sm text-[#CDCDCD]">
                    Select which omment threads on this file you'll receive
                    emails and notifications for
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex flex-col items-start mt-3 gap-3">
                      <div className="flex">
                        <input
                          className="w-[18px] h-[18px] border border-[#404040] bg-[#0E0E0E] checked:bg-[#0E0E0E] hover:bg-[#0E0E0E] cursor-pointer"
                          type="radio"
                          name="comment_setting"
                          id="all_comment"
                        />
                        <label
                          htmlFor="all_comment"
                          className="ml-3 text-[12px] leading-5 text-white"
                        >
                          All Comments
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          className="w-[18px] h-[18px] border border-[#404040] bg-[#0E0E0E] checked:bg-[#0E0E0E] hover:bg-[#0E0E0E] cursor-pointer"
                          type="radio"
                          name="comment_setting"
                          id="only_yours"
                        />
                        <label
                          htmlFor="only_yours"
                          className="ml-3 text-[12px] leading-5 text-white"
                        >
                          Only yours{" "}
                          <span className="text-sm text-[#5F5F5F]">
                            (threads you're involved in)
                          </span>
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          className="w-[18px] h-[18px] border border-[#404040] bg-[#0E0E0E] checked:bg-[#0E0E0E] hover:bg-[#0E0E0E] cursor-pointer"
                          type="radio"
                          name="comment_setting"
                          id="radio_none"
                        />
                        <label
                          htmlFor="radio_none"
                          className="ml-3 text-[12px] leading-5 text-white"
                        >
                          None
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          )}
        </div>
      </div>
      <div className="max-h-[calc(100vh-220px)] overflow-auto CustomScroll">
        {CommentData.map((comm, index) => (
          <div
            className="flex flex-col items-start p-4 gap-3 border-b border-[#262626]"
            key={index}
            onClick={() => {
              console.log(!isCommentOpen);
              setCommentOpen(!isCommentOpen);
            }}
          >
            <div className="flex justify-between w-full">
              <label className="text-white uppercase text-xs tracking-[.21rem]">
                {comm.title}
              </label>
              <label className="text-white uppercase text-xs tracking-[.21rem]">
                {comm.comment.length}
              </label>
            </div>
            {comm.comment.map((box, index) => (
              <div className="dropdown flex flex-col gap-3" key={index}>
                <div
                  className=" border border-[#2B2B2B]  flex flex-col p-4 gap-4  rounded-md cursor-pointer"
                  key={index}
                  tabIndex="0"
                >
                  <div className="flex justify-between">
                    <div
                      className={
                        (index % 2 === 1 ? " text-[#1DAEFF] " : "text-[#5F5F5F] ") +
                        "flex items-center justify-center gap-2"
                      }
                    >
                      <CommentIcon />
                      <label>{box.count}</label>
                    </div>
                    <div className="flex justify-between gap-2">
                      <label className="uppercase text-xs tracking-[.21rem] text-[#5F5F5F]">
                        {box.replies}
                      </label>
                      <label className="uppercase text-xs tracking-[.21rem] text-[#5F5F5F]">
                        Replies
                      </label>
                    </div>
                  </div>
                  <div className="w-full text-white text-base">
                    {box.content}
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center justify-center gap-2">
                      <label className="text-xs uppercase tracking-[.21rem] text-[#5F5F5F]">
                        {box.name}
                      </label>
                    </div>
                    <div className="flex justify-between gap-2">
                      <label className="uppercase text-xs tracking-[.21rem] text-[#5F5F5F]">
                        {box.duration}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        {isCommentOpen && <CommentDialog setState={setCommentOpen} />}
      </div>
    </div>
  );
};

export default CommentSection;
