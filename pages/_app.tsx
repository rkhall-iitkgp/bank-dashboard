import { AppProps } from 'next/app'
import Head from 'next/head'
import './../styles/globals.css'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications';
import { useEffect } from 'react';
import useAccountStore from '../components/Store/Account';
import { useRouter } from 'next/router';

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  const useAccount = useAccountStore()
  const router = useRouter()
  useEffect(() => {
    console.log(router, router.pathname, useAccount.isAuthenticated())
  }, [router.pathname, useAccount.flag])

  return (
    <>
      <Head>
        <title>Bank-Dashboard</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          fontFamily: 'Montserrat',
        }}
      >
        <Component {...pageProps} />
        <Notifications position="top-center" />
      </MantineProvider>
    </>
  )
}
