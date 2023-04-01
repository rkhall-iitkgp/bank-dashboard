import { Card, Group, Image, LoadingOverlay, Modal, Select, Stack, Text } from '@mantine/core'
import styled from '@emotion/styled'
import Navbar from '../home/navbar/navbar'
import LeftPane from './LeftPane'
import RightPane from './RightPane'
import useStorage from '../../hooks/useStorage'
import { useEffect, useState } from 'react'
import useAccountStore from '../Store/Account'
import { showNotification } from '@mantine/notifications'
import { useRouter } from 'next/router'

const Dashboard = () => {
  const [depositLimit, setDepositLimit] = useState(1000)
  const [withdrawlLimit, setWithdrawlLimit] = useState(1000)
  const { getItem } = useStorage()

  const accounts = getItem('accounts')
  let ACCOUNTSDATA = [];
  try {
    ACCOUNTSDATA = JSON.parse(accounts ?? JSON.stringify({}))?.map(
      (v: { account_no: string }) => { return { account_no: v.account_no } },
    )
  } catch {
    console.log('accounts data: json parsing error')
  }

  const router = useRouter();

  useEffect(() => {
    if (!useAccount.account_no) {
      router.replace('/home')
      showNotification({ message: "Please re-enter your details" })
    }
  }, [])

  const useAccount = useAccountStore();
  // useEffect(() => {


  //   return () => {
  //     useAccountStore.setState({ uploaded: true })
  //   }
  // }, [])

  const Container = styled.div`
    display: flex;
    width: '100%';
    height: 100vh;
    margin-top: 16px;
  `

  return (
    <div style={{ backgroundColor: '#F4F4F4' }}>
      <Navbar dashClickHandler={() => { }} />

      <Container>
        <LoadingOverlay visible={useAccount.Loading} overlayBlur={2} />
        <LeftPane accountsList={ACCOUNTSDATA} useAccount={useAccount} />
        <RightPane />
      </Container>
    </div>
  )
}

export default Dashboard
