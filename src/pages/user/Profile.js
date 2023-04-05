import * as React from "react";
import { Link } from "react-router-dom";
// link
import moment from "https://cdn.skypack.dev/moment?min";
// css
import "../../github.scss";
// context
import { AuthContext } from "../context/AuthContext";
// core components
import InputText from "../../components/core/common/InputText";
import ProfileTable from "../../components/core/table/ProfileTable";

const DayNames = {
  0: "SUN",
  1: "MON",
  2: "TUE",
  3: "WEN",
  4: "THU",
  5: "FRI",
  6: "SAT",
};

function Cell({ color }) {
  let style = {
    backgroundColor: color,
  };

  return <div className="timeline-cells-cell" style={style}></div>;
}

function Month({ startDate, index }) {
  let date = moment(startDate).add(index * 7, "day");
  let monthName = date.format("MMM");

  return (
    <div className={`timeline-months-month ${monthName}`}>{monthName}</div>
  );
}

function WeekDay({ index }) {
  return <div className="timeline-weekdays-weekday">{DayNames[index]}</div>;
}

function Timeline({ range, data, colorFunc }) {
  let days = Math.abs(range[0].diff(range[1], "days"));
  let cells = Array.from(new Array(days));
  let weekDays = Array.from(new Array(7));
  let months = Array.from(new Array(Math.floor(days / 7)));

  let min = Math.min(0, ...data.map((d) => d.value));
  let max = Math.max(...data.map((d) => d.value));

  let colorMultiplier = 1 / (max - min);

  let startDate = range[0];
  const DayFormat = "DDMMYYYY";

  return (
    <div className="timeline">
      <div className="timeline-months">
        {months.map((_, index) => (
          <Month key={index} index={index} startDate={startDate} />
        ))}
      </div>

      <div className="timeline-body">
        <div className="timeline-weekdays">
          {weekDays.map((_, index) => (
            <WeekDay key={index} index={index} startDate={startDate} />
          ))}
        </div>

        <div className="timeline-cells">
          {cells.map((_, index) => {
            let date = moment(startDate).add(index, "day");
            let dataPoint = data.find(
              (d) =>
                moment(date).format(DayFormat) ===
                moment(d.date).format(DayFormat)
            );
            let alpha = colorMultiplier * dataPoint.value;
            let color = colorFunc({ alpha });

            return <Cell key={index} index={index} date={date} color={color} />;
          })}
        </div>
      </div>
    </div>
  );
}

function loadFile(event) {
  const image = document.getElementById("output");
  console.log("image" + image);
  image.src = URL.createObjectURL(event.target.files[0]);
  if (image.src !== null) {
    // setShowUpload(false);
  }
}

export default function Profile() {
  // 1 year range
  let startDate = moment().add(-364, "days");
  let dateRange = [startDate, moment()];

  let data = Array.from(new Array(364)).map((_, index) => {
    return {
      date: moment(startDate).add(index, "day"),
      value: Math.floor(Math.random() * 100),
    };
  });

  const { setIsAuthenticated } = React.useContext(AuthContext);
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);

  return (
    <div className="px-[15%] pt-16 bg-neutral-850 w-full h-[calc(100vh-112px)] overflow-auto">
      <div className="flex flex-col items-center justify-center">
        <img
          className="rounded-[120px] w-[120px] h-[120px]"
          src="assets/img/Avatar.png"
          alt="Avatar"
        />
        <label className="mt-6 font font-bold text-[24px] text-white leading-6">
          Julia Ellei
        </label>
        <label className="mt-1 text-[14px] leading-5 text-[#5F5F5F]">
          @juliaellei
        </label>
        <div className="flex flex-row mt-6">
          <button
            className="bg-[#1DAEFF] text-white text-[10px] font-extrabold tracking-[.21em] text-center w-[100px] h-8 rounded-[4px]"
            onClick={() => {
              setShowEditModal(true);
            }}
          >
            EDIT
          </button>
          <button
            className="ml-6 bg-[#DD5E5E] text-white text-[10px] font-extrabold tracking-[.21em] text-center w-[100px] h-8 rounded-[4px]"
            onClick={() => {
              setShowLogoutModal(true);
            }}
          >
            LOG OUT
          </button>
        </div>
      </div>
      <div className="mt-[88px] work-info">
        <label className="text-[24px] text-white font-bold leading-6">
          Work Info
        </label>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            <label className="mt-5 text-white text-[14px] leading-5">
              95 edits in the last year
            </label>
            <div className="mt-2 flex flex-row">
              <div className="w-4 h-4 opacity-30 bg-[#1DAEFF] rounded-[4px]"></div>
              <label className="ml-2 text-[12px] leading-5 text-white">
                136 low days
              </label>
            </div>
            <div className="mt-2 flex flex-row">
              <div className="w-4 h-4 opacity-[.65] bg-[#1DAEFF] rounded-[4px]"></div>
              <label className="ml-2 text-[12px] leading-5 text-white">
                69 normal days
              </label>
            </div>
            <div className="mt-2 flex flex-row">
              <div className="w-4 h-4 bg-[#1DAEFF] rounded-[4px]"></div>
              <label className="ml-2 text-[12px] leading-5 text-white">
                20 hard days
              </label>
            </div>

            <label className="text-[10px] leading-5 text-[#1DAEFF]">
              Learn how we count edits
            </label>
          </div>
          <div className="flex flex-col w-[80%]">
            <Timeline
              range={dateRange}
              data={data}
              colorFunc={({ alpha }) => `rgba(29, 174,  255, ${alpha})`}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 shard-projects flex flex-col w-full">
        <div className="flex flex-row justify-between items-center">
          <label className="text-[24px] text-white font-bold leading-6">
            Shared Projects
          </label>
          <div className="flex items-center justify-between w-52 h-8 bg-[#161616] border border-[#404040] rounded-[4px] px-2 py-1.5">
            <input
              className=" bg-transparent w-40 h-6 text-white border border-[#161616] focus:border-[#161616] text-[12px] placeholder-[#5F5F5F]"
              type="text"
              placeholder="Search shared project"
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
        </div>
        <div className="mt-[20px]">
          <ProfileTable />
        </div>
      </div>

      {showEditModal ? (
        <>
          <div className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] z-10 fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto bg-[#2B2B2B] border border-[#161616] rounded-md">
            <div className="edit-modal-header flex flex-row justify-between items-center py-[14px] w-full h-8 border-b border-[#161616]">
              <label className="ml-[24px] text-[9px] text-white font-extrabold leading-5 tracking-[.21em]">
                EDIT PROFILE
              </label>
              <button
                className="mr-[10px] hover:bg-[#4F4F4F]"
                onClick={() => {
                  setShowEditModal(false);
                }}
              >
                <img
                  className="w-[20px] h-[20px]"
                  src="assets/img/dashboard/close.png"
                  alt="close"
                />
              </button>
            </div>
            <div className="edit-modal-content px-[24px] py-4 border-b border-[#161616]">
              <div className="flex flex-row">
                <input
                  type="file"
                  className="hidden"
                  name="image"
                  id="file"
                  onChange={loadFile}
                />
                <label htmlFor="file" className="mr-6 cursor-pointer">
                  <img
                    id="output"
                    className="my-2 w-[100px] h-[100px] border border-[#1C1C1C] rounded-[50px]"
                    src="assets/img/profile/Image Upload.png"
                    alt="logo"
                  />
                </label>
                <div className="flex flex-col w-[236px]">
                  <label className="text-white text-[9px] font-extrabold leading-5 tracking-[.21em]">
                    NAME
                  </label>
                  <InputText type="text" name="name" />
                  <label className="mt-2 text-white text-[9px] font-extrabold leading-5 tracking-[.21em]">
                    USERNAME
                  </label>
                  <InputText type="text" name="username" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="mt-[12px] email">
                  <label className="text-white text-[9px] font-extrabold leading-5 tracking-[.21em]">
                    EMAIL
                  </label>
                  <InputText type="email" name="email" />
                </div>
                <div className="mt-[12px] current-password">
                  <label className="text-white text-[9px] font-extrabold leading-5 tracking-[.21em]">
                    CURRENT PASSWORD
                  </label>

                  <InputText type="password" name="current-password" />
                </div>
                <div className="mt-[12px] new-password">
                  <label className="text-white text-[9px] font-extrabold leading-5 tracking-[.21em]">
                    NEW PASSWORD
                  </label>
                  <InputText type="password" name="new-password" />
                </div>
                <div className="mt-[12px] confirm-new-password">
                  <label className="text-white text-[9px] font-extrabold leading-5 tracking-[.21em]">
                    CONFIRM NEW PASSWORD
                  </label>
                  <InputText type="password" name="confirm-password" />
                </div>
              </div>
            </div>
            <div className="flex justify-end edit-modal-footer py-4 px-[24px]">
              <button
                className="cursor-pointer	flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-gradient-to-r from-[#FEAC6D] to-[#AE61ED] font-extrabold text-[10px] tracking-widest leading-5 hover:opacity-80"
                onClick={() => {
                  setShowEditModal(false);
                }}
              >
                SAVE
              </button>
            </div>
          </div>
        </>
      ) : null}

      {showLogoutModal ? (
        <>
          <div className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] z-10 fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto bg-[#2B2B2B] border border-[#161616] rounded-md">
            <div className="edit-modal-header flex flex-row justify-between items-center py-[14px] w-full h-8 border-b border-[#161616]">
              <label className="ml-[24px] text-[9px] text-white font-extrabold leading-5 tracking-[.21em]">
                LOGING OUT
              </label>
              <button
                className="mr-[10px] hover:bg-[#4F4F4F]"
                onClick={() => {
                  setShowLogoutModal(false);
                }}
              >
                <img
                  className="w-[20px] h-[20px]"
                  src="assets/img/dashboard/close.png"
                  alt="close"
                />
              </button>
            </div>
            <div className="edit-modal-content px-[24px] py-4 border-b border-[#161616]">
              <label className="text-white text-[12px] leading-5">
                You are about to sign out of your account. Confirm the action.
              </label>
            </div>
            <div className="flex justify-end edit-modal-footer py-4 px-[24px]">
              <button
                className="mr-4 flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-transparent border border-[#404040] font-extrabold text-[10px] tracking-widest leading-5 hover:bg-[#404040]"
                onClick={() => {
                  setShowLogoutModal(false);
                }}
              >
                CANCEL
              </button>
              <Link
                className="cursor-pointer	flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-[#DD5E5E] font-extrabold text-[10px] tracking-widest leading-5 hover:opacity-80"
                to="/login"
                onClick={() => {
                  setIsAuthenticated(false);
                  localStorage.removeItem("auth");
                  localStorage.removeItem("showModal");
                }}
              >
                LOG OUT
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
