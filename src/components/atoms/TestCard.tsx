import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";

const TestCards: React.FC<{
  cardHeaderText: string;
  offer1: string;
  offer1_price: string;
  offer2: string;
  offer2_price: string;
  progress: number;
  lottie: string;
}> = ({
  cardHeaderText,
  offer1,
  offer1_price,
  offer2,
  offer2_price,
  progress,
  lottie,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="max-w-[22rem] min-w-[18rem] w-full rounded-2xl mx-auto shadow-xl shadow-gray-400 hover:scale-105 hover:shadow-gray-500
  transition-all duration-200
  "
      onClick={() => {
        navigate("/lesson");
      }}
    >
      {/* header */}
      <div className="bg-[#012c54] h-12 rounded-t-2xl text-white text-center leading-[3rem] text-xl font-bold">
        <h1>{cardHeaderText}</h1>
      </div>

      {/* lottie */}
      <div className="relative">
        <Player
          className="absolute m-auto left-0 right-0 w-full h-56 opacity-40"
          loop
          autoplay
          speed={1.5}
          src={lottie}
        />
      </div>

      {/* card content */}
      <div className="w-full relative">
        <div className="bg-[#dbefff] shadow-md shadow-gray-400 mx-3 my-4 rounded p-2 flex flex-row justify-between">
          <span className="mx-2 text-black text-lg">{offer1}</span>
          <span className="mx-2 text-black text-lg italic font-bold">
            {offer1_price}
          </span>
        </div>
        <div className="bg-[#dbefff] shadow-md shadow-gray-400 mx-3 my-4 rounded p-2 flex flex-row justify-between">
          <span className="mx-2 text-black text-lg">{offer2}</span>
          <span className="mx-2 text-black text-lg italic font-bold">
            {offer2_price}
          </span>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#405a6f] hover:bg-[#53728e] shadow-md shadow-gray-500 active:shadow-gray-500/50 rounded-lg text-white px-6 py-2 text-center mx-4 my-2">
            Try For Free
          </button>
        </div>
        <div className="ml-4 my-4 mr-4 w-[calc(100%-2rem)] text-center text-md">
          <div className="w-full bg-gray-300 rounded-full">
            <div
              style={{ width: `${progress}%` }}
              className="bg-[#032D5DFF] text-xs font-medium text-blue-100 text-center p-0.5 leading-none
                     rounded-full"
            >
              {progress}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCards;
