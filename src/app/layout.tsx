import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', weight: ['300', '400', '500', '600', '700'], style: ['italic', 'normal'] });

export const metadata: Metadata = {
  title: {
    default: 'Alammana Developers | Luxury Real Estate & Construction in Islamabad',
    template: '%s | Alammana Developers'
  },
  description: 'Building the future of Islamabad and Faisal Hills with excellence in architecture, strategic marketing, and premium real estate development.',
  keywords: ['Islamabad Real Estate', 'Faisal Hills Developers', 'Luxury Construction Pakistan', 'Alammana Developers'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-paper text-ink font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
