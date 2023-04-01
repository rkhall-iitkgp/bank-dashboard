import FinancialStatistics from '../components/dashboard/statistics'
import { FinancialRatios } from '../components/dashboard/FinancialRatios'
import { TotalBalance } from '../components/dashboard/TotalBalance'
import RecentTransactions from '../components/dashboard/recenttransactions'
import { Flex, Group } from '@mantine/core'
import useAccountStore from '../components/Store/Account'
import { useRef } from 'react'
import styled from '@emotion/styled'
import React from 'react'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

function DashboardPdf(ref) {
  const useAccount = useAccountStore()

  return (
    <div ref={ref}>
      <Container>
        <TotalBalance
          totalBalance={undefined}
          increment={undefined}
          timePeriod={undefined}
          accountNumber={undefined}
        />
        <FinancialRatios />
      <FinancialStatistics />
      <RecentTransactions transactions={useAccount.Transaction} />
      </Container>
    </div>
  )
}

export default React.forwardRef(DashboardPdf);

