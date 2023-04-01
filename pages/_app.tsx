import { AppProps } from 'next/app'
import Head from 'next/head'
import './../styles/globals.css'
import { MantineProvider } from '@mantine/core'
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
    // const missionImpossible3 = getItem("hash")
    // const missionImpossible4 = bcrypt.
    // useAccountStore.setState()
    // window.addEventListener('unload', (event) => {
    //   event.preventDefault()
    //   // console.log('hello')
    //   let missionImpossible = {
    //     token: useAccount.token,
    //     account_no: useAccount.account_no,
    //     mpin: useAccount.mpin,
    //     startDate: useAccount.startDate,
    //     endDate: useAccount.endDate,
    //     Transaction: useAccount.Transaction,
    //     Loading: useAccount.Loading,
    //     flag: useAccount.flag,
    //     uploaded: useAccount.uploaded,
    //     DTI_ratio: useAccount.DTI_ratio,
    //   }
    //   let missionImpossible2 = bcrypt.hashSync(missionImpossible, "InstiKaBaapRK!RK!RK!")
    //   setItem('hash', missionImpossible2)
    // })
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
