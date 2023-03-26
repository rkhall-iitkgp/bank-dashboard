import styled from '@emotion/styled'
import { Card, Group, Image, Modal, Select, Stack, Text } from '@mantine/core'
import { SelectItems } from '@mantine/core/lib/Select/SelectItems/SelectItems'
import { useDisclosure } from '@mantine/hooks'
import { Ref, useEffect, useState } from 'react'
import useStorage from '../../hooks/useStorage'
import Filter from '../filter'
import Navbar from '../home/navbar/navbar'
import transms from '../transms'
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

  return (
    <div style={{ backgroundColor: '#F4F4F4' }}>
      <Navbar />
      <Modal
        radius={'xl'}
        withCloseButton={false}
        size="lg"
        opened={opened}
        onClose={close}
        centered
      >
        <Filter account={account_id} setAccount={setAccount_id} />
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

          <RecentTransactions transactions={transactionData} />
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
