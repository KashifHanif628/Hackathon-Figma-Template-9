"use client";

import React from "react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do we serve food?",
      answer:
        "We serve high-quality food to ensure you have a wonderful experience.",
    },
    {
      question: "How can we get in touch with you?",
      answer:
        "You can contact us via our website or helpline for any assistance.",
    },
    {
      question: "How is our food quality?",
      answer: "Our food quality is top-notch, and we use fresh ingredients.",
    },
    {
      question: "What will be delivered? And when?",
      answer: "Yes, delivery is timely and consistent with your order details.",
    },
    {
      question: "How do we give home delivery?",
      answer: "Our Riders will deliver your order at your door-steps. ",
    },
    {
      question: "Is this restaurant 24 hours open?",
      answer: "Yes, absolutely. We are open 24/7",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[1320px] h-[702px] mt-[530px] ml-[305px]">
      <section className="max-w-4xl mx-auto p-4">
        <h1 className="text-[48px] leading-[56px] text-[#333333] font-bold text-center mb-4">
        Questions Looks Here
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Here are answers to some of the most frequently asked questions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-28">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-200 shadow rounded-lg p-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-lg font-medium">{faq.question}</h2>
                <span className="text-2xl font-bold">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
