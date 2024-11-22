import type { Metadata } from "next";
import "./globals.css";
import GlobalStyles from "@/components/layout/global-style";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Life Slice",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-dmSans bg-foreground text-primary-foreground px-4">
        <GlobalStyles />
        {children}

        {/* Footer */}
        <div className="w-full max-w-[1080px] mx-auto flex flex-col lg:flex-row lg:justify-between py-20">
          <Link href="/" className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/life-slice-logo.png"
                alt="life-slice logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <p className="text-xl font-semibold">Life Slice</p>
            </div>
            <p className="text-md text-neutral-400 font-medium">
              @ {new Date().getFullYear()} Life Slice. All rights reserved.
            </p>
          </Link>

          <div className="flex flex-col gap-5 mt-12 lg:mt-0">
            <Link
              href="/privacy-policy"
              target="blank"
              className="text-md text-neutral-400 hover:text-neutral-200 font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              target="blank"
              className="text-md text-neutral-400 hover:text-neutral-200 font-medium"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
