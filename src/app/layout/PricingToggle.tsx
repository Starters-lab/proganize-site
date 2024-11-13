"use client";
import { useState } from "react";
import { Check, ArrowRight, GiftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function PricingToggle() {
  const [isYearly, setIsYearly] = useState(false);

  const monthlyPrice = 14.99;
  const yearlyDiscount = 0.5; // 50% discount for yearly plan
  const monthlyDiscount = 0.2; // 20% discount for monthly plan

  const discountedMonthlyPrice = (monthlyPrice * (1 - monthlyDiscount)).toFixed(
    2
  );
  const yearlyPrice = (monthlyPrice * 12).toFixed(2);
  const discountedYearlyPrice = (
    monthlyPrice *
    12 *
    (1 - yearlyDiscount)
  ).toFixed(2);

  const togglePlan = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className='mx-auto max-w-5xl mt-8'>
      <div className='flex justify-center'>
        <button
          onClick={togglePlan}
          className={`px-4 py-2 ${
            !isYearly ? "bg-gray-200" : "bg-white"
          } rounded-l-lg`}
        >
          Pay monthly{" "}
        </button>
        <button
          onClick={togglePlan}
          className={`px-4 py-2 ${
            isYearly ? "bg-gray-200" : "bg-white"
          } rounded-r-lg`}
        >
          Pay yearly{" "}
        </button>
      </div>
      <div className='flex justify-center items-center text-green-700 mb-8 mt-3'>
        <div>
          <GiftIcon />
        </div>
        <p className='text-sm ml-2'>
          {isYearly ? "50" : "20"}% off for the first 50 customers ({49} left)
        </p>
      </div>
      <div className='grid gap-8 md:grid-cols-2'>
        <Card className='p-8 bg-card/50 backdrop-blur-sm'>
          <div className='flex flex-col h-full'>
            <h3 className='text-2xl font-bold mb-2'>Pay As You Go</h3>
            <p className='text-muted-foreground mb-4'>
              Perfect for occasional use or small projects
            </p>
            <div className='mb-4'>
              <div className='flex items-baseline gap-1'>
                <span className='text-3xl font-bold'>$0.002</span>
                <span className='text-muted-foreground'>per AI word</span>
              </div>
              <p className='text-sm text-muted-foreground'>
                No monthly commitment
              </p>
            </div>
            <ul className='space-y-2 mb-6 flex-grow'>
              <li className='flex items-center'>
                <Check className='h-4 w-4 mr-2 text-primary' />
                <span>Basic AI document generation</span>
              </li>
              <li className='flex items-center'>
                <Check className='h-4 w-4 mr-2 text-primary' />
                <span>Access to standard templates</span>
              </li>
              <li className='flex items-center'>
                <Check className='h-4 w-4 mr-2 text-primary' />
                <span>Export to PDF and DOCX</span>
              </li>
            </ul>
            <Button className='w-full' variant='outline'>
              Start for free
            </Button>
          </div>
        </Card>
        <Card className='p-8 bg-card/50 backdrop-blur-sm border-[#bf8aeb4d] relative overflow-hidden'>
          <div className='absolute rounded-bl-lg top-0 right-0 bg-[#d7c2e74d] text-black px-3 py-1 text-sm font-bold'>
            BEST VALUE
          </div>
          <div className='flex flex-col h-full'>
            <h3 className='text-2xl font-bold mb-2'>Pro Plan</h3>
            <p className='text-muted-foreground mb-4'>
              Full access to all features and AI-powered tools
            </p>
            <div className='mb-4'>
              <div className='flex items-baseline gap-1'>
                <span className='text-3xl '>
                  {isYearly ? (
                    <>
                      <span className='line-through text-gray-500'>
                        ${yearlyPrice}
                      </span>{" "}
                      <span className='font-bold'>
                        ${discountedYearlyPrice}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className='line-through text-gray-500'>
                        ${monthlyPrice}
                      </span>{" "}
                      <span className='font-bold'>
                        ${discountedMonthlyPrice}
                      </span>
                    </>
                  )}
                </span>
                <span className='text-muted-foreground'>
                  /{isYearly ? "year" : "month"}
                </span>
              </div>
              <p className='text-sm text-muted-foreground'>
                Includes 10,000 AI words per {isYearly ? "year" : "month"}
              </p>
              {isYearly && (
                <p className='text-sm font-semibold text-[#8f31e3]'>
                  50% off - Limited time offer for the first 50 customers!
                </p>
              )}
            </div>
            <ul className='space-y-2 mb-6 flex-grow'>
              <li className='flex items-center'>
                <Check className='h-4 w-4 mr-2 text-primary' />
                <span>Advanced AI document generation</span>
              </li>
              <li className='flex items-center'>
                <Check className='h-4 w-4 mr-2 text-primary' />
                <span>Unlimited team collaboration</span>
              </li>
              <li className='flex items-center'>
                <Check className='h-4 w-4 mr-2 text-primary' />
                <span>Premium templates</span>
              </li>
              <li className='flex items-center'>
                <Check className='h-4 w-4 mr-2 text-primary' />
                <span>Priority support</span>
              </li>
              <li className='flex items-center'>
                <Check className='h-4 w-4 mr-2 text-primary' />
                <span>Advanced export options</span>
              </li>
            </ul>
            <Button className='w-full'>
              Start with pro
              <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
