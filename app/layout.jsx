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
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '612600625021484');
fbq('track', 'PageView');
`
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=612600625021484&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
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
