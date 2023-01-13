import React from "react";
import { useNavigate } from "react-router-dom";

const skills = [
  { id: "reading", title: "READING" },
  { id: "writing", title: "WRITING" },
  { id: "listening", title: "LISTENING" },
  { id: "speaking", title: "SPEAKING" },
];

const SkillsSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center py-[5rem] px-[1rem] bg-gray-100">
        <div className="p-8 rounded-md shadow-md flex flex-col items-center text-gray-600 bg-gray-200">
          <h1 className="text-2xl sm:text-3xl mb-12 font-semibold text-center">
            Improving Skills Registration
          </h1>
          <div className="w-[100%]">
            <div>
              <label className="sm:text-xl text-lg font-medium text-gray-600">
                What skill would you like to improve?
              </label>
              <fieldset className="mt-4">
                <legend className="sr-only">Skill Selection</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-5 lg:space-x-10">
                  {skills.map((skill) => (
                    <div key={skill.id} className="flex items-center">
                      <input
                        id={skill.id}
                        name="skills"
                        type="radio"
                        defaultChecked={skill.id === "email"}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={skill.id}
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        {skill.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="mt-8">
              <h1 className="sm:text-xl text-lg font-medium text-gray-600 mb-4">
                How would you like to start your levels?
              </h1>{" "}
              <button
                type="button"
                onClick={() => {
                  navigate("/callcoach");
                }}
                className="block w-[15rem] items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Request a coach guidance
              </button>
              <button
                type="button"
                className="block mt-2 w-[15rem] items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => {
                  navigate("/testcards");
                }}
              >
                Choose Manually
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
