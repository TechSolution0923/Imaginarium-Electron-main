import * as React from "react";

// core components
import { PrimaryButton } from "../../../core/button";
import { Dropdown } from "../../../core/dropdown";
import { Modal } from "../../../core/modal";
import { Input, TextArea } from "../../../core/input";

// components
import CharacterEditorWrapper from "./components/CharacterEditorWrapper";
import ActSceneSelectWrapper from "./components/ActSceneSelectWrapper";
import TopWrapper from "./components/TopWrapper";
import AddCharacterWrapper from "./components/AddCharacterWrapper";
import LeaderCard from "./components/LeaderCard";
import PrimaryAvatar from "./components/avatar/PrimaryAvatar";
import SecondaryAvatar from "./components/avatar/SecondaryAvatar";
import CharacterBoardWrapper from "./components/CharacterBoardWrapper";
import CharacterSide from "./components/CharacterSide";

// svg
import {
  BigPlusButtonIcon,
  LaurelA,
  LaurelB,
  ArrowLeftIcon,
  RightIndentIcon,
} from "../../../Svg";

const acts = ["Act 1", "Act 2", "Act 3", "Custom"];
const scenes = ["scene 1", "scene 2", "scene 3", "Custom"];
const gender = ["Male", "Female"];
const races = ["White", "Black", "Asian"];
const sides = ["protagonist", "antagonist", "neutral"];

// TODO: should get relation from DB
const characters = [
  {
    border_direction: "right",
    url: "assets/img/workspace/characters/1.png",
    name: "Bob Sand",
  },
  {
    border_direction: "middle",
    url: "assets/img/workspace/characters/2.png",
    name: "Rob Sand",
    text_direction: "center",
    relation_text: "Brothers",
  },
  {
    border_direction: "left",
    url: "assets/img/workspace/characters/3.png",
    name: "Jack frost",
  },
  {
    url: "assets/img/workspace/characters/4.png",
    name: "Christie",
  },
  {
    url: "assets/img/workspace/characters/5.png",
    name: "Jason Pickels",
  },
  {
    url: "assets/img/workspace/characters/6.png",
    name: "MS. west",
  },
  {
    url: "assets/img/workspace/characters/7.png",
    name: "Chu wai",
  },
  {
    url: "assets/img/workspace/characters/8.png",
    name: "Andrew swamper",
  },
  {
    url: "assets/img/workspace/characters/9.png",
    name: "walter white",
  },
  {
    url: "assets/img/workspace/characters/10.png",
    name: "teresa black",
  },
  {
    url: "assets/img/workspace/characters/11.png",
    name: "howard martinez",
  },
  {
    url: "assets/img/workspace/characters/12.png",
    name: "dereck zex",
    brand: "margaret",
  },
  {
    url: "assets/img/workspace/characters/13.png",
    name: "Rob Sand",
  },
  {
    url: "assets/img/workspace/characters/14.png",
    name: "Christie",
  },
  {
    url: "assets/img/workspace/characters/15.png",
    name: "Jack frost",
  },
  {
    border_direction: "right",
    url: "assets/img/workspace/characters/16.png",
    name: "Jason Pickels",
  },
  {
    border_direction: "middle",
    url: "assets/img/workspace/characters/17.png",
    name: "MS. west",
    text_direction: "right",
    relation_text: "Mafia",
  },
  {
    border_direction: "middle",
    url: "assets/img/workspace/characters/18.png",
    name: "Chu wai",
  },
  {
    border_direction: "left",
    url: "assets/img/workspace/characters/19.png",
    name: "Andrew swamper",
  },
  {
    url: "assets/img/workspace/characters/20.png",
    name: "walter white",
  },
  {
    url: "assets/img/workspace/characters/21.png",
    name: "teresa black",
  },
  {
    url: "assets/img/workspace/characters/22.png",
    name: "howard martinez",
  },
  {
    url: "",
    name: "howard martinez",
  },
];

function loadFile(event) {
  const image = document.getElementById("output");
  console.log("image" + image);
  image.src = URL.createObjectURL(event.target.files[0]);
  if (image.src !== null) {
    // setShowUpload(false);
  }
}

export default function CharacterEditor(props) {
  const [showNewCharacterModal, setShowNewCharacterModal] =
    React.useState(false);
  const [cSide, setCSide] = React.useState(0);

  const NewCharacterModalFooter = React.useMemo(() => {
    return (
      <div className="flex justify-end">
        <PrimaryButton label="ADD" handleClick={() => {}} />
      </div>
    );
  }, []);

  const NewCharacterModalBody = React.useMemo(() => {
    return (
      <div className="flex flex-col divide-y divide-[#161616] max-h-[450px] overflow-scroll">
        <div className="grid grid-cols-2 px-6 py-4 gap-3">
          <Input label="Name" name="name" placeholder="Ex. John Wick" />
          <Dropdown label="Gender" menus={gender} />
          <Input label="Age" name="age" placeholder="Ex. 40" />
          <Dropdown label="Race" menus={races} />
        </div>

        <div className="px-6 py-4 gap-3">
          <CharacterSide
            label="Character Side"
            items={sides}
            currentSide={cSide}
            handleSetCurrentSide={setCSide}
          />
        </div>

        <div className="px-6 py-4">
          <div className="flex gap-3">
            <label className="flex-none w-[78px] uppercase leading-5 text-[9px] text-white tracking-[.25em]">
              Photo
            </label>
            <label className="flex uppercase leading-5 text-[9px] text-white tracking-[.25em]">
              Action Name
            </label>
          </div>
          <div className="flex">
            <div className="img-upload">
              <input
                type="file"
                className="hidden"
                name="image"
                id="file"
                onChange={loadFile}
              />
              <div className="w-[72px] h-[72px] bg-[#0E0E0E] border border-[#404040] ring-offset-0 focus:border-white focus:outline-none rounded-md cursor-pointer">
                <label htmlFor="file" className="cursor-pointer">
                  <img
                    id="output"
                    className="w-[72px] h-[72px]"
                    src="assets/img/workspace/image-upload.png"
                    alt="logo"
                  />
                </label>
              </div>
            </div>
            <div className="pl-1.5 flex flex-col w-full gap-y-2">
              <Input name="actor" placeholder="Ex. Keanu Reeves" />
              <div className="group relative col-span-2 h-8 flex items-center justify-center gap-x-2 pr-3 py-[6px] pl-[6px] rounded border border-[#404040] hover:bg-blue-rgba-24 cursor-pointer">
                <label className="text-center uppercase leading-5 text-[10px] text-white tracking-[.25em] cursor-pointer ">
                  Look Up
                </label>
                <ArrowLeftIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-4">
          <TextArea label="Role" placeholder="Once time in a galaxy..." />
        </div>

        <div className="px-6 py-4">
          <TextArea label="Ethnicity" placeholder="Once time in a galaxy..." />
        </div>

        <div className="px-6 py-4">
          <TextArea
            label="Orientation"
            placeholder="Once time in a galaxy..."
          />
        </div>

        <div className="px-6 py-4">
          <TextArea label="Disability" placeholder="Once time in a galaxy..." />
        </div>

        <div className="px-6 py-4">
          <TextArea label="Occupation" placeholder="Once time in a galaxy..." />
        </div>
      </div>
    );
  }, [cSide]);

  return (
    <CharacterEditorWrapper>
      <ActSceneSelectWrapper>
        <Dropdown menus={acts} />
        <Dropdown menus={scenes} />
      </ActSceneSelectWrapper>

      <TopWrapper>
        <LeaderCard
          type="Protagonist"
          name="John Wick"
          laurel={<LaurelA />}
          avatar={<PrimaryAvatar url="assets/img/dashboard/dreamcast1.png" />}
          direction="left"
        />
        <LeaderCard
          type="Antagonist"
          name="Adam Milton"
          laurel={<LaurelB />}
          avatar={<PrimaryAvatar url="assets/img/dashboard/dreamcast4.png" />}
          direction="right"
        />
      </TopWrapper>

      <AddCharacterWrapper>
        <div className="flex flex-col justify-center items-center gap-1">
          <button
            className="flex justify-center items-center border border-[#404040] w-20 h-20 rounded-[40px] outline-none"
            onClick={() => setShowNewCharacterModal(true)}
          >
            <BigPlusButtonIcon />
          </button>

          <label className="uppercase mt-2 text-center text-[#1DAEFF] text-[9px] w-[72px] h-[24px] font-bold  leading-3 tracking-[.21em] cursor-pointer">
            ADD Character
          </label>
        </div>
      </AddCharacterWrapper>

      {/* Main Board */}
      <CharacterBoardWrapper>
        <div className="grid gap-y-7 2xl:grid-cols-11 xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-4">
          {characters.map((character, index) => (
            <div className="relative flex flex-col items-center">
              {character.text_direction === "center" && (
                <label className="absolute -top-4 uppercase text-[#5F5F5F] text-[9px] font-bold leading-3 tracking-[.21rem]">
                  {character.relation_text}
                </label>
              )}
              <div className="flex flex-row w-full h-4">
                {character.border_direction === "right" && (
                  <>
                    <div className="w-1/2"></div>
                    <div className="w-1/2 border-t-2 border-l-2 border-[#161616]"></div>
                  </>
                )}
                {character.border_direction === "left" && (
                  <>
                    <div className="w-1/2 border-t-2 border-r-2 border-[#161616]"></div>
                    <div className="w-1/2"></div>
                  </>
                )}
                {character.border_direction === "middle" && (
                  <>
                    <div className="w-1/2 border-t-2 border-r border-[#161616]"></div>
                    <div className="w-1/2 border-t-2 border-l border-[#161616]"></div>
                  </>
                )}

                {character.text_direction === "right" && (
                  <div className="relative border-t-2 border-[#161616]">
                    <label className="absolute -top-4 left-1/2 uppercase text-[#5F5F5F] text-[9px] font-bold leading-3 tracking-[.21rem]">
                      {character.relation_text}
                    </label>
                  </div>
                )}
              </div>
              <SecondaryAvatar
                key={index}
                url={character.url}
                name={character.name}
                brand={character.brand}
                changeActorImage={props.changeActorImage}
                changeActorName={props.changeActorName}
              />
            </div>
          ))}
        </div>
      </CharacterBoardWrapper>
      {/* Modals */}
      {showNewCharacterModal && (
        <Modal
          title="New Characters"
          handleClose={() => setShowNewCharacterModal(false)}
          body={NewCharacterModalBody}
          footer={NewCharacterModalFooter}
        />
      )}
    </CharacterEditorWrapper>
  );
}
