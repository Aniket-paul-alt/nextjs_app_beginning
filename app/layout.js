import "./globals.css";
import { Roboto } from "next/font/google";
import { Work_Sans } from "next/font/google";

// Metadata for the root layout
export const metadata = {
  title: {
    default: "Next.js App with Custom Fonts",
    template: "%s | Next.js App",
  },
  description: "A Next.js application with custom fonts",
  authors: [
    { name: "Thapa Technical", url: "https://www.youtube.com/@ThapaTechnical" },
    { name: "John Doe", url: "https://www.example.com" },
  ],
  keywords: ["nextjs", "app", "fonts", "layout"],
  icons: {
    icon: "/favicon.ico", // Favicon for the application
    apple: "/apple-touch-icon.png",
    android: "/android-chrome-192x192.png",
  },
  metadataBase: new URL("https://www.example.com"), // Base URL for the metadata
  openGraph: {
    title: "Next.js App with Custom Fonts",
    description: "A Next.js application with custom fonts",
    url: "https://www.example.com",
    siteName: "Next.js App",
    images: [
      {
        url: "/og-image.png", // Open Graph image
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// Importing custom fonts using Next.js font optimization
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

// Importing another custom font
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${workSans.variable} `}>
        {children}
      </body>
    </html>
  );
}