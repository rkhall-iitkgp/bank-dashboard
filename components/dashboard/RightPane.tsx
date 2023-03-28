import { Stack, Group, Text, Select, createStyles, Tabs } from '@mantine/core'
import { useState } from 'react'
import { FinancialRatios } from './FinancialRatios'
import FinancialStatistics from './statistics'
import StockStatistics from './StocksStatistics'
import { TotalBalance } from './TotalBalance'
import ExportButton from './ExportButton'

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '50%',
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
  }
}))

const RightPane = () => {
  const { classes } = useStyles()

  return (
    <>
      <Stack className="right-side" style={{ flex: 2.5 }} >
        <Group mx={10}>
          <Text fz={35} fw={700} ff="Montserrat">
            Welcome Back,
          </Text>
          <Text fz={35} fw={700} c={'#0062D6'} ff="Montserrat">
            Bill Gates!
          </Text>
          <div className={classes.header}>
            <ExportButton />
          </div>
        </Group>
        <Group>
          <TotalBalance />
          <FinancialRatios />
        </Group>
        <Tabs
          defaultValue="financial"
        >
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

export default RightPane;