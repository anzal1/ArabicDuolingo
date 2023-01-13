import React, { useState } from "react";
import OptionsGroup from "./options";
import { questionAns } from "../constants/constants";
const ReadingType = () => {
  const [quesNumber, setQuesNumber] = useState(1);

  const goBack = () => {
    if (quesNumber === 1) return;
    setQuesNumber((prev) => {
      return prev - 1;
    });
  };

  const goForward = () => {
    if (quesNumber === 5) return;
    setQuesNumber((prev) => {
      return prev + 1;
    });
  };
  return (
    <div className="flex flex-col justify-center items-center py-[4rem]">
      <div className="w-[80%] rounded p-4 bg-gray-300 shadow-md">
        <h1 className="text-lg font-semibold mb-2">Reading Text</h1>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="mt-8 text-left w-[80%] p-4 border-gray-300 border-2 rounded bg-gray-100">
        <h1 className="font-semibold text-lg underline">Questions</h1>
        {questionAns.map((ques) => {
          return (
            <>
              {ques.id === quesNumber && (
                <div key={ques.id} className="mt-4 mb-4 pb-4 border-b-2">
                  <h1 className=" font-medium">Question {ques.id}.</h1>
                  <p className="">{ques.question}</p>
                  <OptionsGroup options={ques.answers} />
                </div>
              )}
            </>
          );
        })}
        <nav
          className="flex items-center justify-between bg-gray-100 py-3"
          aria-label="Pagination"
        >
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">Question {quesNumber}</span>{" "}
              of <span className="font-medium">5</span>
            </p>
          </div>
          <div className="flex flex-1 justify-center sm:justify-end">
            <button
              onClick={goBack}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </button>
            <button
              onClick={goForward}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        </nav>
        <div className="flex flex-wrap  sm:justify-end justify-center">
          <button className="bg-blue-700 rounded-md p-2 px-4 text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadingType;
