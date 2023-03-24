import styled from '@emotion/styled'
import { Card, Group, Image, Modal, Select, Stack, Text } from '@mantine/core'
import { SelectItems } from '@mantine/core/lib/Select/SelectItems/SelectItems'
import { useDisclosure } from '@mantine/hooks'
import { Ref, useState } from 'react'
import Filter from '../filter'
import Navbar from '../home/navbar/navbar'
import CashCard from './cashcard'
import EodBalance from './eodBalance'
import { FinancialRatios } from './FinancialRatios'
import RecentTransactions from './recenttransactions'
import FinancialStatistics from './statistics'
import { TotalBalance } from './TotalBalance'

const Dashboard = () => {
  const [depositLimit, setDepositLimit] = useState(1000)
  const [withdrawlLimit, setWithdrawlLimit] = useState(1000)
  const [opened, { open, close }] = useDisclosure(false)

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

  const ACCOUNTFAKEDATA = ['**** 1234', '**** 1324', '**** 4231', '**** 3214']

  return (
    <div style={{ backgroundColor: '#F4F4F4' }}>
      <Navbar />
      <Modal
        radius={'lg'}
        withCloseButton={false}
        size="lg"
        opened={opened}
        onClose={close}
        centered
      >
        <Filter />
      </Modal>

      <Group className="dashboard-group" align={'flex-start'} pt={20}>
        <Stack className="left-side" mx={20} style={{ flex: 1 }}>
          <Group my={10} style={{ justifyContent: 'space-between' }}>
            <Card
              h={50}
              w={50}
              bg={'#0062D6'}
              p={10}
              radius={50}
              ml={15}
              onClick={open}
              style={{ cursor: 'pointer' }}
            >
              <Image src={'icons/filter.png'} my="auto" alt="filter-icon" />
            </Card>
            {/* <Text c={'#7E7E7E'}>**** 3241 ▼</Text> */}
            <Group
              style={{
                borderRadius: '30px',
                cursor: 'pointer',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                padding: '0.8rem 1.2rem',
              }}
            >
              <Select
                icon={
                  <Image
                    src={'icons/sbilogo.png'}
                    height={'28px'}
                    width={'28px'}
                    alt="sbi-logo"
                  />
                }
                placeholder="bank account"
                data={ACCOUNTFAKEDATA}
              />
            </Group>
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

        <Stack className="right-side" style={{ flex: 2.5 }}>
          <Group mx={10}>
            <Text fz={35} fw={700} ff="Montserrat">
              Welcome Back,
            </Text>
            <Text fz={35} fw={700} c={'#0062D6'} ff="Montserrat">
              Bill Gates!
            </Text>
          </Group>
          <Group>
            <TotalBalance />
            <FinancialRatios />
          </Group>

          <FinancialStatistics />
        </Stack>
      </Group>
    </div>
  )
}

export default Dashboard
