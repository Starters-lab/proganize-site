"use client";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='max-w-2xl mx-auto space-y-4'>
      {[
        {
          q: "What is an AI word?",
          a: "AI words are units of text generation using our advanced AI system. Each word generated counts towards your plan's limit.",
        },
        {
          q: "Can I switch between plans?",
          a: "Yes, you can switch between the Pay As You Go and Pro plans at any time. Unused words from Pay As You Go purchases never expire.",
        },
        {
          q: "How does collaboration work?",
          a: "Pro plan users can invite unlimited collaborators to their documents. Each collaborator can view and edit documents in real-time.",
        },
      ].map((faq, index) => (
        <Card key={index} className='p-6'>
          <div
            className='flex justify-between items-center cursor-pointer'
            onClick={() => toggleAccordion(index)}
          >
            <h3 className='text-xl font-bold mb-2'>{faq.q}</h3>
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
            <p className='text-muted-foreground'>{faq.a}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
