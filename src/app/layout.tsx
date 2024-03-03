import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';

import { getUserAgentReduxState } from '@/utils/helpers';
import Providers from '@/Components/Provider';
import '@/styles/globals.css';
import Header from '@/Components/Header';

const inter = Inter({
  subsets: ['latin'],
  weight: 'variable',
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const userAgent = headersList.get('user-agent') as string | undefined;
  const userAgentToDispatch = getUserAgentReduxState(userAgent);

  return (
    <Providers userAgent={userAgentToDispatch}>
      <html lang="pt">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </Providers>
  );
}
