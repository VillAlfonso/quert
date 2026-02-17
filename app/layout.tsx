import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quert Alfonso M. Villafuerte | Full Stack AI Engineer",
  description:
    "Full Stack AI Engineer specializing in building intelligent systems for early-stage startups. Magna Cum Laude BS Information Technology graduate.",
  keywords: [
    "AI Engineer",
    "Full Stack Developer",
    "Machine Learning",
    "Startup Engineer",
    "LangChain",
    "Next.js",
  ],
  authors: [{ name: "Quert Alfonso M. Villafuerte" }],
  openGraph: {
    title: "Quert Alfonso M. Villafuerte | Full Stack AI Engineer",
    description:
      "Building intelligent systems for seed to Series A startups.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
