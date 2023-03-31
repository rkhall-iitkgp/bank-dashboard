
import { Card, Group, Text, Flex } from '@mantine/core'
import RecentInvestments from './recentInvestments'
// import TradingViewWidget from 'react-tradingview-widget'
import dynamic from 'next/dynamic'

const MarketOverview = dynamic(
  () => import('react-ts-tradingview-widgets').then((w)=> w.MarketOverview),
  {
    ssr: false,
  },
)

const StockStatistics = () => (
  <Card
    radius={'lg'}
    style={{
      boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.1)',
    }}
    mr={15}
  >
    <Text
      mx={30}
      mt={25}
      c={'#4D4B4B'}
      ff="Montserrat"
      fw={800}
      fz={30}
      style={{ paddingBottom: `1.875rem`, marginTop: `1.5625rem` }}
    >
      Stocks Analysis
    </Text>
    <Flex>
        {/* <TradingViewWidget /> */}
        <MarketOverview colorTheme="light" height={400} width={1010} showFloatingTooltip></MarketOverview>

        {/* {    console.log('rendered4')} */}
      {/* <RecentInvestments /> */}
    </Flex>
  </Card>
)

export default StockStatistics
