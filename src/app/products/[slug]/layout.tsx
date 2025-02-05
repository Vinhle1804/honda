
import Header from "@/components/header";
import "../../../style/globals.css";
import {Oleo_Script } from "next/font/google";

const roboto = Oleo_Script({
  subsets: ['latin'],
  weight: ['400', '700'], // Chỉ định trọng số
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
  className={roboto.className}
    >
      <div className="pb-[110px]"><Header/></div>
      {children}
    </body>
  </html>
  );
}
