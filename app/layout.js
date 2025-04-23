import { Inter } from 'next/font/google'
import { ApolloProviderWrapper } from './providers/apollo-provider'
import { Providers } from './providers'
import { ThemeProvider } from './providers/theme-provider'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Noise Hanoi - Live Music in Hanoi',
  description: 'Discover live music events, gigs, and the latest reads about the Hanoi music scene.',
  openGraph: {
    title: 'Noise Hanoi - Live Music in Hanoi',
    description: 'Discover live music events, gigs, and the latest reads about the Hanoi music scene.',
    url: 'https://noisehanoi.com',
    siteName: 'Noise Hanoi',
    images: [
      {
        url: 'https://media.graphassets.com/g0u8F0NReulFIRCA4IKW',
        width: 1200,
        height: 630,
        alt: 'Noise Hanoi',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noise Hanoi - Live Music in Hanoi',
    description: 'Discover live music events, gigs, and the latest reads about the Hanoi music scene.',
    images: ['https://media.graphassets.com/g0u8F0NReulFIRCA4IKW'],
  },
  keywords: 'Music, Events, Hanoi, Drums, Festival, Liveshow, Bia, Live, Coffee, Rock, Ho Chi Minh',
  icons: {
    icon: '/favicon.png',
    apple: '/logo192.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'ZXOKCtk7cQLJjdU_Msk6v7kVMa-LJEZ2PZc4mDw9zsY',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="article:tag" content={metadata.keywords} />
        <meta name="news_keywords" content={metadata.keywords} />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M94C483Q');`}
        </Script>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M94C483Q"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        <ThemeProvider>
          <ApolloProviderWrapper>
            <Providers>
              {children}
            </Providers>
          </ApolloProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
} 