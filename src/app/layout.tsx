import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "@/_components/LoadingScreen";

export const metadata: Metadata = {
  title: "Siddharth Kolipaka",
  description: "Portfolio website of Siddharth Kolipaka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
