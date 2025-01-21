"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='max-w-4xl mx-auto space-y-4'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold tracking-tighter text-center md:text-5xl my-10'>
          Frequently Asked Questions
        </h1>
        <p className='text-muted-foreground'>
          For any other questions, please feel free to contact us.
        </p>
      </div>
      {[
        {
          q: "What is Proganize, and how does it help students?",
          a: "Proganize is a tool designed to help students organize their study materials and collaborate effectively.",
        },
        {
          q: "What's the difference between the subscription plan and the pay-as-you-go option?",
          a: "The subscription plan offers unlimited access, while the pay-as-you-go option allows you to purchase credits as needed.",
        },
        {
          q: "How does the chat with PDFs feature work?",
          a: "You can upload PDFs and chat with the content to extract information and insights.",
        },
        {
          q: "Can Proganize help me write my research papers or thesis?",
          a: "Yes, Proganize offers tools to assist in writing and organizing your research papers or thesis.",
        },
        {
          q: "Is Proganize suitable for all levels of students?",
          a: "Proganize is designed to be useful for students at all levels, from high school to university.",
        },
      ].map((faq, index) => (
        <div key={index} className='p-4'>
          <div
            className='flex justify-between items-center cursor-pointer border-b pb-4'
            onClick={() => toggleAccordion(index)}
          >
            <h3 className='text-lg font-medium'>{faq.q}</h3>
            <ChevronDown
              className={`transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-300 ${
              activeIndex === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <p className='text-muted-foreground mt-4'>{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
