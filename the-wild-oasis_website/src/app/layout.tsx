import Header from "@/components/layout/header";
import Providers from "@/components/providers";
import "@/styles/globals.css";
import { cn } from "@/utils";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thewildoasis.com"),

  title: {
    default: "The Wild Oasis | Website",
    template: "The Wild Oasis | %s",
  },

  description:
    "The Wild Oasis is a luxury boutique hotel offering only 8 exclusive private cabins. A serene nature retreat combining elegance, privacy, and unforgettable comfort.",

  keywords: [
    "luxury boutique hotel",
    "private cabins",
    "luxury cabins",
    "exclusive hotel",
    "nature retreat",
    "eco luxury resort",
    "romantic getaway",
    "wild oasis hotel",
  ],

  authors: [{ name: "The Wild Oasis" }],
  creator: "The Wild Oasis",
  publisher: "The Wild Oasis",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    siteName: "The Wild Oasis",
    url: "/",
    title: "The Wild Oasis | Luxury Boutique Cabins in Nature",
    description:
      "An exclusive boutique hotel with only 8 luxurious cabins. Experience privacy, refined comfort, and a peaceful escape surrounded by nature.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury cabins at The Wild Oasis",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@thewildoasis",
    creator: "@thewildoasis",
    title: "The Wild Oasis | Luxury Boutique Hotel",
    description:
      "Stay in one of only 8 exclusive luxury cabins surrounded by nature. Privacy, elegance, and unforgettable comfort.",
    images: ["/og-image.jpg"],
  },

  themeColor: "#0f2a1d",
  icons: {
    icon: "/logo.png",
    apple: "/apple-touch-icon.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollbarWidth: "none" }}>
      <body
        className={cn(
          "antialiased min-h-screen bg-primary-950 text-primary-50 overflow-x-hidden flex flex-col",
          josefinSans.className
        )}
      >
        <Providers>
          <Header />
          <main className="flex-1 container grid">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
