import useStorage from '../../hooks/useStorage'
import { createStyles, Group, Stack, Tabs, Text } from '@mantine/core'
import ExportButton from './ExportButton'
import { FinancialRatios } from './FinancialRatios'
import FinancialStatistics from './statistics'
import EodBalance from './EODBalanceCard'
import StockStatisticsx from './StocksStatistics'
import StockStatistics from './stockStats'
import { TotalBalance } from './TotalBalance'
import useAccountStore from '../Store/Account'
import dayjs from 'dayjs'
import { useState } from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import { Card } from '@mantine/core'
const useStyles = createStyles((theme) => ({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '97.5%',
  },
  tab: {
    color: 'black',
    fontWeight: 600,
    fontSize: '1.5rem',
    paddingInline: '3rem',
    fontFamily: 'Montserrat',
    backgroundColor: '#f4f4f4',

    '&:first-of-type': {
      borderTopLeftRadius: '20px',
    },

    '&:last-of-type': {
      borderTopRightRadius: '20px',
    },
    '&[data-active]': {
      backgroundColor: '#fff',
      border: 'none',
      color: theme.colors.blue[7],
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
    },
  },

  tabsPanel: {
    backgroundColor: '#fff',
    // borderRadius: '40px',
    // borderTopLeftRadius: '0px !important',
    height: '0',
    border: 'none',
  },
}))
const Empty=()=>{
  return (
    <Card
    // radius={'lg'}

    style={{
      boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.1)',
    }}
    mr={15}
  >
    <Group
      align={'center'}
      style={{
        flex: 1,
        maxHeight: '53vh',
        overflow: 'auto',
        margin: 'auto',
        alignItems: 'center'
      }}
    >
       <Image
              src={'/icons/empty.png'}
              alt="filter-icon"
              height={300}
              width={300}
            />
    </Group>
  </Card>
)
}
const RightPane = () => {
  const { getItem } = useStorage()
  const { classes } = useStyles()
  const useAccount = useAccountStore()
  const transactions = useAccount.Transaction

  let thisbalance = transactions.at(-1)?.balance || 0

  let accounts = getItem('accounts')
  let fetchedAccount = JSON.parse(accounts ? accounts : '[]').filter(v => v.account_no === useAccount.account_no)[0];

  let currentDay = dayjs(new Date())
  let currentBalance = 0, sum = 0, numDays = 0;
  for (let i = dayjs(transactions.at(0)?.date || new Date()); i < currentDay; i = i.add(1, 'day')) {
    currentBalance = transactions.filter(x => i.isSame(x.date, 'date')).at(-1)?.balance || currentBalance;
    sum += currentBalance
    numDays++;
  }

  let lastweek = dayjs(new Date()).subtract(1, 'week');
  let lastWeekFiltered = transactions.filter(x => dayjs(x.date) < lastweek);
  let lastWeekBalance = lastWeekFiltered.at(-1)?.balance
  let lastweeksum = 0, lastweeknumdays = 0, lastweekcurrentbalance = 0;
  for (let i = dayjs(transactions.at(0)?.date || new Date()); i < lastweek; i = i.add(1, 'day')) {
    lastweekcurrentbalance = transactions.filter(x => i.isSame(x.date, 'date')).at(-1)?.balance || lastweekcurrentbalance;
    lastweeksum += lastweekcurrentbalance
    lastweeknumdays++;
  }

  let EODlastweek = Math.round(lastweeksum / lastweeknumdays)


  const [name, setName] = useState('');
  useEffect(() => {
    setName(getItem('name'));
  }, [])

  return (
    <>
      <Stack className="right-side" style={{ flex: 2.5 }}>
        <Group mx={10} className={classes.header}>
          <div style={{ display: 'flex' }}>
            <Text fz={35} fw={700} ff="Montserrat">
              Welcome Back,&nbsp;
            </Text>
            <Text fz={35} fw={700} c={'#0062D6'} ff="Montserrat">
              {name + ' !'}
              {/* {name} */}
            </Text>
          </div>
          <div style={{ justifyContent: 'flex-end' }}>
            <ExportButton />
          </div>
        </Group>
        <Group>
          <TotalBalance accountNumber={"****" + useAccount.account_no.slice(8, 12)} increment={
            Math.round((fetchedAccount?.balance - (lastWeekBalance || 0)) * 100 / (lastWeekBalance || 1))} timePeriod={1} totalBalance={thisbalance} />
          <EodBalance balance={numDays != 0 ? Math.round(sum / (numDays)).toString() : 'No Data'} comparision={4.6} />
          <FinancialRatios />
        </Group>
        <Tabs defaultValue="financial">
          <Tabs.List style={{ border: 'none' }}>
            <Tabs.Tab value="financial" className={classes.tab}>
              Finances
            </Tabs.Tab>
            <Tabs.Tab value="stocks" className={classes.tab}>
              Stocks
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="financial" className={classes.tabsPanel}>
            {transactions[0].description==='' && <Empty/>}
          {transactions[0].description!=='' && <FinancialStatistics />}
          </Tabs.Panel>

          <Tabs.Panel value="stocks" className={classes.tabsPanel}>
            {/* <StockStatisticsx /> */}
            <StockStatistics />
          
          </Tabs.Panel>
          {/* {    console.log('rendered6846')} */}
        </Tabs>
      </Stack>
    </>
  )
}

export default RightPane
