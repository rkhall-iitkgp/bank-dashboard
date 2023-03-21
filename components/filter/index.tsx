import {
  Button,
  Text,
  Group,
  Stack,
  Image,
  PinInput,
  ButtonProps,
  createPolymorphicComponent,
} from '@mantine/core'
import { DateInput } from '@mantine/dates'
import styled from '@emotion/styled'
import { useState } from 'react'
const _PeriodButton = styled(Button)`
  width: 213px;
  height: 48px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  font-size: 1.15rem;
  letter-spacing: 0.05em;
  margin: 1rem;
`

const PeriodButton = createPolymorphicComponent<'button', ButtonProps>(
  _PeriodButton,
)

const PeriodItem = (prop: {
  id: Number
  curId: number
  text: string
  setId: Function
}) => {
  const { id, text, setId, curId } = prop
  return (
    <PeriodButton
      style={{
        backgroundColor: id === curId ? '#0062D6' : '#FFFFFF',
        color: id === curId ? '#FFFFFF' : '#0062D6',
      }}
      onClick={() => setId(id)}
    >
      {text}
    </PeriodButton>
  )
}

const AccountSelect = (prop: {
  account: number
  setAccount: Function
  curSelection: number
}) => {
  const { account, setAccount, curSelection } = prop
  return (
    <Button
      style={{
        backgroundColor: '#E6EFF9',
        color: '#000000',
        border: '2px solid #E6EFF9',
        borderColor: curSelection === account ? '#0062D6' : '',
        boxShadow:
          curSelection === account
            ? 'inset 0px 4px 18px rgba(0, 0, 0, 0.2)'
            : '',
        margin: '0.5rem',
      }}
      radius="xl"
      onClick={() => setAccount(account)}
      fw="bold"
      fz={'lg'}
      size="xl"
    >
      <Image src={'icons/sbi.png'} mr={25} alt="sbi" />
      {account}
    </Button>
  )
}

const Filter = () => {
  const [id, setId] = useState(1)
  const accounts = [8989, 4235]
  const [account, setAccount] = useState(0)

  return (
    <div style={{ width: '585px' }}>
      <Group mb={20}>
        <Stack mr={40}>
          <Text c={'#656565'} fz={'lg'} style={{ letterSpacing: '0.1em' }}>
            From
          </Text>
          <DateInput valueFormat="YYYY MMM DD" placeholder="" />
        </Stack>
        <Stack ml={40}>
          <Text c={'#656565'} fz={'lg'} style={{ letterSpacing: '0.1em' }}>
            To
          </Text>
          <DateInput valueFormat="YYYY MMM DD" placeholder="" />
        </Stack>
      </Group>

      <div className="filter-period">
        <Text c={'#656565'} fz={'lg'} style={{ letterSpacing: '0.1em' }}>
          Filter by period
        </Text>

        <div style={{ marginBottom: '1.5rem' }}>
          <PeriodItem id={0} text={'1 week'} setId={setId} curId={id} />
          <PeriodItem id={1} text={'1 month'} setId={setId} curId={id} />
          <PeriodItem id={2} text={'3 months'} setId={setId} curId={id} />
          <PeriodItem id={3} text={'6 months'} setId={setId} curId={id} />
          <PeriodItem id={4} text={'1 year'} setId={setId} curId={id} />
          <PeriodItem id={5} text={'5 year'} setId={setId} curId={id} />
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <Text c={'#656565'} fz={'lg'} style={{ letterSpacing: '0.1em' }}>
          Select bank account
        </Text>

        <Group>
          {accounts.map((it, v) => (
            <AccountSelect
              key={it}
              account={v}
              setAccount={setAccount}
              curSelection={account}
            />
          ))}
        </Group>
      </div>

      <div>
        {account !== 0 && (
          <>
            <div>
              <Text c={'#656565'} fz={'lg'} style={{ letterSpacing: '0.1em' }}>
                ENTER MPIN
              </Text>

              <PinInput
                placeholder=""
                mask
                style={{ margin: '0.5rem' }}
                radius="md"
                size={'lg'}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Filter
