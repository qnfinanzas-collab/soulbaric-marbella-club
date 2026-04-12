import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SoulBaric × Marbella Club | Deep Regeneration Experience',
  description: 'Lujo silencioso aplicado al bienestar. Una nueva categoría de experiencia wellness para los destinos más exclusivos.',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'SoulBaric × Marbella Club',
    description: 'Deep Regeneration Experience',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#FAF7F1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
