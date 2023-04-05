import * as React from "react";

export default function LeaderCard(props) {
  const { type, avatar, name, laurel, direction } = props;
  return (
    <>
      {type === "Protagonist" && (
        <div
          className="relative flex p-4"
          style={{
            background:
              "radial-gradient(100% 100% at 0% 0%, rgba(29, 174, 255, 0.16) 0%, rgba(29, 174, 255, 0) 100%)",
          }}
        >
          <div
            className="top-6  absolute font-extrabold	leading-16 2xl:text-6xl 2xl:left-8 lg:text-4xl lg:left-4"
            style={{ color: "rgba(29, 174, 255, 0.16)" }}
          >
            {type}
          </div>
          <div
            className={`absolute bottom-[69px] ${
              direction === "left" ? "left-8" : "right-8"
            }`}
          >
            {laurel}
          </div>
          <div
            className={`absolute bottom-8 ${
              direction === "left" ? "left-[72px]" : "right-[65px]"
            }`}
          >
            {avatar}
          </div>
          <div
            className={`absolute uppercase text-[9px] font-bold leading-3 tracking-[.21rem] bottom-4 ${
              direction === "left" ? "left-[90px]" : "right-[80px]"
            }`}
          >
            {name}
          </div>
        </div>
      )}
       {type === "Antagonist" && (
        <div
          className="relative flex p-4"
          style={{
            background:
              "radial-gradient(100% 100% at 100% 0%, rgba(221, 94, 94, 0.16) 0%, rgba(221, 94, 94, 0) 100%)",
          }}
        >
          <div
            className="top-6 right-8 absolute font-extrabold	leading-16 2xl:text-6xl 2xl:right-8 lg:text-4xl lg:right-4"
            style={{ color: "rgba(221, 94, 94, 0.16)" }}
          >
            {type}
          </div>
          <div
            className={`absolute bottom-[69px] ${
              direction === "left" ? "left-8" : "right-8"
            }`}
          >
            {laurel}
          </div>
          <div
            className={`absolute bottom-8 ${
              direction === "left" ? "left-[72px]" : "right-[65px]"
            }`}
          >
            {avatar}
          </div>
          <div
            className={`absolute uppercase text-[9px] font-bold leading-3 tracking-[.21rem] bottom-4 ${
              direction === "left" ? "left-[90px]" : "right-[80px]"
            }`}
          >
            {name}
          </div>
        </div>
      )}
    </>
  );
}
