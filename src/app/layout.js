import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata = {
  metadataBase: new URL("https://www.dejvidervishi.com"),
  title: "Dejvi Dervishi | Full-stack Developer in Montréal",
  description: "Full-stack developer and electrical and computer engineer based in Montréal. Web applications, payment systems, and integrations with React, Next.js, Django, and Node.js.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dejvi Dervishi | Full-stack Developer",
    description: "Web applications, payment systems, and integrations. Selected work from a full-stack developer and engineer based in Montréal.",
    url: "/",
    siteName: "Dejvi Dervishi",
    type: "website",
    locale: "en_CA",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
