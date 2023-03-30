import styled from '@emotion/styled'
import {Card, Divider, Group, Stack, Text, TextInput} from '@mantine/core'
import {useState} from 'react'

const StyledStack = styled(Stack)`
  cursor: pointer;
  padding: 5px;
  border-radius: 15px;
  width: 130px;
  height: 75px;
  align-items: center;
  margin-left: 2rem;
  margin-right: 4rem;
  &:hover {
    transform: scale(1.1);
    transition-duration: 0.3s;
  }
`
const Span = styled.span`
  margin: auto;
`
interface Props {
  ratioName?: string
  value?: string
}

const RatioCard = ({ ratioName, value }: Props) => {
  return (
    <StyledStack align={'flex-start'}>
      <Text
        c={'#0062D6'}
        fz={'lg'}
        fw={500}
        w={120}
        style={{
          lineHeight: 1.5,
          textAlign: 'center',
          fontFamily: 'Montserrat',
          fontStyle: `normal`,
          fontWeight: '500',
          fontSize: '12px',
          color: '#7E7E7E',
        }}
      >
        {ratioName}
      </Text>
      <Text
        c={'#0062D6'}
        fz={'lg'}
        fw={500}
        w={120}
        style={{
          lineHeight: 0,
          textAlign: 'center',
          fontFamily: 'Montserrat',
          fontStyle: `normal`,
          fontWeight: '700',
          fontSize: '26px',
          color: '#000000',
        }}
      >
        {value}
      </Text>
    </StyledStack>
  )
}

const FinancialFlow = (props: {
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

  let financialRatios = [
    { id: 1, ratioName: 'Liquidity Ratio', value: `4.74` },
    { id: 2, ratioName: 'Debt to Asset Ratio', value: `0.1` },
    { id: 3, ratioName: 'Data Service Ratio', value: `0.3` },
    { id: 4, ratioName: 'Savings Ratio', value: `4.0` },
    { id: 5, ratioName: 'Solvency Ratio', value: `-0.42` },
    { id: 6, ratioName: 'Life Insurance Coverage Ratio', value: `1.2` },
  ]

  return (
    <div>
    <Card
      radius={'lg'}
      style={{
        fontSize: '0.8rem',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        maxWidth: '200px',
        flex: 1,
      }}
    >
      <Card.Section bg={bgc} py={6}>
        <Text
          c={ffc}
          fw={500}
          ff="Montserrat"
          mx={40}
          align="center"
          style={{ lineHeight: '1.2' }}
        >
          {text}
        </Text>
      </Card.Section>
      <Stack align="center" my={15}>
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
        />
      </Stack>
    </Card>
    <Card radius={'lg'} style={{ flex: 5 }} mr={15} p={0}>
      <Card.Section h={60} bg={'#DDEDFF'} pt={25}>
        <Text
          c={'#0052B3'}
          fw={500}
          ff="Montserrat"
          fz={20}
          align="center"
          style={{ lineHeight: '1.3' }}
        >
          Financial Ratios
        </Text>
      </Card.Section>
      <Group
        mx="auto"
        py={20}
        h={150}
        noWrap={false}
        align="center"
        style={{ flexWrap: 'wrap', overflow: 'auto', flex: 1, height: '110px' }}
      >
        {financialRatios?.map((ele) => {
          return (
            <Span key={ele.id}>
              <RatioCard ratioName={ele.ratioName} value={ele.value} />
            </Span>
          )
        })}
      </Group>
    </Card>
    </div>
  )
}

export default FinancialFlow;