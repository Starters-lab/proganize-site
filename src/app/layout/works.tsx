"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Pause } from "lucide-react";

const steps = [
  {
    title: "Choose Templates",
    description: "Choose from a variety of document templates or start fresh.",
    videoSrc:
      "https://framerusercontent.com/assets/mcPYFO5wHiAutpGrgcyTb2j9WlU.mp4",
  },
  {
    title: "Enhance with AI",
    description:
      "Customize and enhance your document with AI-powered insights.",
    videoSrc:
      "https://framerusercontent.com/assets/XTxIKH9hZo86i8qrcNMmw5nil4k.mp4",
  },
  {
    title: "Publish & Share",
    description: "Collaborate, export, or publish your document effortlessly.",
    videoSrc: "/path-to-publish-and-share-video.mp4",
  },
];

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const currentTime = video.currentTime;
      const duration = video.duration;
      setProgress((currentTime / duration) * 100);
    };

    const handleVideoEnd = () => {
      setIsPlaying(false);
      setProgress(0);
      if (currentStep < steps.length - 1) {
        playStep(currentStep + 1);
      } else {
        setCurrentStep(0);
      }
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("ended", handleVideoEnd);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [currentStep]);

  const playStep = (index: number) => {
    setCurrentStep(index);
    const video = videoRef.current;
    if (!video) return;

    video.src = steps[index].videoSrc;
    video.play();
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='w-full px-4 md:px-6 py-12'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        <div className='space-y-8'>
          {steps.map((step, index) => (
            <Card
              key={index}
              className={`p-6 flex mr-20 items-start space-x-4 relative cursor-pointer transition-all duration-300 ease-in-out ${
                currentStep === index ? "ring-8 ring-[#bf8aeb4d]" : ""
              }`}
              onClick={() => playStep(index)}
            >
              <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 relative'>
                <span className='text-lg font-bold'>{index + 1}</span>
                <svg
                  className='absolute inset-0 w-full h-full'
                  viewBox='0 0 100 100'
                >
                  <circle
                    className='text-muted-foreground'
                    strokeWidth='4'
                    stroke='currentColor'
                    fill='transparent'
                    r='48'
                    cx='50'
                    cy='50'
                  />
                  <circle
                    className='text-primary transition-all duration-300 ease-in-out'
                    strokeWidth='4'
                    stroke='#8f31e3'
                    fill='transparent'
                    r='48'
                    cx='50'
                    cy='50'
                    strokeDasharray={`${
                      currentStep === index ? progress * 3 : 0
                    }, 300`}
                    strokeDashoffset='0'
                    transform='rotate(-90 50 50)'
                  />
                </svg>
              </div>
              <div>
                <h3 className='text-xl font-bold mb-2'>{step.title}</h3>
                <p className='text-muted-foreground'>{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className='relative aspect-video rounded-xl overflow-hidden bg-muted border-[12px] md:rounded-3xl'>
          <video
            ref={videoRef}
            className='w-full h-full object-cover mx-w-[300px]'
            // src='https://framerusercontent.com/assets/mcPYFO5wHiAutpGrgcyTb2j9WlU.mp4'
            loop
            autoPlay={true}
            playsInline
          >
            Your browser does not support the video tag.
          </video>
          <div className='absolute inset-0 flex items-center justify-center'>
            <Button
              size='icon'
              variant='outline'
              className='w-16 h-16 rounded-full'
              onClick={togglePlayPause}
            >
              {isPlaying ? (
                <Pause className='h-6 w-6' />
              ) : (
                <Play className='h-6 w-6' />
              )}
              <span className='sr-only'>
                {isPlaying ? "Pause demo video" : "Play demo video"}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
