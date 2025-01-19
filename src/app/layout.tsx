import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Proganize - AI Study Tools for Smarter Learning",
  description:
    "Proganize helps students master their studies with ease. Chat with PDFs, generate quizzes, create flashcards, and simplify learning with our AI-powered tools.",
  keywords:
    "AI study tools, flashcards, quizzes, PDF assistant, AI tutor, study smarter, learning platform, exam preparation, student tools",
  openGraph: {
    title: "Proganize - AI Study Tools for Smarter Learning",
    description:
      "Proganize helps students master their studies with ease. Chat with PDFs, generate quizzes, create flashcards, and simplify learning with our AI-powered tools.",
    type: "website",
    url: "https://prorganize.app",
    images: [
      {
        url: "/socialscreen.png", // Ensure this image is in your public folder
        width: 1200,
        height: 630,
        alt: "Proganize Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proganize - AI Study Tools for Smarter Learning",
    description:
      "Proganize helps students master their studies with ease. Chat with PDFs, generate quizzes, create flashcards, and simplify learning with our AI-powered tools.",
    images: ["/og-image.jpg"], // Same image as OpenGraph
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
