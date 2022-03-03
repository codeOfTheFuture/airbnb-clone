import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HeaderProvider } from '../Provider/HeaderProvider'
import SearchProvider from '../Provider/SearchProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeaderProvider>
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </HeaderProvider>
  )
}

export default MyApp
