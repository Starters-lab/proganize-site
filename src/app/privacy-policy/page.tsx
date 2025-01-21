import Heading from "../layout/nav";
import Footer from "../layout/footer";

export default function PrivacyAndTermsPage() {
  return (
    <>
      <Heading />
      <div className='min-h-screen flex flex-col bg-background text-foreground mt-20'>
        <main className='flex-grow flex flex-col p-20'>
          <div className='space-y-6'>
            <h2 className='text-3xl font-bold'>
              Privacy Policy for Proganize (by Gistabyte Inc.)
            </h2>
            <p className='text-sm text-muted-foreground'>
              Effective Date: 13th November, 2024
            </p>

            <section>
              <h3 className='text-2xl font-semibold'>Introduction</h3>
              <p>
                Gistabyte Inc. (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;)
                operates Proganize, a platform for indie hackers to easily
                generate Product Requirement Documents (PRD) and collaborate on
                them. We are committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you use Proganize. By using our services,
                you consent to the collection and use of your information as
                outlined in this Privacy Policy.
              </p>
            </section>

            <section>
              <h3 className='text-2xl font-semibold'>Information We Collect</h3>
              <p>We collect the following types of information:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>
                  <strong>Personal Information:</strong> When you register for
                  an account, we collect personal details such as your name,
                  email address, and any other information necessary to provide
                  our services.
                </li>
                <li>
                  <strong>Document Data:</strong> Any documents or content you
                  upload, create, or collaborate on within Proganize.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use
                  Proganize, including login details, IP address, and browser
                  information.
                </li>
                <li>
                  <strong>Payment Information:</strong> For paid users, we may
                  collect and process payment details through third-party
                  providers like Stripe.
                </li>
              </ul>
            </section>

            <section>
              <h3 className='text-2xl font-semibold'>
                How We Use Your Information
              </h3>
              <p>
                We may use the information we collect from you for the following
                purposes:
              </p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>To provide and maintain our service.</li>
                <li>
                  To personalize and improve your experience on the platform.
                </li>
                <li>To process payments and manage subscriptions.</li>
                <li>
                  To communicate with you about updates, changes, or promotional
                  offers.
                </li>
                <li>
                  To monitor and analyze usage trends to improve our platform.
                </li>
              </ul>
            </section>

            <section>
              <h3 className='text-2xl font-semibold'>Sharing of Information</h3>
              <p>
                We do not sell your personal information to third parties.
                However, we may share your data with:
              </p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>
                  <strong>Service Providers:</strong> Trusted third parties like
                  Supabase, Stripe, and OpenAI for essential services like
                  authentication, payments, and AI-based features.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> If required by law or in
                  the case of legal processes, such as subpoenas or court
                  orders.
                </li>
              </ul>
            </section>

            <section>
              <h3 className='text-2xl font-semibold'>Data Security</h3>
              <p>
                We implement measures to safeguard your data. However, no method
                of transmission over the Internet or electronic storage is 100%
                secure. While we strive to protect your personal information, we
                cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h3 className='text-2xl font-semibold'>Your Rights</h3>
              <p>
                You can access, modify, or delete your account information at
                any time by logging into your account settings. If you wish to
                delete your account entirely, please contact us.
              </p>
            </section>

            <section>
              <h3 className='text-2xl font-semibold'>Changes to This Policy</h3>
              <p>
                We may update this policy periodically. We will notify you of
                any changes by posting the new policy on our site, and the
                effective date will be updated accordingly.
              </p>
            </section>

            <section>
              <h3 className='text-2xl font-semibold'>Contact Us</h3>
              <p>
                For questions or concerns about this policy, please contact us
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
