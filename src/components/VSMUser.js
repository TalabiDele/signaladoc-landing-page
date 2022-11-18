import React, { useState, useContext } from "react";
import AuthContext from "../Context/AuthContext";

const VSMUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { verifyUser } = useContext(AuthContext);

  const handleVerifyUser = (e) => {
    e.preventDefault();

    verifyUser({ username, password });
  };

  return (
    <div>
      <div className="" onSubmit={handleVerifyUser}>
        <form action=" " className="grid mt-10">
          <p className=" mb-5 text-[20px]">Enter your password to continue</p>
          <label
            htmlFor="username"
            className=" text-grey-text text-[12px] mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="johndoe@email.com"
            className=" border-none bg-input-blue rounded-md py-5 w-3/4 mb-10"
          />
          <label
            htmlFor="password"
            className=" text-grey-text text-[12px] mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="**********"
            className=" border-none bg-input-blue rounded-md py-5 w-3/4 mb-10"
          />

          <button className="bg-gradient-to-b from-grad-light to-grad-dark text-[20px] text-white w-1/4 py-4 rounded-md">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default VSMUser;
