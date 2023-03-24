import { Card, Stack, Text, TextInput } from '@mantine/core'
import { useState } from 'react'

const CashCard = (props: {
  n: number
  type: string
  limit: number
  setLimit: Function
}) => {
  const { n, type, limit, setLimit } = props
  const [showLimit, setShowLimit] = useState(false)

  const bgc = type === 'withdrawl' ? '#FFE5E4' : '#E8F6F0'
  const ffc = type === 'withdrawl' ? '#D73331' : '#2CC578'
  const text =
    type === 'withdrawl' ? 'Large Cash Withdrawls' : 'Large Cash Deposits'

  return (
    <Card
      radius={'lg'}
      w={200}
      h={170}
      style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}
    >
      <Card.Section h={60} bg={bgc} py={10}>
        <Text
          c={ffc}
          fw={500}
          ff="Montserrat"
          mx={40}
          align="center"
          style={{ lineHeight: '1.3' }}
        >
          {text}
        </Text>
      </Card.Section>
      <Stack align="center" my={15}>
        <Text fz={25} c={ffc} fw={700} style={{ lineHeight: 0.8 }}>
          {n}
        </Text>
        <Text
          c={'#4D4B4B'}
          ff="Montserrat"
          fw={700}
          fz={14}
          style={{ lineHeight: 0, cursor: 'pointer' }}
          onClick={() => setShowLimit(!showLimit)}
        >
          Set Limit
        </Text>
        <TextInput style={{ visibility: showLimit ? 'visible' : 'hidden' }} />
      </Stack>
    </Card>
  )
}

export default CashCard
