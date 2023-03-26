import { Stack, Group, Text } from '@mantine/core'
import { FinancialRatios } from './FinancialRatios'
import FinancialStatistics from './statistics'
import { TotalBalance } from './TotalBalance'

const RightPane = () => {
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
        </Group>
        <Group>
          <TotalBalance />
          <FinancialRatios />
        </Group>

        <FinancialStatistics />
      </Stack>
    </>
  )
}

export default RightPane
