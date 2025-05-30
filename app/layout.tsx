import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css'; // Import global styles

// Configure Inter font for body text
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // CSS variable name for Inter
});

// Configure Poppins font for headings
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'], // Specify weights used in the project
  display: 'swap',
  variable: '--font-poppins', // CSS variable name for Poppins
});

export const metadata: Metadata = {
  title: 'hueneu - Designs that whisper loud stories',
  description: 'hueneu is a creative studio specializing in branding, packaging, and visual storytelling. We craft aesthetic experiences where stories find their voice.',
  // Consider adding more metadata like openGraph images, icons, etc.
  // icons: { icon: '/favicon.ico' }, // Example
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      {/* Body styling (background, text color, antialiasing, default font) is applied via app/globals.css */}
      <body>
        {children}
      </body>
    </html>
  );
}