import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/app/components/navigation/Navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prisma Auth",
  description: "Prisma Auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        <Navigation />
        <main className="container mx-auto max-w-screen-sm flex-1 px-1 py-5">
          {children}
        </main>

        <footer className="py-5">
          <div className="text-center text-sm">
            Copyright All right reserved | FullStackChannel
          </div>
        </footer>
      </body>
    </html>
  );
}
