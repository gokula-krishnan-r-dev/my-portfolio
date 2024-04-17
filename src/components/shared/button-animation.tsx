import React from "react";

const Button = ({ text }: any) => {
  return (
    <div className="group flex cursor-pointer">
      <p className="m-0 transition-all duration-500 ease-in-out">©</p>

      <div className="flex relative overflow-hidden whitespace-nowrap ml-2 transition-all duration-500 ease-in-out">
        <p className="relative transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
          Code by
        </p>
        <p className="relative transition-transform duration-500 ease-in-out pl-1 group-hover:-translate-y-16">
          Gokul
        </p>
        <p className="absolute left-1 pl-1 transition-transform translate-y-16 duration-500 ease group-hover:-translate-y-16">
          krishnan
        </p>
      </div>
    </div>
  );
};

export default Button;
