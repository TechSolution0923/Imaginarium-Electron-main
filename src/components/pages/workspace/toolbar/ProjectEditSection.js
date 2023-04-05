import * as React from "react";
// core components
import { Input, TextArea } from "../../../core/input";
import { Dropdown } from "../../../core/dropdown";
import { PrimaryButton } from "../../../core/button";
import { Modal } from "../../../core/modal";

// components
import CharacterSide from "../character-editor/components/CharacterSide";

import {
  CharacterEditIcon,
  DeleteIcon,
  ControlIcon,
  ArrowLeftIcon,
  AlertIcon,
  RoundPlusIcon,
  CheckboxIcon,
} from "../../../Svg";

const gender = ["Male", "Female"];
const races = ["White", "Black", "Asian"];
const sides = ["protagonist", "antagonist", "neutral"];

function loadFile(event) {
  const image = document.getElementById("output");
  console.log("image" + image);
  image.src = URL.createObjectURL(event.target.files[0]);
  if (image.src !== null) {
    // setShowUpload(false);
  }
}

export default function ProjectEditSection(props) {
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showGroupModal, setShowGroupModal] = React.useState(false);
  const [showAttachHeroModal, setShowAttachHeroModal] = React.useState(false);

  const [cSide, setCSide] = React.useState(0);
  const [characterName, setCharacterName] = React.useState("");
  const [characterAge, setCharacterAge] = React.useState("");
  const [groupName, setGroupName] = React.useState("");

  const EditModalBody = React.useMemo(() => {
    return (
      <>
        <div className="flex flex-col divide-y divide-[#161616] max-h-[450px] overflow-scroll">
          <div className="grid grid-cols-2 px-6 py-4 gap-3">
            <Input
              label="Name"
              name="name"
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
              placeholder="Ex. John Wick"
            />
            <Dropdown label="Gender" menus={gender} />
            <Input
              label="Age"
              name="age"
              value={characterAge}
              onChange={(e) => {
                setCharacterAge(e.target.value);
              }}
              placeholder="Ex. 40"
            />
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
                Actor Name
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
            <TextArea
              label="Ethnicity"
              placeholder="Once time in a galaxy..."
            />
          </div>

          <div className="px-6 py-4">
            <TextArea
              label="Orientation"
              placeholder="Once time in a galaxy..."
            />
          </div>

          <div className="px-6 py-4">
            <TextArea
              label="Disability"
              placeholder="Once time in a galaxy..."
            />
          </div>

          <div className="px-6 py-4">
            <TextArea
              label="Occupation"
              placeholder="Once time in a galaxy..."
            />
          </div>
        </div>
      </>
    );
  }, [cSide, characterName, characterAge]);

  const EditModalFooter = React.useMemo(() => {
    return (
      <div className="flex justify-end">
        <PrimaryButton label="SAVE" handleClick={() => {}} />
      </div>
    );
  }, []);

  const DeleteModalBody = React.useMemo(() => {
    return (
      <div className="mx-6 my-4">
        <label className="text-white text-[12px] leading-5">
          This action can not be undone. The character is already present in
          following scenes:
        </label>
        <div className="flex flex-col gap-y-4 max-h-[120px] overflow-scroll">
          <div className="flex flex-row gap-x-2">
            <AlertIcon />
            <label className="text-white text-[12px] leading-5 tracking-[.1em] uppercase">
              Scene 1
            </label>
          </div>
          <div className="flex flex-row gap-x-2">
            <AlertIcon />
            <label className="text-white text-[12px] leading-5 tracking-[.1em] uppercase">
              Scene 2
            </label>
          </div>
          <div className="flex flex-row gap-x-2">
            <AlertIcon />
            <label className="text-white text-[12px] leading-5 tracking-[.1em] uppercase">
              Scene 3
            </label>
          </div>
          <div className="flex flex-row gap-x-2">
            <AlertIcon />
            <label className="text-white text-[12px] leading-5 tracking-[.1em] uppercase">
              Scene 4
            </label>
          </div>
          <div className="flex flex-row gap-x-2">
            <AlertIcon />
            <label className="text-white text-[12px] leading-5 tracking-[.1em] uppercase">
              Scene 5
            </label>
          </div>
        </div>
      </div>
    );
  }, []);

  const DeleteModalFooter = React.useMemo(() => {
    return (
      <div className="flex justify-end">
        <PrimaryButton label="SAVE" handleClick={() => {}} />
      </div>
    );
  }, []);

  const GroupModal = () => {
    return (
      <div className="absolute z-10 drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] top-1/2 right-4 flex flex-col w-[340px] h-auto bg-[#2B2B2B] border border-[#161616] rounded-md">
        <div className="flex flex-row justify-between items-center py-[14px] w-full border-b border-[#161616]">
          <label className="font-extrabold ml-[24px] text-[9px] text-white leading-5 tracking-[.21em] uppercase">
            Edit Group
          </label>
          <button
            className="mr-[10px] hover:bg-[#4F4F4F]"
            onClick={() => {
              setShowGroupModal(false);
            }}
          >
            <img
              className="w-[20px] h-[20px]"
              src="assets/img/dashboard/close.png"
              alt="close"
            />
          </button>
        </div>

        <div className="group-modal-content mx-6 my-4 flex flex-col gap-y-4">
          <Input
            label="Group Name"
            name="group"
            value={groupName}
            onChange={(e) => {
              setGroupName(e.target.value);
            }}
            placeholder="Ex. Mafia"
          />
          <div className="flex flex-col gap-y-3">
            <div className="flex justify-between">
              <label className="flex flex-start font-extrabold uppercase leading-5 text-[9px] text-white tracking-[.21em]">
                Participants
              </label>
              <div
                className="hover:bg-[#4F4F4F]"
                onClick={() => {
                  setShowAttachHeroModal(true);
                }}
              >
                <RoundPlusIcon />
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-row gap-x-2">
                <img
                  className="rounded-[24px]"
                  src="assets/img/workspace/location/group-avatar1.png"
                  alt="avatar1"
                />
                <label className="flex flex-start font-extrabold uppercase leading-5 text-[9px] text-white tracking-[.21em]">
                  Participants
                </label>
              </div>

              <div className="flex flex-row gap-x-2">
                <img
                  className="rounded-[24px]"
                  src="assets/img/workspace/location/group-avatar2.png"
                  alt="avatar1"
                />
                <label className="flex flex-start font-extrabold uppercase leading-5 text-[9px] text-white tracking-[.21em]">
                  bandit 1
                </label>
              </div>

              <div className="flex flex-row gap-x-2">
                <img
                  className="rounded-[24px]"
                  src="assets/img/workspace/location/group-avatar3.png"
                  alt="avatar1"
                />
                <label className="flex flex-start font-extrabold uppercase leading-5 text-[9px] text-white tracking-[.21em]">
                  bandit 2
                </label>
              </div>

              <div className="flex flex-row gap-x-2">
                <img
                  className="rounded-[24px]"
                  src="assets/img/workspace/location/group-avatar4.png"
                  alt="avatar1"
                />
                <label className="flex flex-start font-extrabold uppercase leading-5 text-[9px] text-white tracking-[.21em]">
                  bandit 3
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col max-h-[calc(100vh-155px)] overflow-auto CustomScroll">
        <div className="p-4 flex flex-row justify-between itmes-center border-y border-[#2B2B2B]">
          <div
            className="flex flex-row justify-center items-center w-36 h-8 border-[#404040] border rounded hover:bg-blue-rgba-24 cursor-pointer"
            onClick={() => {
              setShowEditModal(true);
            }}
          >
            <CharacterEditIcon />
            <label className="pl-2 font-extrabold text-center text-white text-[10px] leading-5 tracking-[.21em] uppercase cursor-pointer">
              Edit
            </label>
          </div>
          <div
            className="flex flex-row justify-center items-center w-36 h-8 border-[#404040] border rounded hover:bg-blue-rgba-24 cursor-pointer"
            onClick={() => {
              setShowDeleteModal(true);
            }}
          >
            <DeleteIcon />
            <label className="pl-2 font-extrabold text-center text-[#DD5E5E] text-[10px] tracking-[.21em] leading-5 uppercase cursor-pointer">
              Delete
            </label>
          </div>
        </div>

        <div className="p-4 flex flex-col gap-y-2 border-b border-[#2B2B2B]">
          <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] uppercase">
            Character Information
          </label>
          <div className="flex flex-row justify-start gap-x-2">
            <label className="text-white text-[12px] leading-5">Name:</label>
            <label className="text-white text-[12px] leading-5">
              Teresa Black
            </label>
          </div>
          <div className="flex flex-row gap-x-2">
            <div className="w-20 border-r border-r-[#2B2B2B]">
              <label className="text-white text-[12px] leading-5">
                Age: 40
              </label>
            </div>
            <div className="w-24 border-r border-r-[#2B2B2B]">
              <label className="text-white text-[12px] leading-5">
                Gender: Female
              </label>
            </div>
            <div className="w-20">
              <label className="text-white text-[12px] leading-5">
                Neutral
              </label>
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col gap-y-2 border-b border-[#2B2B2B]">
          <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] uppercase">
            Actor Information
          </label>
          <div className="flex flex-row items-center gap-x-2">
            {props.actorInfo[0] ? (
              <img
                className="w-8 h-8 rounded-[24px] border-[#404040]"
                // src="assets/img/workspace/characters/10.png"
                src={props.actorInfo[0]}
                alt="actor"
              />
            ) : props.actorInfo[0] !== "" ? (
              <span className="w-8 h-8 2xl:w-20 2xl:h-20 self-center flex items-center justify-center bg-[#2B2B2B] rounded-full uppercase text-center text-[10px] leading-5 text-[#CDCDCD] font-bold tracking-[.15rem]">
                {props.actorInfo[1].split(" ")[0][0] +
                  props.actorInfo[1].split(" ")[1][0]}
              </span>
            ) : (
              <span className="w-8 h-8 2xl:w-20 2xl:h-20 self-center flex items-center justify-center bg-[#2B2B2B] rounded-full uppercase text-center text-[10px] leading-5 text-[#CDCDCD] font-bold tracking-[.15rem]"></span>
            )}
            <label className="text-white text-[12px] leading-5">
              {props.actorInfo[1]}
            </label>
          </div>
        </div>

        <div className="p-4 flex flex-col gap-y-2 border-b border-[#2B2B2B]">
          <div className="flex flex-row justify-between">
            <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] uppercase">
              Group
            </label>

            <div
              className="hover:bg-blue-rgba-24 cursor-pointer"
              onClick={() => {
                setShowGroupModal(true);
              }}
            >
              <CharacterEditIcon />
            </div>
          </div>

          <label className="text-[#5F5F5F] text-[12px] leading-5">
            This character is not attached to any group
          </label>
        </div>

        <div className="p-4 flex flex-col gap-y-2 border-b border-[#2B2B2B]">
          <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] uppercase">
            Appears In Scenes
          </label>
          <div className="flex flex-row justify-between items-center">
            <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.1em]">
              Act 1 - Scene 5
            </label>
            <div className="hover:bg-blue-rgba-30 cursor-pointer">
              <ControlIcon />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.1em]">
              Act 1 - Scene 4
            </label>
            <div className="hover:bg-blue-rgba-30 cursor-pointer">
              <ControlIcon />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.1em]">
              Act 1 - Scene 8
            </label>
            <div className="hover:bg-blue-rgba-30 cursor-pointer">
              <ControlIcon />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.1em]">
              Act 1 - Scene 2
            </label>
            <div className="hover:bg-blue-rgba-30 cursor-pointer">
              <ControlIcon />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.1em]">
              Act 1 - Scene 1
            </label>
            <div className="hover:bg-blue-rgba-30 cursor-pointer">
              <ControlIcon />
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col gap-y-2 border-b border-[#2B2B2B]">
          <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] uppercase">
            Appears in locations
          </label>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-x-2">
              <img
                className="w-5 h-5 rounded border border-[#404040]"
                src="assets/img/workspace/location/avatar1.png"
                alt="sahara"
              />
              <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] uppercase">
                Sahara Desert
              </label>
            </div>
            <div className="hover:bg-blue-rgba-24 cursor-pointer">
              <ControlIcon />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-x-2">
              <img
                className="w-5 h-5 rounded border border-[#404040]"
                src="assets/img/workspace/location/avatar2.png"
                alt="sahara"
              />
              <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] uppercase">
                body in the pool
              </label>
            </div>
            <div className="hover:bg-blue-rgba-24 cursor-pointer">
              <ControlIcon />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-x-2">
              <img
                className="w-5 h-5 rounded border border-[#404040]"
                src="assets/img/workspace/location/avatar3.png"
                alt="sahara"
              />
              <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] uppercase">
                statues room
              </label>
            </div>
            <div className="hover:bg-blue-rgba-24 cursor-pointer">
              <ControlIcon />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-x-2">
              <img
                className="w-5 h-5 rounded border border-[#404040]"
                src="assets/img/workspace/location/avatar4.png"
                alt="sahara"
              />
              <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] uppercase">
                main Kentucky street
              </label>
            </div>
            <div className="hover:bg-blue-rgba-24 cursor-pointer">
              <ControlIcon />
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col gap-y-2 border-b border-[#2B2B2B]">
          <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] uppercase">
            Role
          </label>
          <label className="text-[#CDCDCD] text-[12px] leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </label>
        </div>

        <div className="p-4 flex flex-col gap-y-2 border-b border-[#2B2B2B]">
          <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] uppercase">
            Ethnicity
          </label>
          <label className="text-[#CDCDCD] text-[12px] leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </label>
        </div>

        <div className="p-4 flex flex-col gap-y-2 border-b border-[#2B2B2B]">
          <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] uppercase">
            Orientation
          </label>
          <label className="text-[#CDCDCD] text-[12px] leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </label>
        </div>

        <div className="p-4 flex flex-col gap-y-2 border-b border-[#2B2B2B]">
          <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] uppercase">
            Disability
          </label>
          <label className="text-[#CDCDCD] text-[12px] leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </label>
        </div>

        <div className="p-4 flex flex-col gap-y-2 border-b border-[#2B2B2B]">
          <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] uppercase">
            Occupation
          </label>
          <label className="text-[#CDCDCD] text-[12px] leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </label>
        </div>
      </div>

      {showEditModal && (
        <Modal
          title="Edit Character"
          handleClose={() => setShowEditModal(false)}
          body={EditModalBody}
          footer={EditModalFooter}
        />
      )}

      {showDeleteModal && (
        <Modal
          title="delete character"
          handleClose={() => setShowDeleteModal(false)}
          body={DeleteModalBody}
          footer={DeleteModalFooter}
        />
      )}

      {showGroupModal && <GroupModal />}

      {showAttachHeroModal && (
        <div className="z-50 w-[400px] fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto bg-[#2B2B2B] border border-[#161616] divide-y divide-[#161616] rounded-md">
          <div className="flex flex-row justify-between items-center py-[14px] w-full border-b border-[#161616]">
            <label className="font-extrabold ml-[24px] text-[9px] text-white leading-5 tracking-[.21em] uppercase">
              assign character
            </label>
            <button
              className="mr-[10px] hover:bg-[#4F4F4F]"
              onClick={() => {
                setShowAttachHeroModal(false);
              }}
            >
              <img
                className="w-[20px] h-[20px]"
                src="assets/img/dashboard/close.png"
                alt="close"
              />
            </button>
          </div>

          <div className="group-modal-content mx-6 my-4 flex flex-col gap-y-2">
            <div className="flex items-center justify-between w-full h-8 bg-[#161616] border border-[#404040] rounded-[4px] px-2 py-1.5">
              <input
                className="w-full bg-transparent h-6 text-white border border-[#161616] focus:border-[#161616] text-[12px] placeholder-[#5F5F5F]"
                type="text"
                placeholder=""
              />
              <button>
                <img
                  className="outline-none"
                  width={20}
                  height={20}
                  src="assets/img/profile/search.png"
                  alt="search"
                />
              </button>
            </div>

            <div className="flex flex-col gap-y-3">
              <label className="flex flex-start font-extrabold uppercase leading-5 text-[9px] text-white tracking-[.21em]">
                Result
              </label>
            </div>
            <div className="flex flex-col gap-y-3 max-h-[120px] overflow-scroll">
              <div className="flex flex-row justify-between items-center p-1 rounded bg-[#1dacff] bg-opacity-30">
                <div className="flex flex-row">
                  <img
                    className="rounded-[24px] border border-[#2B2B2B]"
                    src="assets/img/workspace/location/group-avatar5.png"
                    alt="avatar1"
                  />
                  <label className="pl-2 flex flex-start font-extrabold uppercase leading-5 text-[9px] text-white tracking-[.21em]">
                    superman
                  </label>
                </div>
                <CheckboxIcon />
              </div>

              <div className="flex flex-row justify-between items-center p-1 rounded bg-[#1dacff] bg-opacity-30">
                <div className="flex flex-row">
                  <img
                    className="rounded-[24px] border border-[#2B2B2B]"
                    src="assets/img/workspace/location/group-avatar6.png"
                    alt="avatar1"
                  />
                  <label className="pl-2 flex flex-start font-extrabold uppercase leading-5 text-[9px] text-white tracking-[.21em]">
                    Batman
                  </label>
                </div>
                <CheckboxIcon />
              </div>

              <div className="flex flex-row justify-between items-center p-1 rounded bg-transparent">
                <div className="flex flex-row">
                  <img
                    className="rounded-[24px] border border-[#2B2B2B]"
                    src="assets/img/workspace/location/group-avatar7.png"
                    alt="avatar1"
                  />
                  <label className="pl-2 flex flex-start font-extrabold uppercase leading-5 text-[9px] text-white tracking-[.21em]">
                    Wonder Woman
                  </label>
                </div>
                <CheckboxIcon />
              </div>

              <div className="flex flex-row justify-between items-center p-1 rounded bg-transparent">
                <div className="flex flex-row">
                  <img
                    className="rounded-[24px] border border-[#2B2B2B]"
                    src="assets/img/workspace/location/group-avatar8.png"
                    alt="avatar1"
                  />
                  <label className="pl-2 flex flex-start font-extrabold uppercase leading-5 text-[9px] text-white tracking-[.21em]">
                    traffic aman
                  </label>
                </div>
                <CheckboxIcon />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
