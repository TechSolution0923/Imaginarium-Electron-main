import * as React from "react";

export default function Modal(props) {
  const { title, handleClose, body, footer } = props;

  return (
    <>
      <div className="z-50 w-[400px] fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto bg-[#2B2B2B] border border-[#161616] divide-y divide-[#161616] rounded-md">
        {title && (
          <div className="modal-header flex flex-row justify-between items-center py-[14px] w-full">
            <label className="font-extrabold ml-[24px] text-[9px] text-white leading-5 tracking-[.21em] uppercase">
              {title}
            </label>

            <button
              className="mr-[10px] hover:bg-[#4F4F4F]"
              onClick={handleClose}
            >
              <img
                className="w-[20px] h-[20px]"
                src="assets/img/dashboard/close.png"
                alt="close"
              />
            </button>
          </div>
        )}
        <div className="modal-content">{body}</div>

        <div className="modal-footer px-6 py-4">{footer}</div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
