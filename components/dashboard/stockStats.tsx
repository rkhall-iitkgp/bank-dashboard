import TradingViewWidget from 'react-tradingview-widget'
import { Card, Group, Text, Flex } from '@mantine/core'
import RecentInvestments from './recentInvestments'

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
        <TradingViewWidget 
          height={300}
          width={1000}
        />
      {/* <RecentInvestments /> */}
    </Flex>
  </Card>
)

export default StockStatistics
