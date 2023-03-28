import { Card, Flex, Text } from '@mantine/core'
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets'

const StockStatistics = () => (
  <Card
    // radius={'lg'}
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
      style={{ paddingBottom: `1.875rem`, marginTop: `0.5rem` }}
    >
      Stocks Analysis
    </Text>
    <Flex>
      {/* <AdvancedRealTimeChart height={280} width={1010} symbol='.' /> */}
      {/* <RecentInvestments /> */}
    </Flex>
  </Card>
)

export default StockStatistics
