// FAQ.jsx
import { div } from "framer-motion/client";
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which question is open

  const questions = [
    {
      question: "What are the steps involved in the process of renting?",
      answer:
        "You can choose a product, complete KYC verification, pay the deposit, and schedule delivery."
    },
    {
      question: "What kind of charges will be deducted from the deposit?",
      answer:
        "Security deposit deductions depend on the product condition at the time of return."
    },
    {
      question: "How long does it take for delivery?",
      answer: "Standard delivery takes 2-5 business days depending on location."
    }
    // Add more as needed...
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close state
  };

  const Plus = () =>{
    return (
    <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black text-black" >
        +
    </div>

    )
  }
  const Minus = () =>{
    return(
    <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black text-black" >
        -
    </div>
        
    )
  }
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Questions & Answers</h2>
      <div className="space-y-2 ">
        {questions.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-2 bg-gray-100"
          >
            <div
              className="flex justify-between items-center cursor-pointer py-2"
              onClick={() => toggleAnswer(index)}
            >
              <h4 className="text-md font-semibold">{item.question}</h4>
              <span className="text-xl">
                {openIndex === index ? <Minus/> : <Plus/>}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-gray-600 mt-1">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
