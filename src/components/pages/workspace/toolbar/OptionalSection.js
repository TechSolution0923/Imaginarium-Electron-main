import React, { useState, useRef } from "react";

import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ChevronRight,
  DropDownIcon,
  FontStrikethroughIcon,
  FontUnderLineIcon,
  IndentIcon,
  ItalicIcon,
  LetterSpacingIcon,
  LineHeightIcon,
  ListDiffIcon,
  ListIcon,
  ListNumIcon,
  ListRowIcon,
  ListSquareIcon,
  PHeightIcon,
  PlusIcon,
  RightIndentIcon,
  TimesIcon,
} from "../../../Svg";
import tinymce from "tinymce";

const OptionalSection = (props) => {
  const { state, setState } = props;
  const [openAct, setOpenAct] = useState(false);
  const [fontOpen, setFontOpen] = useState(false);
  const imageRef = useRef(null);

  const handleBlockquote = (val) => {
    switch (val) {
      case "Paragraph":
        setState({ ...state, initAct: val });
        tinymce.activeEditor.execCommand("FormatBlock", false, "p");
        break;
      case "Headerline 1":
        setState({ ...state, blockquote: val });
        tinymce.activeEditor.execCommand("FormatBlock", false, "h1");
        break;
      case "Headerline 2":
        setState({ ...state, blockquote: val });
        tinymce.activeEditor.execCommand("FormatBlock", false, "h2");
        break;
      case "Headerline 3":
        setState({ ...state, blockquote: val });
        tinymce.activeEditor.execCommand("FormatBlock", false, "h3");
        break;
      case "Headerline 4":
        setState({ ...state, blockquote: val });
        tinymce.activeEditor.execCommand("FormatBlock", false, "h4");
        break;
      case "Headerline 5":
        setState({ ...state, blockquote: val });
        tinymce.activeEditor.execCommand("FormatBlock", false, "h5");
        break;
      case "Headerline 6":
        setState({ ...state, blockquote: val });
        tinymce.activeEditor.execCommand("FormatBlock", false, "h6");
        break;
      default:
        break;
    }
  };

  const fontSizeChange = (e) => {
    let size = e.target.value;
    setState({ ...state, fSize: size });
    tinymce.activeEditor.execCommand("FontSize", false, `${size}px`);
  };

  const handleAlignClick = (num) => {
    setState({ ...state, align: num });
    switch (num) {
      case 1:
        tinymce.activeEditor.execCommand("justifyLeft", false, null);
        break;
      case 2:
        tinymce.activeEditor.execCommand("justifyCenter", false, null);
        break;
      case 3:
        tinymce.activeEditor.execCommand("justifyRight", false, null);
        break;
      case 4:
        tinymce.activeEditor.execCommand("justifyFull", false, null);
        break;
      default:
        break;
    }
  };

  const handleLineH = (val) => {
    tinymce.activeEditor.execCommand("LineHeight", false, `${val}px`);
    setState({ ...state, lineH: val });
  };

  const handleRtlClick = (val) => {
    setState({ ...state, Paragraph: val });
    if (val) tinymce.activeEditor.execCommand("mceDirectionRTL");
    else tinymce.activeEditor.execCommand("mceDirectionLTR");
  };

  const handleListChange = (val) => {
    setState({ ...state, pList: val });
    switch (val) {
      case 1:
        tinymce.activeEditor.execCommand("RemoveList");
        break;
      case 2:
        tinymce.activeEditor.execCommand("InsertUnorderedList", false, {
          "list-style-type": "disc",
        });
        break;
      case 3:
        tinymce.activeEditor.execCommand("InsertOrderedList", false, {
          "list-style-type": "decimal",
        });
        break;
      case 4:
        tinymce.activeEditor.execCommand("ApplyUnorderedListStyle", false, {
          "list-style-type": "circle",
        });
        break;
      case 5:
        tinymce.activeEditor.execCommand("ApplyUnorderedListStyle", false, {
          "list-style-type": "square",
        });
        break;
      case 6:
        tinymce.activeEditor.execCommand("ApplyUnorderedListStyle", false, {
          "list-style-type": "upper-alpha",
        });
        break;
      default:
        break;
    }
  };

  const handleDecoration = (val) => {
    switch (val) {
      case 1:
        setState({ ...state, decoration: val, bold: !state.bold });
        tinymce.activeEditor.execCommand("Bold");
        break;
      case 2:
        setState({ ...state, decoration: val, italic: !state.italic });
        tinymce.activeEditor.execCommand("Italic");
        break;
      case 3:
        setState({ ...state, decoration: val, underline: !state.underline });
        tinymce.activeEditor.execCommand("Underline");
        break;
      case 4:
        setState({ ...state, decoration: val, strikethr: !state.strikethr });
        tinymce.activeEditor.execCommand("Strikethrough");
        break;
      default:
        break;
    }
  };

  // const handleCaseChange = (val) => {
  //     console.log("val", val);
  //     switch (val) {
  //         case 1:
  //             tinymce.activeEditor.execCommand("mceTitleCase");
  //             setState({ ...state, pCase: 1 });
  //             break;
  //         case 2:
  //             tinymce.activeEditor.execCommand("mceUpperCase");
  //             setState({ ...state, pCase: 2 });
  //             break;
  //         case 3:
  //             tinymce.activeEditor.execCommand("mceLowerCase");
  //             setState({ ...state, pCase: 3 });
  //             break;
  //         default:
  //             break;
  //     }
  // }

  const handleColor = (val) => {
    console.log("Val: ", val);
    setState({ ...state, colorVal: val });
    tinymce.activeEditor.execCommand("ForeColor", false, val);
  };

  const getFileData = (e) => {
    let file = imageRef.current.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.addEventListener("load", function () {
        const background = this.result;
        const ImageTag = "<img src='" + background + "' alt='avatar' />";
        tinymce.execCommand("mceInsertContent", false, ImageTag);
      });
    }
  };

  const handleFontName = (val) => {
    setState({ ...state, fName: val });
    tinymce.execCommand("FontName", false, val);
  };

  const fontNames = [
    "Andale Mono",
    "Arial",
    "Arial Black",
    "Book Antiqua",
    "Comic Sans MS",
    "Courier New",
    "Georgia",
    "Helvetica",
    "Impact",
    "Tahoma",
    "Terminal",
    "Times New Roman",
    "Trebuchet MS",
    "Verdana",
  ];

  return (
    <div className="max-h-[calc(100vh-155px)] overflow-auto CustomScroll">
      <div className="flex flex-col items-start gap-2 p-4 border-b border-[#262626]">
        <div className="dropdown w-full">
          <div
            tabIndex="0"
            className="px-2 py-1.5 h-8 bg-[#161616] border border-[#404040] cursor-pointer rounded-[4px]"
            name="projects"
            id="projects"
            onClick={() => {
              setOpenAct(true);
            }}
          >
            <div className="flex justify-between ">
              <div className="flex gap-2">
                <label className="text-center text-white text-[16px] leading-5 mt-[-1px]">
                  Ag
                </label>
                <label className="text-center text-white text-[12px] leading-5">
                  {state.blockquote}
                </label>
              </div>

              <button>
                <DropDownIcon />
              </button>
            </div>
          </div>

          {openAct ? (
            <ul
              tabIndex="0"
              className="list-none p-0 drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mt-3 shadow bg-[#161616] border border-[#464646] w-full h-56 rounded-[4px]"
            >
              <li
                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                onClick={(e) => {
                  handleBlockquote(e.currentTarget.textContent);
                  setOpenAct(false);
                }}
              >
                Paragraph
              </li>
              <li
                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                onClick={(e) => {
                  handleBlockquote(e.currentTarget.textContent);
                  setOpenAct(false);
                }}
              >
                Headerline 1
              </li>
              <li
                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                onClick={(e) => {
                  handleBlockquote(e.currentTarget.textContent);
                  setOpenAct(false);
                }}
              >
                Headerline 2
              </li>
              <li
                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                onClick={(e) => {
                  handleBlockquote(e.currentTarget.textContent);
                  setOpenAct(false);
                }}
              >
                Headerline 3
              </li>
              <li
                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                onClick={(e) => {
                  handleBlockquote(e.currentTarget.textContent);
                  setOpenAct(false);
                }}
              >
                Headerline 4
              </li>
              <li
                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                onClick={(e) => {
                  handleBlockquote(e.currentTarget.textContent);
                  setOpenAct(false);
                }}
              >
                Headerline 5
              </li>
              <li
                className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                onClick={(e) => {
                  handleBlockquote(e.currentTarget.textContent);
                  setOpenAct(false);
                }}
              >
                Headerline 6
              </li>
            </ul>
          ) : null}
        </div>
        <div className="flex justify-between items-center p-0 gap-1 h-8 w-full">
          <label className="text-sm text-white leading-5">Medium</label>
          <div className="flex flex-row items-center justify-between p-1 pr-2  h-full w-24 bg-[#0E0E0E] rounded relative">
            <input
              type="color"
              value={state.colorVal}
              onChange={(e) => handleColor(e.target.value)}
              className="w-0 h-0 z-[-1] ml-[-9px]"
              id="color-picker"
            />
            <label htmlFor="color-picker" className="cursor-pointer">
              <div
                className="w-6 h-6 rounded"
                style={{ background: state.colorVal }}
              />
            </label>
            <label
              htmlFor="color-picker"
              className="text-xs text-[#cdcdcd] cursor-pointer uppercase"
            >
              {state.colorVal}
            </label>
          </div>
        </div>
        <div className="flex justify-between items-center w-full pl-[12px] p-[6px] rounded cursor-pointer border border-[#404040] relative">
          <label className="uppercase text-white w-[calc(100%-20px)] cursor-pointer text-[12px] leading-5 tracking-wider text-center">
            Open Style Editor
          </label>
          <button className="absolute right-0 flex items-end w-5">
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-start p-4 gap-3 border-b border-[#262626]">
        <div className="dropdown w-full">
          <div
            tabIndex="0"
            className="px-2 py-1.5 h-8 bg-[#161616] border border-[#404040] cursor-pointer rounded-[4px] w-full flex justify-between relative"
            name="projects"
            id="projects"
            onClick={() => {
              setFontOpen(true);
            }}
          >
            <div className="flex justify-between ">
              <div className="flex gap-2">
                <label
                  style={{ fontFamily: state.fName }}
                  className="text-center text-white text-[12px] leading-5"
                >
                  {state.fName}
                </label>
              </div>

              <button className="absolute right-2">
                <DropDownIcon />
              </button>
            </div>
          </div>

          {fontOpen ? (
            <ul
              tabIndex="0"
              className="list-none p-0 drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mt-3 shadow bg-[#161616] border border-[#464646] w-full max-h-fit rounded-[4px]"
            >
              {fontNames.map((fName, index) => (
                <li
                  className="flex flex-row px-2 py-1.5 h-8 text-center text-white text-[12px] leading-5 border-b border-[#464646] hover:bg-[#5D5D5D]"
                  onClick={(e) => {
                    handleFontName(e.currentTarget.textContent);
                    setFontOpen(false);
                  }}
                  style={{ fontFamily: fName }}
                  key={index}
                >
                  {fName}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col items-start gap-2 p-4 border-b border-[#262626]">
        <div className="flex flex-row items-center justify-between p-0 gap-3 w-full h-8">
          <label className="uppercase w-12 h-5 text-[10px] tracking-widest text-white flex items-center gap-1">
            Size
          </label>
          <input
            id="fontRange"
            type="range"
            value={state.fSize}
            className=" w-40 rounded-lg appearance-none cursor-pointer h-[2px] bg-blue-100"
            onChange={(e) => {
              fontSizeChange(e);
            }}
          />
          <div className="flex flex-row justify-center rounded border border-[#404040] items-center p-1  gap-2 w-[72px] h-full bg-[#0E0E0E]">
            <label className="text-sm text-white">{state.fSize}</label>
            <label className="text-sm">px</label>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between p-0 gap-3 w-full h-8 ">
          <label className="uppercase w-12 h-5 text-[10px] tracking-widest text-white flex items-center ">
            Weight
          </label>
          <input
            id="weightRange"
            type="range"
            className=" w-40 rounded-lg appearance-none cursor-pointer h-[2px] bg-blue-100"
          />
          <div className="flex flex-row justify-center rounded border border-[#404040] items-center p-1  gap-2 w-[72px] h-full bg-[#0E0E0E]">
            <label className="text-sm text-white">{state.fWeight}</label>
            <label className="text-sm">px</label>
          </div>
        </div>
        <div className="flex flex-row items-start justify-between  p-0 gap-4 w-full h-8">
          <div className="flex justify-between items-center p-1 pr-2 h-full bg-[#0E0E0E] rounded border border-[#404040] w-[48%]">
            <div className="w-5 h-5">
              <LineHeightIcon />
            </div>
            <div className="flex items-center p-0 h-5 w-[calc(100%-36px)]">
              <label
                htmlFor="lineheihgt-text"
                className="uppercase text-[#CDCDCD] text-[9px]"
              >
                Line
              </label>
              <input
                min={1}
                max={99}
                id="lineheihgt-text"
                type="number"
                value={state.lineH}
                onChange={(e) => handleLineH(e.target.value)}
                className="w-12 h-full bg-[#0E0E0E] border-none text-sm text-white "
              />
              <label
                htmlFor="lineheihgt-text"
                className="text-[#5F5F5F] text-sm "
              >
                {" "}
                px
              </label>
            </div>
          </div>
          <div className="flex justify-between items-center p-1 pr-2 h-full bg-[#0E0E0E] rounded border border-[#404040] w-[48%]">
            <div className="w-5 h-5">
              <LetterSpacingIcon />
            </div>
            <div className="flex items-center p-0 h-5 w-[calc(100%-36px)]">
              <label
                htmlFor="spacing-text"
                className="uppercase text-[#CDCDCD] text-[9px] "
              >
                Char
              </label>
              <input
                min={1}
                max={99}
                id="spacing-text"
                type="number"
                value={state.letterSpc}
                onChange={(e) =>
                  setState({ ...state, letterSpc: e.target.value })
                }
                className="w-12 h-full bg-[#0E0E0E] border-none text-sm text-white "
              />
              <label htmlFor="spacing-text" className="text-[#5F5F5F] text-sm">
                {" "}
                px
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start p-4 gap-2 border-b border-[#262626]">
        <div className="flex flex-row justify-between items-center w-full">
          <label className="uppercase text-xs text-white">Alignment</label>
          <div className="flex flex-row justify-between items-center bg-[#161616] border border-[#404040] w-fit h-8 p-1 rounded-md">
            <button
              className={
                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                (state.align === 1 ? "bg-[#5F5F5F]" : "bg-transparent")
              }
              onClick={() => {
                handleAlignClick(1);
              }}
            >
              <AlignLeftIcon />
            </button>
            <button
              className={
                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                (state.align === 2 ? "bg-[#5F5F5F]" : "bg-transparent")
              }
              onClick={() => {
                handleAlignClick(2);
              }}
            >
              <AlignCenterIcon />
            </button>
            <button
              className={
                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                (state.align === 3 ? "bg-[#5F5F5F]" : "bg-transparent")
              }
              onClick={() => {
                handleAlignClick(3);
              }}
            >
              <AlignRightIcon />
            </button>
            <button
              className={
                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                (state.align === 4 ? "bg-[#5F5F5F]" : "bg-transparent")
              }
              onClick={() => {
                handleAlignClick(4);
              }}
            >
              <AlignJustifyIcon />
            </button>
          </div>
        </div>
        {/* <div className="flex flex-row justify-between items-center w-full">
                    <label className="uppercase text-xs text-white" >Constrain</label>
                    <div className="flex flex-row justify-between items-center bg-[#161616] border border-[#404040] w-fit h-8 p-1 rounded-md">
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.Constrain === 1 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, Constrain: 1 })
                            }}
                        >
                            <ConstBotIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.Constrain === 2 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, Constrain: 2 })
                            }}
                        >
                            <ConstMidIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.Constrain === 3 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                setState({ ...state, Constrain: 3 })
                            }}
                        >
                            <ConstTopIcon />
                        </button>
                    </div>
                </div> */}
      </div>
      <div className=" flex flex-col items-start p-4 gap-2 border-b border-[#262626]">
        <div className="flex flex-row justify-between items-center w-full ">
          <label className="uppercase text-xs text-white">Paragraph</label>
          <div className="flex flex-row justify-between items-center bg-[#161616] border border-[#404040] w-fit h-8 p-1 rounded-md">
            <button
              className={
                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                (!state.Paragraph ? "bg-[#5F5F5F]" : "bg-transparent")
              }
              onClick={() => {
                handleRtlClick(false);
              }}
            >
              RTL
            </button>
            <button
              className={
                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                (state.Paragraph ? "bg-[#5F5F5F]" : "bg-transparent")
              }
              onClick={() => {
                handleRtlClick(true);
              }}
            >
              LTR
            </button>
          </div>
        </div>
        <div className="flex flex-row items-start justify-between p-0 gap-4 w-full h-8">
          <div className="flex justify-between items-center p-1 pr-2 gap-2 h-full bg-[#0E0E0E] rounded border border-[#404040] w-[48%]">
            <div className="w-5 h-5">
              <PHeightIcon />
            </div>
            <div className="flex items-center p-0 justify-between w-[calc(100%-36px)] h-5">
              <label
                htmlFor="height-text"
                className="uppercase text-[#CDCDCD] text-[9px] "
              >
                Height
              </label>
              <input
                min={1}
                max={999}
                id="height-text"
                type="number"
                value={state.pHeight}
                onChange={(e) =>
                  setState({ ...state, pHeight: e.target.value })
                }
                className="w-[50px] h-full bg-[#0E0E0E] border-none text-sm text-white "
              />
              <label htmlFor="height-text" className="text-[#5F5F5F] text-sm">
                {" "}
                px
              </label>
            </div>
          </div>
          <div className="flex justify-between items-center p-1 pr-2 h-full bg-[#0E0E0E] rounded border border-[#404040] w-[48%]">
            <div className="w-5 h-5">
              <IndentIcon />
            </div>
            <div className="flex items-center p-0 h-5 w-[calc(100%-36px)]">
              <label
                htmlFor="indent-text"
                className="uppercase text-[#CDCDCD] text-[9px] "
              >
                Indent
              </label>
              <input
                min={1}
                max={999}
                id="indent-text"
                type="number"
                value={state.indent}
                onChange={(e) => setState({ ...state, indent: e.target.value })}
                className="w-[50px] h-full bg-[#0E0E0E]  border-none text-sm text-white "
              />
              <label htmlFor="indent-text" className="text-[#5F5F5F] text-sm">
                {" "}
                px
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-between p-0 gap-4 w-full h-8">
          <div className="flex justify-between items-center p-1 pr-2 gap-2 h-full bg-[#0E0E0E] rounded border border-[#404040] w-[48%]">
            <div className="w-5 h-5">
              <IndentIcon />
            </div>
            <div className="flex items-center p-0 justify-between w-[calc(100%-36px)] h-5">
              <label
                htmlFor="leftindent-text"
                className="uppercase text-[#CDCDCD] text-[9px] "
              >
                Left
              </label>
              <input
                min={1}
                max={999}
                id="leftindent-text"
                type="number"
                value={state.pLeft}
                onChange={(e) => setState({ ...state, pLeft: e.target.value })}
                className="w-[50px] h-full bg-[#0E0E0E] border-none text-sm text-white "
              />
              <label
                htmlFor="leftindent-text"
                className="text-[#5F5F5F] text-sm"
              >
                {" "}
                px
              </label>
            </div>
          </div>
          <div className="flex justify-between items-center p-1 pr-2 h-full bg-[#0E0E0E] rounded border border-[#404040] w-[48%]">
            <div className="w-5 h-5">
              <RightIndentIcon />
            </div>
            <div className="flex items-center p-0 h-5 w-[calc(100%-36px)]">
              <label
                htmlFor="right-indent"
                className="uppercase text-[#CDCDCD] text-[9px] "
              >
                Right
              </label>
              <input
                min={1}
                max={"999"}
                id="right-indent"
                type="number"
                value={state.pRight}
                onChange={(e) => setState({ ...state, pRight: e.target.value })}
                className="w-[50px] h-full bg-[#0E0E0E]  border-none text-sm text-white "
              />
              <label htmlFor="right-indent" className="text-[#5F5F5F] text-sm">
                {" "}
                px
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-start p-4 gap-2 border-b border-[#262626]">
        <div className="flex flex-row justify-between items-center w-full cursor-pointer">
          <label className="uppercase text-xs text-white">List</label>
          <div className="flex flex-row items-center justify-between p-1 pr-2  h-full w-[84px] bg-[#0E0E0E] rounded cursor-pointer">
            <input
              type="file"
              ref={imageRef}
              className="hidden"
              id="input-file"
              onChange={(e) => getFileData()}
            />
            <label htmlFor="input-file">
              <div className="cursor-pointer w-6 h-6 rounded bg-[#2B2B2B] flex justify-center items-center">
                <PlusIcon />
              </div>
            </label>
            <label
              htmlFor="input-file"
              className="cursor-pointer text-xs text-[#cdcdcd] uppercase"
            >
              Image
            </label>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full ">
          <div className="flex flex-row justify-between items-center bg-[#161616] border border-[#404040] w-full h-8 p-1 rounded-md">
            <button
              className={
                "h-6 px-4 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                (state.pList === 1 ? "bg-[#5F5F5F]" : "bg-transparent")
              }
              onClick={() => {
                handleListChange(1);
              }}
            >
              <TimesIcon />
            </button>
            <button
              className={
                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                (state.pList === 2 ? "bg-[#5F5F5F]" : "bg-transparent")
              }
              onClick={() => {
                handleListChange(2);
              }}
            >
              <ListIcon />
            </button>
            <button
              className={
                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                (state.pList === 3 ? "bg-[#5F5F5F]" : "bg-transparent")
              }
              onClick={() => {
                handleListChange(3);
              }}
            >
              <ListNumIcon />
            </button>
            <button
              className={
                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                (state.pList === 4 ? "bg-[#5F5F5F]" : "bg-transparent")
              }
              onClick={() => {
                handleListChange(4);
              }}
            >
              <ListSquareIcon />
            </button>
            <button
              className={
                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                (state.pList === 5 ? "bg-[#5F5F5F]" : "bg-transparent")
              }
              onClick={() => {
                handleListChange(5);
              }}
            >
              <ListRowIcon />
            </button>
            <button
              className={
                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                (state.pList === 6 ? "bg-[#5F5F5F]" : "bg-transparent")
              }
              onClick={() => {
                handleListChange(6);
              }}
            >
              <ListDiffIcon />
            </button>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-start p-4 gap-3 border-b border-[#262626]">
        <div className="flex justify-between w-full">
          <div className="flex flex-row justify-between items-center w-full">
            <label className="uppercase text-xs text-white">Decoration</label>
          </div>
          <div className="flex flex-row justify-between  items-center w-full ">
            <div className="flex flex-row justify-between items-center bg-[#161616] border border-[#404040] w-52 h-8 p-1 rounded-md">
              <button
                className={
                  "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                  (state.bold ? "bg-[#5F5F5F]" : "bg-transparent")
                }
                onClick={() => {
                  handleDecoration(1);
                }}
              >
                <BoldIcon />
              </button>
              <button
                className={
                  "h-6 px-3 py-0.5 text-white text-[25px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                  (state.italic ? "bg-[#5F5F5F]" : "bg-transparent")
                }
                onClick={() => {
                  handleDecoration(2);
                }}
              >
                <ItalicIcon />
              </button>
              <button
                className={
                  "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                  (state.underline ? "bg-[#5F5F5F]" : "bg-transparent")
                }
                onClick={() => {
                  handleDecoration(3);
                }}
              >
                <FontUnderLineIcon />
              </button>
              <button
                className={
                  "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                  (state.strikethr ? "bg-[#5F5F5F]" : "bg-transparent")
                }
                onClick={() => {
                  handleDecoration(4);
                }}
              >
                <FontStrikethroughIcon />
              </button>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-row justify-between  items-center w-full ">
                    <label className="uppercase text-xs text-white" >Case</label>
                    <div className="flex flex-row justify-between items-center bg-[#161616] border border-[#404040]  h-8 p-1 rounded-md">
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.pCase === 1 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                handleCaseChange(1)
                            }}
                        >
                            <FontCaseDefaultIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.pCase === 2 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                handleCaseChange(2)
                            }}
                        >
                            <FontCaseCapsIcon />
                        </button>
                        <button
                            className={
                                "h-6 px-3 py-0.5 text-white text-[9px] leading-5 tracking-[.21em] rounded-[2px] flex items-center " +
                                (state.pCase === 3 ? "bg-[#5F5F5F]" : "bg-transparent")
                            }
                            onClick={() => {
                                handleCaseChange(3)
                            }}
                        >
                            <FontCaseSmallIcon />
                        </button>
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export default OptionalSection;
