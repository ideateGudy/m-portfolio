import { ThemeProvider } from "@/app/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const inter = Inter({
//   variable: "--font-inter-sans",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Goodnews Azonubi | Backend & DevOps Engineer (Fullstack)",
  description:
    "Portfolio of Goodnews Azonubi — Backend & DevOps Engineer specializing in scalable server architecture, resilient REST APIs, AWS cloud infrastructure, Docker, CI/CD, and fullstack modern web applications.",
  keywords: [
    "Backend Developer",
    "DevOps Engineer",
    "Cloud Engineer",
    "AWS",
    "Docker",
    "Terraform",
    "CI/CD",
    "Node.js",
    "Next.js",
    "PostgreSQL",
    "TypeScript",
    "REST APIs",
    "Fullstack Developer",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <link rel="icon" href="/app.svg" sizes="any" />
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
