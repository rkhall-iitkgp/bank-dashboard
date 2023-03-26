import { Stack, Group, Text, Select, createStyles } from '@mantine/core'
import { FinancialRatios } from './FinancialRatios'
import FinancialStatistics from './statistics'
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
}));

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

        <FinancialStatistics />
      </Stack>
    </>
  )
}

export default RightPane
