"use client";
import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.80)] flex justify-center items-center z-50">
          <div className="bg-white  rounded-2xl shadow-lg overflow-auto relative w-[80%] xl:max-w-md  max-h-[80vh]">
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-2xl text-grey-200  hover:text-gray-700"
              aria-label="Close modal"
            >
              &#10005;
              {/* × */}
            </button>
            {title && <h2 className="text-xl font-semibold mb-2"></h2>}
            <div>{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Modal;
