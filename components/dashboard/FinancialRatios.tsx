import styled from '@emotion/styled'
import { Card, Group, Stack, Text, Flex } from '@mantine/core'
import useAccountStore from '../Store/Account'

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

const getDebtLoad = (ratio: number) => {
  if (ratio < 35) {
    return {
      label: 'Low Debt Load',
      color: '#2CC578',
    }
  } else if (ratio < 50) {
    return {
      label: 'Medium Debt Load',
      color: '#FEB019',
    }
  } else {
    return {
      label: 'High Debt Load',
      color: '#FF6464',
    }
  }
}

const RatioCard = ({ ratioName, value }: Props) => {
  return (
    <StyledStack align={'flex-start'}>
      <Text
        c={'#0062D6'}
        fz={'lg'}
        fw={500}
        w={120}
        pt={30}
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

  let factors = [239.74, 946.28]

  let financialRatios = [
    { id: 1, ratioName: 'Liquidity Ratio', value: `NA` },
    { id: 2, ratioName: 'Debt to Asset Ratio', value: `NA` },
    { id: 3, ratioName: 'Data Service Ratio', value: `NA` },
    { id: 4, ratioName: 'Savings Ratio', value: `NA` },
    { id: 5, ratioName: 'Solvency Ratio', value: `NA` },
    { id: 6, ratioName: 'Life Insurance Coverage Ratio', value: `NA` },
  ]

  const DTI_ratio = useAccountStore(state => state.DTI_ratio)
  const uploaded = useAccountStore(state => state.uploaded)
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
          Debt-to-Income Ratio
        </Text>
      </Card.Section>
      {uploaded ? <Group
        mx="auto"
        py={20}
        h={150}
        noWrap={false}
        align="center"
        style={{ flexWrap: 'wrap', flex: 1, height: '110px' }}
      >
        <Flex>
          <RatioCard
            value={DTI_ratio.toFixed(2) + '%'}
          />
          <Text pt={24} ml={-70}>
            =
          </Text>
          <Card pt={10}>
            <Text ta="center" style={{ borderBottom: '2px solid black' }}>
              <Span>Recurring Monthly Debt</Span>
            </Text>
            <Text ta="center">
              <Span>Gross Monthly Income</Span>
            </Text>
          </Card>
          <Card
            pt={0}
            h={70}
            ml={30}
            radius="md"
            shadow="0px 6px 20px rgba(0, 0, 0, 0.1)"
          >
            <Text ta="center" pt={10}>
              <Span>
                You have a <br />
                <Text
                  c={getDebtLoad((factors[0] * 100) / factors[1]).color}
                  fw={600}
                >
                  {getDebtLoad((factors[0] * 100) / factors[1]).label}
                </Text>
              </Span>
            </Text>
          </Card>
        </Flex>
      </Group> : <Text
        c={'#0052B3'}
        fw={500}
        ff="Montserrat"
        fz={20}
        align="center"
        style={{ lineHeight: '1.3' }}
        px={20}
        py={20}
      >
        Not Availiable
      </Text>}
    </Card>
  )
}
