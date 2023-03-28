import { Stack, Group, Text, Select, createStyles, Tabs } from '@mantine/core'
import { useState } from 'react'
import { FinancialRatios } from './FinancialRatios'
import FinancialStatistics from './statistics'
import StockStatistics from './stockStats'
import { TotalBalance } from './TotalBalance'
import ExportButton from './ExportButton'

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '30rem',
  },
  tab: {
    color: 'black',
    fontWeight: 600,
    fontSize: '1.5rem',
    paddingInline: '2rem',
    fontFamily: 'Montserrat',
    background: 'white',

  },
  tabsPanel: {
    background: 'white',
    borderTopLeftRadius: '0px',
  }
}))

const RightPane = () => {
  const { classes } = useStyles()

  return (
    <>
      <Stack className="right-side" style={{ flex: 2.5 }}>
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
          radius="md"
          defaultValue="financial"
        >
          <Tabs.List>
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