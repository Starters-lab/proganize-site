"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Heading from "../layout/nav";
import Footer from "../layout/footer";

export default function PrivacyAndTermsPage() {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <>
      <Heading />
      <div className='min-h-screen flex flex-col bg-background text-foreground mt-20 '>
        <main className='flex-grow flex flex-col p-20'>
          <div className='space-y-6'>
            <h2 className='text-3xl font-bold'>
              Terms of Service for Proganize (by Gistabyte Inc.)
            </h2>
            <p className='text-sm text-muted-foreground'>
              Effective Date: 13th November, 2024
            </p>

            <section>
              <h3 className='text-2xl font-semibold'>Acceptance of Terms</h3>
              <p>
                By using Proganize, you agree to these Terms of Service
                (&quot;Terms&quot;) and our Privacy Policy. If you do not agree,
                please do not use our platform.
              </p>
            </section>

            <section>
              <h3 className='text-2xl font-semibold'>Eligibility</h3>
              <p>
                You must be 18 years or older to use Proganize. By registering
                an account, you confirm that you are of legal age.
              </p>
            </section>

            <section>
              <h3 className='text-2xl font-semibold'>Account Registration</h3>
              <p>
                To use Proganize, you must create an account. You are
                responsible for maintaining the confidentiality of your account
                credentials and for all activities that occur under your
                account. Gistabyte Inc. reserves the right to suspend or
                terminate accounts for any violation of these Terms.
              </p>
            </section>

            <section>
              <h3 className='text-2xl font-semibold'>Use of Service</h3>
              <p>
                Proganize allows users to create, upload, and collaborate on
                documents. You are solely responsible for the content you create
                or share. You agree not to:
              </p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>
                  Use the platform for any illegal or unauthorized purposes.
                </li>
                <li>Upload harmful, offensive, or inappropriate content.</li>
                <li>Attempt to hack or reverse-engineer the platform.</li>
              </ul>
            </section>

            <section>
              <h3 className='text-2xl font-semibold'>
                Payments and Subscriptions
              </h3>
              <p>Proganize offers free and paid plans:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>
                  <strong>Free Plan:</strong> Users can create documents, chat
                  with the document (with a conversation limit), and invite up
                  to 3 collaborators.
                </li>
                <li>
                  <strong>Paid Plan:</strong> Includes all free plan features,
                  plus unlimited collaborators, conversations, public sharing of
                  documents, ability to download documents in various formats,
                  priority access, and advanced features such as add-ons (user
                  stories, product roadmaps, etc.) and document uploads for AI
                  enhancement.
                </li>
              </ul>
              <p>
                Payment is processed via Stripe, and all subscriptions are
                governed by Stripe&apos;s terms of service.
              </p>
            </section>

            <section>
              <h3 className='text-2xl font-semibold'>Termination</h3>
              <p>
                You may terminate your account at any time. We reserve the right
                to terminate or suspend accounts at our discretion, particularly
                for breaches of these Terms.
              </p>
            </section>

            <section>
              <h3 className='text-2xl font-semibold'>
                Limitation of Liability
              </h3>
              <p>
                Gistabyte Inc. will not be liable for any indirect, incidental,
                or consequential damages arising out of your use of Proganize.
                Our total liability shall not exceed the amount you paid to us
                in the last 12 months for the service.
              </p>
            </section>

            <section>
              <h3 className='text-2xl font-semibold'>Governing Law</h3>
              <p>
                These Terms are governed by the laws of the State of Delaware,
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h3 className='text-2xl font-semibold'>Changes to Terms</h3>
              <p>
                We may update these Terms at any time. We will notify users of
                any changes by updating this page, and the new Terms will be
                effective from the updated date.
              </p>
            </section>

            <section>
              <h3 className='text-2xl font-semibold'>Contact Us</h3>
              <p>
                For questions or concerns about these Terms, please contact us
                at [support email].
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
