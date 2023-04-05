import React, { useState } from "react";
import { Link } from "react-router-dom";
// module
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Onboard() {
  const [indexOfSlide, setIndexOfSlide] = useState(0);

  const carouselProp = {
    showStatus: false,
    useKeyboardArrows: true,
    infiniteLoop: true,
    stopOnHover: true,
    emulateTouch: true,
    showArrows: true,
    showThumbs: false,
    animationHandler: "fade",
    swipeable: false,
    onChange: (index) => {
      setIndexOfSlide(index);
    },
    renderArrowPrev: (clickHandler, hasPrev, label) => {},
    renderArrowNext: (clickHandler, hasNext, label) => {
      if (indexOfSlide === 2)
        return (
          <div className="absolute bottom-20 right-20 flex flex-row items-center">
            <Link
              className="flex justify-center items-center w-24 h-8 mr-4 bg-[#404040] rounded-md text-white text-center"
              to="/register"
            >
              SIGN UP
            </Link>

            <Link
              className="flex justify-center items-center w-24 h-8 bg-[#1DAEFF] rounded-md text-white text-center"
              to="/login"
            >
              LOG IN
            </Link>
          </div>
        );
      else
        return (
          <button
            className="absolute bottom-20 right-20 w-24 h-8 bg-[#1DAEFF] rounded-md text-white text-center"
            onClick={() => clickHandler()}
          >
            NEXT
          </button>
        );
    },
  };

  return (
    <Carousel {...carouselProp}>
      <div className="screen1">
        <div className="relative !w-full bg-[url('/public/assets/img/screen1.png')] h-[calc(100vh)] bg-center bg-cover bg-no-repeat">
          <img
            className="absolute top-6	left-6 !w-auto h-6"
            src="assets/img/Deviant Art.png"
            alt="Deviant Art"
          />
          <label className="absolute top-6 right-10 !w-37 h-5 font-extrabold text-[9px] tracking-[.21em] text-white opacity-50">
            ART BY @FANTASYLADY
          </label>
          <div className="flex justify-center content-center">
            <img
              className="absolute top-20 !w-auto"
              src="assets/img/Union1.png"
              alt="Union1"
            />
            <img
              className="absolute top-[184px] !w-auto"
              src="assets/img/imaginarium.png"
              alt="imaginarium"
            />
          </div>
          <div className="absolute flex flex-row bottom-20 w-full pl-20 pr-20 justify-between">
            <label className="flex flex-start w-3/4 font-extrabold text-[40px] text-white leading-snug">
              There Are A Lot of Untold Stories
            </label>
          </div>
        </div>
      </div>

      <div className="screen2">
        <div
          className="relative !w-full bg-[url('/public/assets/img/screen2.png')] h-[calc(100vh)] bg-center bg-cover bg-no-repeat"
        />
        <img
          className="absolute top-6	left-6 !w-auto h-6"
          src="assets/img/Deviant Art.png"
          alt="Deviant Art"
        />
        <label className="absolute top-6 right-10 !w-37 h-5 font-extrabold text-[9px] tracking-[.21em] text-white opacity-50">
          ART BY @FANTASYLADY
        </label>
        <div className="flex justify-center content-center">
          <img
            className="absolute top-20 !w-auto"
            src="assets/img/Union1.png"
            alt="Union1"
          />
          <img
            className="absolute top-[184px] !w-auto"
            src="assets/img/imaginarium.png"
            alt="imaginarium"
          />
        </div>
        <div className="absolute flex flex-row bottom-20 w-full pl-20 pr-20 justify-between">
          <label className="flex flex-start w-3/4 font-extrabold text-[40px] text-white leading-snug">
            Never Seen And Shared Before
          </label>
        </div>
      </div>

      <div className="screen3">
        <div
          className="relative !w-full bg-[url('/public/assets/img/screen3.png')] h-[calc(100vh)] bg-center bg-cover bg-no-repeat"
        />
        <img
          className="absolute top-6	left-6 !w-auto h-6"
          src="assets/img/Deviant Art.png"
          alt="Deviant Art"
        />
        <label className="absolute top-6 right-10 !w-37 h-5 font-extrabold text-[9px] tracking-[.21em] text-white opacity-50">
          ART BY @FANTASYLADY
        </label>
        <div className="flex justify-center content-center">
          <img
            className="absolute top-20 !w-auto"
            src="assets/img/Union1.png"
            alt="Union1"
          />
          <img
            className="absolute top-[184px] !w-auto"
            src="assets/img/imaginarium.png"
            alt="imaginarium"
          />
        </div>
        <div className="absolute flex flex-row bottom-20 w-full pl-20 pr-20 justify-between">
          <label className="flex flex-start font-extrabold text-[40px] w-1/2 text-white leading-snug">
            So... Go On! Tell Yours!
          </label>
        </div>
      </div>
    </Carousel>
  );
}
