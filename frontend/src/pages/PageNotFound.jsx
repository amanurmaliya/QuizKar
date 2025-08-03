import React from "react";
import CustomButton from "../components/common/customButton";
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // This will navigate to the home page
    navigate("/", { replace: true }); // Here replace = true will make sure that the person won't be landing back in the 404 page if click back button
    // generally the normal stack push method works for the new page but here when replace = true then firstly the pop is performed and then the push is done so that the 404 page is erased and the back button will take us to the previous valid page rather than this page
  };
  return (
    <div className="flex flex-col text-center align-items-center h-screen justify-center">
      <div>
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-lg">Page Not Found</p>
      </div>
      <div>

      <CustomButton onClick={handleClick} >Go To Home</CustomButton>
      </div>
    </div>
  );
};

export default PageNotFound;
