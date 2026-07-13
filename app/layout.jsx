import { DM_Sans, Instrument_Serif } from 'next/font/google'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import ScrollToTop from '../src/components/ScrollToTop'
import '../src/index.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata = {
  title: 'MD Astra — SEO & Digital Marketing',
  description: 'MD Astra helps businesses grow with expert SEO, web development, and digital marketing services.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="8L_JV81TCJAFurlsRJheMh1ESG_05Stc2YEGHl8Zf9c" />
      </head>
      <body>
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
