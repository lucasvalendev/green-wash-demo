import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const siteUrl = 'https://green-wash-demo.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Green Wash | Estética Automotiva em Taubaté',
  description:
    'Estética automotiva e higienização em geral em Taubaté. Escolha o serviço, informe seu veículo e peça orçamento direto pelo WhatsApp da Green Wash.',
  applicationName: 'Green Wash',
  keywords: [
    'estética automotiva Taubaté',
    'higienização automotiva Taubaté',
    'polimento automotivo Taubaté',
    'higienização de bancos Taubaté',
    'Green Wash Taubaté',
  ],
  category: 'automotive',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Green Wash',
    title: 'Green Wash | Estética Automotiva em Taubaté',
    description:
      'Estética automotiva e higienização em geral no Jardim Ana Rosa. Peça seu orçamento direto pelo WhatsApp.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Green Wash | Estética Automotiva em Taubaté',
    description: 'Cuidados automotivos e orçamento direto pelo WhatsApp em Taubaté.',
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['AutoWash', 'AutomotiveBusiness'],
  '@id': siteUrl + '/#business',
  name: 'Green Wash Estética Automotiva & Higienização em Geral',
  url: siteUrl,
  telephone: '+55 12 99202-8120',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Luiz Vaz de Camões, 305',
    addressLocality: 'Taubaté',
    addressRegion: 'SP',
    postalCode: '12071-050',
    addressCountry: 'BR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços Green Wash',
    itemListElement: [
      'Higienização de bancos e interior',
      'Lavagem e enceramento',
      'Polimento e faróis',
      'Limpeza de motor',
      'Higienização de estofados e carpetes',
      'Lavagem e enceramento de motos',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" className={geist.variable + ' ' + geistMono.variable}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  )
}
