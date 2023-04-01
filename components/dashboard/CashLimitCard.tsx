import { Card, Stack, Text, TextInput } from '@mantine/core'
import { useState } from 'react'

const CashCard = (props: {
  num: number[]
  type: string
  limit: number
  setLimit: Function
}) => {
  const { num, type, limit, setLimit } = props
  const [showLimit, setShowLimit] = useState(false)

  const bgc = type === 'withdrawl' ? '#FFE5E4' : '#E8F6F0'
  const ffc = type === 'withdrawl' ? '#D73331' : '#2CC578'
  const text =
    type === 'withdrawl' ? 'Large Cash Withdrawls' : 'Large Cash Deposits'

  const [filteredNum, setFilteredNum] = useState(num.filter((n) => n <= limit))

  const handleFilterChange = (e) => {
    const newLimit = e.target.value
    setLimit(newLimit)
    setFilteredNum(num.filter((n) => n <= newLimit))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setShowLimit(false)
      setLimit(e.target.value)
      setFilteredNum(num.filter((n) => n <= e.target.value))
    }
  }

  return (
    <Card
      radius={'lg'}
      style={{
        fontSize: '0.8rem',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        maxWidth: '200px',
        flex: 1,
        paddingBottom: '1.75rem',
      }}
    >
      <Card.Section bg={bgc} py={6}>
        <Text
          c={ffc}
          fw={500}
          ff="Montserrat"
          mx={40}
          align="center"
          style={{ lineHeight: '1.2', margin: 'auto' }}
        >
          {text}
        </Text>
      </Card.Section>
      <Stack align="center" my={15} style={{ marginBottom: '0' }}>
        <Text fz={24} c={ffc} fw={700} style={{ lineHeight: 0.8 }}>
          {filteredNum.length}
        </Text>
        <Text
          c={'#4D4B4B'}
          ff="Montserrat"
          fw={700}
          fz={12}
          style={{ lineHeight: 0, cursor: 'pointer' }}
          onClick={() => setShowLimit(!showLimit)}
        >
          Set Limit
        </Text>
        <TextInput
          radius={'lg'}
          h={15}
          style={{
            visibility: showLimit ? 'visible' : 'hidden',
            border: 'none',
            // boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
          }}
          onChange={handleFilterChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter Amount Limit"
        />
      </Stack>
    </Card>
  )
}

export default CashCard
