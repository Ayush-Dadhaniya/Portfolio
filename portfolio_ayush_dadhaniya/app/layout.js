import "./globals.css";
export const metadata = {
  title: "Ayush Dadhaniya — Software Developer",
  description:
    "Melbourne-based software developer working across full-stack applications, cybersecurity, and IoT systems. Explore projects, experience, and get in touch.",
  openGraph: {
    title: "Ayush Dadhaniya — Software Developer",
    description: "Thoughtful code. Useful products. A security mindset.",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
