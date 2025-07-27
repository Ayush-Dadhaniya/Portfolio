import './globals.css';
import SplashCursor from '../components/SplashCursor';

export const metadata = {
  title: 'Ayush Dadhaniya Portfolio',
  description: 'A modern, animated, Gen-Z portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden bg-black">
        <SplashCursor />
        <main className="w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
