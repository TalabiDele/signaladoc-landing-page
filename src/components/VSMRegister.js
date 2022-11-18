import React, { useState, useContext } from "react";
import AuthContext from "../Context/AuthContext";

const VSMRegister = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { register, userId, emailCode } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    register({ username, password, surname, firstName, userId, emailCode });
  };

  return (
    <div className=" w-full">
      <div className=" w-full">
        <form action=" " className="grid mt-10" onSubmit={handleRegister}>
          <p className=" mb-5 text-[20px]">
            Create a strong password for your account
          </p>
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
            className=" border-none bg-input-blue rounded-md py-5 w-3/4 mb-10 lg:w-full sm:w-full xs:w-full ss:w-full  "
          />
          <label
            htmlFor="firstName"
            className=" text-grey-text text-[12px] mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
            className=" border-none bg-input-blue rounded-md py-5 w-3/4 mb-10 lg:w-full sm:w-full xs:w-full ss:w-full "
          />
          <label htmlFor="surname" className=" text-grey-text text-[12px] mb-2">
            Surname
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Doe"
            className=" border-none bg-input-blue rounded-md py-5 w-3/4 mb-10 lg:w-full sm:w-full xs:w-full ss:w-full "
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
            className=" border-none bg-input-blue rounded-md py-5 w-3/4 mb-10 lg:w-full sm:w-full xs:w-full ss:w-full "
          />
          <label
            htmlFor="confirmPassword"
            className=" text-grey-text text-[12px] mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="**********"
            className=" border-none bg-input-blue rounded-md py-5 w-3/4 mb-10 lg:w-full sm:w-full xs:w-full ss:w-full "
          />
          <button className="bg-gradient-to-b from-grad-light to-grad-dark text-[20px] text-white w-1/4 py-4 rounded-md">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default VSMRegister;
