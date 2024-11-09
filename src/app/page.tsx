import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Check,
  Play,
  Zap,
  FileText,
  Users,
  Download,
  Globe,
  HeadphonesIcon,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LogoDark from "../../public/proganize-dark-side.svg";
import ChatAi from "../../public/chatai.png";
import Support from "../../public/support.png";
import Publishing from "../../public/publishing.png";
import Export from "../../public/export.png";
import Collaborate from "../../public/collaborate.png";
import Templates from "../../public/templates.png";
import HowItWorks from "./layout/works";
import Head from "next/head";
import FAQ from "./layout/faq";
import Script from "next/script";

export default function Component() {
  return (
    <>
      <Script
        defer
        src='https://cloud.umami.is/script.js'
        data-website-id='49293416-aee2-4e1b-8a50-2720bb16b965'
      />
      <div className=''>
        <header className='px-4 lg:px-6 h-16 justify-center flex items-center gap-20 sticky top-0 bg-white z-10'>
          <div>
            <Link className='flex items-center justify-between' href='#'>
              <Image src={LogoDark} alt='Proganize dark' />
            </Link>
          </div>
          <nav className='ml-auto flex gap-4 sm:gap-6 transition-transform duration-300 ease-in-out'>
            <Link
              className='text-sm font-medium hover:underline underline-offset-4 transform hover:scale-105 transition-transform duration-200'
              href='#howitworks'
            >
              How it Works
            </Link>
            <Link
              className='text-sm font-medium hover:underline underline-offset-4 transform hover:scale-105 transition-transform duration-200'
              href='#pricing'
            >
              Pricing
            </Link>
            <Link
              className='text-sm font-medium hover:underline underline-offset-4 transform hover:scale-105 transition-transform duration-200'
              href='#faq'
            >
              FAQ
            </Link>
          </nav>
          <div>
            <Button
              className='bg-primary text-primary-foreground'
              variant='default'
            >
              Go to dashboard
            </Button>
          </div>
        </header>
        <main className='w-full'>
          <section className='p-20 w-full bg-gray-100 rounded-tl-[30px] rounded-tr-[30px] mt-10'>
            <div className='container px-4 md:px-6'>
              <div className='flex flex-col items-center space-y-4 text-center'>
                <div className='space-y-2'>
                  <h1 className='text-3xl font-bold md:w-2/3 mx-auto my-10 tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                    <span className='text-[#8f31e3]'>Document Faster</span> {""}
                    Organize Smarter
                  </h1>
                  <p className='mx-auto max-w-[600px] text-muted-foreground'>
                    Proganize helps developers, designers, creators, and product
                    teams write and organize documents 10x faster, making
                    collaboration easy and efficient.
                  </p>
                </div>
                <div className='mt-20'>
                  <Button
                    className='bg-primary text-primary-foreground'
                    size='lg'
                  >
                    Start with 1,000 Free AI Words
                  </Button>
                  <div className='relative mx-auto  aspect-video rounded-xl overflow-hidden mt-20'>
                    <div className='absolute inset-0 bg-muted/40 flex items-center justify-center border'>
                      <Button
                        size='icon'
                        variant='outline'
                        className='w-12 h-12 rounded-full'
                      >
                        <Play className='h-4 w-4' />
                        <span className='sr-only'>Play demo video</span>
                      </Button>
                    </div>
                    <video
                      src='https://framerusercontent.com/assets/mcPYFO5wHiAutpGrgcyTb2j9WlU.mp4'
                      loop
                      autoPlay={true}
                      playsInline
                      className='cursor-auto w-full h-full rounded-3xl block object-cover bg-transparent object-center border-[10px] border-[#bf8aeb4d]'
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='bg-muted py-20' id='howitworks'>
            <div className='px-4 md:px-6'>
              <div className='mb-12'>
                <h1 className='text-3xl font-bold tracking-tighter text-center md:text-5xl my-10'>
                  Write a full spec doc in{" "}
                  <span className='bg-[#8f31e3] px-2 text-white -rotate-6 inline-block'>
                    5mins
                  </span>
                </h1>
                <p className='mx-auto max-w-[600px] text-muted-foreground text-center'>
                  Select from already exisitng templates, or just start with a
                  blank doc, have conversation with our AI, till you get what
                  you want
                </p>
              </div>

              <HowItWorks />
            </div>
          </section>
          <section className='w-full py-12 md:py-24 lg:py-32'>
            <div className='px-4 md:px-6'>
              <h2 className='text-3xl font-bold tracking-tighter text-center mb-12'></h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 p-4 mx-40'>
                {[
                  {
                    icon: <Zap className='h-10 w-10 mb-4 text-primary' />,
                    title: "AI-Assisted Document Generation",
                    imageSrc: ChatAi,
                    description:
                      "Create high-quality documents in record time with our advanced AI technology.",
                  },
                  {
                    icon: (
                      <FileText className='h-10 w-10 mb-4 text-[#8f31e3]' />
                    ),
                    title: "Template Selection",
                    imageSrc: Templates,
                    description:
                      "Choose from a wide range of professionally designed templates for any purpose.",
                  },
                  {
                    icon: <Users className='h-10 w-10 mb-4 text-[#8f31e3]' />,
                    title: "Collaborative Editing",
                    imageSrc: Collaborate,
                    description:
                      "Work together in real-time with your team for seamless collaboration.",
                  },
                  {
                    icon: <Download className='h-10 w-10 mb-4 text-primary' />,
                    title: "Export Options",
                    imageSrc: Export,
                    description:
                      "Export your documents in various formats including PDF and DOCX.",
                  },
                  {
                    icon: (
                      <HeadphonesIcon className='h-10 w-10 mb-4 text-[#8f31e3] ' />
                    ),
                    title: "Priority Support",
                    imageSrc: Support,
                    description:
                      "Get fast, reliable support from our expert team whenever you need it.",
                  },
                  {
                    icon: <Globe className='h-10 w-10 mb-4 text-primary' />,
                    title: "Web Publishing",
                    imageSrc: Publishing,
                    description:
                      "Share your documents online with a single click for easy access.",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      index === 1
                        ? "flex-row"
                        : "flex-col text-center items-center justify-between gap-5"
                    }  border rounded-2xl transition-transform transform hover:scale-105 ${
                      index === 1
                        ? "md:col-span-2 bg-gray-100"
                        : index === 2
                        ? "md:col-span-2 bg-gray-100"
                        : index === 5
                        ? "md:col-span-2 bg-gray-100 items-center"
                        : "bg-[#d7c2e74d]"
                    }`}
                  >
                    <div
                      className={`p-10 flex-col items-center justify-center`}
                    >
                      <h3 className='text-xl lota-bold mb-2'>
                        {feature.title}
                      </h3>
                      <p className='text-gray-600 text-sm'>
                        {feature.description}
                      </p>
                    </div>
                    <div
                      className={`${
                        index === 5
                          ? "w-[90%]"
                          : index === 3
                          ? "w-[80%]"
                          : index === 2
                          ? "w-[50%]"
                          : "w-[70%]"
                      }`}
                    >
                      <Image src={feature.imageSrc} alt={feature.title} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section
            id='pricing'
            className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted'
          >
            <div className=' px-4 md:px-6'>
              <div className='flex flex-col items-center justify-center space-y-4 text-center my-20'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Flexible Plans to Fit Your Needs
                </h2>
                <p className='max-w-[700px] text-muted-foreground md:text-sm'>
                  Choose the pricing option that suits you best—whether you need
                  occasional AI assistance or a full suite of professional
                  features. With pay-as-you-go options and our Pro plan, you
                  decide how much to invest based on your goals.
                </p>
              </div>
              <div className='mx-auto max-w-5xl mt-8'>
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
                          <span className='text-muted-foreground'>
                            per AI word
                          </span>
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
                    <div className='absolute top-0 right-0 bg-[#8f31e3] text-primary-foreground px-3 py-1 text-sm font-bold'>
                      BEST VALUE
                    </div>
                    <div className='flex flex-col h-full'>
                      <h3 className='text-2xl font-bold mb-2'>Pro Plan</h3>
                      <p className='text-muted-foreground mb-4'>
                        Full access to all features and AI-powered tools
                      </p>
                      <div className='mb-4'>
                        <div className='flex items-baseline gap-1'>
                          <span className='text-3xl font-bold'>$14.99</span>
                          <span className='text-muted-foreground'>/month</span>
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          Includes 10,000 AI words per month
                        </p>
                        <p className='text-sm font-semibold text-[#8f31e3]'>
                          20% off - Limited time offer!
                        </p>
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
                <div className='flex items-center justify-center gap-4 mt-6'>
                  <Link
                    href='#'
                    className='text-sm text-muted-foreground hover:text-primary flex items-center'
                  >
                    View all features
                    <ArrowRight className='ml-1 h-4 w-4' />
                  </Link>
                  <div className='text-muted-foreground'>|</div>
                  <Link
                    href='#'
                    className='text-sm text-muted-foreground hover:text-primary flex items-center'
                  >
                    Compare plans
                    <ExternalLink className='ml-1 h-4 w-4' />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className='w-full py-12 md:py-24 lg:py-32' id='faq'>
            <div className='px-4 md:px-6'>
              <h2 className='text-3xl font-bold tracking-tighter text-center mb-12'>
                Frequently Asked Questions
              </h2>
              <FAQ />
            </div>
          </section>
        </main>

        <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
          <p className='text-xs text-muted-foreground'>
            © 2024 Proganize. All rights reserved.
          </p>
          <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
            <Link
              className='text-xs hover:underline underline-offset-4'
              href='#'
            >
              Terms of Service
            </Link>
            <Link
              className='text-xs hover:underline underline-offset-4'
              href='#'
            >
              Privacy
            </Link>
            <Link
              className='text-xs hover:underline underline-offset-4'
              href='#'
            >
              Contact Us
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
