"use client";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useRef } from "react";

export default function VideoHome({ isPdfPage }: { isPdfPage?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoUrl = isPdfPage
    ? "http://res.cloudinary.com/dzly4w0dp/video/upload/v1735570510/Proganize/k2etq3nzdbrcrmw5ivpd.mov"
    : "https://res.cloudinary.com/dzly4w0dp/video/upload/v1731234105/Proganize/sn9lncsetqxrrbwzdzsq.mp4";

  const handlePlayButtonClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className='relative mx-auto  aspect-video rounded-xl overflow-hidden mt-20'>
      <div className='absolute inset-0 bg-muted/40 flex items-center justify-center border'>
        <Button
          size='icon'
          variant='outline'
          className='w-12 h-12 rounded-full'
          onClick={handlePlayButtonClick} // Added onClick event
        >
          <Play className='h-4 w-4' />
          <span className='sr-only'>Play demo video</span>
        </Button>
      </div>
      <video
        ref={videoRef} // Added ref to the video element
        src={videoUrl}
        loop
        autoPlay
        playsInline
        preload='auto'
        muted
        className='cursor-auto w-full h-full rounded-3xl block object-cover bg-transparent object-center border-[10px] border-[#bf8aeb4d]'
      ></video>
    </div>
  );
}
