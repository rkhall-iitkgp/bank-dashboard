import styled from '@emotion/styled'
import {
  Stack,
  Group,
  Card,
  Select,
  Image,
  Modal,
  Text,
  Avatar,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { forwardRef, useEffect, useState } from 'react'
import Filter from '../filter'
import useAccountStore from '../Store/Account'
import CashCard from './CashLimitCard'
import EodBalance from './EODBalanceCard'
import RecentTransactions from './recenttransactions'
import React from 'react'
import { FinancialRatios } from './FinancialRatios'
import FinancialStatistics from './statistics'
import { TotalBalance } from './TotalBalance'
import FinancialStatisticsPdf from './statisticsPdf'
import useStorage from '../../hooks/useStorage'
import dayjs from 'dayjs'

const FilterRow = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  height: 60px;
`
const Container = styled.div`
  margin: 0px 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`
const FilterCard = styled.div`
  padding: 8px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #0062d6;
  cursor: pointer;
  color: white;
  flex: 2;
`
const SelectBankAccount = styled.div`
  padding: 8px;
  border-radius: 50px;
  display: flex;
  gap: 8px;
  cursor: pointer;
  color: white;
  flex: 3;
`
const ContainerLeft = styled(Container)`
  flex: 1;
  @media (max-width: 1450px) {
    flex: 1.25;
  }
  @media (max-width: 1200px) {
    flex: 2;
  }
`

const Print = styled.div`
  @media screen {
    display: none;
  }
`

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string
  label: string
  description: string
}
const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} size={20} />

        <div>
          <Text size="sm">{label}</Text>
          {/* <Text size="xs" opacity={0.65}>
            {description}
          </Text> */}
        </div>
      </Group>
    </div>
  ),
)
// const useAccount = useAccountStore();
// const transactions = useAccount.Transaction;
// let datelegends = new Set<string>()
// let dateslist = Array.from(datelegends)
// dateslist.sort((a, b) => {
//   let A = new Date(a)
//   let B = new Date(b)
//   return A > B ? 1 : -1
// })
// let sum = 0;

// dateslist.forEach(k => {
//   let datefiltered = transactions.filter(x => x.date === k)
//   datefiltered.sort((a, b) => {
//     let A = new Date(a.date);
//     let B = new Date(b.date);
//     return A > B ? 1 : -1
//   })
//   sum += datefiltered.at(-1)?.balance || 0;
// })

interface Props {
  accountsList: any[]
  useAccount: any
  increment: any
}
const LeftPane = React.forwardRef<HTMLDivElement, Props>(
  ({ accountsList, useAccount }, ref) => {
    // const useAccount = useAccountStore();
    const [depositLimit, setDepositLimit] = useState(1000)
    const [withdrawlLimit, setWithdrawlLimit] = useState(1000)
    const selectedBankAccount = useAccount.account_no
    const [opened, { open, close }] = useDisclosure(false)
    const { getItem } = useStorage()
    const [name, setName] = useState('');
    useEffect(() => {
      setName(getItem('name'));
    }, [])
    const transactions = useAccount.Transaction;
    let currentDay = dayjs(new Date())
    let currentBalance = 0, sum = 0, numDays = 0;
    for (let i = dayjs(transactions.at(0)?.date || new Date()); i < currentDay; i = i.add(1, 'day')) {
      currentBalance = transactions.filter(x => i.isSame(x.date, 'date')).at(-1)?.balance || currentBalance;
      sum += currentBalance
      numDays++;
    }
    let accounts = getItem('accounts')
    let fetchedAccount = JSON.parse(accounts ? accounts : '[]').filter(v => v.account_no === useAccount.account_no)[0];
    let lastweek = dayjs(new Date()).subtract(1, 'week');
    let lastWeekFiltered = transactions.filter(x => dayjs(x.date) < lastweek);
    let lastWeekBalance = lastWeekFiltered.at(-1)?.balance
    let lastweeksum = 0, lastweeknumdays = 0, lastweekcurrentbalance = 0;
    for (let i = dayjs(transactions.at(0)?.date || new Date()); i < lastweek; i = i.add(1, 'day')) {
      lastweekcurrentbalance = transactions.filter(x => i.isSame(x.date, 'date')).at(-1)?.balance || lastweekcurrentbalance;
      lastweeksum += lastweekcurrentbalance
      lastweeknumdays++;
    }

    useEffect(() => {
      accountsList.forEach((e) => {
        e.value = e.account_no
        e.label = '****' + e.account_no.slice(8, 12)
        e.image = 'icons/sbilogo.png'
        e.name = e.account_no
        e.description = e.account_no
      })
    }, [])
    useEffect(() => {
      console.log('useAccount.Transaction', useAccount.Transaction)
      console.log('selectedBankAccount', selectedBankAccount)
    }, [selectedBankAccount])
    const [account, setaccount] = useState(0)
    const uploaded = useAccountStore((state) => state.uploaded)

    return (
      <>
        <Modal
          radius={'lg'}
          withCloseButton={false}
          size="lg"
          opened={opened}
          onClose={close}
          centered
        >
          <Filter
            todashboard={false}
            close={close}
            setIsanalysisopen={(x) => {}}
          />
          {/* <Filter account={account} setAccount={setaccount} /> */}
        </Modal>
        <ContainerLeft>
          {!uploaded && (
            <>
              <FilterRow style={{ justifyContent: 'space-between' }}>
                <FilterCard onClick={open}>
                  Apply Filter
                  <Image
                    src={'icons/filter.png'}
                    alt="filter-icon"
                    height={20}
                    width={20}
                  />
                </FilterCard>
                <SelectBankAccount>
                  <Select
                    icon={
                      <Image
                        src={'icons/sbilogo.png'}
                        height={20}
                        width={20}
                        alt="sbi-logo"
                      />
                    }
                    itemComponent={SelectItem}
                    // searchable
                    radius="lg"
                    placeholder="Bank Account"
                    value={selectedBankAccount}
                    onChange={(e) => {
                      if (e) {
                        useAccount.account_no = e.toString()
                        useAccount.setTransaction()
                      }
                    }}
                    data={accountsList}
                  />
                </SelectBankAccount>
              </FilterRow>

              <Group style={{ justifyContent: 'space-evenly' }}>
                <CashCard
                  num={useAccount.Transaction?.filter((v) => v.credit > 0)?.map(
                    (v) => v.credit,
                  )}
                  type={'deposit'}
                  limit={depositLimit}
                  setLimit={setDepositLimit}
                />
                <CashCard
                  num={useAccount.Transaction?.filter((v) => v.debit > 0)?.map(
                    (v) => v.debit,
                  )}
                  type={'withdrawl'}
                  limit={withdrawlLimit}
                  setLimit={setWithdrawlLimit}
                />
              </Group>
            </>
          )}
          {/* <EodBalance balance="$1,23,456" comparision={4.6} /> */}
          <RecentTransactions transactions={useAccount.Transaction} />
        </ContainerLeft>

        <div ref={ref}>
          <Print>
            <h1
              style={{
                textAlign: 'center',
                color: '#0062d6',
                fontFamily: 'Montserrat',
              }}
            >
              shiftbank
            </h1>
            <h3 style={{ marginLeft: '10px' }}>
              Hello,&nbsp;
              <span style={{ color: '#0062d6' }}>{name + '!'}</span> Here
              is your financial report.
            </h3>
            <p style={{ marginLeft: '10px' }}>
              Explore your bank balance, recent transactions and analysis in the
              form of visually appealing graphs.
            </p>
            <Group style={{ justifyContent: 'center', marginLeft: '10px' }}>
              <TotalBalance
                totalBalance={useAccount?.Transaction.at(-1)?.balance || 0}
                increment={
                  Math.round((fetchedAccount?.balance - (lastWeekBalance || 0)) * 100 / (lastWeekBalance || 1))} timePeriod={1} 
              />
              <div style={{ fontSize: '13px' , width: '70%'}}>
              <FinancialRatios />
              </div>
            </Group>
            <br />
            <br />
            <div style={{ marginLeft: '10px', marginBottom: '200px'}}>
              <FinancialStatisticsPdf />
            </div>
            <br />
            <br />
            <br />
            <br />
            <RecentTransactions transactions={useAccount?.Transaction} />
          </Print>
        </div>
      </>
    )
  },
)

export default LeftPane
