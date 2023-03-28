import styled from '@emotion/styled'
import { Group, Image, Text } from '@mantine/core'
import Navbar from '../home/navbar/navbar'
import LeftPane from './LeftPane'
import RightPane from './RightPane'
import useStorage from '../../hooks/useStorage'
import transms from '../transms'
import { useEffect, useState } from 'react'
import { useDisclosure } from '@mantine/hooks'

const Dashboard = () => {
  const [depositLimit, setDepositLimit] = useState(1000)
  const [withdrawlLimit, setWithdrawlLimit] = useState(1000)
  const [opened, { open, close }] = useDisclosure(false)
  const [account_id, setAccount_id] = useState(1);
  const { getItem } = useStorage();
  const accessToken = getItem('access_token')
  const [transactionData, setTransactionData] = useState(
    [{ description: '', date: '', credit: 0, debit: 0, mode: '0', category: '' }]
  )

  const GetTransactions = () => {
    let response = transms.post('/getTrxn/', {
      mpin: '1234',
      account_no: '1',
      timeline: '500'
    }, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    }).then(res => res.data);
    response.then(v => {
      console.log('response = ', v);
      setTransactionData(v.transactions);
    })
  }

  useEffect(GetTransactions, []);

  const AccountComponent = (props: { label: string; ref: any }) => {
    return (
      <Group
        ref={props.ref}
        style={{
          borderRadius: '30px',
          cursor: 'pointer',
          padding: '0.8rem 1.2rem',
        }}
      >
        <Image
          src={'icons/sbilogo.png'}
          height={'28px'}
          width={'28px'}
          alt="sbi-logo"
        />
        <Text c={'#7E7E7E'}>{props.label}</Text>
      </Group>
    )
  }

  const ACCOUNTFAKEDATA = JSON.parse(getItem('accounts')).map((v: { account_no: string }) => v.account_no);

  const Container = styled.div`
    display: flex;
    width: '100%';
    height: 100vh;
    margin-top: 16px;
  `
  return (
    <div style={{ backgroundColor: '#F4F4F4' }}>
      <Navbar />

      <Container>
        <LeftPane accountsList={ACCOUNTFAKEDATA} />
        <RightPane />
      </Container>
    </div>
  )
}

export default Dashboard