import React from "react";

const OptionsGroup = (props: any) => {
  return (
    <div>
      <div>
        <fieldset className="mt-4">
          <legend className="sr-only">Notification method</legend>
          <div className="space-y-4">
            {props.options.map((option: any) => (
              <div key={option.id} className="flex items-center">
                <input
                  id={option.id}
                  name={option.title}
                  type="radio"
                  defaultChecked={option.id === "email"}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor={option.id}
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  {option.title}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default OptionsGroup;
