import './globals.css';
import SplashCursor from '../components/SplashCursor';

export const metadata = {
  title: 'Ayush Dadhaniya Portfolio',
  description: 'A modern, animated, Gen-Z portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body className="overflow-x-hidden bg-black min-h-screen w-full max-w-full">
        <SplashCursor />
        <main className="w-full max-w-full overflow-x-hidden relative">
          {children}
        </main>
      </body>
    </html>
  );
}
