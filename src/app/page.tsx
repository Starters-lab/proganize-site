import { Button } from "@/components/ui/button";

import {
  Zap,
  FileText,
  Users,
  Download,
  Globe,
  HeadphonesIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ChatAi from "../../public/chatai.png";
import Support from "../../public/support.png";
import Publishing from "../../public/publishing.png";
import Export from "../../public/export.png";
import Collaborate from "../../public/collaborate.png";
import Templates from "../../public/templates.png";
import HowItWorks from "./layout/works";
import FAQ from "./layout/faq";
import Script from "next/script";
import VideoHome from "./layout/video";
import Heading from "./layout/nav";
import Head from "next/head";
import PricingToggle from "./layout/PricingToggle";

export default function Component() {
  return (
    <>
      <Head>
        <meta property='og:image' content='../../public/socialscreen.png' />
        <meta
          property='og:title'
          content='Proganize - Streamlined Document Creation & Collaboration for High-Performing Teams'
        />
        <meta property='og:description' content='Your page description here.' />
        <meta
          name='twitter:card'
          content='Proganize - Streamlined Document Creation & Collaboration for High-Performing Teams'
        />
        <meta name='twitter:image' content='../../public/socialscreen.png' />
      </Head>
      <Script
        async
        defer
        src='https://cloud.umami.is/script.js'
        data-website-id='49293416-aee2-4e1b-8a50-2720bb16b965'
      />
      <div className=''>
        <Heading />
        <main className='w-full'>
          <section className='md:p-20 px-4 w-full bg-gray-100 rounded-tl-[30px] rounded-tr-[30px] mt-10'>
            <div className='px-4 md:px-6'>
              <div className='flex flex-col items-center space-y-4 text-center'>
                <div className='space-y-2'>
                  <h1 className='text-5xl font-bold md:w-2/3 mx-auto my-10 tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                    <span className='text-[#8f31e3] block md:inline'>
                      Document Faster
                    </span>{" "}
                    {""}
                    Organize Smarter
                  </h1>
                  <p className='mx-auto md:max-w-[600px] text-muted-foreground'>
                    Proganize helps developers, designers, creators, and product
                    teams write and organize documents 10x faster, making
                    collaboration easy and efficient.
                  </p>
                </div>
                <div className='mt-20'>
                  <Link href={`${process.env.APP_URL}`}>
                    <Button
                      className='bg-primary text-primary-foreground'
                      size='lg'
                    >
                      Start with 1,000 Free AI Words
                    </Button>
                  </Link>
                </div>
                <a
                  href='https://www.producthunt.com/posts/proganize?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-proganize'
                  target='_blank'
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=606755&theme=light'
                    alt='Proganize - Write&#0032;documents&#0032;10X&#0032;faster&#0044;&#0032;organize&#0032;smarter—with&#0032;AI&#0046; | Product Hunt'
                    style={{ width: "150px", height: "54px" }}
                    width='250'
                    height='54'
                  />
                </a>
                <VideoHome />
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
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 p-4 md:mx-40'>
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
              <PricingToggle />
            </div>
          </section>
          <section className='w-full  py-12 md:py-24 lg:py-32' id='faq'>
            <div className='px-4 md:px-6'>
              <h2 className='text-3xl font-bold tracking-tighter text-center mb-12'>
                Frequently Asked Questions
              </h2>
              <FAQ />
            </div>
            <div className='flex items-start justify-center my-10'></div>
          </section>
        </main>

        <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
          <p className='text-xs text-muted-foreground'>
            © 2024 Proganize. All rights reserved.
          </p>
          <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
            <Link
              className='text-xs hover:underline underline-offset-4'
              href='/privacy-terms'
            >
              Terms of Service
            </Link>
            <Link
              className='text-xs hover:underline underline-offset-4'
              href='/privacy-terms'
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
