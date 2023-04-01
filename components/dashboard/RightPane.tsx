import useStorage from '../../hooks/useStorage'
import {
  createStyles,
  Group,
  InputProps,
  Stack,
  Tabs,
  Text,
} from '@mantine/core'
import { ExportButton } from './ExportButton'
import { FinancialRatios } from './FinancialRatios'
import FinancialStatistics from './statistics'
import EodBalance from './EODBalanceCard'
import StockStatisticsx from './StocksStatistics'
import StockStatistics from './stockStats'
import { TotalBalance } from './TotalBalance'
import useAccountStore from '../Store/Account'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import { useEffect } from 'react'
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

const RightPane = React.forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const { getItem } = useStorage()
  const { classes } = useStyles()
  const useAccount = useAccountStore();
  const transactions = useAccount.Transaction;
  let datelegends = new Set<string>();
  transactions.forEach(v => datelegends.add(v.date))
  let curr = dayjs(new Date()).subtract(1, 'week');
  console.log(curr.toDate());

  transactions.sort((a, b) => {
    let A = new Date(a.date);
    let B = new Date(b.date);
    return A > B ? 1 : -1
  })
  let thisbalance = transactions.at(-1)?.balance || 0
  // console.log(`this balance = ${thisbalance}`)

  let accounts = getItem('accounts')
  let fetchedAccount = JSON.parse(accounts ? accounts : '[]').filter(v => v.account_no === useAccount.account_no)[0];

  let dateslist = Array.from(datelegends);
  dateslist.sort((a, b) => {
    let A = new Date(a)
    let B = new Date(b)
    return A > B ? 1 : -1
  })

  let sum = 0;

  dateslist.forEach(k => {
    let datefiltered = transactions.filter(x => x.date === k)
    datefiltered.sort((a, b) => {
      let A = new Date(a.date);
      let B = new Date(b.date);
      return A > B ? 1 : -1
    })
    sum += datefiltered.at(-1)?.balance || 0;
  })

  let lastWeekFiltered = transactions.filter(x => dayjs(x.date) < curr);
  lastWeekFiltered.sort((a, b) => {
    let A = new Date(a.date);
    let B = new Date(b.date);
    return A > B ? 1 : -1
  })
  let lastWeekBalance = lastWeekFiltered.at(-1)?.balance || 0

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
            <ExportButton ref={ref} />
          </div>
        </Group>
        <Group>
          <TotalBalance accountNumber={"****" + useAccount.account_no.slice(8, 12)} increment={
            Math.round((fetchedAccount?.balance - (lastWeekBalance || 0)) * 100 / (lastWeekBalance || 1))} timePeriod={1} totalBalance={"$" + thisbalance} />
          <EodBalance balance={dateslist.length != 0 ? "$" + Math.round(sum / (dateslist.length)) : 'No Data'} comparision={4.6} />
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
            <FinancialStatistics />
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
})

export default RightPane
