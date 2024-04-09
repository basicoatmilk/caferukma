import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cafe Rukma",
  description: "Welcome to Rukma, A cafe at Jaypee greens, Greater Noida. We hope to make you a part of our family and give you the most home-style experience in a commercial world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
