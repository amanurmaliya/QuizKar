import React from "react";
import { useHeading } from "../../../hooks/index";
const Header = () => {
  const { heading, subHeading } = useHeading();
  return (
    <nav className="h-16 top-0 sticky border-b border-black p-2 flex flex-col justify-center bg-white">
      <h1 className="text-2xl font-bold">{heading}</h1>
      {subHeading && <p className="text-sm text-gray-500">{subHeading}</p>}
    </nav>
  );
};

export default Header;
