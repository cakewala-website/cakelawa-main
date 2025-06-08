import {Playfair_Display} from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "700"],
})

// app/page.tsx or app/layout.tsx

export const metadata = {
  title: "CakeLawa - Handcrafted Delicacies",
  description: "Discover the finest handcrafted pastries and chocolates made with love.",
  keywords: ["pastries", "chocolates", "handcrafted", "bakery", "desserts", "cakes", "artisan"],
  openGraph: {
    title: "CakeLawa - Handcrafted Delicacies",
    description: "Discover the finest handcrafted pastries and chocolates made with love.",
    url: "www.cakelawa.in",
    siteName: "CakeLawa",
    images: [
      {
        url: "https://www.cakelawa.in/og-image.webp",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
