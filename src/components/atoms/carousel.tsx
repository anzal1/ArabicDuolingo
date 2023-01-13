import React from "react";
import { Carousel } from "flowbite-react";
import engimg from "../../images/english.jpg";
import frimg from "../../images/france.jpg";
import rusimg from "../../images/russia.jpg";
import gerimg from "../../images/german.jpg";
import canimg from "../../images/canada.jpg";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
const CarouselSlider = () => {
  return (
    <div className=" h-80 sm:h-96 xl:h-[60vh] rounded-none pb-20">
      <Carousel
        leftControl={
          <>
            <div className="h-10 w-10 rounded-full bg-gray-300">
              <ChevronLeftIcon />
            </div>
          </>
        }
        rightControl={
          <>
            <div className="h-10 w-10 rounded-full bg-gray-300">
              <ChevronRightIcon />
            </div>
          </>
        }
      >
        <div className="md:w-[70%] lg:w-[50%] h-[100%] pb-4 bg-[#f9fafb]">
          <img
            src={engimg}
            alt="..."
            className="rounded-md h-[100%] w-[100%] shadow-lg"
          />
        </div>
        <div className="md:w-[70%] lg:w-[50%] h-[100%] pb-4 bg-[#f9fafb]">
          <img
            src={frimg}
            alt="..."
            className="rounded-md shadow-lg h-[100%] w-[100%]"
          />
        </div>
        <div className="md:w-[70%] lg:w-[50%] h-[100%] pb-4 bg-[#f9fafb]">
          <img
            src={rusimg}
            alt="..."
            className="rounded-md h-[100%] w-[100%] shadow-lg"
          />
        </div>
        <div className="md:w-[70%] lg:w-[50%] h-[100%] pb-4 bg-[#f9fafb]">
          <img
            src={gerimg}
            alt="..."
            className="rounded-md h-[100%] w-[100%] shadow-lg"
          />
        </div>
        <div className="md:w-[70%] lg:w-[50%] h-[100%] pb-4 bg-[#f9fafb]">
          <img
            src={canimg}
            alt="..."
            className="rounded-md h-[100%] w-[100%] shadow-lg"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
