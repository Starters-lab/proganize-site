"use client";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import ArrrowImg from "../../../public/SVG.png";
import { useState } from "react";

const plans = [
  {
    name: "Free",
    price: 0,
    description: "Ideal for users just trying to figure it out",
    features: [
      "200 Credits Per day",
      "Chat with single PDFs",
      "Basic writing assitant",
      "Generate flash card",
      "Simulate exam questions",
      "Generate Quizes",
    ],
  },
  {
    name: "Unlimited",
    price: 9.99,
    description:
      "Ideal for regular users who want uninterrupted access to all features.",
    features: [
      "Chat with Mutiple PDFs",
      "Summarize lectures (youtube link)",
      "Unlimited AI credits",
      "Advance writing assitants",
      "Unlimited Quzizes and flashcard",
      "Unlimited notes",
      "Priority support",
      "Study group",
    ],
    popular: true,
  },
];

export default function PricingToggle() {
  const [isYearly, setIsYearly] = useState(false);

  const togglePlan = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div id='pricing' className='mx-auto mt-8'>
      <div className='flex justify-center mb-8 relative'>
        <button
          onClick={togglePlan}
          className={`px-4 py-2 ${
            !isYearly ? "bg-gray-200" : "bg-white"
          } rounded-l-lg border border-gray-300`}
        >
          Pay monthly
        </button>
        <button
          onClick={togglePlan}
          className={`px-4 py-2 ${
            isYearly ? "bg-gray-200" : "bg-white"
          } rounded-r-lg border border-gray-300`}
        >
          Pay yearly
        </button>
        <div className='absolute left-[55%] mt-8'>
          <span className='text-sm font-bold text-[#2F6B62] absolute left-10 bottom-4 w-[150px] transform rotate-[20deg]'>
            50% Off
          </span>
          <Image
            src={ArrrowImg}
            alt='arrow'
            width={70}
            className='transform rotate-180 scale-y-[-1]'
          />
        </div>
      </div>
      <div className='flex justify-center gap-8 flex-wrap py-10'>
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 md:w-[400px] bg-white shadow-lg border ${
              plan.popular ? "border-[#2F6B62]" : "border-gray-100"
            } rounded-2xl relative`}
          >
            {plan.popular && (
              <div className='absolute top-0 right-0 bg-[#2F6B62] text-white rounded-tr-2xl px-3 py-1 text-sm font-bold'>
                Popular
              </div>
            )}
            <h3 className='text-3xl font-bold mb-4'>{plan.name}</h3>
            <div className='flex items-baseline mb-4'>
              <span className='text-3xl font-bold'>
                ${isYearly ? plan.price * 12 * 0.5 : plan.price}
              </span>
              <span className='text-sm text-gray-500 ml-1'>
                per {isYearly ? "year" : "month"}
              </span>
            </div>
            <p className='text-gray-600 mb-4'>{plan.description}</p>
            <Button className='w-full bg-[#2F6B62] hover:bg-[#245248] text-white py-6'>
              Get started
            </Button>
            <div className='mt-4'>
              <h4 className='font-bold mb-2 text-sm'>FEATURES</h4>
              <ul className='space-y-2 mt-4'>
                {plan.features.map((feature, i) => (
                  <li className='flex gap-2 items-center text-gray-600' key={i}>
                    <CircleCheck size={14} color='#2F6B62' />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
