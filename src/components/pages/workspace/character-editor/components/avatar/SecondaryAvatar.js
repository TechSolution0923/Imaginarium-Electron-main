import * as React from "react";

export default function SecondaryAvatar(props) {
  const { url, name, brand } = props;
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="w-full">
        <div className="group relative w-full flex justify-center cursor-pointer">
          <button
            className={`w-10 h-10 2xl:w-20 2xl:h-20 self-center flex items-center justify-center bg-[#2B2B2B] rounded-full overflow-hidden hover:ring hover:ring-[#1DAEFF] focus:ring focus:ring-[#1DAEFF]
              ${url === "" && "ring-[1px] ring-gray-600"} 
              ${brand ? "ring ring-purple-500" : ""}
              `}
            onClick={() => {
              props.changeActorImage(url);
              props.changeActorName(name);
            }}
          >
            {url ? (
              <>
                <img
                  src={url}
                  alt="avatar"
                  className="hidden 2xl:block"
                  width={80}
                  height={80}
                />
                <img
                  src={url}
                  alt="avatar"
                  className="block 2xl:hidden"
                  width={40}
                  height={40}
                />
              </>
            ) : (
              <span className="uppercase text-center text-[10px] leading-5 text-[#CDCDCD] font-bold tracking-[.15rem]">
                {name.split(" ")[0][0] + name.split(" ")[1][0]}
              </span>
            )}
          </button>

          {brand && (
            <div className="absolute -top-1 p-[1px] bg-purple-500 uppercase text-white text-center text-[8px] font-bold tracking-[.1em] rounded">
              {brand}
            </div>
          )}
        </div>
      </div>
      <span className="uppercase text-white text-center text-[9px] font-bold leading-3 tracking-[.21rem]">
        {name}
      </span>
    </div>
  );
}
