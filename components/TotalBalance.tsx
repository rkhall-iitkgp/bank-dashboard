import { createStyles } from '@mantine/core'
import Heading from './SmallComponents/Heading'
import styled from '@emotion/styled'
import { Group, Stack, Text } from '@mantine/core'
const useStyles = createStyles((theme) => ({
    wrapper: {
        backgroundColor: `#EEEEEE`,
        minHeight: `100vh`,
        boxSizing: 'border-box',
        padding: `calc(${theme.spacing.xl} * 1)`,
        [theme.fn.smallerThan('sm')]: {
            padding: `calc(${theme.spacing.xl} * 1)`,
        },
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        background: `grey`,

    },
    titlebox: {
        // marginBottom:`20px`,
        display: `flex`,
        justifyContent: `center`,
    },
    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        //   color: theme.black,
        lineHeight: 1,
        fontWeight: 500,
        margin: `0.8rem`,
        //   paddingBottom:`5px`,
        //   marginBottom:`10px`
    },
    titlebold: {
        fontFamily: 'Montserrat',
        //   color: theme.black,
        lineHeight: 1,
        fontWeight: 600,
        fontSize: `20px`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        // paddingBottom: `10px`,
    },

    form: {
        backgroundColor: theme.white,
        borderRadius: theme.radius.xl,
        boxShadow: theme.shadows.lg,
        // paddingBottom: '5px',
        // width: `40rem`,
        color: `#0052B3`,
    },

    forminside: {
        maxWidth: `90%`,
        width: `40vw`,
        padding: theme.spacing.xl,
        margin: `auto`,
    },
    description: {
        color: `#737373`,
        fontSize: `1rem`,
        // padding: `0.5rem`,
        textAlign: `center`,
        marginTop: `30px`,
        
    },
    subdescription: {
        color: `#737373`,
        fontSize: `1rem`,
        padding: `0.5rem`,
        textAlign: `center`,
        marginTop: `30px`,
        display:`flex`,
        justifyContent: `space-between`,
    },
    buttoncontainer: {
        display: `flex`,
        justifyContent: `space-between   `,
        marginTop: `2rem`,
    },
    button: {
        width: `150px`,
        backgroundColor: `#0062D6`,
        borderRadius: `15px`,
    },
    topheading: {
        width: `100%`,
        background: `#DDEDFF`,
        display: `flex`,
        justifyContent: `center`,
        borderTopLeftRadius: theme.radius.md,
        borderTopRightRadius: theme.radius.md,
        alignItems: `center`,
    },
    ratioContainer: {
        margin: `20px `,
        display: `flex`,
        flexWrap: `wrap`,
        alignItems: `flex-end`,
        justifyContent: `space-around`,
    },
}))
const StyledStack = styled(Stack)`
  cursor: pointer;
  padding: 30px;
  border-radius: 15px;
  width:150px;
  justify-content: center;
  align-items: center;

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
                        lineHeight: 1,
                        textAlign: 'center',
                        fontFamily: 'Montserrat, sans-serif',
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
                        lineHeight: 1,
                        textAlign: 'center',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: '700',
                        fontSize: '26px',
                        color: '#000000',
                    }}
                >
                    {value}
                </Text>
            </StyledStack>
        </div>
    )
}
export function TotalBalance() {
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
        <div className={classes.wrapper}>
            <div className={classes.form}>
                <div className={classes.forminside}>
                    <div className={classes.description}>
                        <div className={classes.subdescription} >
                    <Text
                    c={'#0062D6'}
                    fz={'lg'}
                    fw={500}
                    w={120}
                    style={{
                        lineHeight: 1,
                        textAlign: 'center',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: '500',
                        fontSize: '12px',
                        color: '#7E7E7E',
                    }}
                >
                   Total Balance
                </Text>
              
                    <Text
                    c={'#0062D6'}
                    fz={'lg'}
                    fw={500}
                    w={120}
                    style={{
                        lineHeight: 1,
                        textAlign: 'center',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: '500',
                        fontSize: '12px',
                        color: '#7E7E7E',
                    }}
                >
                   {123456}
                </Text>
                </div>
                <div>
                <Text
                    c={'#0062D6'}
                    fz={'lg'}
                    fw={500}
                    w={120}
                    style={{
                        lineHeight: 1,
                        textAlign: 'left',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: '700',
                        fontSize: '36px',
                        color: '#000000',
                    }}
                >
                   {123456}
                </Text>
                </div>
                    </div>
                    <div className={classes.ratioContainer}>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}
