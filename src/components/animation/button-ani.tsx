import React from "react";

const ButtonAnimation = () => {
  return (
    <button
      className="btn btn-mod px-6 py-4 bg-blue-500 rounded-3xl btn-border btn-medium btn-circle"
      data-btn-animate="y"
    >
      <span className="btn-animate-y">
        <span className="btn-animate-y-1">Get a proposal</span>
        <span className="btn-animate-y-2" aria-hidden="true">
          Get a proposal
        </span>
      </span>
    </button>
  );
};

export default ButtonAnimation;
