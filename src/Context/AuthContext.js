import { createContext, useState } from "react";
import { API_URL, AUTH_API, TELEMEDICINE_URL } from "../Config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [isEmail, setIsEmail] = useState(true);
  const [isCode, setIsCode] = useState(false);
  const [isDetails, setIsDetails] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [emailCode, setEmailCode] = useState(null);
  const [userId, setUserId] = useState(null);
  const [approved, setApproved] = useState(false);
  const [isPlan, setIsPlan] = useState(false);
  const [token, setToken] = useState("");
  const [plans, setPlans] = useState();
  const [isCheckout, setIsCheckout] = useState(false);
  const [user, setUser] = useState({});
  const [discountId, setDiscountId] = useState();
  const [showBg, setShowBg] = useState(true);
  const [ref, setRef] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [username, setUsername] = useState("");
  const [isForgot, setIsForgot] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [isCodeReset, setIsCodeReset] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const validateEmail = async ({ username }) => {
    setLoading(true);

    const res = await fetch(`${API_URL}/user/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });

    const data = await res.json();

    if (res.ok) {
      if (data.exists) {
        setApproved(true);
        setUserExists(true);
        setIsEmail(false);

        setMessage(`${data.message}`);

        // setIsEmail(true);
        setIsCode(false);

        setTimeout(() => {
          setMessage("");
        }, 6000);
      } else {
        setApproved(true);
        setMessage(`${data.message}`);
        setUserExists(false);
        setTimeout(() => {
          setApproved(false);
          setMessage("");
        }, 6000);

        setEmailCode(data.data.code);

        setUserId(data.data.id);
        setIsCode(true);

        setIsDetails(true);
      }
    } else {
      setError(true);

      setMessage(data.email[0]);

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }

    setTimeout(() => {
      setError(false);
    }, 3000);

    setLoading(false);
  };

  const validateTeleEmail = async ({ username }) => {
    setLoading(true);

    const res = await fetch(`${TELEMEDICINE_URL}/user/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });

    const data = await res.json();

    if (res.ok) {
      if (data.exists) {
        setApproved(true);
        setUserExists(true);
        setIsEmail(false);

        setMessage(`${data.message}`);

        // setIsEmail(true);
        setIsCode(false);

        setTimeout(() => {
          setMessage("");
        }, 6000);
      } else {
        setApproved(true);
        setMessage(`${data.message}`);
        setUserExists(false);
        setTimeout(() => {
          setApproved(false);
          setMessage("");
        }, 6000);

        setEmailCode(data.data.code);

        setUserId(data.data.id);
        setIsCode(true);

        setIsDetails(true);
      }
    } else {
      setError(true);

      setMessage(data.email[0]);

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }

    setTimeout(() => {
      setError(false);
    }, 3000);

    setLoading(false);
  };

  const register = async ({
    firstName,
    surname,
    password,
    userId,
    emailCode,
  }) => {
    setLoading(true);

    const res = await fetch(`${API_URL}/user/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        registration_id: userId,
        first_name: firstName,
        surname: surname,
        password,
        code: emailCode,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      // setUser(data.user);
      setApproved(true);
      setMessage("Account created successfully!");
      setIsPlan(true);
      setIsDetails(false);
      setUser(data.user);
      setStepTwo(true);
      setToken(data.access_token);
      setTimeout(() => {
        setApproved(false);
        setMessage("");
      }, 4000);
    } else {
      if (data.first_name && data.surname && data.password) {
        setMessage(`All fields are required!`);
      } else if (data.first_name && data.surname) {
        setMessage("The first name & surname fields are required!");
      } else if (data.first_name && data.password) {
        setMessage("The first name & password fields are required!");
      } else if (data.surname && data.password) {
        setMessage("The surname & password fields are required!");
      } else if (data.surname) {
        setMessage(`${data.surname[0]}`);
      } else if (data.password) {
        setMessage(`${data.password[0]}`);
      } else if (data.first_name) {
        setMessage(`${data.surname[0]}`);
      }

      setError(true);

      setTimeout(() => {
        setError(false);
        setMessage("");
      }, 4000);
    }

    setLoading(false);
  };

  const registerTele = async ({
    firstName,
    surname,
    password,
    userId,
    emailCode,
  }) => {
    setLoading(true);

    const res = await fetch(`${TELEMEDICINE_URL}/user/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        registration_id: userId,
        first_name: firstName,
        surname: surname,
        password,
        code: emailCode,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      // setUser(data.user);
      setApproved(true);
      setMessage("Account created successfully!");
      setIsPlan(true);
      setIsDetails(false);
      setUser(data.user);
      setStepTwo(true);
      setToken(data.access_token);
      setTimeout(() => {
        setApproved(false);
        setMessage("");
      }, 4000);
    } else {
      if (data.first_name && data.surname && data.password) {
        setMessage(`All fields are required!`);
      } else if (data.first_name && data.surname) {
        setMessage("The first name & surname fields are required!");
      } else if (data.first_name && data.password) {
        setMessage("The first name & password fields are required!");
      } else if (data.surname && data.password) {
        setMessage("The surname & password fields are required!");
      } else if (data.surname) {
        setMessage(`${data.surname[0]}`);
      } else if (data.password) {
        setMessage(`${data.password[0]}`);
      } else if (data.first_name) {
        setMessage(`${data.surname[0]}`);
      }

      setError(true);

      setTimeout(() => {
        setError(false);
        setMessage("");
      }, 4000);
    }

    setLoading(false);
  };

  const verifyUser = async ({ username, password }) => {
    setLoading(true);

    const res = await fetch(`${API_URL}/user/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setApproved(true);
      setMessage(data.message);
      setIsCode(false);
      setIsEmail(false);
      setIsDetails(false);
      setStepTwo(true);
      setUserExists(false);
      setUser(data.user);
      setIsPlan(true);
      setToken(data.access_token);

      setTimeout(() => {
        setMessage("");
        setApproved(false);
      }, 4000);
    } else {
      setError(true);
      setMessage(data.error);

      setTimeout(() => {
        setError(false);
        setMessage("");
      }, 4000);
    }

    setTimeout(() => {
      setMessage("");
      setApproved(false);
    }, 4000);

    setLoading(false);
  };

  const verifyTeleUser = async ({ username, password }) => {
    setLoading(true);

    const res = await fetch(`${TELEMEDICINE_URL}/user/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setApproved(true);
      setMessage(data.message);
      setIsCode(false);
      setIsEmail(false);
      setIsDetails(false);
      setStepTwo(true);
      setUserExists(false);
      setUser(data.user);
      setIsPlan(true);
      setToken(data.access_token);

      setTimeout(() => {
        setMessage("");
        setApproved(false);
      }, 4000);
    } else {
      setError(true);
      setMessage(data.error);

      setTimeout(() => {
        setError(false);
        setMessage("");
      }, 4000);
    }

    setTimeout(() => {
      setMessage("");
      setApproved(false);
    }, 4000);

    setLoading(false);
  };

  const submitVsmPayment = async ({ ref, discountId }) => {
    setLoading(true);

    const res = await fetch(`${API_URL}/subscription/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        tx_ref: ref,
        discount_id: discountId,
      }),
    });

    const data = await res.json();
  };

  const submitTelePayment = async ({ ref, discountId }) => {
    setLoading(true);

    const res = await fetch(`${TELEMEDICINE_URL}/subscription/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        tx_ref: ref,
        discount_id: discountId,
      }),
    });

    const data = await res.json();
  };

  const forgotPassword = async ({ username }) => {
    setLoading(true);

    const res = await fetch(`${AUTH_API}/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });

    const data = await res.json();

    setUserId(data.user_id);

    if (res.ok) {
      setApproved(true);
      setMessage(data.message);
      setEmailCode(data.code);
      setUserId(data.user_id);

      setTimeout(() => {
        setApproved(false);
        setIsCodeReset(true);
        setIsForgot(false);
      }, 3000);
    } else {
      setError(true);
      setMessage(data.error);

      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    setUserId(data.user_id);

    setLoading(false);
  };

  const resetVsmPassword = async ({ userId, password }) => {
    setLoading(true);

    const res = await fetch(`${API_URL}/user/forgot-password/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: userId, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setApproved(true);
      setMessage("Password reset successful! You can now login");

      setTimeout(() => {
        setApproved(false);
        setUserExists(true);
        setIsCodeReset(false);
        setIsReset(false);
      }, 4000);
    } else {
      setError(true);
      setMessage(data.password[0]);

      setTimeout(() => {
        setError(false);
      }, 7000);
    }

    setLoading(false);
  };

  const resetTelePassword = async ({ userId, password }) => {
    setLoading(true);

    const res = await fetch(`${TELEMEDICINE_URL}/user/forgot-password/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: userId, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setApproved(true);
      setMessage("Password reset successful! You can now login");

      setTimeout(() => {
        setApproved(false);
        setUserExists(true);
        setIsReset(false);
      }, 4000);
    } else {
      setError(true);
      setMessage(data.password[0]);

      setTimeout(() => {
        setError(false);
      }, 7000);
    }

    setLoading(false);
  };

  const resendCode = async ({ userId }) => {
    setLoading(true);

    const res = await fetch(`${AUTH_API}/forgot-password/resend-code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: userId }),
    });

    const data = await res.json();

    setIsCodeReset(true);

    setApproved(true);
    setMessage(data.message);

    setTimeout(() => {
      setApproved(false);
    }, 4000);
  };

  return (
    <AuthContext.Provider
      value={{
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
        emailCode,
        setEmailCode,
        loading,
        setLoading,
        approved,
        setApproved,
        error,
        setError,
        message,
        setMessage,
        register,
        userId,
        verifyUser,
        userExists,
        setUserExists,
        isPlan,
        setIsPlan,
        plans,
        setPlans,
        token,
        isCheckout,
        setIsCheckout,
        user,
        discountId,
        setDiscountId,
        showBg,
        setShowBg,
        ref,
        setRef,
        isSuccess,
        setIsSuccess,
        submitTelePayment,
        verifyTeleUser,
        validateTeleEmail,
        registerTele,
        username,
        setUsername,
        forgotPassword,
        resetVsmPassword,
        resetTelePassword,
        isForgot,
        setIsForgot,
        isReset,
        setIsReset,
        setIsCodeReset,
        isCodeReset,
        resendCode,
        isPaid,
        setIsPaid,
        submitVsmPayment,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
