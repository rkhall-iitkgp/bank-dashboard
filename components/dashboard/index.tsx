import { Card, Group, Image, Modal, Select, Stack, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import Filter from '../filter'
import Navbar from '../home/navbar/navbar'
import CashCard from './CashLimitCard'
import EodBalance from './EODBalanceCard'
import { FinancialRatios } from './FinancialRatios'
import FinancialStatistics from './statistics'
import { TotalBalance } from './TotalBalance'
import RecentTransactions from './recenttransactions'
import styled from '@emotion/styled'
import LeftPane from './LeftPane'
import RightPane from './RightPane'
import useStorage from '../../hooks/useStorage'

const Dashboard = () => {
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
  const { getItem } = useStorage()
  let AccountFakeData: any[] = JSON.parse(getItem("accounts"))
  const Container = styled.div`
    display: flex;
    width: '100%';
    height: 100vh;
    margin-top: 16px;
  `
  useEffect(() => {
  }, [])

  return (
    <div style={{ backgroundColor: '#F4F4F4' }}>
      <Navbar />
      <Container>
        <LeftPane accountsList={AccountFakeData} />
        <RightPane />
      </Container>
    </div>
  )
}

export default Dashboard
