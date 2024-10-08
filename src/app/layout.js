import localFont from "next/font/local";
import "./globals.css";
import TransitionProvider from "./components/TransitionProvider";


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

export const metadata = {
  title: "Mahedy Hasan's Portfolio",
  description: "This Portfolio Is Created By Next-js & Framer-motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121212] overflow-x-hidden`} >
          <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
