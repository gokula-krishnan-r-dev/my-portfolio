import React from "react";

// Define a TypeScript interface for the component's props
interface HeaderTitleProps {
  mainText: string; // Text for the main header
  subText: string; // Text for the subtitle
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ mainText, subText }) => {
  return (
    <div className="w-full text-start">
      <h1 className="text-8xl uppercase text-start w-full font-semibold">
        <span>{mainText}</span>&nbsp;
        <br />
        <span className="!ml-96">{subText}</span>&nbsp;
      </h1>
    </div>
  );
};

export default HeaderTitle;
