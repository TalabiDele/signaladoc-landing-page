import React, { useContext, useState, useEffect } from "react";
import Steps from "./Steps";
import AuthContext from "../Context/AuthContext";
import VSMCode from "./VSMCode";
import VSMRegister from "./VSMRegister";
import VSMUser from "./VSMUser";
import VSMPlan from "./VSMPlan";
import VSMCheckout from "./VSMCheckout";
import VSMSide from "./VSMSide";
import VSMSuccess from "./VSMSuccess";

const VSMEmail = () => {
  const [username, setUsername] = useState("");

  const { user, showBg, setShowBg } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      console.log(user);
    } else {
      console.log("Not User");
    }
  }, []);

  const {
    stepOne,
    setStepOne,
    stepTwo,
    setStepTwo,
    stepThree,
    setStepThree,
    isEmail,
    setIsEmail,
    isCode,
    setIsCode,
    isDetails,
    setIsDetails,
    validateEmail,
    userExists,
    isPlan,
    setIsPlan,
    isCheckout,
    setIsCheckout,
    isSuccess,
    setIsSuccess,
  } = useContext(AuthContext);

  const handleEmailVerify = (e) => {
    e.preventDefault();

    console.log(username);

    validateEmail({ username });
  };

  return (
    <div className="flex fixed right-0 left-0 -z-10 xs:flex-col ss:flex-col">
      {showBg && <VSMSide />}
      <div
        className={`${
          showBg ? "xs:hidden ss:hidden" : ""
        } w-2/4 h-[100vh] overflow-y-scroll xs:w-full ss:w-full ss:h-[90vh] xs:h-[90vh] sm:h-[90vh]`}
      >
        <div className=" relative top-[3rem] left-20 right-0 w-[80%] sm:left-10 xs:w-[80%] xs:left-0 xs:top-[2rem] xs:mx-auto ss:w-[80%] ss:left-0 ss:mx-auto ss:top-[3rem] sm:top-[1rem]">
          {isEmail && (
            <div className=" xs:hidden ss:hidden">
              <h1 className="font-bold text-5xl mb-10 lg:text-3xl sm:text-3xl sm:mb-5 ">
                A{" "}
                <span className=" text-primary">Monitor Your Vital Signs</span>{" "}
                Just By Looking At Your Phone!
              </h1>
            </div>
          )}

          <Steps />

          {isEmail && (
            <form
              action=""
              className=" grid mt-10"
              onSubmit={handleEmailVerify}
            >
              <p className=" text-[20px] mb-5 ss:text-lg">
                Enter Your Email Address or Phone Number To Get Started!
              </p>
              <label
                htmlFor="username"
                className=" text-grey-text text-[12px] mb-2"
              >
                Email Address or Phone Number
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="johndoe@email.com"
                className=" border-none bg-input-blue rounded-md py-5 w-3/4 mb-10 lg:w-full sm:w-full xs:w-full ss:w-full"
              />
              <button className="bg-gradient-to-b from-grad-light to-grad-dark text-[20px] text-white w-1/4 py-4 rounded-md lg:w-2/4 sm:w-2/4 xs:w-2/4">
                Next
              </button>
            </form>
          )}

          {isCode && <VSMCode />}

          {isDetails && <VSMRegister />}

          {userExists && <VSMUser />}

          {isPlan && <VSMPlan />}

          {isCheckout && <VSMCheckout />}

          {isSuccess && <VSMSuccess />}
        </div>
      </div>
    </div>
  );
};

export default VSMEmail;
