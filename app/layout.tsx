import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Load the font and assign it to a variable
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://wdd430-portfolio-1zzljlri4-kabanda.vercel.app",
  ),
  title: {
    default: "Ronald Kabanda | Developer Portfolio",
    template: "%s | Ronald Kabanda",
  },
  description:
    "Explore Ronald Kabanda's web development portfolio, projects, and skills in React, Next.js, and data analysis.",
  applicationName: "Ronald Kabanda Portfolio",
  openGraph: {
    title: "Ronald Kabanda | Developer Portfolio",
    description:
      "Explore Ronald Kabanda's web development portfolio, projects, and skills in React, Next.js, and data analysis.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-slate-100 text-slate-900`}>
        <div className="mx-auto my-4 flex min-h-[calc(100vh-2rem)] w-[calc(100%-2rem)] max-w-7xl flex-col rounded-2xl border-2 border-slate-200 bg-white p-4 sm:my-6 sm:min-h-[calc(100vh-3rem)] sm:w-[calc(100%-3rem)] sm:p-8">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
