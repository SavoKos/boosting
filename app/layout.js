import { Zen_Dots, Readex_Pro } from 'next/font/google';
import './styles/globals.css';
const zendots = Zen_Dots({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--zendots',
});

export const metadata = {
  title: 'Boost4You',
  description: 'Boost4You',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={zendots.className}>{children}</body>
    </html>
  );
}
