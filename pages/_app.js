import { SessionProvider } from "next-auth/react"
import MainLayout from "components/ui/main.layout";

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SessionProvider>
  )
}