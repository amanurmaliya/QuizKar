import React from "react";
import {commonSelector} from "../../../store/features/common/commonSlice"
import {useSelector} from "react-redux";
const SideBarButton = ({ label, icon, onClick }) => {
    const {isSideBarOpen} = useSelector(commonSelector)
  return (
    <div
      className="flex gap-2 p-2 hover:bg-gray-300 rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <span>{icon}</span>
      {isSideBarOpen && label}
    </div>
  );
};

export default SideBarButton;
