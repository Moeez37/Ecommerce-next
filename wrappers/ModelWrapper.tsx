"use client";
import React, { useEffect, useState } from "react";

function ModalWrapper({ type, duration, children }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (type === "TIMER" && duration) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, duration);

      return () => clearTimeout(timer); // Clean up timer on unmount
    }
  }, [type, duration]);

  return (
    <>
      {type !== "TIMER" && (
        <button
          onClick={openModal}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open Modal
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 flex w-fit h-fit items-center justify-center bg-black bg-opacity-50 z-50 "
          aria-hidden="true"
        >
          <div className="relative bg-white w-fit max-w-md rounded shadow-lg ">
            <button
              onClick={closeModal}
              className="justify-right item-left text-gray-500 hover:text-gray-800 pt-4 pr-5"
            >
              ✖
            </button>
            {children}
          </div>
        </div>
      )}

      {/* Hide scroll when modal is open */}
      <style>
        {isOpen &&
          `
          body {
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
}

export default ModalWrapper;
