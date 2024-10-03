import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/containers/global/header/header';
import { Navigator } from '@/containers/global/navigator/navigator';

const pretendard = localFont({
  src: './fonts/pretendard-variable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '갓생살기',
  description: '갓생을 살아보자',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable}`}>
        <Header />
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Navigator />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
