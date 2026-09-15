import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "پلتفرم مدرسه",
  description: "یک پلتفرم مدرن آموزشی و مدیریت مدرسه",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" className={`${vazirmatn.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
