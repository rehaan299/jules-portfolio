import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rehaan Sharma | Portfolio",
  description: "Computing Science student specializing in AI. Technology Analyst at Citi. Passionate about agentic AI engineering.",
  keywords: ["Rehaan Sharma", "AI", "Software Engineer", "Next.js", "TypeScript", "University of Alberta", "Citi"],
  authors: [{ name: "Rehaan Sharma" }],
  openGraph: {
    title: "Rehaan Sharma | Portfolio",
    description: "I build things that think.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
