import { Inter } from 'next/font/google'
import { ApolloProviderWrapper } from './providers/apollo-provider'
import { Providers } from './providers'
import './globals.css'
import './styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Noise Hanoi',
  description: 'Noise Hanoi website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloProviderWrapper>
          <Providers>
            {children}
          </Providers>
        </ApolloProviderWrapper>
      </body>
    </html>
  )
} 