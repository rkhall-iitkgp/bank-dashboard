import {
  Button,
  Text,
  Group,
  Stack,
  Image,
  PinInput,
  ButtonProps,
  createPolymorphicComponent,
  Checkbox,
  createStyles,
} from '@mantine/core'
import { DateInput } from '@mantine/dates'
import styled from '@emotion/styled'
import { Key, useState } from 'react'
import useStorage from '../../hooks/useStorage'
import api from '../api'
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import dayjs from 'dayjs'

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
const useStyles = createStyles(() => ({
  control: {
    fontFamily: 'Montserrat, sans-serif',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '26px',
    backgroundColor: `#006AE4`,
    borderRadius: `20px`,
    width: `300px`,
    marginLeft: `auto`,
    marginRight: 0,
    display: `block`
  },
}))

const PeriodItem = (prop: {
  id: Number
  curId: number
  text: string
  setId: Function
  form: any
}) => {
  const { id, text, setId, curId, form } = prop
  const text1: any = text.split(" ")
  return (
    <PeriodButton
      style={{
        backgroundColor: id === curId ? '#0062D6' : '#FFFFFF',
        color: id === curId ? '#FFFFFF' : '#0062D6',
      }}
      onClick={() => {
        setId(id)
        if (id !== 5) {
          form.values.Datefrom = dayjs(new Date()).subtract(parseInt(text1[0]), text1[1]).toDate()

        }
      }}
    >
      {text}
    </PeriodButton>
  )
}

const AccountSelect = (prop: {
  account: any
  setAccount: Function
  curSelection: any
}) => {
  const { account, setAccount, curSelection } = prop
  return (
    <Button
      style={{
        backgroundColor: '#E6EFF9',
        color: '#000000',
        border: '2px solid #E6EFF9',
        borderColor: curSelection ? curSelection.account_no === account.account_no ? '#0062D6' : '' : '',
        boxShadow:
          curSelection ? curSelection.account_no === account.account_no
            ? 'inset 0px 4px 18px rgba(0, 0, 0, 0.2)'
            : '' : '',
        margin: '0.2rem',
      }}
      radius="xl"
      onClick={() => setAccount(account)}
      fw="bold"
      fz={'lg'}
      size="xl"
    >
      <Image src={'icons/sbi.png'} height={25} mr={25} alt="sbi" />
      {"****" + account.account_no.slice(8, 12)}
    </Button>
  )
}
interface props {
  todashboard: any
}
const Filter = ({ todashboard }: props) => {
  const [id, setId] = useState(1)
  const { getItem } = useStorage()
  const accounts = JSON.parse(getItem("accounts"))
  const [account, setAccount] = useState<any>(null)
  const [mpin, setMpin] = useState<string | null>(null)
  const [haveConsent, setHaveConsent] = useState(false)
  const { classes } = useStyles()
  const form = useForm({
    initialValues: {
      Datefrom: dayjs(new Date()).subtract(1, 'month').toDate(),
      Dateto: new Date(),
    },

    // validate: {
    //   Datefrom: matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Enter A Valid IFSC Code"),
    //   Dateto: matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Enter A Valid IFSC Code")

    // },
  });
  return (
    <div style={{ width: '585px', padding: 20 }}>


      <div className="filter-period">
        <Text c={'#656565'} fz={'lg'} style={{ letterSpacing: '0.1em' }}>
          Filter by period
        </Text>

        <div style={{ marginBottom: '1.5rem' }}>
          <PeriodItem form={form} id={0} text={'1 week'} setId={setId} curId={id} />
          <PeriodItem form={form} id={1} text={'1 month'} setId={setId} curId={id} />
          <PeriodItem form={form} id={2} text={'3 months'} setId={setId} curId={id} />
          <PeriodItem form={form} id={3} text={'6 months'} setId={setId} curId={id} />
          <PeriodItem form={form} id={4} text={'1 year'} setId={setId} curId={id} />
          <PeriodItem form={form} id={5} text={'Custom'} setId={setId} curId={id} />
        </div>
      </div>
      {id === 5 ? <Group mb={20}>
        <Stack mr={40}>
          <Text c={'#656565'} fz={'lg'} style={{ letterSpacing: '0.1em' }} >
            From
          </Text>
          <DateInput valueFormat="YYYY MMM DD" placeholder="Date Input" maxDate={form.values.Dateto} {...form.getInputProps('Datefrom')} />
        </Stack>
        <Stack ml={40}>
          <Text c={'#656565'} fz={'lg'} style={{ letterSpacing: '0.1em' }}>
            To
          </Text>
          <DateInput valueFormat="YYYY MMM DD" placeholder="Date Input" maxDate={new Date()}  {...form.getInputProps('Dateto')} />
        </Stack>
      </Group> : <></>}

      <div style={{ marginBottom: '1.5rem' }}>
        <Text c={'#656565'} fz={'lg'} style={{ letterSpacing: '0.1em' }}>
          Select bank account
        </Text>

        <Group>
          {accounts.map((it: { account_no: Key | null | undefined }) => (
            <AccountSelect
              key={it.account_no}
              account={it}
              setAccount={setAccount}
              curSelection={account}
            />
          ))}
        </Group>
      </div>

      {/* {!haveConsent && (
        <Checkbox
          label="By clicking this, I provide my consent to allow the bank to process my transaction data."
          mb={10}
        />
      )} */}

      <div>
        {account && todashboard && (
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
                oneTimeCode
                value={mpin ? mpin : ''}
                onChange={(e) => setMpin(e)}
              />
            </div>
          </>
        )}
      </div>
      <div>
        <Button
          size="lg"
          className={classes.control}
          onClick={() => {
            if (!mpin) {
              setMpin(getItem('mpin'))
            }
            if (mpin && id && account) {
              api.post("/user/gettrxn/", {
                "account_no": account.account_no,
                "mpin": mpin,
                "startDate": form.values.Datefrom,
                "endDate": form.values.Dateto

              }, { headers: { "Authorization": `Bearer ${getItem("access_token")}` } }).then((res) => {
                console.log('res', res)

              }).catch(err => console.log('err', err))
            }
          }}
        >
          {todashboard ? "Continue" : "Filter"}
        </Button>
      </div>
    </div>
  )
}

export default Filter
