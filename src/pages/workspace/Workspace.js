import React, { useState, useEffect, useContext } from "react";

// context
import { ProjectContext } from "../context/ProjectContext";
import { LocationContext } from "../context/LocationContext";

// page components
import { MenuBar } from "../../components/pages/workspace/menubar";
import ToolBar from "../../components/pages/workspace/toolbar";
import CharacterEditor from "../../components/pages/workspace/character-editor";
import TinyMceEditor from "../../components/pages/workspace/text/tmc";
import LocationEditor from "../../components/pages/workspace/location-editor";

import "../../basicStyle.css";

export default function WorkSpace() {
  const { currentProjectType } = useContext(ProjectContext);
  const { setSelectedLocation, filteredLocations } =
    useContext(LocationContext);

  useEffect(() => {
    setSelectedLocation(filteredLocations[0]);
  }, [filteredLocations, setSelectedLocation]);

  const [state, setState] = useState({
    editorState: "<p>Hello World</p>",
    selectedContent: "",
    blockquote: "Paragraph",
    colorVal: "#FFFFFF",
    fSize: 14,
    fWeight: 16,
    lineH: 25,
    letterSpc: 1,
    align: 1,
    // Constrain: 1,
    Paragraph: false,
    pHeight: 999,
    indent: 999,
    pLeft: 999,
    pRight: 999,
    pList: 1,
    decoration: 1,
    bold: false,
    underline: false,
    strikethr: false,
    italic: false,
    pCase: 1,
    fName: "Helvetica",
  });

  const [actorImage, setActorImage] = useState("");
  const [actorName, setActorName] = useState("");

  const changeActorImage = (url) => {
    setActorImage(url);
  };

  const changeActorName = (name) => {
    setActorName(name);
  };

  return (
    <div className="flex items-stretch bg-[#0A0A0A]">
      <MenuBar />
      {currentProjectType === 1 && (
        <TinyMceEditor state={state} setState={setState} />
      )}
      {currentProjectType === 2 && (
        <CharacterEditor
          changeActorImage={changeActorImage}
          changeActorName={changeActorName}
        />
      )}

      {currentProjectType === 3 && <LocationEditor />}
      <ToolBar
        state={state}
        setState={setState}
        actorInfo={[actorImage, actorName]}
      />
    </div>
  );
}
