import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, FileText, Brain, Library } from "lucide-react";
import Heading from "../layout/nav";
import Link from "next/link";
import VideoHome from "../layout/video";

export const metadata = {
  title: "Chat with PDF - Your Ultimate Document Assistant",
  description:
    "Transform the way you work with PDFs. Get instant summaries, analyze documents, create flashcards, and extract key insights with our AI-powered PDF assistant.",
  keywords:
    "PDF chat, document analysis, AI assistant, PDF summary, study aid, document management, generate flashcards",
  openGraph: {
    title: "Chat with PDF - Your Ultimate Document Assistant",
    description:
      "Transform the way you work with PDFs. Get instant summaries, analyze documents, create flashcards, and extract key insights with our AI-powered PDF assistant.",
    type: "website",
    url: "https://prorganize.app/pdf",
    images: [
      {
        url: "/socialscreen.png", // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Chat with PDF Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chat with PDF - Your Ultimate Document Assistant",
    description:
      "Transform the way you work with PDFs. Get instant summaries, analyze documents, create flashcards, and extract key insights with our AI-powered PDF assistant.",
    images: ["/og-image.jpg"], // Same image as OpenGraph
  },
};

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Heading />

      {/* Hero Section */}
      <section className='py-20 px-4'>
        <div className='container mx-auto text-center max-w-3xl'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            Chat with PDF: Your Ultimate Document Assistant
          </h1>
          <p className='text-normal text-muted-foreground mb-8'>
            Say goodbye to endless reading and tedious manual work. With Chat
            with PDF, you can unlock key insights, analyze documents, and
            transform the way you study and work—all in one place.
          </p>
          <Link href={`${process.env.APP_URL}/pdf`}>
            <Button size='lg' className='text-lg'>
              Try it for free
              <ChevronRight className='ml-2' />
            </Button>
          </Link>
        </div>
        <div className='space-y-4 md:mx-40'>
          <VideoHome isPdfPage={true} />
        </div>
      </section>

      {/* Features Grid */}
      <section className='py-20 bg-slate-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Features Built for Everyone
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <Card className='p-6'>
              <FileText className='w-12 h-12 text-primary mb-4' />
              <h3 className='text-xl font-semibold mb-2'>
                Document Analysis Made Easy
              </h3>
              <ul className='space-y-2 text-muted-foreground'>
                <li>• Summarization: Get concise summaries</li>
                <li>• Topic Extraction: Identify key themes</li>
                <li>• Citation Generation: Automatic citations</li>
              </ul>
            </Card>
            <Card className='p-6'>
              <Brain className='w-12 h-12 text-primary mb-4' />
              <h3 className='text-xl font-semibold mb-2'>
                Study Aid for Students
              </h3>
              <ul className='space-y-2 text-muted-foreground'>
                <li>• Flashcards: Quick revision tools</li>
                <li>• Quizzes: Interactive learning</li>
                <li>• Smart Notes: AI-powered summaries</li>
              </ul>
            </Card>
            <Card className='p-6'>
              <Library className='w-12 h-12 text-primary mb-4' />
              <h3 className='text-xl font-semibold mb-2'>
                Seamless Organization
              </h3>
              <ul className='space-y-2 text-muted-foreground'>
                <li>• Searchable Library: All PDFs in one place</li>
                <li>• Cross-Document Insights</li>
                <li>• Smart categorization</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Simple, Transparent Pricing
          </h2>
          <div className='max-w-md mx-auto'>
            <Card className='p-8'>
              <h3 className='text-2xl font-bold mb-4'>Pay-As-You-Go</h3>
              <p className='text-muted-foreground mb-4'>
                Buy credits as needed, no commitments.
              </p>
              <div className='text-3xl font-bold mb-6'>
                Starting at $10
                <span className='text-lg text-muted-foreground font-normal'>
                  {" "}
                  / 7,500 AI words
                </span>
              </div>
              <Button className='w-full' size='lg'>
                Get Started
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-20 bg-slate-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            What People Are Saying
          </h2>
          <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            <Card className='p-6'>
              <p className='mb-4'>
                &ldquo;Chat with PDF has transformed how I prepare for exams.
                Flashcards and quizzes are a lifesaver!&rdquo;
              </p>
              <p className='font-semibold'>— James Martins</p>
            </Card>
            <Card className='p-6'>
              <p className='mb-4'>
                &ldquo;Document analysis has never been easier. The topic
                extraction feature is a game-changer for my research.&rdquo;
              </p>
              <p className='font-semibold'>— A Productive Researcher</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Frequently Asked Questions
          </h2>
          <div className='max-w-2xl mx-auto space-y-6'>
            <Card className='p-6'>
              <h3 className='font-semibold mb-2'>
                Is there a free trial available?
              </h3>
              <p className='text-muted-foreground'>
                Yes, you can start with a free trial that includes 500
                AI-generated words. Test it before committing.
              </p>
            </Card>
            <Card className='p-6'>
              <h3 className='font-semibold mb-2'>
                Can I upload multiple PDFs?
              </h3>
              <p className='text-muted-foreground'>
                Manage and analyze multiple documents seamlessly.
              </p>
            </Card>
            <Card className='p-6'>
              <h3 className='font-semibold mb-2'>Is my data secure?</h3>
              <p className='text-muted-foreground'>
                We prioritize your privacy. Your documents are encrypted and
                never shared.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-primary text-primary-foreground'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-6'>
            Ready to transform how you work with documents?
          </h2>
          <Button size='lg' variant='secondary' className='text-lg'>
            Get Started Free
          </Button>
        </div>
      </section>

      {/* Footer */}
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
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Contact Us
          </Link>
        </nav>
      </footer>
    </div>
  );
}
