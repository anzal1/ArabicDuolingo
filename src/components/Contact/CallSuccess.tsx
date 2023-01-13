import React from "react";
import { useNavigate } from "react-router-dom";

const CallSuccess = () => {
  const navigate = useNavigate();
  return (
    <>
      <form className="space-y-8 divide-y sm:shadow-md divide-gray-200 m-[1rem] my-[5rem] md:m-[3rem] lg:m-[5rem] p-[1rem] sm:p-[2rem] border-2 rounded-md">
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
            <div className="flex flex-col items-center">
              <h2 className="text-xl text-center mb-4 font-medium leading-6 text-gray-900">
                Call for coach is made, thanks for your interest and trust. We
                suggest you register to take the exam which will help to give
                you better assistance and guidance.
              </h2>
            </div>
            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Phone
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="phone_validation"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Phone Validation
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="number"
                    name="phone_validation"
                    id="phone_validation"
                    autoComplete="phone_validation"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Password
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="passsword"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Request OTP
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => {
                navigate("/profile");
              }}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CallSuccess;
