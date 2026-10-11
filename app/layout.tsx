import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next';
import './globals.css';

import Navbar from './components/navbar';
import Footer from './components/footer';
import { SitePreferencesProvider } from './components/site-preferences';
import BackToTop from './components/back-to-top';

export const metadata: Metadata = {
  title: {
    default: 'ASPARK INNOVATIONS | Teknoloji ve İnovasyon',
    template: '%s | ASPARK INNOVATIONS',
  },
  description: 'ASPARK INNOVATIONS, teknoloji ve inovasyon odağında kurumlara sürdürülebilir dijital çözümler sunar.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <SitePreferencesProvider>
          <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <div className="flex-fill">{children}</div>
            <Footer />
            <BackToTop />
          </div>
        </SitePreferencesProvider>
      </body>
    </html>
  );
}
