import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js with Zerops",
  description: "Deploy your Next.js apps with Zerops",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={opensans.className}>
      <body className="antialiased">
        <div className="flex flex-col items-center">
          <div className="flex-1 w-full flex flex-col gap-20 items-center">
            <div className="flex-1 flex flex-col gap-20">{children}</div>
            <div className="bottom-0">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
