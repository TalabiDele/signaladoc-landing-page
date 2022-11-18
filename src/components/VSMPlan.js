import React, { useContext, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import { API_URL } from "../Config";

const VSMPlan = () => {
  const {
    vsm,
    teleMedicine,
    plans,
    setPlans,
    token,
    loading,
    setLoading,
    setIsPlan,
    setIsCheckout,
    setStepThree,
    setDiscountId,
    discountId,
    ref,
  } = useContext(AuthContext);

  useEffect(() => {
    subscriptions();
  }, []);

  const subscriptions = async () => {
    setLoading(true);

    const res = await fetch(`${API_URL}/subscription`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    data.fees.forEach((e) => {
      setPlans(e);
      setDiscountId(e.id);

      console.log(plans);
      console.log(ref);
      console.log(discountId);
    });
  };

  const handleCheckout = () => {
    setIsPlan(false);
    setIsCheckout(true);
    setStepThree(true);
  };

  return (
    <div>
      <div className=" mt-5 w-[90%] mx-auto">
        <p className=" text-center text-2xl mb-5">
          Amazing Discount on Yearly plan
        </p>
        <div className="">
          {plans && (
            <div className=" grid justify-items-center bg-gradient-to-b from-grad-light to-grad-dark text-white w-2/4 rounded-lg px-10 shadow-xl py-10 mx-auto ss:w-full xs:w-full sm:w-full sm:py-5 sm:px-10 lg:py-5 lg:w-full">
              <h2 className=" text-[24px] mb-5 capitalize">
                {plans.type_string}
              </h2>
              <div className=" h-[10rem] w-[10rem] rounded-full bg-white text-primary grid text-center items-center mb-10 sm:mb-5">
                <p className=" text-center text-[28px] leading-none grid">
                  <span className=" line-through text-[16px]">
                    <em>₦{plans.subscribable.amount}</em>
                  </span>
                  ₦{plans.amount} <br />{" "}
                  <small className=" text-[16px]">Yearly</small>
                </p>
              </div>

              <ul className="text-[20px] mb-5">
                <li className=" list-disc mb-3">Family Account</li>
                <li className=" list-disc mb-3">
                  Unlimited Chat, Audio & Video Consultation
                </li>
                <li className=" list-disc mb-3">
                  Book Appointment & Get Prescription
                </li>
                <li className=" list-disc mb-3">Personalised family EHR</li>
              </ul>

              <button
                className=" bg-white text-primary py-3 w-[100%] rounded-md text-[20px]"
                onClick={handleCheckout}
              >
                Choose Plan
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VSMPlan;
