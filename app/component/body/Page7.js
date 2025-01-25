"use client";

import React, { useState } from "react";

const Page7 = () => {
  const [activeButtons, setActiveButtons] = useState([1]); // Track active buttons

  const handleToggle = (buttonId) => {
    setActiveButtons((prevState) =>
      prevState.includes(buttonId)
        ? prevState.filter((id) => id !== buttonId) // Remove if active
        : [...prevState, buttonId] // Add if not active
    );
  };

  const faqs = [
    { id: 1, question: "What are the benefits of 3D concrete printing?", answer: "3D concrete printing is a process of creating three-dimensional <br/> objects made of concrete using a specialized 3D printer." },
    { id: 2, question: "What is 3D concrete printing?", answer: "3D concrete printing is a process of creating three-dimensional objects made of concrete using a specialized 3D printer." },
    { id: 3, question: "How does 3D concrete printing work?", answer: "It involves layering concrete through a controlled nozzle guided by a 3D design." },
    { id: 4, question: "What materials can be used in 3D concrete printing?", answer: "Specialized concrete mixes designed for 3D printing, often with additives to improve workability." },
    { id: 5, question: "What are the applications of 3D concrete printing?", answer: "Applications include construction of homes, bridges, and artistic designs in architecture." },
    { id: 6, question: "How does 3D concrete printing differ from traditional concrete construction methods?", answer: "Applications include construction of homes, bridges, and artistic designs in architecture." },
    { id: 7, question: "What are some examples of 3D concrete printing projects?", answer: "Applications include construction of homes, bridges, and artistic designs in architecture." },
    { id: 8, question: "What is the future of 3D concrete printing?", answer: "Applications include construction of homes, bridges, and artistic designs in architecture." },
  ];

  return (
    <div className="bg-[#0C0C0C] py-[40px] sm:py-[50px] lg:py-[70px] 2xl:py-[100px]">
      <div className="container mx-auto px-[24px] md:px-[0]">
        <h2 className="!text-center catagroyimage !leading-[130%] mb-[25px] md:mb-[33px] lg:mb-[44px] xl:mb-[55px] 2xl:mb-[64px]">
          Frequently <span className="font-[600]">Asked Questions</span>
        </h2>
        <div className="flex flex-col gap-[10px] lg:gap-[16px]">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`togglebarbackground w-full flex-col divide-y divide-[#FAF1F1] duration-300 ${
                activeButtons.includes(faq.id)
                  ? "divide-y bg-[#FFFCFB]"
                  : "divide-none bg-[#151515]"
              }`}
              onClick={() => handleToggle(faq.id)}
            >
              <div className="flex justify-between items-center w-full usingconstoem cursor-pointer">
                <h3
                  className={`dcontretee w-[70%] md:w-full ${
                    activeButtons.includes(faq.id)
                      ? "text-[#23201F]"
                      : " text-[#FFFCFB]"
                  }`}
                >
                  {faq.question}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  {activeButtons.includes(faq.id) ? (
                    <path
                      d="M24 19.9999C24 19.9999 18.1081 12 16 12C13.8917 12 8 20 8 20"
                      stroke="#141B34"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ) : (
                    <path
                      d="M24 12.0001C24 12.0001 18.1081 20 16 20C13.8917 20 8 12 8 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}
                </svg>

              </div>
              <p
                className={`specialized w-full ${
                  activeButtons.includes(faq.id)
                    ? "h-full block"
                    : "h-0 hidden"
                }`}
              >
                3D concrete printing is a process of creating three-dimensional <br/> objects made of concrete using a specialized 3D printer.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page7;
