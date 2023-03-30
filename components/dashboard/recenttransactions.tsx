import { Card, Group, HoverCard, Stack, Text, TextInput } from '@mantine/core'
import { useState } from 'react'
import useStorage from '../../hooks/useStorage'
import datams from '../datams'
import useAccountStore from '../Store/Account'

const palette = ['#D56EEA', '#26DD76', '#FFAA57', '#4198FF']

var transactions = [
  {
    description: 'Jesse Pinkman Johnson',
    date: '19 March, 2023, 17:10',
    credit: 100,
    debit: 0,
    mode: 'UPI',
    category: 'Entertainment',
  },
  {
    description: 'Jesse Pinkman Johnson',
    date: '19 March, 2023, 17:10',
    credit: 0,
    debit: 200,
    mode: 'UPI',
    category: 'Food',
  },
  {
    description: 'Heisenberg',
    date: '19 March, 2023, 18:10',
    credit: 0,
    debit: 1000,
    mode: 'Bank',
    category: 'Travel',
  },
  {
    description: 'Spotify',
    date: '19 March, 2023, 17:20',
    credit: 59,
    debit: 0,
    mode: 'UPI',
    category: 'Travel',
  },
  {
    description: 'Spotify',
    date: '19 March, 2023, 17:30',
    credit: 59,
    debit: 0,
    mode: 'UPI',
    category: 'Travel',
  },
  {
    description: 'Spotify',
    date: '19 March, 2023, 15:10',
    credit: 59,
    debit: 0,
    mode: 'UPI',
    category: 'Travel',
  },
  {
    description: 'Spotify',
    date: '19 March, 2023, 17:50',
    credit: 59,
    debit: 0,
    mode: 'UPI',
    category: 'Travel',
  },
]

const TransactionCard = (props: {
  data: {
    description: string
    date: string
    credit: number
    debit: number
    mode: string
    category: string
    id: string
  }
}) => {
  const { data } = props
  var dict =
    data.credit != null
      ? { color: '#0062D6', amount: data.credit, sign: '+' }
      : { color: '#4D4B4B', amount: data.debit, sign: '-' }

  var paletteIndex = Math.floor(Math.random() * 4)
  var descriptionShort = data.description.substring(0, 12)
  if (data.description.length > 12) descriptionShort += '...'
  const [editing, setEditing] = useState(false);
  const [category, setCategory] = useState(data.category);
  const [categoryInput, setCategoryInput] = useState(data.category);
  const { getItem } = useStorage();
  const useAccount = useAccountStore();

  const categorySubmit = () => {
    setEditing(false);
    datams.post("/user/changecat/", {
      category: categoryInput,
      account_no: useAccount.account_no,
      id: data.id
    }, { headers: { "Authorization": `Bearer ${getItem("access_token")}` } }).then((res) => {
      console.log('res', res)
      setCategory(categoryInput);
    }).catch(err => console.log('err', err))
  }
  // console.log(`id = ${data.id}`)

  return (
    <Card
      radius={'lg'}
      shadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
      my={12}
      p={20}
      mx={8}
    >
      <Group px={8} style={{ justifyContent: 'space-between' }}>
        <Stack>
          <HoverCard>
            <HoverCard.Target>
              <Text
                fw={600}
                fz={17}
                c="#4D4B4B"
                ff={'Montserrat'}
                style={{ lineHeight: 0.5, cursor: 'default' }}
              >
                {descriptionShort}
              </Text>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Text
                fw={600}
                fz={11}
                c="#838383"
                ff={'Montserrat'}
                style={{ lineHeight: 0.5, cursor: 'default' }}
              >
                {data.description}
              </Text>
            </HoverCard.Dropdown>
          </HoverCard>
          <Text
            c="#656565"
            fw={500}
            fz={13}
            ff={'Montserrat'}
            style={{ lineHeight: 0.5 }}
          >
            {data.date}
          </Text>
        </Stack>

        <Text c={dict.color} fw={600} fz={16} mx={13} ff={'Montserrat'}>
          {dict.sign}&#8377;{dict.amount}
        </Text>

        <Stack style={{ alignItems: 'center', width: '4.5rem' }}>
          <Text
            ff={'Montserrat'}
            c={'#4D4B4B'}
            fw={600}
            fz={16}
            style={{ lineHeight: 0.5 }}
          >
            {data.mode}
          </Text>
          {!editing &&
            <Text
              ff={'Montserrat'}
              style={{ lineHeight: 0.5 }}
              c={palette[paletteIndex]}
              fz={14}
              onClick={() => setEditing(true)}
            >
              {category}
            </Text>}
          {editing && <TextInput value={categoryInput} placeholder={"set category"}
            onKeyUp={(e) => { if (e.key == 'Enter') { categorySubmit() } }} onChange={(e) => setCategoryInput(e.currentTarget.value)} />}
        </Stack>
      </Group>
    </Card>
  )
}
interface props {
  transaction: any[]
}
const RecentTransactions = (prop: {
  transactions: {
    date: string
    description: string
    credit: number
    debit: number
    mode: string
    category: string
    id: string
  }[]
}) => {
  const { transactions } = prop;
  return (
    <div>
      <Text ff={'Montserrat'} c="#0062D6" fw={700} fz={22} mt={4} ml={8}>
        Recent Transactions
      </Text>
      <div style={{ maxHeight: '55vh', overflow: 'auto' }}>
        {transactions?.map((t) => (
          <div key={t.date}>
            <TransactionCard data={t} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentTransactions