import FinancialStatistics from '../components/dashboard/statistics'
import { FinancialRatios } from '../components/dashboard/FinancialRatios'
import { TotalBalance } from '../components/dashboard/TotalBalance'
import RecentTransactions from '../components/dashboard/recenttransactions'
import LeftPane from '../components/profile/LeftPane'
import { Flex, Group } from '@mantine/core'

export default function DashboardPdf(ref) {
  return (
    <div ref={ref}>
      {/* <TotalBalance /> */}
      <FinancialRatios />
      <FinancialStatistics />
      {/* <RecentTransactions /> */}
    </div>
  )
}
