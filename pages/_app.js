import { SessionProvider } from "next-auth/react"
import RouteGourd from "utils/guard/route.gurd";
import MainLayout from "components/ui/main.layout";

import '../styles/globals.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
        <RouteGourd>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </RouteGourd>
      </SessionProvider>
    </>
  )
}