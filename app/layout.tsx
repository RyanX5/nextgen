import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ['100', '300', '400', '700', '900']
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Generation Consultancy | Business Strategy & Innovation Experts",
  description:
    "Next Generation Consultancy helps businesses grow through tailored strategies, market research, branding, and operational excellence. Based in Dubai, serving global clients.",
  keywords: [
    "business consulting",
    "Dubai consultancy",
    "Next Generation Consultancy",
    "market research",
    "startup strategy",
    "digital transformation",
    "business growth",
    "branding services",
    "business strategy UAE"
  ],
  authors: [{ name: "Next Generation Consultancy", url: "https://ngconsultancy.us" }],
  openGraph: {
    title: "Next Generation Consultancy",
    description:
      "Empowering businesses to lead, innovate, and grow through tailored consulting solutions across industries.",
    url: "https://ngconsultancy.us",
    siteName: "Next Generation Consultancy",
    images: [
      {
        url: "/og-image.png", // replace with your actual image in the public/ folder
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Generation Consultancy",
    description:
      "Tailored business consulting for modern enterprises. Strategy, branding, licensing, growth.",
    images: ["/og-image.png"], // make sure this exists
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
