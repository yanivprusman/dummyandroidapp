import type { Metadata } from "next";
import "./globals.css";
import FeedbackChatMount from './FeedbackChatMount';

export const metadata: Metadata = {
  title: "dummyandroidapp",
  description: "dummyAndroidApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}
        <FeedbackChatMount />
</body>
    </html>
  );
}
