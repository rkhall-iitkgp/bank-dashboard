import { Card, Text, Group, Stack, HoverCard } from '@mantine/core'

const palette = ['#D56EEA', '#26DD76', '#FFAA57', '#4198FF']

var investments = [
  {
    name: 'AAPL',
  },
  {
    name: 'TATASTEEL',
  },
  {
    name: 'HINDUNILVR',
  },
  {
    name: 'MARUTI',
  },
]

const InvestmentsCard = (props: {
  data: {
    name: string
  }
}) => {
  const { data } = props

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
              <Text
                fw={600}
                fz={11}
                c="#434343"
                ff={'Montserrat'}
                style={{ lineHeight: 0.5, cursor: 'default' }}
              >
                {data.name}
              </Text>
        </Stack>
      </Group>
    </Card>
  )
}

const RecentInvestments = () => {
  return (
    <div>
      <Text ff={'Montserrat'} c="#0062D6" fw={700} fz={22} mt={4} ml={8}>
        Recent Investments
      </Text>
      <div style={{ maxHeight: '23rem', overflow: 'auto' }}>
        {investments.map((t) => (
            <InvestmentsCard data={t} />
        ))}
      </div>
    </div>
  )
}

export default RecentInvestments
