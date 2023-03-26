import styled from '@emotion/styled'
import { Stack, Group, Card, Select, Image, Modal, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'
import Filter from '../filter'
import CashCard from './CashLimitCard'
import EodBalance from './EODBalanceCard'
import RecentTransactions from './RecentTransactions'

const FilterRow = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
`
const Container = styled.div`
  margin: 0px 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`
const FilterCard = styled.div`
  padding: 8px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #0062d6;
  cursor: pointer;
  color: white;
  flex: 2;
`
const SelectBankAccount = styled.div`
  padding: 8px;
  border-radius: 50px;
  display: flex;
  gap: 8px;
  background-color: #0062d6;
  cursor: pointer;
  color: white;
  flex: 3;
`

interface Props {
  accountsList: any[]
}

const LeftPane = ({ accountsList }: Props) => {
  const [depositLimit, setDepositLimit] = useState(1000)
  const [withdrawlLimit, setWithdrawlLimit] = useState(1000)
  const [selectedBankAccount, SetSelectedBankAccount] = useState<string | null>(
    '1256',
  )
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal
        radius={'lg'}
        withCloseButton={false}
        size="lg"
        opened={opened}
        onClose={close}
        centered
      >
        <Filter />
      </Modal>
      <Container style={{ flex: 1 }}>
        <FilterRow style={{ justifyContent: 'space-between' }}>
          <FilterCard onClick={open}>
            Apply Filter
            <Image
              src={'icons/filter.png'}
              alt="filter-icon"
              height={20}
              width={20}
            />
          </FilterCard>
          <SelectBankAccount>
            <Select
              icon={
                <Image
                  src={'icons/sbilogo.png'}
                  height={20}
                  width={20}
                  alt="sbi-logo"
                />
              }
              radius="lg"
              placeholder="bank account"
              value={selectedBankAccount}
              onChange={SetSelectedBankAccount}
              data={accountsList}
            />
          </SelectBankAccount>
        </FilterRow>

        <Group style={{ justifyContent: 'space-between' }}>
          <CashCard
            num={5}
            type={'deposit'}
            limit={depositLimit}
            setLimit={setDepositLimit}
          />
          <CashCard
            num={10}
            type={'withdrawl'}
            limit={withdrawlLimit}
            setLimit={setWithdrawlLimit}
          />
        </Group>

        <EodBalance balance="$1,23,456" comparision={4.6} />

        <RecentTransactions />
      </Container>
    </>
  )
}

export default LeftPane
