import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/components/I18nProvider'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500'] })

export const metadata: Metadata = {
  title: 'Dr. Geo | Daiana Rodrigues, Geóloga',
  description:
    'Mapeamento geológico, consultoria ambiental, análise de solo e levantamentos de campo com rigor científico e resultados concretos.',
  icons: {
    icon: '/logos/logo-dark.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <I18nProvider>
          <Header />
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
