import React from "react";
import TestCard from "../components/atoms/TestCard";

const DUMMY_DATA = [
  {
    cardHeaderText: "Reading Level 1",
    offer1: "10 Lessons",
    offer1_price: "SAR 100",
    offer2: "2 Lessons",
    offer2_price: "SAR 20",
    progress: 50,
    lottie: "https://assets9.lottiefiles.com/packages/lf20_bnxoocv2.json",
  },
  {
    cardHeaderText: "Reading Level 2",
    offer1: "10 Lessons",
    offer1_price: "SAR 150",
    offer2: "2 Lessons",
    offer2_price: "SAR 25",
    progress: 30,
    lottie: "https://assets9.lottiefiles.com/packages/lf20_4rq0nvpt.json",
  },
  {
    cardHeaderText: "Reading Level 3",
    offer1: "10 Lessons",
    offer1_price: "SAR 100",
    offer2: "2 Lessons",
    offer2_price: "SAR 20",
    progress: 70,
    lottie: "https://assets9.lottiefiles.com/packages/lf20_bnxoocv2.json",
  },
  {
    cardHeaderText: "Reading Level 4",
    offer1: "10 Lessons",
    offer1_price: "SAR 200",
    offer2: "2 Lessons",
    offer2_price: "SAR 40",
    progress: 40,
    lottie: "https://assets9.lottiefiles.com/packages/lf20_4rq0nvpt.json",
  },
  {
    cardHeaderText: "Reading Level 5",
    offer1: "10 Lessons",
    offer1_price: "SAR 100",
    offer2: "2 Lessons",
    offer2_price: "SAR 20",
    progress: 70,
    lottie: "https://assets9.lottiefiles.com/packages/lf20_bnxoocv2.json",
  },
  {
    cardHeaderText: "Reading Level 6",
    offer1: "10 Lessons",
    offer1_price: "SAR 200",
    offer2: "2 Lessons",
    offer2_price: "SAR 40",
    progress: 40,
    lottie: "https://assets9.lottiefiles.com/packages/lf20_4rq0nvpt.json",
  },
];
const TestCardsPage: React.FC = () => (
  <div
    className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-16 p-10 bg-slate-100 
  drop-shadow-lg shadow-black"
  >
    {DUMMY_DATA.map((data, index) => (
      <TestCard
        key={index}
        cardHeaderText={data.cardHeaderText}
        offer1={data.offer1}
        offer1_price={data.offer1_price}
        offer2={data.offer2}
        offer2_price={data.offer2_price}
        progress={data.progress}
        lottie={data.lottie}
      />
    ))}
  </div>
);

export default TestCardsPage;
