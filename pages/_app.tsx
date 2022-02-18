import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HeaderProvider } from '../Provider/HeaderProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeaderProvider>
      <Component {...pageProps} />
    </HeaderProvider>
  )
}

export default MyApp
