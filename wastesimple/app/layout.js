import { Kulim_Park } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const kulimPark = Kulim_Park({
  subsets: ["latin"], // Specify the subsets you need
  weight: ["200", "300", "400", "600", "700"], // Use the correct property `weight` instead of `weights`
});

export const metadata = {
  title: "Waste Simple",
  description: "Get the latest news on the waste technology industry!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Optional: Add other sizes/formats for better support */}
      </head>
      <body className={kulimPark.className} >
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
