import type { Metadata } from "next";

export  const metadata: Metadata = {
    title: "David Luff -  Portfolio",
    description: "Interactive portfolio with AI that answers questions about me",
    keywords: [
      "David Luff", 
      "Portfolio", 
      "Developer", 
      "AI", 
      "Interactive", 
      "Web Development",
      "Full Stack",
      "Next.js",
      "React"
    ],
    authors: [
      {
        name: "David Luff",
        url: "https://dev.davidluff.de",
      },
    ],
    creator: "David Luff",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://dev.davidluff.de",
      title: "David Luff - Portfolio",
      description: "Interactive portfolio with AI that answers questions about me",
      siteName: "David Luff - Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: "David Luff - Portfolio",
      description: "Interactive portfolio with AI that answers questions about me",
      creator: "@davidluff",
    },
    icons: {
      icon: [
        {
          url: "/favicon.png",
          sizes: "any",
        }
      ],
      shortcut: "/favicon.svg",
      apple: "/apple-touch-icon.svg?v=2",
    },
  };