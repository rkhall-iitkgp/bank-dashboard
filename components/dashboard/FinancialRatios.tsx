import styled from '@emotion/styled'
import { Group, Stack, Text, Card } from '@mantine/core'

const StyledStack = styled(Stack)`
  cursor: pointer;
  padding: 5px;
  border-radius: 15px;
  width: 130px;
  height: 75px;
  align-items: center;
  margin-left: 4rem;
  margin-right: 4rem;
  &:hover {
    transform: scale(1.05);
    transition-duration: 0.3s;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
  }
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

export function FinancialRatios() {
  let financialRatios = [
    { id: 1, ratioName: 'Liquidity Ratio', value: `4.74` },
    { id: 2, ratioName: 'Debt to Asset Ratio', value: `0.1` },
    { id: 3, ratioName: 'Data Service Ratio', value: `0.3` },
    { id: 4, ratioName: 'Savings Ratio', value: `4.0` },
    { id: 5, ratioName: 'Solvency Ratio', value: `-0.42` },
    { id: 6, ratioName: 'Life Insurance Coverage Ratio', value: `1.2` },
  ]

  return (
    <Card radius={'lg'} style={{ flex: 3 }} mx={20} p={0}>
      <Card.Section h={70} bg={'#DDEDFF'} pt={25}>
        <Text
          c={'#0052B3'}
          fw={500}
          ff="Montserrat"
          fz={30}
          align="center"
          style={{ lineHeight: '1.3' }}
        >
          Financial Ratios
        </Text>
      </Card.Section>
      <Group
        mx="auto"
        py={10}
        h={170}
        noWrap={false}
        align="flex-start"
        style={{ flexWrap: 'wrap', overflow: 'auto', flex: 1 }}
      >
        {financialRatios.map((ele) => {
          return (
            <span key={ele.id}>
              <RatioCard ratioName={ele.ratioName} value={ele.value} />
            </span>
          )
        })}
      </Group>
    </Card>
  )
}
