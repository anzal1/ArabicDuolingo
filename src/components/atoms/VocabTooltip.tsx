import React, { ReactNode } from "react";
import { Tooltip } from "flowbite-react";

const VocabTooltip: React.FC<{
  children?: ReactNode;
  meaning: string;
  example: string[];
}> = ({ children, meaning, example }) => {
  return (
    <Tooltip
      className="mx-8"
      content={
        <div className="flex flex-col p-1">
          <h1 className="flex justify-center text-xl font-bold">{children}</h1>
          <hr className="my-2" />
          <div className="flex flex-col gap-1">
            <h1 className="text-lg">Meaning :- </h1> {meaning}
          </div>
          <hr className="my-2" />
          <div className="flex flex-col gap-1">
            <h1 className="text-lg">Examples :- </h1>
            <ul className="list-disc ml-4">
              {example.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      }
    >
      <strong>{children}</strong>
    </Tooltip>
  );
};

export default VocabTooltip;
