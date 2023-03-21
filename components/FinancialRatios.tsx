import {
    createStyles,
    Group,
    PinInput,
  } from '@mantine/core'
  import ButtonGroup from './SmallComponents/ButtonGroup'
  import Heading from './SmallComponents/Heading'
  const useStyles = createStyles((theme) => ({
    wrapper: {
      minHeight: `100vh`,
      boxSizing: 'border-box',
      padding: `calc(${theme.spacing.xl} * 2.5)`,
      [theme.fn.smallerThan('sm')]: {
        padding: `calc(${theme.spacing.xl} * 1.5)`,
      },
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      background: `grey`,
    },
    titlebox: {
      display: `flex`,
      justifyContent: `center`,
    },
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      lineHeight: 1,
      fontWeight: 500,
      margin: `0.8rem`,
    },
    titlebold: {
      fontFamily: 'Montserrat',
      lineHeight: 1,
      fontWeight: 600,
      fontSize: `20px`,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
    },
  
    description: {
      color: `#737373`,
      fontSize: `0.7rem`,
      padding: `1rem`,
      textAlign: `center`,
    //   marginTop: `30px`,
      display: `flex`,
      alignitems: `center`,
      justifyContent:`center`,
    
    },
    innerdiv: {
        color: `#737373`,
        fontSize: `0.7rem`,
        padding: `1rem`,
        textAlign: `center`,
        // marginTop: `1rem`,
        display: `flex`,
        flexDirection: `column`,
        alignitems: `center`,
        justifyContent:`center`,
    },
  
    form: {
      backgroundColor: theme.white,
      borderRadius: theme.radius.xl,
      boxShadow: theme.shadows.lg,
      width: `40vw`,
      color: `#0052B3`,
    },
  
    input: {
      backgroundColor: theme.white,
      borderColor: theme.colors.gray[4],
      color: theme.black,
  
      '&::placeholder': {
        color: theme.colors.gray[5],
      },
      border: '0',
      borderRadius: '0',
      background: 'transparent',
      borderBottom: `2px solid #eee`,
    },
  
    inputLabel: {
      color: theme.black,
      position: `absolute`,
      top: `1.5rem`,
      transition: `0.25s ease`,
    },
    inputcontainer: {
      position: `relative`,
      paddingTop: `0.75rem`,
      marginTop: `0 !important`,
    },
  
    control: {
      backgroundColor: `#006AE4`,
      borderRadius: `20px`,
    },
    forminside: {
      maxWidth: `90%`,
      width: `40vw`,
      margin: `auto`,
      padding: '30px',
    },
  
    buttoncontainer: {
      display: `flex`,
      justifyContent: `space-between   `,
      // margin:`1rem`,
      marginTop: `2rem`,
    },
    button: {
      width: `150px`,
      backgroundColor: `#0062D6`,
      borderRadius: `20px`,
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
  }))
  
  function Demo() {
    return (
      <Group position="center">
        <PinInput placeholder="" />
      </Group>
    )
  }
  export function FinancialRatios() {
    const { classes } = useStyles()
    return (
      <div className={classes.wrapper}>
        <div className={classes.form}>
          <Heading font-family= "Montserrat" font-size="20px" title="Financial Ratios" />
          <div className={classes.forminside}>
            <div className={classes.titlebox}>
              <div className={classes.titlebold}>
                
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.innerdiv}>
                <div>
                    <span style={{ fontFamily:"Montserrat", fontSize:"12px",fontWeight:"500",color:"#7E7E7E"}}>Liquidity Ratio</span>
                </div>
                <div>
                    <span style={{fontFamily:"Montserrat",fontSize:"26px",fontWeight:"700",color:"#0062D6"}}>5.66</span>
                </div>
                <div>
                    <span style={{fontFamily:"Montserrat",fontSize:"12px",fontWeight:"500",color:"#7E7E7E"}}>Savings Ratio</span>
                </div>
                <div>
                    <span style={{fontFamily:"Montserrat",fontSize:"26px",fontWeight:"700",color:"#000000"}}>4.0</span>
                </div>
              </div>
              <div className={classes.innerdiv}>
              <div>
              <span style={{fontFamily:"Montserrat",fontSize:"12px",fontWeight:"500",color:"#7E7E7E"}}>Debt to Asset Ratio</span>
                </div>
                <div>    
              <span style={{fontFamily:"Montserrat",fontSize:"26px",fontWeight:"700",color:"#000000"}}>0.1</span>
                </div>
                <div>
              <span style={{fontFamily:"Montserrat",fontSize:"12px",fontWeight:"500",color:"#7E7E7E"}}>Solvency Ratio</span>
                </div>
                <div>
              <span style={{fontFamily:"Montserrat",fontSize:"26px",fontWeight:"700",color:"#000000"}}>-0.42</span>
                </div>
              </div>
              <div className={classes.innerdiv}>
              <div>
              <span style={{fontFamily:"Montserrat",fontSize:"12px",fontWeight:"500",color:"#7E7E7E"}}>Debt Service Ratio</span>
              </div>
              <div>
              <span style={{fontFamily:"Montserrat",fontSize:"26px",fontWeight:"700",color:"#000000"}}>0.3</span>
              </div>
              <div>
              <span style={{fontFamily:"Montserrat",fontSize:"12px",fontWeight:"500",color:"#7E7E7E"}}>Life Insurance Coverage Ratio</span>
              </div>
              <div>
              <span style={{fontFamily:"Montserrat",fontSize:"26px",fontWeight:"700",color:"#000000"}}>1.2</span>
              </div>
              </div>
               
            
            </div>
            {/* <ButtonGroup href1="/UPI/Review" href2="/UPI/Success" /> */}
          </div>
        </div>
      </div>
    )
  }
  