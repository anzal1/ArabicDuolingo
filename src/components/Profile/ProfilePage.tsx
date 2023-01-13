import React from "react";
import { useNavigate } from "react-router-dom";

const languageLevels = [
  { id: "starter", title: "Starter" },
  { id: "medium", title: "Medium" },
  { id: "advanced", title: "Advanced" },
];

const tests = [
  { id: "tofel", title: "TOFEL" },
  { id: "ielts", title: "IELTS" },
  { id: "step", title: "STEP" },
  { id: "pther", title: "OTHER" },
];

const stats = [
  { name: "Reading", stat: "150" },
  { name: "Writing", stat: "120" },
  { name: "Listening", stat: "130" },
  { name: "Speaking", stat: "140" },
];

const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center py-[5rem] px-[1rem] bg-gray-100">
        <div className=" p-8 rounded-md shadow-md flex flex-col items-center text-gray-600 bg-gray-200">
          <h1 className="text-2xl sm:text-3xl mb-12 font-semibold text-center">
            Registration Page to take the test and call your coach.
          </h1>
          <div className="w-[100%]">
            <div>
              <label className="sm:text-xl text-lg font-medium text-gray-600">
                What do you think your level is?
              </label>
              <p className="text-sm leading-5 text-gray-500">
                Tell us about your proficiency in the language that you are
                learning.
              </p>
              <fieldset className="mt-4">
                <legend className="sr-only">Language Level</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  {languageLevels.map((language) => (
                    <div key={language.id} className="flex items-center">
                      <input
                        id={language.id}
                        name="language-level"
                        type="radio"
                        defaultChecked={language.id === "email"}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={language.id}
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        {language.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
            <div className="mt-8">
              <label className="sm:text-xl text-lg font-medium text-gray-600">
                Have you taken any previous tests?
              </label>
              <p className="text-sm leading-5 text-gray-500">
                If any, please describe your experience.
              </p>
              <fieldset className="mt-4">
                <legend className="sr-only">Tests</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  {tests.map((test) => (
                    <div key={test.id} className="flex items-center">
                      <input
                        id={test.id}
                        name="tests"
                        type="radio"
                        defaultChecked={test.id === "email"}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={test.id}
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        {test.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
            <div className="mt-16">
              <h3 className="text-2xl font-medium leading-6 text-gray-900">
                Scores
              </h3>
              <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {stats.map((item) => (
                  <div
                    key={item.name}
                    className="overflow-hidden rounded-lg bg-white px-4 py-2 shadow sm:p-6"
                  >
                    <dt className="truncate text-sm font-medium text-gray-500">
                      {item.name}
                    </dt>
                    <dd className="mt-1 text-xl font-semibold tracking-tight text-gray-900">
                      {item.stat}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-8">
              {" "}
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-6 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Save
              </button>
              <button
                type="button"
                className="inline-flex ml-4 items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => {
                  navigate("/test");
                }}
              >
                Take The Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
