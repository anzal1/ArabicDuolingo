import React from "react";
import QuestionTooltip from "../components/atoms/QuestionTooltip";
import VocabTooltip from "../components/atoms/VocabTooltip";
import OptionsGroup from "../components/TestUI/options";

const options = [
  { id: "1", title: "vbivbxiudbi" },
  { id: "2", title: "vnjsdvnfvbfd" },
  { id: "3", title: "fjfgnfvbfd" },
  { id: "4", title: "kjbvbidvbnb" },
];

const LessonPage: React.FC = () => {
  const meaning =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, magnam";
  return (
    <div className="bg-slate-200/70 rounded-2xl shadow-lg shadow-gray-400 py-6 lg:px-10 md:px-6 px-4 lg:m-10 md:m-6 m-4">
      <div className="flex justify-center text-3xl p-4 font-bold">
        <h1>Reading Level 1</h1>
      </div>
      <div className="flex justify-center text-2xl p-4">
        <h2>Lesson 1</h2>
      </div>
      <div className="lg:mx-10 md:mx-2">
        <div className="flex flex-row">
          <h1 className="flex-1 text-xl font-bold py-2 underline">
            Passage Div
          </h1>
          <div
            className="rounded-full bg-slate-800 hover:bg-slate-600 shadow-md shadow-slate-600
              active:shadow-none flex justify-center align-middle px-4 py-4 hover:cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
              />
            </svg>
          </div>
        </div>
        <h3 className="bg-slate-300 my-6 shadow-lg shadow-gray-600/50 rounded-md p-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat
          <br />
          <br />
          non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </h3>
      </div>
      {/* Questions Div */}
      <div className="lg:mx-10 md:mx-6 mx-4">
        <h1 className="text-xl font-bold py-2 underline">Questions:-</h1>
        <ul className="list-disc">
          <li className="my-2">
            <h3 className="font-bold"> Question 1</h3>
            <div className="my-2 flex flex-wrap gap-1">
              lorem ipsum
              <QuestionTooltip meaning={meaning}> dolor </QuestionTooltip>
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </div>
            <OptionsGroup options={options} />
          </li>
          {/* <li className="my-2">
            <h3 className="font-bold"> Question 2</h3>
            <div className="my-2 flex flex-wrap gap-1">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
              <QuestionTooltip meaning={meaning}> tempor </QuestionTooltip>
            </div>
          </li>
          <li className="my-2">
            <h3 className="font-bold"> Question 3</h3>
            <div className="my-2 flex flex-wrap gap-1">
              lorem ipsum dolor sit amet, consectetur
              <QuestionTooltip meaning={meaning}>adipiscing</QuestionTooltip>
              elit, sed do eiusmod tempor
            </div>
          </li> */}
        </ul>
      </div>
      {/* Vocab Div */}
      <div className="lg:mx-10 md:mx-6 mx-4">
        <h1 className="text-xl font-bold py-2 underline">Vocab</h1>
        <ul className="list-disc">
          <li className="my-2">
            <VocabTooltip
              meaning={meaning}
              example={[
                "Lorem ipsum dolor sit.",
                "Lorem ipsum dolor sit amet.",
                "Lorem, ipsum dolor.",
              ]}
            >
              Word 1
            </VocabTooltip>
          </li>
          <li className="my-2">
            <VocabTooltip
              meaning={meaning}
              example={[
                "Lorem ipsum dolor sit.",
                "Lorem ipsum dolor sit amet.",
                "Lorem, ipsum dolor.",
              ]}
            >
              Word 2
            </VocabTooltip>
          </li>
          <li className="my-2">
            <VocabTooltip
              meaning={meaning}
              example={[
                "Lorem ipsum dolor sit.",
                "Lorem ipsum dolor sit amet.",
                "Lorem, ipsum dolor.",
              ]}
            >
              Word 3
            </VocabTooltip>
          </li>
        </ul>
      </div>
      {/* Other Activities Div */}
      <div className="lg:mx-10 md:mx-6 mx-4">
        <h1 className="text-xl font-bold py-2 underline">Other Activities</h1>
        <ul className="list-disc">
          <li className="my-2">
            <h3 className="font-bold"> Activity 1</h3>
            <h3 className="my-2">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </h3>
          </li>
          <li className="my-2">
            <h3 className="font-bold"> Activity 2</h3>
            <h3 className="my-2">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </h3>
          </li>
        </ul>
      </div>
      {/* Buttons Div */}
      <div className="lg:mx-10 md:mx-4 mx-2">
        <div className="mt-16 flex flex-row justify-between align-middle">
          <button
            className="bg-[#405a6f] hover:bg-[#5b7d98] 
             shadow-md shadow-gray-600 active:shadow-gray-600/50 transition-all ease-in duration-100 rounded p-2
              text-lg text-gray-100 px-4"
          >
            Prev Lesson
          </button>
          <button
            className="bg-[#405a6f] hover:bg-[#5b7d98]
             shadow-md shadow-gray-600 active:shadow-gray-600/50 transition-all ease-in duration-100 rounded p-2
              text-lg text-gray-100 px-4"
          >
            Next Lesson
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
