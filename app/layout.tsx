import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'iDeCo受取税シミュレーター',
    template: '%s | iDeCo受取税シミュレーター',
  },
  description:
    'iDeCo・企業型DCの一時金にかかる税金を、退職金との受取順序・間隔まで考慮して計算。2026年改正の10年ルール・19年ルールに対応した最新版シミュレーター。',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Google Analytics 4 Measurement ID
  // Vercel の環境変数 NEXT_PUBLIC_GA_MEASUREMENT_ID で設定する。
  // 未設定の場合は GA4 タグを出力しない（開発・プレビュー環境で安全）。
  //
  // 注：GA タグは <head> 内に配置する必要がある。
  // Search Console の所有権確認（Google Analytics 方式）が
  // <body> 内の GA タグでは認証できない仕様のため。
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', { anonymize_ip: true });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col">
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
