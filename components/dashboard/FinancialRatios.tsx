import { createStyles } from '@mantine/core'
import Heading from '../reusable-components/Heading'
import styled from '@emotion/styled'
import { Group, Stack, Text } from '@mantine/core'
import Image from 'next/image'
const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: `#ffffff`,
    borderRadius: `30px`,
    boxShadow: `0px 2px 20px rgba(0,0,0,0.1)`,
    // color: `#0052B3`,
    position: 'relative',
    height: `220px`,
    width: `500px`,
    display: `flex`,
  },
  subcontainer1: {
    background: ` #DDEDFF`,
    position: 'absolute',
    top: `0px`,
    left: `0px`,
    width: `500px`,
    height: `40px`,
    borderRadius: `30px 30px 0px 0px`,
    textAlign: `center`,
    // marginTop:`5px`,
    paddingTop: `12px`,
  },
  subcontainer2: {
    color: `#ffffff`,
    position: 'absolute',
    top: `0px`,
    left: `0px`,
    width: `500px`,
    height: `180px`,
    display: `flex`,
    flexdirection: `row`,
    // alignItems: `center`,
    // padding:`70px`,
    paddingTop: `50px`,
    // paddingLeft:`20px`,
    // paddingRight:`20px`,
    // paddingBottom:`1px`,
    flexWrap: `wrap`,
    alignItems: `flex-end`,
    justifyContent: `space-around`,
  },
  // ratioContainer: {
  //     position: `absolute`,
  //     width:`450px`,
  //     height:`49px`,
  //     display: `flex`,
  //     flexWrap: `wrap`,
  //     alignItems: `flex-end`,
  //     flexdirection: `row`,
  //     padding:`20px`,
  //     // justifyContent: `space-aroun`,
  // },
}))
const StyledStack = styled(Stack)`
  cursor: pointer;
  padding: 5px;
  border-radius: 15px;
  width: 130px;
  height: 75px;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
  margin: 1px;
  margin-bottom: 5px;
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
    <div>
      <StyledStack>
        <Text
          c={'#0062D6'}
          fz={'lg'}
          fw={500}
          w={120}
          style={{
            lineHeight: '15px',
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
            lineHeight: '32px',
            textAlign: 'center',
            fontFamily: 'Montserrat',
            fontStyle: `normal`,
            fontWeight: '700',
            fontSize: '26px',
            // lineheight: '32px',
            color: '#000000',
          }}
        >
          {value}
        </Text>
      </StyledStack>
    </div>
  )
}
export function FinancialRatios() {
  const { classes } = useStyles()
  let financialRatios = [
    { id: 1, ratioName: 'Liquidity Ratio', value: `4.74` },
    { id: 2, ratioName: 'Debt to Asset Ratio', value: `0.1` },
    { id: 3, ratioName: 'Data Service Ratio', value: `0.3` },
    { id: 4, ratioName: 'Savings Ratio', value: `4.0` },
    { id: 5, ratioName: 'Solvency Ratio', value: `-0.42` },
    { id: 6, ratioName: 'Life Insurance Coverage Ratio', value: `1.2` },
  ]

  return (
    <div className={classes.container}>
      <div className={classes.subcontainer1}>
        <span
          style={{
            fontFamily: 'Montserrat',
            fontStyle: `normal`,
            fontWeight: `500`,
            fontSize: `20px`,
            // lineHeight: `1px`,
            color: `#0052B3`,
          }}
        >
          Financial Ratios
        </span>
      </div>
      <div className={classes.subcontainer2}>
        {financialRatios.map((ele) => {
          return (
            <span key={ele.id}>
              <RatioCard ratioName={ele.ratioName} value={ele.value} />
            </span>
          )
        })}
      </div>
    </div>
  )
}
