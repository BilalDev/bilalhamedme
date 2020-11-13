import '@assets/main.css'

import { FC, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'

interface Props {
  children: ReactNode
}

const Noop: FC<Props> = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  return (
    <>
      <Head />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
