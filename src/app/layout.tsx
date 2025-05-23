import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '빼곡 : 빼곡하게 채우는 나만의 책장',
  // description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href='https://img.notionusercontent.com/s3/prod-files-secure%2F32c36b0c-d9b4-422e-9140-e6ff26fb9695%2Ffc17cef2-cbcb-49f7-a538-30f966ad781d%2F2a3bbbed-532a-416d-a692-3fbfb7a4302a.png/favicon?exp=1748094447&sig=Qssbaq4c61Ws9jm53xS-LzW7PA1tMPMwfpt7fLBptjQ&id=9c16a825-852f-4f99-b783-8e65b2ae8c58&table=block'
        />
      </head>
      <body className={`antialiased m-0`}>{children}</body>
    </html>
  );
}
