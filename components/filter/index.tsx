import {
    Button,
    ButtonProps,
    Checkbox,
    createPolymorphicComponent,
    Group,
    Image,
    PinInput,
    Stack,
    Text,
} from '@mantine/core'
import {DateInput} from '@mantine/dates'
import styled from '@emotion/styled'
import {Key, useState} from 'react'
import useStorage from '../../hooks/useStorage'

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
  account: { account_no: string, id: number }
  setAccount: Function
  curSelection: number, key: Key | null | undefined
}) => {
  const { account, setAccount, curSelection, key } = prop
  console.log(prop);
  return (
    <Button key={key}
      style={{
        backgroundColor: '#E6EFF9',
        color: '#000000',
        border: '2px solid #E6EFF9',
        borderColor: curSelection === account.id ? '#0062D6' : '',
        boxShadow:
          curSelection === account.id
            ? 'inset 0px 4px 18px rgba(0, 0, 0, 0.2)'
            : '',
        margin: '0.5rem',
      }}
      radius="xl"
      onClick={() => setAccount(account.id)}
      fw="bold"
      fz={'lg'}
      size="xl"
    >
      <Image src={'icons/sbi.png'} height={25} mr={25} alt="sbi" />
      {"****" + account.account_no.slice(8, 12)}
    </Button>
  )
}

const Filter = (props: { account: number, setAccount: Function }) => {
  const [id, setId] = useState(1);
  const { getItem } = useStorage();
  const accounts = JSON.parse(getItem('accounts'));
  const { account, setAccount } = props;
  const [haveConsent, setHaveConsent] = useState(false);
  const filterHandler = () => {

  }

  return (
    <div style={{ width: '585px', paddingLeft: 50 }}>
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
          {accounts.map((it: { account_no: string, id: number }, v: Key | null | undefined) => (
            <AccountSelect
              key={v}
              account={it}
              setAccount={setAccount}
              curSelection={account}
            />
          ))}
        </Group>
      </div>

      {!haveConsent && (
        <Checkbox
          label="By clicking this, I provide my consent to allow the bank to process my transaction data."
          mb={10}
        />
      )}

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

      <Button
        radius={'xl'}
        variant="gradient"
        gradient={{ from: '#0062D6', to: '#0062D6' }}
        onClick={() => filterHandler()}
        px={55}
        ff="Montserrat"
        fw={500}
        ml="23rem"
      >
        Filter
      </Button>
    </div>
  )
}

export default Filter