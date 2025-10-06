import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  
  title: "Fatima’s Blog",
  description: "A modern blogging site built with Next.js and Tailwind CSS",
   verification: {
    google: "LjOG2oGC9klap_YzuewUGgAo2kFZ5fhhPd2a3F3Pw0k",
   }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
