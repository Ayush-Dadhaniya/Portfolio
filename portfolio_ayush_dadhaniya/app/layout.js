import './globals.css';
import Navbar from '@/components/Navbar/page';

export const metadata = {
  title: 'Ayush Dadhaniya Portfolio',
  description: 'A modern, animated, Gen-Z portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden w-full">
      <body className="bg-black w-full min-h-screen">
        <Navbar />
        <main className="w-full px-0 md:px-0 py-0 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
