import * as React from "react";

// context
import { LocationContext } from "../../../../pages/context/LocationContext";

// core components
import { TextArea } from "../../../core/input";
import { PrimaryButton } from "../../../core/button";
import { Modal } from "../../../core/modal";

import {
  CharacterEditIcon,
  DeleteIcon,
  ControlIcon,
  RoundPlusIcon,
  CheckboxIcon,
  CloseIcon,
} from "../../../Svg";

function loadFile1(event) {
  const image = document.getElementById("output1");
  console.log("image" + image);
  image.src = URL.createObjectURL(event.target.files[0]);
  if (image.src !== null) {
  }
}

function loadFile2(event) {
  const image = document.getElementById("output2");
  image.src = URL.createObjectURL(event.target.files[0]);
  if (image.src !== null) {
  }
}

function loadFile3(event) {
  const image = document.getElementById("output3");
  image.src = URL.createObjectURL(event.target.files[0]);
  if (image.src !== null) {
  }
}

function loadFile4(event) {
  const image = document.getElementById("output4");
  image.src = URL.createObjectURL(event.target.files[0]);
  if (image.src !== null) {
  }
}

function loadFile5(event) {
  const image = document.getElementById("output5");
  image.src = URL.createObjectURL(event.target.files[0]);
  if (image.src !== null) {
  }
}

function loadFile6(event) {
  const image = document.getElementById("output6");
  image.src = URL.createObjectURL(event.target.files[0]);
  if (image.src !== null) {
  }
}

export default function LocationEditSection(props) {
  const { selectedLocation, filteredLocations, setFilteredLocations } =
    React.useContext(LocationContext);

  const [showEditModal, setShowEditModal] = React.useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showAttachHeroModal, setShowAttachHeroModal] = React.useState(false);

  const EditModalBody = React.useMemo(() => {
    return (
      <>
        <div className="flex flex-col divide-y divide-[#161616] max-h-[450px] overflow-scroll">
          <div className="relative w-full min-h-[160px] bg-[url('/public/assets/img/workspace/pool.png')] bg-center bg-cover bg-no-repeat">
            <h1 className="absolute bottom-6 left-6 uppercase text-white text-[24px] font-extrabold leading-6 tracking-[.1em]">
              Body in the Pool
            </h1>
          </div>

          <div className="w-full h-28 px-6 py-4 grid grid-cols-3 gap-2">
            <div className="img-upload">
              <input
                type="file"
                className="hidden"
                name="image"
                id="file4"
                onChange={loadFile4}
              />
              <div className="w-full h-20 bg-[#0E0E0E] border border-[#404040] ring-offset-0 focus:border-white focus:outline-none rounded-md cursor-pointer">
                <label htmlFor="file4" className="cursor-pointer">
                  <img
                    id="output4"
                    className="w-full h-full rounded-md object-cover"
                    src="assets/img/workspace/wallpaper.png"
                    alt="logo"
                  />
                </label>
              </div>
            </div>
            <div className="img-upload">
              <input
                type="file"
                className="hidden"
                name="image"
                id="file5"
                onChange={loadFile5}
              />
              <div className="w-full h-20 bg-[#0E0E0E] border border-[#404040] ring-offset-0 focus:border-white focus:outline-none rounded-md cursor-pointer">
                <label htmlFor="file5" className="cursor-pointer">
                  <img
                    id="output5"
                    className="w-full h-full rounded-md object-cover"
                    src="assets/img/workspace/wallpaper.png"
                    alt="logo"
                  />
                </label>
              </div>
            </div>
            <div className="img-upload">
              <input
                type="file"
                className="hidden"
                name="image"
                id="file6"
                onChange={loadFile6}
              />
              <div className="w-full h-20 bg-[#0E0E0E] border border-[#404040] ring-offset-0 focus:border-white focus:outline-none rounded-md cursor-pointer">
                <label htmlFor="file6" className="cursor-pointer">
                  <img
                    id="output6"
                    className="w-full h-full rounded-md object-cover"
                    src="assets/img/workspace/wallpaper.png"
                    alt="logo"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="flex flex-row justify-between">
              <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] uppercase">
                Characters on location
              </label>
              <button
                className="hover:bg-blue-rgba-24 cursor-pointer"
                onClick={() => {
                  setShowEditModal(false);
                  setShowAttachHeroModal(true);
                }}
              >
                <RoundPlusIcon />
              </button>
            </div>
            <div className="pt-2 grid grid-cols-2 gap-3">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-x-2">
                  <img
                    className="w-5 h-5 rounded-[24px] border border-[#404040]"
                    src="assets/img/workspace/location/avatar1.png"
                    alt="sahara"
                  />
                  <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] capitalize">
                    joe hang
                  </label>
                </div>
                <div className="hover:bg-blue-rgba-24 cursor-pointer">
                  <CloseIcon />
                </div>
              </div>

              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-x-2">
                  <img
                    className="w-5 h-5 rounded-[24px] border border-[#404040]"
                    src="assets/img/workspace/location/avatar2.png"
                    alt="sahara"
                  />
                  <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] capitalize">
                    big bro
                  </label>
                </div>
                <div className="hover:bg-blue-rgba-24 cursor-pointer">
                  <CloseIcon />
                </div>
              </div>

              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-x-2">
                  <img
                    className="w-5 h-5 rounded-[24px] border border-[#404040]"
                    src="assets/img/workspace/location/avatar3.png"
                    alt="sahara"
                  />
                  <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] capitalize">
                    que
                  </label>
                </div>
                <div className="hover:bg-blue-rgba-24 cursor-pointer">
                  <CloseIcon />
                </div>
              </div>

              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-x-2">
                  <img
                    className="w-5 h-5 rounded-[24px] border border-[#404040]"
                    src="assets/img/workspace/location/avatar4.png"
                    alt="sahara"
                  />
                  <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] capitalize">
                    the prophet
                  </label>
                </div>
                <div className="hover:bg-blue-rgba-24 cursor-pointer">
                  <CloseIcon />
                </div>
              </div>

              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-x-2">
                  <img
                    className="w-5 h-5 rounded-[24px] border border-[#404040]"
                    src="assets/img/workspace/location/avatar4.png"
                    alt="sahara"
                  />
                  <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] capitalize">
                    loren bow
                  </label>
                </div>
                <div className="hover:bg-blue-rgba-24 cursor-pointer">
                  <CloseIcon />
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-4">
            <TextArea label="Actions" placeholder="Once time in a galaxy..." />
          </div>

          <div className="px-6 py-4">
            <TextArea label="Weather" placeholder="Once time in a galaxy..." />
          </div>
        </div>
      </>
    );
  }, []);

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
        <p className="text-white text-[12px] leading-5">
          This action can not be undone.
        </p>
      </div>
    );
  }, []);

  const DeleteModalFooter = React.useMemo(() => {
    return (
      <div className="flex justify-end gap-3">
        <button
          className="flex justify-center items-center w-[100px] h-8 text-white text-[10px] font-extrabold tracking-[.21em] border-[#404040] border rounded hover:bg-blue-rgba-24 cursor-pointer"
          onClick={() => {
            setShowDeleteModal(false);
          }}
        >
          CANCEL
        </button>
        <button
          className="flex justify-center items-center w-[100px] h-8 bg-[#DD5E5E] text-white text-[10px] font-extrabold tracking-[.21em] rounded cursor-pointer hover:opacity-90"
          onClick={() => {
            const index = filteredLocations
              .map((location) => location.location_id)
              .indexOf(selectedLocation.location_id);
            setFilteredLocations((filteredLocations) => [
              ...filteredLocations.slice(0, index),
              ...filteredLocations.slice(index + 1, filteredLocations.length),
            ]);
            setShowDeleteModal(false);
          }}
        >
          DELETE
        </button>
      </div>
    );
  }, [filteredLocations, selectedLocation.location_id, setFilteredLocations]);

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
            Location Info
          </label>
          <div className="flex flex-row gap-2">
            <div className="img-upload">
              <input
                type="file"
                className="hidden"
                name="image"
                id="file1"
                onChange={loadFile1}
              />
              <div className="w-[93px] h-20 bg-[#0E0E0E] border border-[#404040] ring-offset-0 focus:border-white focus:outline-none rounded-md cursor-pointer">
                <label htmlFor="file1" className="cursor-pointer">
                  <img
                    id="output1"
                    className="w-[93px] h-full rounded-md object-cover"
                    src={selectedLocation.location_images[0].src}
                    alt="logo"
                  />
                </label>
              </div>
            </div>
            <div className="img-upload">
              <input
                type="file"
                className="hidden"
                name="image"
                id="file2"
                onChange={loadFile2}
              />
              <div className="w-[93px] h-20 bg-[#0E0E0E] border border-[#404040] ring-offset-0 focus:border-white focus:outline-none rounded-md cursor-pointer">
                <label htmlFor="file2" className="cursor-pointer">
                  <img
                    id="output2"
                    className="w-[93px] h-full rounded-md object-cover"
                    src={selectedLocation.location_images[1].src}
                    alt="logo"
                  />
                </label>
              </div>
            </div>
            <div className="img-upload">
              <input
                type="file"
                className="hidden"
                name="image"
                id="file3"
                onChange={loadFile3}
              />
              <div className="w-[93px] h-20 bg-[#0E0E0E] border border-[#404040] ring-offset-0 focus:border-white focus:outline-none rounded-md cursor-pointer">
                <label htmlFor="file3" className="cursor-pointer">
                  <img
                    id="output3"
                    className="w-[93px] h-full rounded-md object-cover"
                    src={selectedLocation.location_images[2].src}
                    alt="logo"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-start gap-x-2">
            <label className="text-white text-[12px] leading-5">Name:</label>

            <label className="text-white text-[12px] leading-5">
              Body in the Pool
            </label>
          </div>
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
            Characters on location
          </label>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-x-2">
              <img
                className="w-5 h-5 rounded-[24px] border border-[#404040]"
                src={selectedLocation.location_collaborators[0].src}
                alt={selectedLocation.location_collaborators[0].name}
              />
              <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] capitalize">
                {selectedLocation.location_collaborators[0].name}
              </label>
            </div>
            <div className="hover:bg-blue-rgba-24 cursor-pointer">
              <ControlIcon />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-x-2">
              <img
                className="w-5 h-5 rounded-[24px] border border-[#404040]"
                src={selectedLocation.location_collaborators[1].src}
                alt={selectedLocation.location_collaborators[1].name}
              />
              <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] capitalize">
                {selectedLocation.location_collaborators[1].name}
              </label>
            </div>
            <div className="hover:bg-blue-rgba-24 cursor-pointer">
              <ControlIcon />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-x-2">
              <img
                className="w-5 h-5 rounded-[24px] border border-[#404040]"
                src={selectedLocation.location_collaborators[2].src}
                alt={selectedLocation.location_collaborators[2].name}
              />
              <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] capitalize">
                {selectedLocation.location_collaborators[2].name}
              </label>
            </div>
            <div className="hover:bg-blue-rgba-24 cursor-pointer">
              <ControlIcon />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-x-2">
              <img
                className="w-5 h-5 rounded-[24px] border border-[#404040]"
                src={selectedLocation.location_collaborators[3].src}
                alt={selectedLocation.location_collaborators[3].name}
              />
              <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] capitalize">
                {selectedLocation.location_collaborators[3].name}
              </label>
            </div>
            <div className="hover:bg-blue-rgba-24 cursor-pointer">
              <ControlIcon />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-x-2">
              <img
                className="w-5 h-5 rounded-[24px] border border-[#404040]"
                src={selectedLocation.location_collaborators[4].src}
                alt={selectedLocation.location_collaborators[4].name}
              />
              <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] capitalize">
                {selectedLocation.location_collaborators[4].name}
              </label>
            </div>
            <div className="hover:bg-blue-rgba-24 cursor-pointer">
              <ControlIcon />
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col gap-y-2 border-b border-[#2B2B2B]">
          <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] uppercase">
            Action
          </label>
          <label className="text-[#CDCDCD] text-[12px] leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </label>
        </div>

        <div className="p-4 flex flex-col gap-y-2 border-b border-[#2B2B2B]">
          <label className="font-extrabold text-white text-[9px] leading-5 tracking-[.21em] uppercase">
            Weather
          </label>
          <label className="text-[#CDCDCD] text-[12px] leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </label>
        </div>
      </div>

      {showEditModal && (
        <Modal
          title="Edit Location"
          handleClose={() => setShowEditModal(false)}
          body={EditModalBody}
          footer={EditModalFooter}
        />
      )}

      {showDeleteModal && (
        <Modal
          title="Delete Location"
          handleClose={() => setShowDeleteModal(false)}
          body={DeleteModalBody}
          footer={DeleteModalFooter}
        />
      )}

      {showAttachHeroModal && (
        <div className="z-50 w-[340px] h-[296px] fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2B2B2B] border border-[#161616] rounded-md">
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
            <div className="flex flex-col gap-y-3 max-h-[140px] overflow-scroll">
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
                <CloseIcon />
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
                <CloseIcon />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
