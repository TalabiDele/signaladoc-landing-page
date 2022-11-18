import React, { useState, useContext } from "react";
import AuthContext from "../Context/AuthContext";

const VSMCode = () => {
  const [code, setCode] = useState();

  const {
    emailCode,
    loading,
    setLoading,
    error,
    setError,
    message,
    setMessage,
    approved,
    setApproved,
    isCode,
    setIsCode,
    isDetails,
    setIsDetails,
    isEmail,
    setIsEmail,
  } = useContext(AuthContext);

  const verifyCode = (e) => {
    e.preventDefault();

    console.log(emailCode);
    console.log(code);
    setLoading(true);

    if (emailCode !== code) {
      setError(true);
      setMessage("Incorrect code. Check your mail or resend code");

      setTimeout(() => {
        setError(false);
        setMessage("");
      }, 3000);

      setLoading(false);
    } else if (emailCode === "") {
      setError(true);
      setMessage("Enter code sent to your mail");

      setTimeout(() => {
        setMessage("");
        setError(false);
      }, 3000);
      setLoading(false);
    } else {
      setMessage("Email verified!");
      setApproved(true);

      setTimeout(() => {
        setIsCode(false);
        setIsEmail(false);
        setIsDetails(true);

        setApproved(false);
        setMessage("");
      }, 4000);
      setLoading(false);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bg-bg-light w-[100%] h-[100vh] top-0 bottom-0 left-0 grid items-center z-40">
      <div className=" bg-white w-2/4 mx-auto rounded-lg p-20 ss:w-[90%] ss:p-5 xs:w-[90%] xs:p-5">
        <p>We sent you a code to verify your email address/phone number</p>

        <form action=" " className="grid mt-5" onSubmit={verifyCode}>
          <label htmlFor="code" className=" text-grey-text text-[12px] mb-2">
            Code
          </label>
          <input
            type="number"
            id="code"
            name="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="123456"
            className=" border-none bg-input-blue rounded-md py-5 w-3/4 mb-10 lg:w-full sm:w-full xs:w-full ss:w-full"
          />
          <button className="bg-gradient-to-b from-grad-light to-grad-dark text-[20px] text-white w-1/4 py-4 rounded-md">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default VSMCode;
