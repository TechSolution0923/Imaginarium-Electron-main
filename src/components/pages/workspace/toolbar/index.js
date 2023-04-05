import React, { useState } from "react";

// svg
import {
  MsgCircle,
  OptionIcon,
  ShuffleIcon,
  VoiceMemo,
  PieChartIcon,
  OptionVerticalIcon,
} from "../../../Svg";

// components
import ToolbarWrapper from "./components/ToolbarWrapper";
import OptionalSection from "./OptionalSection";
import CommentSection from "./CommentSection";
import VoiceSection from "./VoiceSection";
import ProjectInformationSection from "./ProjectInformationSection";
import ProjectEditSection from "./ProjectEditSection";
import LocationInformationSection from "./LocationInformationSection";
import LocationEditSection from "./LocationEditSection";

// project context
import { ProjectContext } from "../../../../pages/context/ProjectContext";

const ToolBar = (props) => {
  const { currentProjectType } = React.useContext(ProjectContext);
  const [value, setValue] = useState(0);
  const { state, setState } = props;
  const handleClick = (val) => (event) => {
    event.preventDefault();
    setValue(val);
  };
  const tabClass = (val) => {
    return (
      `tab text-[#5F5F5F] ` +
      (value === val
        ? "border-b-2 tab-bordered border-cyan-500 !text-white"
        : "")
    );
  };
  return (
    <ToolbarWrapper>
      {currentProjectType === 1 && (
        <>
          <div className="tabs w-[327px] border-b border-[#262626] pt-2">
            <div className={tabClass(0)} onClick={handleClick(0)}>
              <ShuffleIcon />
            </div>
            <div className={tabClass(1)} onClick={handleClick(1)}>
              <OptionIcon />
            </div>
            <div className={tabClass(2)} onClick={handleClick(2)}>
              <MsgCircle />
            </div>
            <div className={tabClass(3)} onClick={handleClick(3)}>
              <VoiceMemo />
            </div>
          </div>
          <div className="w-[327px] max-h-[calc(100vh-154px)] ">
            {value === 0 && <></> }
            {value === 1 && (
              <OptionalSection state={state} setState={setState} />
            )}
            {value === 2 && <CommentSection />}
            {value === 3 && <VoiceSection />}
          </div>
        </>
      )}
      {currentProjectType === 2 && (
        <>
          <div className="tabs w-[327px] border-b border-[#262626] pt-2">
            <div className={tabClass(0)} onClick={handleClick(0)}>
              <PieChartIcon />
            </div>
            <div className={tabClass(1)} onClick={
              handleClick(1)
            }>
              <OptionVerticalIcon />
            </div>
            <div className={tabClass(2)} onClick={handleClick(2)}>
              <MsgCircle />
            </div>
            <div className={tabClass(3)} onClick={handleClick(3)}>
              <VoiceMemo />
            </div>
          </div>
          <div className="w-[327px] max-h-[calc(100vh-154px)] ">
            {value === 0 && <ProjectInformationSection />}
            {value === 1 && (
              <ProjectEditSection actorInfo = {props.actorInfo} />
            )}
            {value === 2 && <CommentSection />}
            {value === 3 && <VoiceSection />}
          </div>
        </>
      )}
       {currentProjectType === 3 && (
        <>
          <div className="tabs w-[327px] border-b border-[#262626] pt-2">
            <div className={tabClass(0)} onClick={handleClick(0)}>
              <PieChartIcon />
            </div>
            <div className={tabClass(1)} onClick={handleClick(1)}>
              <OptionVerticalIcon />
            </div>
            <div className={tabClass(2)} onClick={handleClick(2)}>
              <MsgCircle />
            </div>
            <div className={tabClass(3)} onClick={handleClick(3)}>
              <VoiceMemo />
            </div>
          </div>
          <div className="w-[327px] max-h-[calc(100vh-154px)] ">
            {value === 0 && <LocationInformationSection />}
            {value === 1 && (
              <LocationEditSection />
            )}
            {value === 2 && <CommentSection />}
            {value === 3 && <VoiceSection />}
          </div>
        </>
      )}
    </ToolbarWrapper>
  );
};

export default ToolBar;
