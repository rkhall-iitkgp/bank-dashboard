import styled from '@emotion/styled'
import { Card, Group, Image, Stack, Text } from '@mantine/core'
import { useState } from 'react'
import Navbar from '../home/navbar/navbar'
import CashCard from './cashcard'
import EodBalance from './eodBalance'
import RecentTransactions from './recenttransactions'
import FinancialStatistics from './statistics'

const AccountSelect = styled(Group)`
  border-radius: 30px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 0.8rem 1.2rem;
`

const Dashboard = () => {
  const [depositLimit, setDepositLimit] = useState(1000)
  const [withdrawlLimit, setWithdrawlLimit] = useState(1000)

  return (
    <div style={{ backgroundColor: '#F4F4F4' }}>
      <Navbar />

      <Group className="dashboard-group" align={'flex-start'} pt={20}>
        <Stack className="left-side" mx={20}>
          <Group my={10} style={{ justifyContent: 'space-between' }}>
            <Card h={50} w={50} bg={'#0062D6'} p={10} radius={50} ml={15}>
              <Image src={'icons/filter.png'} my="auto" alt="filter-icon" />
            </Card>
            <AccountSelect>
              <Image
                src={'icons/sbilogo.png'}
                height={'28px'}
                width={'28px'}
                alt="sbi-logo"
              />
              <Text c={'#7E7E7E'}>**** 3241 ▼</Text>
            </AccountSelect>
          </Group>

          <Group style={{ justifyContent: 'space-between' }}>
            <CashCard
              n={5}
              type={'deposit'}
              limit={depositLimit}
              setLimit={setDepositLimit}
            />
            <CashCard
              n={10}
              type={'withdrawl'}
              limit={withdrawlLimit}
              setLimit={setWithdrawlLimit}
            />
          </Group>

          <EodBalance balance="$1,23,456" comparision={4.6} />

          <RecentTransactions />
        </Stack>

        <Stack className="right-side">
          <Group mx={20}>
            <Text fz={35} fw={700} ff="Montserrat">
              Welcome Back,
            </Text>
            <Text fz={35} fw={700} c={'#0062D6'} ff="Montserrat">
              Bill Gates!
            </Text>
          </Group>

          <FinancialStatistics />
        </Stack>
      </Group>
    </div>
  )
}

export default Dashboard
