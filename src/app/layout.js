import { Space_Grotesk, Inter } from 'next/font/google';
import ThemeProvider from '@/components/ThemeProvider';
import Sidebar from '@/components/Sidebar';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Jyoti — Full-Stack Developer',
  description:
    'Personal portfolio of Jyoti — a full-stack developer who builds thoughtful digital experiences for the web.',
  openGraph: {
    title: 'Jyoti — Full-Stack Developer',
    description:
      'Personal portfolio of Jyoti — a full-stack developer who builds thoughtful digital experiences for the web.',
    url: 'https://jyoti.dev',
    siteName: 'Jyoti',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jyoti — Full-Stack Developer',
    description:
      'Personal portfolio of Jyoti — a full-stack developer who builds thoughtful digital experiences for the web.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        <ThemeProvider>
          <div className="site-wrapper">
            <div className="sidebar">
              <Sidebar />
            </div>
            <main className="main-content">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
