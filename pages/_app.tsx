import { CartProvider } from 'react-use-cart'
import { ManagedUIContext } from '@components/ui/context'
import '../styles/global.css'

import { SettingsProvider } from '@context/settings'
import Layout from '@components/layout'

function App({ Component, pageProps }) {
  return (
    <SettingsProvider>
      <CartProvider>
      <ManagedUIContext>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ManagedUIContext>
      </CartProvider>
    </SettingsProvider>
  )
}

export default App
