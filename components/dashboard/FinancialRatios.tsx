import styled from '@emotion/styled'
import { Card, Group, Stack, Text } from '@mantine/core'

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

export function FinancialRatios() {
  let financialRatios = [
    { id: 1, ratioName: 'Liquidity Ratio', value: `NA` },
    { id: 2, ratioName: 'Debt to Asset Ratio', value: `NA` },
    { id: 3, ratioName: 'Data Service Ratio', value: `NA` },
    { id: 4, ratioName: 'Savings Ratio', value: `NA` },
    { id: 5, ratioName: 'Solvency Ratio', value: `NA` },
    { id: 6, ratioName: 'Life Insurance Coverage Ratio', value: `NA` },
  ]

  return (
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
  )
}