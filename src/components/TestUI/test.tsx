import React from "react";

import ReadingType from "./readingType";
import WritingType from "./writingType";
import ParagraphType from "./paragraphType";

const Test = () => {
  const [questionType, setQuestionType] = React.useState("reading");
  const [timer, setTimer] = React.useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [timerOn, setTimerOn] = React.useState(false);
  const activeClass = "";
  const handleTimer = () => {
    if (timerOn) {
      if (timer.seconds === 59) {
        setTimer({
          ...timer,
          minutes: timer.minutes + 1,
          seconds: 0,
        });
      } else if (timer.minutes === 59) {
        setTimer({
          ...timer,
          hours: timer.hours + 1,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimer({
          ...timer,
          seconds: timer.seconds + 1,
        });
      }
    }
  };

  React.useEffect(() => {
    let interval: any = null;
    interval = setInterval(handleTimer, 1000);
    return () => clearInterval(interval);
  }, [timerOn, timer]);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between pt-2">
        <div className="flex p-2 justify-center">
          <span className="isolate inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              onClick={() => setQuestionType("reading")}
            >
              Reading
            </button>
            <button
              type="button"
              className="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              onClick={() => setQuestionType("writing")}
            >
              Writing
            </button>
            <button
              type="button"
              className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              onClick={() => setQuestionType("paragraph")}
            >
              Listening
            </button>
          </span>
        </div>
        <div className="flex p-2 justify-center">
          {timerOn ? (
            <>
              <span className="isolate inline-flex rounded-md shadow-sm">
                {/* <button
                  type="button"
                  className="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  onClick={() => {
                    setTimerOn(false);
                    setTimer({
                      hours: 0,
                      minutes: 0,
                      seconds: 0,
                    });
                  }}
                >
                  Stop Timer
                </button> */}
                <button
                  type="button"
                  className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  {timer.hours < 10 ? `0${timer.hours}` : timer.hours}:
                  {timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes}:
                  {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
                </button>
              </span>
            </>
          ) : (
            <>
              <span className="isolate inline-flex rounded-md shadow-sm">
                {/* <button
                  type="button"
                  className="relative -ml-px inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  onClick={() => setTimerOn(true)}
                >
                  Start Timer
                </button> */}
                <button
                  type="button"
                  className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  {timer.hours < 10 ? `0${timer.hours}` : timer.hours}:
                  {timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes}:
                  {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
                </button>
              </span>
            </>
          )}
        </div>
      </div>

      {questionType === "reading" && <ReadingType />}
      {questionType === "writing" && <WritingType />}
      {questionType === "paragraph" && <ParagraphType />}
    </div>
  );
};

export default Test;
