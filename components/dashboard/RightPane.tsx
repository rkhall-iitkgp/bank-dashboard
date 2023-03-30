import useStorage from '../../hooks/useStorage'
import { createStyles, Group, Stack, Tabs, Text } from '@mantine/core'
import ExportButton from './ExportButton'
import { FinancialRatios } from './FinancialRatios'
import FinancialStatistics from './statistics'
import EodBalance from './EODBalanceCard'
import StockStatistics from './StocksStatistics'
import { TotalBalance } from './TotalBalance'
import useAccountStore from '../Store/Account'

const useStyles = createStyles((theme) => ({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
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

const RightPane = () => {
  const { getItem } = useStorage()
  const { classes } = useStyles()
  const useAccount = useAccountStore();
  const transactions = useAccount.Transaction;
  let datelegends = new Set<string>();
  transactions.forEach(v => datelegends.add(v.date))

  let dateslist = Array.from(datelegends);

  dateslist.sort((a, b) => {
    let A = new Date(a);
    let B = new Date(b);
    return A > B ? 1 : -1
  })

  let total = 0;
  let sum = 0;
  dateslist.forEach(k => {
    console.log(k)
    transactions.filter(x => x.date === k).forEach(x => { total += x.credit - x.debit })
    sum += total;
  })

  return (
    <>
      <Stack className="right-side" style={{ flex: 2.5 }}>
        <Group mx={10} className={classes.header}>
          <div style={{ display: 'flex' }}>
            <Text fz={35} fw={700} ff="Montserrat">
              Welcome Back!&nbsp;
            </Text>
            <Text fz={35} fw={700} c={'#0062D6'} ff="Montserrat">
              {getItem('name')}
            </Text>
          </div>
          <div style={{ justifyContent: 'flex-end' }}>
            <ExportButton />
          </div>
        </Group>
        <Group>
          <TotalBalance accountNumber={"****" + useAccount.account_no.slice(8, 12)} increment={5} timePeriod={2} totalBalance={"$" + total} />
          <EodBalance balance={"$" + sum / (dateslist.length)} comparision={4.6} />
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
            <StockStatistics />
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </>
  )
}

export default RightPane
