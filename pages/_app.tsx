import { AppProps } from 'next/app'
import Head from 'next/head'
import './../styles/globals.css'
import { Alert, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications';
import { useEffect } from 'react';
import useAccountStore from '../components/Store/Account';
import { useRouter } from 'next/router';
import useStorage from '../hooks/useStorage';
import dayjs from 'dayjs';
import bcrypt from 'bcryptjs'

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  const useAccount = useAccountStore()
  const router = useRouter()
  const { getItem, setItem } = useStorage()
  let flag = useAccountStore(state => state.flag)
  useEffect(() => {
    useAccount.token = getItem("access_token")
    console.log('getItem("token")', getItem("access_token"))


  }, [])
  useEffect(() => {

    useAccount.isAuthenticated()

  }, [router.pathname])
  useEffect(() => {
    console.log('done', useAccount.flag)
    if (!useAccount.flag) {
      router.push('/')
      console.log('useAccount.flag', useAccount.flag)
    }
  }, [flag])

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
