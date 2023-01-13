import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ChangeLanguage = () => {
  const [activeCard, setActiveCard] = useState(1);
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="antialiased bg-gradient-to-b hidden md:flex font-sans from-gray-200 items-center justify-center py-[10rem] to-white">
        <div className="flex h-96 items-stretch min-w-md overflow-hidden w-full">
          <div
            onClick={() => {
              setActiveCard(1);
            }}
            className={`${
              activeCard === 1 && "active"
            } card cursor-pointer duration-700 ease-in-out flex-grow m-2 min-w-14 overflow-hidden relative rounded-3xl transition-all`}
          >
            <div className="absolute background bg-center bg-cover opacity-50 bg-red-500 bg-red-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
            <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent inset-x-0 opacity-0 shadow to-black transform transition-all z-20 h-1/2 translate-y-1/2"></div>
            <div className="absolute top-10 duration-700 ease-in-out flex w-full -left-2 justify-center label mb-3 transition-all z-30">
              <div className="content flex flex-col justify-center leading-tight text-gray-900">
                <div className="ease-in-out md:text-2xl font-bold duration-700 px-2 opacity-0 relative transform transition-all translate-x-8">
                  <h1 className="mb-4 underline text-center">ENGLISH</h1>
                  Our programs do not follow the conventional methods.
                </div>
                <div className="delay-100 duration-700 ease-in-out mt-6 opacity-0 relative flex justify-center flex-col items-center transform transition-all translate-x-8">
                  <Link to="/callcoach">
                    <button className="p-2 bg-gray-900 text-white rounded w-[12rem] hover:bg-gray-800">
                      Call A Coach
                    </button>
                  </Link>
                  <button
                    className="p-2 bg-gray-900 text-white rounded w-[12rem] mt-4 hover:bg-gray-800"
                    onClick={() => {
                      navigate("/skills");
                    }}
                  >
                    Develop a Skill
                  </button>
                  <button className="p-2 bg-gray-900 text-white rounded w-[12rem] mt-4 hover:bg-gray-800">
                    Prepare For Exam
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setActiveCard(2);
            }}
            className={`${
              activeCard === 2 && "active"
            } card cursor-pointer duration-700 ease-in-out flex-grow m-2 min-w-14 overflow-hidden relative rounded-3xl transition-all`}
          >
            <div className="absolute background bg-center bg-cover opacity-50 bg-yellow-500 bg-yellow-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
            <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent inset-x-0 opacity-0 shadow to-black transform transition-all z-20 h-1/2 translate-y-1/2"></div>
            <div className="absolute top-10 duration-700 ease-in-out flex w-full justify-center label -left-2 mb-3 transition-all z-30">
              <div className="content flex flex-col justify-center leading-tight text-gray-900">
                <div className="ease-in-out md:text-2xl font-bold duration-700 opacity-0 px-2 relative transform transition-all translate-x-8">
                  <h1 className="mb-4 underline text-center">FRENCH</h1>
                  Our programs do not follow the conventional methods.
                </div>
                <div className="delay-100 duration-700 ease-in-out mt-6 opacity-0 relative flex justify-center flex-col items-center transform transition-all translate-x-8">
                  <Link to="/callcoach">
                    <button className="p-2 bg-gray-900 text-white rounded w-[12rem] hover:bg-gray-800">
                      Call A Coach
                    </button>
                  </Link>
                  <button
                    className="p-2 bg-gray-900 text-white rounded w-[12rem] mt-4 hover:bg-gray-800"
                    onClick={() => {
                      navigate("/skills");
                    }}
                  >
                    Develop a Skill
                  </button>
                  <button className="p-2 bg-gray-900 text-white rounded w-[12rem] mt-4 hover:bg-gray-800">
                    Prepare For Exam
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setActiveCard(3);
            }}
            className={`${
              activeCard === 3 && "active"
            } card cursor-pointer duration-700 ease-in-out flex-grow m-2 min-w-14 overflow-hidden relative rounded-3xl transition-all`}
          >
            <div className="absolute background bg-center bg-cover bg-green-500 opacity-50 bg-green-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
            <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent inset-x-0 opacity-0 shadow to-black transform transition-all z-20 h-1/2 translate-y-1/2"></div>
            <div className="absolute top-10 duration-700 ease-in-out flex w-full justify-center label -left-2 mb-3 transition-all z-30">
              <div className="content flex flex-col justify-center leading-tight text-gray-900">
                <div className="ease-in-out md:text-2xl font-bold duration-700 opacity-0 px-2 relative transform transition-all translate-x-8">
                  <h1 className="mb-4 underline text-center">GERMAN</h1>
                  Our programs do not follow the conventional methods.
                </div>
                <div className="delay-100 duration-700 ease-in-out mt-6 opacity-0 relative flex justify-center flex-col items-center transform transition-all translate-x-8">
                  <Link to="/callcoach">
                    <button className="p-2 bg-gray-900 text-white rounded w-[12rem] hover:bg-gray-800">
                      Call A Coach
                    </button>
                  </Link>
                  <button
                    className="p-2 bg-gray-900 text-white rounded w-[12rem] mt-4 hover:bg-gray-800"
                    onClick={() => {
                      navigate("/skills");
                    }}
                  >
                    Develop a Skill
                  </button>
                  <button className="p-2 bg-gray-900 text-white rounded w-[12rem] mt-4 hover:bg-gray-800">
                    Prepare For Exam
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setActiveCard(4);
            }}
            className={`${
              activeCard === 4 && "active"
            } card cursor-pointer duration-700 ease-in-out flex-grow m-2 min-w-14 overflow-hidden relative rounded-3xl transition-all`}
          >
            <div className="absolute background bg-center bg-cover bg-blue-500 opacity-50 bg-blue-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
            <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent inset-x-0 opacity-0 shadow to-black transform transition-all z-20 h-1/2 translate-y-1/2"></div>
            <div className="absolute top-10 duration-700 ease-in-out flex w-full justify-center label -left-2 mb-3 transition-all z-30">
              <div className="content flex flex-col justify-center leading-tight text-gray-900">
                <div className="ease-in-out md:text-2xl font-bold duration-700 opacity-0 relative px-2 transform transition-all translate-x-8">
                  <h1 className="mb-4 underline text-center">RUSSIAN</h1>
                  Our programs do not follow the conventional methods.
                </div>
                <div className="delay-100 duration-700 ease-in-out mt-6 opacity-0 relative flex justify-center flex-col items-center transform transition-all translate-x-8">
                  <Link to="/callcoach">
                    <button className="p-2 bg-gray-900 text-white rounded w-[12rem] hover:bg-gray-800">
                      Call A Coach
                    </button>
                  </Link>
                  <button
                    className="p-2 bg-gray-900 text-white rounded w-[12rem] mt-4 hover:bg-gray-800"
                    onClick={() => {
                      navigate("/skills");
                    }}
                  >
                    Develop a Skill
                  </button>
                  <button className="p-2 bg-gray-900 text-white rounded w-[12rem] mt-4 hover:bg-gray-800">
                    Prepare For Exam
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <div
          className={`active card cursor-pointer duration-700 ease-in-out h-96 m-6 min-w-14 overflow-hidden relative rounded-3xl transition-all`}
        >
          <div className="absolute background bg-center bg-cover opacity-50 bg-red-500 bg-red-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
          <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent inset-x-0 opacity-0 shadow to-black transform transition-all z-20 h-1/2 translate-y-1/2"></div>
          <div className="absolute top-10 duration-700 ease-in-out flex w-full -left-2 justify-center label mb-3 transition-all z-30">
            <div className="content flex flex-col justify-center leading-tight text-gray-900">
              <div className="ease-in-out md:text-2xl font-bold duration-700 px-2 opacity-0 relative transform transition-all translate-x-8">
                <h1 className="mb-4 underline text-center">ENGLISH</h1>
                Our programs do not follow the conventional methods.
              </div>
              <div className="delay-100 duration-700 ease-in-out mt-6 opacity-0 relative flex justify-center flex-col items-center transform transition-all translate-x-8">
                <Link to="/callcoach">
                  <button className="p-2 bg-gray-900 text-white rounded w-[12rem] hover:bg-gray-800">
                    Call A Coach
                  </button>
                </Link>
                <button className="p-2 bg-gray-900 text-white rounded w-[12rem] mt-4 hover:bg-gray-800">
                  Develop a Skill
                </button>
                <button className="p-2 bg-gray-900 text-white rounded w-[12rem] mt-4 hover:bg-gray-800">
                  Prepare For Exam
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`active card cursor-pointer duration-700 ease-in-out h-96 m-6 min-w-14 overflow-hidden relative rounded-3xl transition-all`}
        >
          <div className="absolute background bg-center bg-cover opacity-50 bg-yellow-500 bg-yellow-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
          <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent inset-x-0 opacity-0 shadow to-black transform transition-all z-20 h-1/2 translate-y-1/2"></div>
          <div className="absolute top-10 duration-700 ease-in-out flex w-full justify-center label -left-2 mb-3 transition-all z-30">
            <div className="content flex flex-col justify-center leading-tight text-gray-900">
              <div className="ease-in-out md:text-2xl font-bold duration-700 opacity-0 px-2 relative transform transition-all translate-x-8">
                <h1 className="mb-4 underline text-center">FRENCH</h1>
                Our programs do not follow the conventional methods.
              </div>
              <div className="delay-100 duration-700 ease-in-out mt-6 opacity-0 relative flex justify-center flex-col items-center transform transition-all translate-x-8">
                <Link to="/callcoach">
                  <button className="p-2 bg-gray-900 text-white rounded w-[12rem] hover:bg-gray-800">
                    Call A Coach
                  </button>
                </Link>
                <button className="p-2 bg-gray-900 text-white rounded w-[12rem] mt-4 hover:bg-gray-800">
                  Develop a Skill
                </button>
                <button className="p-2 bg-gray-900 text-white rounded w-[12rem] mt-4 hover:bg-gray-800">
                  Prepare For Exam
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`active card cursor-pointer duration-700 ease-in-out h-96 m-6 min-w-14 overflow-hidden relative rounded-3xl transition-all`}
        >
          <div className="absolute background bg-center bg-cover bg-green-500 opacity-50 bg-green-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
          <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent inset-x-0 opacity-0 shadow to-black transform transition-all z-20 h-1/2 translate-y-1/2"></div>
          <div className="absolute top-10 duration-700 ease-in-out flex w-full justify-center label -left-2 mb-3 transition-all z-30">
            <div className="content flex flex-col justify-center leading-tight text-gray-900">
              <div className="ease-in-out md:text-2xl font-bold duration-700 opacity-0 px-2 relative transform transition-all translate-x-8">
                <h1 className="mb-4 underline text-center">GERMAN</h1>
                Our programs do not follow the conventional methods.
              </div>
              <div className="delay-100 duration-700 ease-in-out mt-6 opacity-0 relative flex justify-center flex-col items-center transform transition-all translate-x-8">
                <Link to="/callcoach">
                  <button className="p-2 bg-gray-900 text-white rounded w-[12rem] hover:bg-gray-800">
                    Call A Coach
                  </button>
                </Link>
                <button className="p-2 bg-gray-900 text-white rounded w-[12rem] mt-4 hover:bg-gray-800">
                  Develop a Skill
                </button>
                <button className="p-2 bg-gray-900 text-white rounded w-[12rem] mt-4 hover:bg-gray-800">
                  Prepare For Exam
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="active card cursor-pointer duration-700 ease-in-out h-96 mb-[8rem] m-6 min-w-14 overflow-hidden relative rounded-3xl transition-all">
          <div className="absolute background bg-center bg-cover bg-blue-500 opacity-50 bg-blue-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
          <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent inset-x-0 opacity-0 shadow to-black transform transition-all z-20 h-1/2 translate-y-1/2"></div>
          <div className="absolute top-10 duration-700 ease-in-out flex w-full justify-center label -left-2 mb-3 transition-all z-30">
            <div className="content flex flex-col justify-center leading-tight text-gray-900">
              <div className="ease-in-out md:text-2xl font-bold duration-700 opacity-0 relative px-2 transform transition-all translate-x-8">
                <h1 className="mb-4 underline text-center">RUSSIAN</h1>
                Our programs do not follow the conventional methods.
              </div>
              <div className="delay-100 duration-700 ease-in-out mt-6 opacity-0 relative flex justify-center flex-col items-center transform transition-all translate-x-8">
                <Link to="/callcoach">
                  <button className="p-2 bg-gray-900 text-white rounded w-[12rem] hover:bg-gray-800">
                    Call A Coach
                  </button>
                </Link>
                <button className="p-2 bg-gray-900 text-white rounded w-[12rem] mt-4 hover:bg-gray-800">
                  Develop a Skill
                </button>
                <button className="p-2 bg-gray-900 text-white rounded w-[12rem] mt-4 hover:bg-gray-800">
                  Prepare For Exam
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeLanguage;
