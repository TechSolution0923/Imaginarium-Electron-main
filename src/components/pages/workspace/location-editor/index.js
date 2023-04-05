import * as React from "react";

// context
import { LocationContext } from "../../../../pages/context/LocationContext";

// core components
import { PrimaryButton } from "../../../core/button";
import { TextArea } from "../../../core/input";
import { Modal } from "../../../core/modal";

// components
import LocationEditorWrapper from "./components/LocationEditorWrapper";

// module
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// svg
import {
  UnconfirmedIcon,
  ConfirmedIcon,
  PendingIcon,
  RoundPlusIcon,
  LocationPlusIcon,
  WallPaperIcon,
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

export default function LocationEditor(props) {
  const { setSelectedLocation, filteredLocations } =
    React.useContext(LocationContext);

  const [showAddModal, setShowAddModal] = React.useState(false);

  const AddModalBody = React.useMemo(() => {
    return (
      <>
        <div className="flex flex-col divide-y divide-[#161616] max-h-[450px] overflow-scroll">
          <div className="relative w-full min-h-[160px] flex justify-center items-center bg-gradient-to-t from-black">
            {/* <h1 className="absolute bottom-6 left-6 uppercase text-[#5F5F5F] text-[24px] font-extrabold leading-6 tracking-[.1em]">
              Location name
            </h1> */}
            <div className="absolute bottom-6 left-6">
            <input
              className=" bg-transparent w-full h-6 uppercase font-extrabold leading-6 tracking-[.1em] text-white border-none focus:border-none	text-[24px] placeholder-[#5F5F5F]"
              type="text"
              placeholder="Location name"
            />
            </div>
            <WallPaperIcon />
          </div>

          <div className="px-6 py-4 grid grid-cols-3 gap-2">
            <div className="img-upload">
              <input
                type="file"
                className="hidden"
                name="image"
                id="file1"
                onChange={loadFile1}
              />
              <div className="w-full h-full bg-[#0E0E0E] border border-[#404040] ring-offset-0 focus:border-white focus:outline-none rounded-md cursor-pointer">
                <label htmlFor="file1" className="cursor-pointer">
                  <img
                    id="output1"
                    className="w-full h-full"
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
                id="file2"
                onChange={loadFile2}
              />
              <div className="w-full h-full bg-[#0E0E0E] border border-[#404040] ring-offset-0 focus:border-white focus:outline-none rounded-md cursor-pointer">
                <label htmlFor="file2" className="cursor-pointer">
                  <img
                    id="output2"
                    className="w-full h-full"
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
                id="file3"
                onChange={loadFile3}
              />
              <div className="w-full h-full bg-[#0E0E0E] border border-[#404040] ring-offset-0 focus:border-white focus:outline-none rounded-md cursor-pointer">
                <label htmlFor="file3" className="cursor-pointer">
                  <img
                    id="output3"
                    className="w-full h-full"
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
              <div className="hover:bg-blue-rgba-24 cursor-pointer">
                <RoundPlusIcon />
              </div>
            </div>
            <p className="pt-2 text-[#5F5F5F] text-[12px] leading-5">
              Participants not added yet
            </p>
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

  const AddModalFooter = React.useMemo(() => {
    return (
      <div className="flex justify-end">
        <PrimaryButton label="ADD" handleClick={() => {}} />
      </div>
    );
  }, []);

  const carouselProp = {
    autoPlay: true,
    showStatus: false,
    useKeyboardArrows: true,
    infiniteLoop: true,
    stopOnHover: true,
    emulateTouch: false,
    showArrows: false,
    showThumbs: false,
    animationHandler: "fade",
    swipeable: false,
  };

  const filterStatusIcon = {
    Unconfirmed: <UnconfirmedIcon />,
    Confirmed: <ConfirmedIcon />,
    Pending: <PendingIcon />,
  };

  return (
    <>
      <LocationEditorWrapper>
        {filteredLocations.map((location, index) => (
          <div
            className={
              "w-full h-[216px] flex flex-col border rounded-[16px] cursor-pointer border-" +
              location.location_border_color
            }
            key={index}
            onClick={() => {
              setSelectedLocation(location);
            }}
          >
            <div className="w-full min-h-[160px] rounded-t-[16px]">
              <Carousel {...carouselProp}>
                <img
                  className="w-full h-40 rounded-t-[16px] object-cover"
                  src={location.location_images[0].src}
                  alt={location.location_images[0].alt}
                />
                <img
                  className="w-full h-40 rounded-t-[16px] object-cover"
                  src={location.location_images[1].src}
                  alt={location.location_images[1].alt}
                />
                <img
                  className="w-full h-40 rounded-t-[16px] object-cover"
                  src={location.location_images[2].src}
                  alt={location.location_images[2].alt}
                />
              </Carousel>
            </div>
            <div className="w-full h-[54px] flex flex-row items-center justify-between px-[18px] py-4 bg-[#161616] rounded-b-[16px]">
              <div className="flex flex-row items-center gap-2">
                <p className="uppercase font-extrabold text-[9px] text-white leading-5	tracking-[.21em]">
                  {location.location_name}
                </p>
                <div className="flex items-center">
                  {filterStatusIcon[location.location_status]}
                  <p className="pl-1 uppercase font-bold text-[9px] text-[#5F5F5F] leading-5	tracking-[.21em]">
                    {location.location_status}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-row relative">
                  <div className="absolute z-[5] right-[56px] w-[20px] h-[20px] rounded-[24px]">
                    <img
                      className="w-[20px] h-[20px] rounded-[24px]"
                      src={location.location_collaborators[0].src}
                      alt={location.location_collaborators[0].name}
                    />
                  </div>
                  <div className="absolute z-[4] right-[42px] w-[20px] h-[20px] rounded-[24px]">
                    <img
                      className="w-[20px] h-[20px] rounded-[24px]"
                      src={location.location_collaborators[1].src}
                      alt={location.location_collaborators[1].name}
                    />
                  </div>
                  <div className="absolute z-[3] right-[28px] w-[20px] h-[20px] rounded-[24px]">
                    <img
                      className="w-[20px] h-[20px] rounded-[24px]"
                      src={location.location_collaborators[2].src}
                      alt={location.location_collaborators[2].name}
                    />
                  </div>
                  <div className="absolute z-[2] right-[14px] w-[20px] h-[20px] rounded-[24px]">
                    <img
                      className="w-[20px] h-[20px] rounded-[24px]"
                      src={location.location_collaborators[3].src}
                      alt={location.location_collaborators[3].name}
                    />
                  </div>
                  <div className="z-[1] w-[20px] h-[20px] rounded-[24px]">
                    <img
                      className="w-[20px] h-[20px] rounded-[24px]"
                      src={location.location_collaborators[4].src}
                      alt={location.location_collaborators[4].name}
                    />
                  </div>
                </div>
                <span className="uppercase font-extrabold text-[9px] text-white leading-5	tracking-[.21em]">
                  {location.location_collaborators_number}
                </span>
              </div>
            </div>
          </div>
        ))}
        <button
          className="w-full h-[216px] flex flex-col items-center justify-center gap-6 border rounded-[16px] border-[#2B2B2B] cursor-pointer"
          onClick={() => {
            setShowAddModal(true);
          }}
        >
          <LocationPlusIcon />
          <p className="uppercase font-extrabold text-[9px] text-[#1DAEFF] leading-5	tracking-[.21em]">
            Add location
          </p>
        </button>
      </LocationEditorWrapper>

      {showAddModal && (
        <Modal
          title="new location"
          handleClose={() => setShowAddModal(false)}
          body={AddModalBody}
          footer={AddModalFooter}
        />
      )}
    </>
  );
}
