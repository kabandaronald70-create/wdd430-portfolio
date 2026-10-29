import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
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
      <body className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
