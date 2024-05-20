import { Roboto } from 'next/font/google';
import { Montserrat } from 'next/font/google';

import '@/styles/index.scss';
import Header from '../ui/header';
import SubHeader from '../ui/adress_number';

export const roboto = Roboto({
  subsets: ['cyrillic'],
  variable: '--font-roboto',
  weight: '300'
});

export const montserrat = Montserrat({
  subsets: ['cyrillic'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang = 'ru'  className={`${montserrat.className}`}>
    <body>
      <SubHeader/>
      <Header/>
      <div>{children}</div>
    </body>
    </html>
  );
}