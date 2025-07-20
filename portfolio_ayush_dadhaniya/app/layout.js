import './globals.css';

export const metadata = {
  title: 'Ayush Dadhaniya Portfolio',
  description: 'A modern, animated, Gen-Z portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden w-full">
      <body>
        <main className="w-full px-0 md:px-0 py-0 min-h-screen flex flex-col items-center justify-start">
          {children}
        </main>
      </body>
    </html>
  );
}
