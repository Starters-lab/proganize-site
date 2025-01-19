import { Button } from "@/components/ui/button";
import LogoDark from "../../public/proganize-dark-side.svg";
import {
  Globe,
  Inbox,
  BookMarked,
  SparkleIcon,
  CheckCircle,
  Book,
  WalletCards,
  Brain,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Mit from "../../public/MIT.avif";
import Oxford from "../../public/Oxford.avif";
import Cambridge from "../../public/Cambirdge.avif";
import Penn from "../../public/Penn.avif";
import Standford from "../../public/Stanford.avif";
import FAQ from "./layout/faq";
import Script from "next/script";
import VideoHome from "./layout/video";
import Heading from "./layout/nav";
import Head from "next/head";
import PricingToggle from "./layout/PricingToggle";
import Testimonials from "./layout/testimonials";
import Footer from "./layout/footer";

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
          <section className='md:p-20 px-4 w-full bg-gray-100'>
            <div className='container mx-auto md:pt-20 pt-32'>
              <div className='flex flex-col items-center space-y-4 text-center'>
                <div className='space-y-6 max-w-3xl'>
                  <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl'>
                    Meet Your AI Study
                    <br />
                    Companion for Life
                  </h1>
                  <p className='mx-auto text-lg text-muted-foreground md:text-xl'>
                    Transform the way you study with AI-powered tools that
                    simplify learning. Create quizzes, flashcards, and study
                    aids from your materials, topics, or lectures—all in
                    minutes.
                  </p>
                </div>
                <div className='mt-8'>
                  <Link href={`${process.env.APP_URL}`}>
                    <Button
                      className='bg-[#2F6B62] hover:bg-[#245248] text-white text-lg py-6 px-8'
                      size='lg'
                    >
                      Try for free
                    </Button>
                  </Link>
                </div>
                <div className='w-full max-w-full mt-16'>
                  <VideoHome />
                </div>
              </div>
            </div>
          </section>
          <section className='py-12 bg-gray-100'>
            <div className='container mx-auto text-center'>
              <h2 className='text-xl font-semibold mb-8'>
                Trusted by 1,000+ students and professionals
              </h2>
              <div className='flex justify-center items-center space-x-8'>
                {[
                  { name: "MIT", src: Mit },
                  { name: "Oxford", src: Oxford },
                  { name: "Standford", src: Standford },
                  { name: "Penn", src: Penn },
                  { name: "Cambridge", src: Cambridge },
                ].map((company, index) => (
                  <div
                    key={index}
                    className='grayscale hover:grayscale-0 transition duration-300'
                  >
                    <Image
                      src={company.src}
                      alt={company.name}
                      width={100} // Adjust width as needed
                      height={50} // Adjust height as needed
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className='md:p-20 px-4 w-full bg-gray-100'>
            <div className='container mx-auto md:pt-20 pt-32'>
              <div className='flex flex-col items-center space-y-4 text-center'>
                <div className='space-y-6 max-w-3xl'>
                  <h2 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
                    Say Goodbye to 18-Hour <br /> Study Marathons
                  </h2>
                  <p className='mx-auto text-lg text-gray-600 md:text-xl'>
                    Stop wasting hours slogging through textbooks, endless
                    notes, and lectures.
                    <br />
                    Proganize streamlines your study process, helping you retain
                    more in less time.
                  </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 p-4 md:mx-40'>
                  {[
                    {
                      icon: <Book className='h-10 w-10 mb-4 text-[#2F6B62]' />,
                      title: "Chat with PDFs",
                      description:
                        "Talk to any document—get summaries, analyses, and instant insights.",
                    },
                    {
                      icon: (
                        <WalletCards className='h-10 w-10 mb-4 text-[#2F6B62]' />
                      ),
                      title: "Flashcards",
                      description:
                        "Automatically generate flashcards from your materials for faster",
                    },
                    {
                      icon: <Brain className='h-10 w-10 mb-4 text-[#2F6B62]' />,
                      title: "Quiz Generator",
                      description:
                        "Create topic-specific quizzes with instant answers to sharpen your knowledge.",
                    },
                    {
                      icon: <Globe className='h-10 w-10 mb-4 text-[#2F6B62]' />,
                      title: "AI Examiner",
                      description:
                        "Simulate tests from lectures and study materials to stay ahead of the curve.",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className={`group relative flex flex-col text-center items-center justify-between gap-5 
              border rounded-2xl transition-all duration-300 bg-white
              hover:bg-gradient-to-br hover:from-[#2F6B62]/10 hover:to-transparent
              ${index === 1 || index === 2 ? "md:col-span-2" : ""}`}
                    >
                      <div className='p-10 flex-col items-center justify-center'>
                        {feature.icon}
                        <h3 className='text-xl font-semibold mb-2'>
                          {feature.title}
                        </h3>
                        <p className='text-gray-600 text-sm'>
                          {feature.description}
                        </p>
                      </div>

                      <div
                        className='absolute bottom-4 left-0 right-0 opacity-0 transform translate-y-2 
                        transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0'
                      >
                        <Link
                          href={`/features/${feature.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          <Button
                            className='bg-[#2F6B62] hover:bg-[#245248] text-white'
                            size='sm'
                          >
                            Learn More
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className='bg-muted py-20' id='howitworks'>
            <div className='px-4 md:px-6'>
              <div className='mb-12'>
                <h1 className='text-3xl font-bold tracking-tighter text-center md:text-5xl my-10'>
                  Up your research by a thousand miles
                </h1>
                <p className='mx-auto max-w-[600px] text-muted-foreground text-center'>
                  Proganize is your writing assistant for research papers,
                  thesis projects, or even essay assignments. Stop struggling
                  and let AI do the heavy lifting.
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
                {[
                  {
                    icon: <SparkleIcon size={20} color='#2F6B62' />,
                    title: "In-text Citations",
                    description:
                      "Generate detailed outlines for essays, research papers, and thesis projects.",
                    image: "/path-to-image.png",
                  },
                  {
                    icon: <CheckCircle size={20} color='#2F6B62' />,
                    title: "AI Autocomplete",
                    description:
                      "Convert articles or documents into concise summaries and key takeaways.",
                    image: "/path-to-image.png",
                  },
                  {
                    icon: <Inbox size={20} color='#2F6B62' />,
                    title: "Chat to Your Research",
                    description:
                      "Create citations and bibliographies in seconds for any format—APA, MLA, and more.",
                    image: "/path-to-image.png",
                  },
                  {
                    icon: <BookMarked size={20} color='#2F6B62' />,
                    title: "Generate From Your Files",
                    description: "You can import your own components!",
                    image: "/path-to-image.png",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300'
                  >
                    <div className='mb-6'>
                      <div className='flex items-center gap-3 mb-4'>
                        {feature.icon}
                        <h3 className='text-xl font-semibold'>
                          {feature.title}
                        </h3>
                      </div>
                      <p className='text-gray-600'>{feature.description}</p>
                    </div>

                    <div className='relative w-full h-[200px] bg-gray-100 border-[] rounded-lg overflow-hidden'>
                      <VideoHome />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <Testimonials />
          <section
            id='pricing'
            className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted'
          >
            <div className='px-4 md:px-6'>
              <div className='flex flex-col items-center justify-center space-y-4 text-center my-20'>
                <div className='inline-flex items-center gap-2'>
                  <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                    Simple & Transparent Pricing
                  </h2>
                  {/* <span className='bg-[#2F6B62]/10 text-[#2F6B62] text-sm font-medium px-3 py-1 rounded-full'>
                    Save 40%
                  </span> */}
                </div>
                <p className='max-w-[700px] text-muted-foreground md:text-xl'>
                  Start free, upgrade when you need. No hidden fees.
                </p>
              </div>
              <div className='relative'>
                {/* <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 z-10'>
                  <span className='bg-[#2F6B62] text-white text-sm font-medium px-4 py-1 rounded-full'>
                    Most Popular
                  </span>
                </div> */}
                <PricingToggle />
              </div>
            </div>
          </section>
          <section className='w-full py-20 pt-20' id='faq'>
            <div className='px-4 md:px-6'>
              <FAQ />
            </div>
            <div className='flex items-start justify-center my-10'></div>
          </section>
        </main>
        <section className='py-20 pb-40 bg-white text-center max-w-3xl mx-auto'>
          <div className='container mx-auto'>
            <h1 className='text-3xl font-bold tracking-tighter text-center md:text-5xl my-10'>
              Unlock the Power of AI Learning
            </h1>
            <p className='text-lg text-gray-600 mb-8'>
              Transform the way you study. Generate flashcards, quizzes,
              summaries, and more—all in one place. Say goodbye to endless hours
              of studying.
            </p>
            <Link href='/start-learning'>
              <Button
                className='bg-[#2F6B62] hover:bg-[#245248] text-white text-lg py-6 px-8'
                size='lg'
              >
                Start learning
              </Button>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
