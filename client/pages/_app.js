import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'
import RouteGourd from "utils/guard/route.gurd";
import MainLayout from "components/ui/main.layout";
import store from "store";

import '../styles/globals.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Provider store={store}>
        <SessionProvider session={session}>
          <RouteGourd>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </RouteGourd>
        </SessionProvider>
      </Provider>
    </>
  )
}