import React, { useContext } from "react";
import { Bg } from "./style";
import AuthContext from "../Context/AuthContext";

const Side = () => {
  const { showBg, setShowBg } = useContext(AuthContext);

  return (
    <>
      <Bg>
        <div className=" bg-[#1c278daf] w-[100%] h-[100vh] xs:h-[70vh] ss:h-[70vh]"></div>
      </Bg>
      <button
        className={`${
          !showBg ? "hidden" : ""
        } bg-gradient-to-b from-grad-light to-grad-dark text-[20px] text-white w-2/4 py-4 rounded-md mt-5 mx-auto hidden xs:block ss:block`}
        onClick={() => setShowBg(false)}
      >
        Start Consulting
      </button>
    </>
  );
};

export default Side;
