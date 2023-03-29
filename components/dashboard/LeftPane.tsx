import styled from '@emotion/styled'
import { Stack, Group, Card, Select, Image, Modal, Text, Avatar } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { forwardRef, useEffect, useState } from 'react'
import Filter from '../filter'
import useAccountStore from '../Store/Account'
import CashCard from './CashLimitCard'
import EodBalance from './EODBalanceCard'
import RecentTransactions from './recenttransactions'

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
  cursor: pointer;
  color: white;
  flex: 3;
`
const ContainerLeft = styled(Container)`
  flex: 1;
  @media (max-width: 1450px) {
    flex: 1.25;
  }
  @media (max-width: 1200px) {
    flex: 2;
  }
`

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
  label: string;
  description: string;
}
const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} size={20} />

        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" opacity={0.65}>
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);
interface Props {
  accountsList: any[]
}
const LeftPane = ({ accountsList }: Props) => {
  const useAccount = useAccountStore();
  const [depositLimit, setDepositLimit] = useState(1000)
  const [withdrawlLimit, setWithdrawlLimit] = useState(1000)
  const selectedBankAccount = useAccountStore((state) => state.account_no)
  const [opened, { open, close }] = useDisclosure(false)
  useEffect(() => {

    accountsList.forEach(e => {
      e.value = e.account_no
      e.label = "****" + e.account_no.slice(8, 12)
      e.image = 'icons/sbilogo.png'
      e.name = e.account_no
      e.description = e.account_no
    })

  }, [])
  useEffect(() => {
    console.log('useAccount.Transaction', useAccount.Transaction)
    console.log('selectedBankAccount', selectedBankAccount)
  }, [selectedBankAccount])
  const [account, setaccount] = useState(0);

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
        <Filter todashboard={false} close={close} />
        {/* <Filter account={account} setAccount={setaccount} /> */}
      </Modal>
      <ContainerLeft>
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
              itemComponent={SelectItem}
              // searchable
              radius="lg"
              placeholder="Bank Account"
              value={selectedBankAccount}
              onChange={(e) => {
                if (e) {
                  useAccount.account_no = e.toString()
                  useAccount.setTransaction()
                }
              }}
              data={accountsList}
            />
          </SelectBankAccount>
        </FilterRow>

        <Group style={{ justifyContent: 'space-between' }}>
          <CashCard
            num={[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]}
            type={'deposit'}
            limit={depositLimit}
            setLimit={setDepositLimit}
          />
          <CashCard
            num={[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]}
            type={'withdrawl'}
            limit={withdrawlLimit}
            setLimit={setWithdrawlLimit}
          />
        </Group>

        {/* <EodBalance balance="$1,23,456" comparision={4.6} /> */}

        <RecentTransactions transactions={useAccount.Transaction} />
      </ContainerLeft>
    </>
  )
}

export default LeftPane