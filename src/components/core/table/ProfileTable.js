import * as React from "react";

import { DetailIcon, ProjectTypeMovie, ProjectTypeTv } from "../../Svg";

import Checkbox from "../common/Checkbox";

const projects = [
  {
    project_id: 1,
    project_image: "assets/img/dashboard/project1.png",
    project_name: "Apple Trees",
    project_type_icon: <ProjectTypeMovie />,
    project_type: "Movie",
    project_content: "20 / 40 scenes",
    project_progress: "50%",
    project_opened: "Today",
    project_author: "You",
    project_own: true,
  },
  {
    project_id: 2,
    project_image: "assets/img/dashboard/project2.png",
    project_name: "John Wick 4",
    project_type_icon: <ProjectTypeMovie />,
    project_type: "Movie",
    project_content: "20 / 40 scenes",
    project_progress: "50%",
    project_opened: "Today",
    project_author: "Rin Ellei",
    project_own: false,
  },
  {
    project_id: 3,
    project_image: "assets/img/dashboard/project3.png",
    project_name: "Young Katyusha",
    project_type_icon: <ProjectTypeTv />,
    project_type: "TV Series",
    project_content: "20 / 40 episodes",
    project_opened: "Today",
    project_author: "Rin Ellei",
    project_own: false,
  },
  {
    project_id: 4,
    project_image: "assets/img/dashboard/project4.png",
    project_name: "Steep Banks",
    project_type_icon: <ProjectTypeTv />,
    project_type: "Book",
    project_content: "48 chapters",
    project_opened: "2 days ago",
    project_author: "You",
    project_own: true,
  },
];

export default function ProfileTable(props) {
  const [showLeaveModal, setShowLeaveModal] = React.useState(false);
  const [showRevokeModal, setShowRevokeModal] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [id, setId] = React.useState();

  return (
    <div className="w-full h-full scrollbar-hide md:scrollbar-default">
      <TableHeader>
        <TableHeaderRow>
          <TableCol className="w-[30%]">PROJECT NAME</TableCol>
          <TableCol className="w-1/15">PROJECT TYPE</TableCol>
          <TableCol className="w-1/5">CONTENT</TableCol>
          <TableCol className="w-1/15">LASTOPENED</TableCol>
          <TableCol className="w-1/15">AUTHOR</TableCol>
        </TableHeaderRow>
      </TableHeader>
      <TableBody>
        {projects.map((project, index) => (
          <TableBodyRow no={project.project_id} key={index}>
            <TableCol className="flex flex-row items-center px-4 w-[30%]">
              <img
                src={project.project_image}
                alt={project.project_id}
                width={40}
                height={40}
              />
              <span className="ml-4 text-[18px] leading-6 text-white">
                {project.project_name}
              </span>
            </TableCol>
            <TableCol className="flex flex-row items-center w-1/15">
              {project.project_type_icon}
              <span className="leading-5 ml-3 text-[14px] leading-5 text-white">
                {project.project_type}
              </span>
            </TableCol>
            <TableCol className="flex flex-col w-1/5">
              <span className="text-white text-[12px]">
                {project.project_content}{" "}
              </span>
              <Progressbar width="50%">{project.project_progress}</Progressbar>
            </TableCol>
            <TableCol className="flex flex-row w-1/15">
              <span className="text-[14px] leading-5 text-white">
                {project.project_opened}
              </span>
            </TableCol>
            <TableCol className="flex flex-row w-1/15 text-[14px] leading-5">
              <span
                className={
                  `${project.project_author}` === "You"
                    ? "text-white"
                    : "text-[#1DAEFF]"
                }
              >
                {project.project_author}
              </span>
            </TableCol>
            <TableCol className="flex flex row w-[5%]">
              <div className="dropdown dropdown-end h-[32px]">
                <button tabIndex="0">
                  <DetailIcon className="hover:bg-[#404040] cursor-pointer" />
                </button>
                {`${project.project_own}` === "true" ? (
                  <ul
                    tabIndex="0"
                    className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mr-3 shadow bg-[#161616] border border-[#464646] w-[148px] h-24 mt-0 rounded-[4px]"
                  >
                    <button
                      className="flex flex-row px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D]"
                      to=""
                    >
                      <img
                        className="p-0 w-5 h-5"
                        src="assets/img/dashboard/edit.png"
                        alt="edit"
                      />
                      <label className="p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em]">
                        OPEN
                      </label>
                    </button>
                    <button className="flex flex-row px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D]">
                      <img
                        className="p-0 w-5 h-5 !active:bg-[#5D5D5D]"
                        src="assets/img/dashboard/share.png"
                        alt="share"
                      />
                      <label className="!active:bg-[#5D5D5D] p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em]">
                        SHARE OPTIONS
                      </label>
                    </button>
                    <button
                      className="flex flex-row px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D]"
                      onClick={() => {
                        setShowLeaveModal(true);
                        setId(`${project.project_id}`);
                      }}
                    >
                      <img
                        className="p-0 w-5 h-5"
                        src="assets/img/dashboard/log-out.png"
                        alt="leave"
                      />
                      <label className="p-0 ml-2 text-[9px] font-extrabold text-[#DD5E5E] leading-5 tracking-[.21em]">
                        LEAVE PROJECT
                      </label>
                    </button>
                  </ul>
                ) : (
                  <ul
                    tabIndex="0"
                    className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] menu menu-compact dropdown-content mr-3 shadow bg-[#161616] border border-[#464646] w-[148px] h-16 mt-0 rounded-[4px]"
                  >
                    <button
                      className="flex flex-row px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D]"
                      to=""
                    >
                      <img
                        className="p-0 w-5 h-5"
                        src="assets/img/dashboard/edit.png"
                        alt="edit"
                      />
                      <label className="p-0 ml-2 text-[9px] font-extrabold text-white leading-5 tracking-[.21em]">
                        OPEN
                      </label>
                    </button>
                    <button
                      className="flex flex-row px-2 py-1.5 h-8 border-b border-[#464646] hover:bg-[#5D5D5D]"
                      onClick={() => {
                        setShowRevokeModal(true);
                        setId(`${project.project_id}`);
                      }}
                    >
                      <img
                        className="p-0 w-5 h-5"
                        src="assets/img/dashboard/log-out.png"
                        alt="leave"
                      />
                      <label className="p-0 ml-2 text-[9px] font-extrabold text-[#DD5E5E] leading-5 tracking-[.21em]">
                        LEAVE PROJECT
                      </label>
                    </button>
                  </ul>
                )}
              </div>
            </TableCol>
          </TableBodyRow>
        ))}

        {showLeaveModal ? (
          <div className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] z-10 fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto bg-[#2B2B2B] border border-[#161616] rounded-md">
            <div className="edit-modal-header flex flex-row justify-between items-center py-[14px] w-full h-8 border-b border-[#161616]">
              <label className="ml-[24px] text-[9px] text-white font-extrabold leading-5 tracking-[.21em]">
                LEAVE PROJECT
              </label>
              <button
                className="mr-[14px] hover:bg-[#4F4F4F]"
                onClick={() => {
                  setShowLeaveModal(false);
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
                Once refused, you will be removed from collaborators and will
                not be able to interact with the project until you are invited
                again.
              </label>
              <div className="mt-3">
                <Checkbox
                  checked={checked}
                  onChange={() => {
                    setChecked(!checked);
                  }}
                >
                  Confirm project leaving
                </Checkbox>
              </div>
            </div>
            <div className="flex justify-end edit-modal-footer py-4 px-[24px]">
              <button
                className="mr-4 flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-transparent border border-[#404040] font-extrabold text-[10px] tracking-widest leading-5 hover:bg-[#404040]"
                onClick={() => {
                  setShowLeaveModal(false);
                }}
              >
                CANCEL
              </button>
              <button
                className="cursor-pointer	flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-[#DD5E5E] font-extrabold text-[10px] tracking-widest leading-5 hover:opacity-80"
                onClick={() => {
                  setShowLeaveModal(false);
                  delete projects[id - 1];
                }}
              >
                LEAVE
              </button>
            </div>
          </div>
        ) : null}
        {showRevokeModal ? (
          <>
            <div className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] z-10 fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto bg-[#2B2B2B] border border-[#161616] rounded-md">
              <div className="edit-modal-header flex flex-row justify-between items-center py-[14px] w-full h-8 border-b border-[#161616]">
                <label className="ml-[24px] text-[9px] text-white font-extrabold leading-5 tracking-[.21em]">
                  REVOKE ACCESS
                </label>
                <button
                  className="mr-[14px]"
                  onClick={() => {
                    setShowRevokeModal(false);
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
                  After cancellation, all collaborators will be immediately
                  removed from the project. You can add them again.
                </label>
                <div className="mt-3">
                  <Checkbox
                    checked={checked}
                    onChange={() => {
                      setChecked(!checked);
                    }}
                  >
                    Confirm ownership transfer
                  </Checkbox>
                </div>
              </div>
              <div className="flex justify-end edit-modal-footer py-4 px-[24px]">
                <button
                  className="mr-4 flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-transparent border border-[#404040] font-extrabold text-[10px] tracking-widest leading-5 hover:bg-[#404040]"
                  onClick={() => {
                    setShowRevokeModal(false);
                  }}
                >
                  CANCEL
                </button>
                <button
                  className="cursor-pointer	flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-[#DD5E5E] font-extrabold text-[10px] tracking-widest leading-5 hover:opacity-80"
                  onClick={() => {
                    setShowRevokeModal(false);
                    delete projects[id - 1];
                  }}
                >
                  REVOKE
                </button>
              </div>
            </div>
          </>
        ) : null}
      </TableBody>
    </div>
  );
}

export const TableHeader = (props) => {
  return <div className="px-8 mb-4">{props.children}</div>;
};

export const TableBody = (props) => {
  return <div className="w-full">{props.children}</div>;
};

export const TableHeaderRow = (props) => {
  return (
    <div className={"flex items-center w-full h-5 text-[9px] text-thead-row"}>
      {props.children}
    </div>
  );
};

export const TableBodyRow = (props) => {
  return (
    <div
      className={
        props.no % 2
          ? "flex items-center px-4 py-4 mb-4 w-full bg-neutral-830 rounded-md"
          : "flex items-center px-4 py-4 mb-4 w-full rounded-md"
      }
    >
      {props.children}
    </div>
  );
};

export const TableCol = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export const Progressbar = (props) => {
  return (
    <div className="w-11/12 h-3 bg-gray-200 rounded-full">
      <div
        className="bg-[#1dadff] h-3 text-[10px] font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        style={{ width: props.width }}
      >
        {props.children}
      </div>
    </div>
  );
};

export const ProjectDetail = (props) => {
  return (
    <div className="flex ">
      <div className="page-detail-left pl-6 w-1/2">
        <label className="w-full h-15 font-normal text-[14px] text-white leading-5 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure tracking-widedolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </label>

        <div className="flex flex-row pt-4">
          <select
            disabled
            className="w-1/5 h-8 border border-neutral-800 bg-neutral-830 font-extrabold text-center text-white text-[9px] leading-5 focus:ring-gray-300 rounded-md"
            alt="Select Chapter"
            name="projects"
            id="projects"
          >
            <option
              className=" h-8 font-extrabold text-center text-white text-[9px] hover:bg-neutral-830"
              value="1"
            >
              Select Chapter
            </option>
          </select>

          <button className="ml-4 flex justify-center items-center rounded-md px-[6px] text-center w-1/15 h-8 text-white bg-gradient-to-r from-[#FEAC6D] to-[#AE61ED] font-extrabold text-[10px] tracking-widest leading-5 hover:opacity-80">
            GO TO
          </button>
        </div>
      </div>

      <div className="page-detail-righ pl-6 w-1/2 flex flex-col">
        <label className="h-15 font-normal text-[10px] text-white leading-5 tracking-[.21em]">
          GENRES
        </label>

        <div className="flex flex-row">
          <img
            className="mt-2"
            src="assets/img/dashboard/Tag1.png"
            alt="Tag1"
          />
          <img
            className="mt-2 ml-3"
            src="assets/img/dashboard/Tag2.png"
            alt="Tag2"
          />
          <img
            className="mt-2 ml-3"
            src="assets/img/dashboard/Tag3.png"
            alt="Tag3"
          />
          <img
            className="mt-2 ml-3"
            src="assets/img/dashboard/Tag4.png"
            alt="Tag4"
          />
        </div>

        <label className="mt-8 h-15 font-normal text-[10px] text-white leading-5 tracking-[.21em]">
          CHARACTERS
        </label>

        <div className="flex flex-row">
          <img
            className="mt-2 rounded-[32px]"
            src="assets/img/dashboard/Character1.png"
            alt="Character1"
          />
          <img
            className="mt-2 ml-3 rounded-[32px]"
            src="assets/img/dashboard/Character2.png"
            alt="Character2"
          />
          <img
            className="mt-2 ml-3 rounded-[32px]"
            src="assets/img/dashboard/Character3.png"
            alt="Character3"
          />
          <img
            className="mt-2 ml-3 rounded-[32px]"
            src="assets/img/dashboard/Character4.png"
            alt="Character4"
          />
          <img
            className="mt-2 ml-3 rounded-[32px]"
            src="assets/img/dashboard/Character5.png"
            alt="Character5"
          />
          <img
            className="mt-2 ml-3 rounded-[32px]"
            src="assets/img/dashboard/Character6.png"
            alt="Character6"
          />
          <img
            className="mt-2 ml-3 rounded-[32px]"
            src="assets/img/dashboard/Character7.png"
            alt="Character7"
          />
          <img
            className="mt-2 ml-3 rounded-[32px]"
            src="assets/img/dashboard/Character8.png"
            alt="Character8"
          />
          <img
            className="mt-2 ml-3 rounded-[32px]"
            src="assets/img/dashboard/Character9.png"
            alt="Character9"
          />
          <img
            className="mt-2 ml-3 rounded-[32px]"
            src="assets/img/dashboard/Character10.png"
            alt="Character10"
          />
          <img
            className="mt-2 ml-3 rounded-[32px]"
            src="assets/img/dashboard/Character11.png"
            alt="Character11"
          />
        </div>
      </div>
    </div>
  );
};
