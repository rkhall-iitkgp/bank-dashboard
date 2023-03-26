import { Card, Group, Image, Modal, Select, Stack, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'
import Filter from '../filter'
import Navbar from '../home/navbar/navbar'
import CashCard from './CashLimitCard'
import EodBalance from './EODBalanceCard'
import { FinancialRatios } from './FinancialRatios'
import FinancialStatistics from './statistics'
import { TotalBalance } from './TotalBalance'
import RecentTransactions from './RecentTransactions'
import styled from '@emotion/styled'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

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

  const AccountFakeData = [{ "id": 1, "account_no": "465645862596", "ifsc": "SBIN100002", "upi": null, "balance": 0, "user_id": 1 }, { "id": 2, "account_no": "465658632596", "ifsc": "SBIN100002", "upi": null, "balance": 0, "user_id": 1 }, { "id": 3, "account_no": "980323909102", "ifsc": "SBIN0928192", "upi": null, "balance": 0, "user_id": 1 }]

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
        <LeftPane accountsList={AccountFakeData} />
        <RightPane />
      </Container>
    </div>
  )
}

export default Dashboard
