import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BOTLABS — Future Robotics, Redefined",
  description:
    "Discover the next generation of consumer robotics. Premium cyberpunk robots engineered for the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://prod.spline.design"
        />

        {/* Google Fonts with display=swap for font-display: swap */}
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Preload Spline scene for faster 3D loading */}
        <link
          rel="preload"
          href="https://prod.spline.design/iuPdsPFeGspafc6M/scene.splinecode"
          as="fetch"
          crossOrigin="anonymous"
        />

        {/* Preload critical hero image */}
        <link
          rel="preload"
          as="image"
          href="/logo.png"
        />
      </head>
      <body className="bg-background text-primary-foreground font-space antialiased">
        {children}
      </body>
    </html>
  );
}
