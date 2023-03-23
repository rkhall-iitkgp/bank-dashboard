import { createStyles, TextInput, Button, Group, PinInput } from '@mantine/core'
import { useState } from 'react'
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
    //   color: theme.black,
    lineHeight: 1,
    fontWeight: 600,
    fontSize: `20px`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    paddingBottom: `20px`,
  },

  description: {
    color: `#737373`,
    fontSize: `1rem`,
    padding: `0.5rem 0`,
    textAlign: `center`,
    // marginTop: `10px`,
    boxSizing: `border-box`,
  },

  form: {
    backgroundColor: theme.white,
    borderRadius: theme.radius.xl,
    boxShadow: theme.shadows.lg,
    // paddingBottom: '5px',
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
    padding: theme.spacing.xl,
    margin: `auto`,
  },

  buttoncontainer: {
    backgroundColor: `transparent`,
    display: `flex`,
    justifyContent: `space-between   `,
    width:'200px',
    // margin:`1rem`,
    // marginTop: `2rem`,
  },
  button: {
    width: `150px`,
    backgroundColor: `transparent`,
    borderRadius: `20px`,
    marginRight: '20px',
    marginLeft: '-20px'
  },

  buttonVerify: {
    // height:``,
    width: `100px`,
    backgroundColor: `transparent`,
    // borderRadius:,
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
export function VerifyUPI() {
  const [buttonText, setButtonText] = useState('Verify')
  const [style, setStyle] = useState({ border: '1px solid blue' })
  const [style2, setStyle2] = useState({ color: '#0062D6' })

  function handleClick() {
    setStyle({ border: '1px solid #76FF9C' })
    setStyle2({ color: '#00AD30'})
    setButtonText('Verified')
  }
  const { classes } = useStyles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.form}>
        {/* <div className={classes.topheading}>
          <div className={classes.title}>UPI Transfer</div>
        </div> */}
        <Heading title="UPI Transfer" />
        <div className={classes.forminside}>
          <div className={classes.titlebox}>
            <div className={classes.titlebold}>
              <span>Verify UPI</span>
            </div>
          </div>
          <div className={classes.description}>
            <TextInput
              placeholder="Enter UPI ID*"
              withAsterisk
              style={style}
              rightSection={
                <Button
                  className={classes.buttonVerify}
                  style={style2}
                  onClick={handleClick}
                >
                  {buttonText}
                </Button>
              }
            />
          </div>
          <div className={classes.buttoncontainer}>
            {/* <Button className={classes.button} onClick={() => {}}>
              Back
            </Button> */}
            <Button
              variant="gradient"
              gradient={{ from: 'white', to: 'white' }}
              className={classes.button}
              onClick={() => {}}
            >
              Continue
            </Button>
          </div>
          {/* <div className={classes.description}>
            <TextInput
              placeholder="Enter UPI ID*"
              withAsterisk
              style={style}
              rightSection={
                <Button
                  className={classes.buttonVerify}
                  style={style2}
                  onClick={handleClick}
                >
                  {buttonText}
                </Button>
              }
            />
          </div> */}
          {/* <div className={classes.buttoncontainer}>
            <Link href='/UPI/'><Button className={classes.button}>Back</Button></Link>
            <Link href='/UPI/Payment'><Button className={classes.button} >Continue</Button></Link>
          </div> */}
          <ButtonGroup href1="/UPI/" href2="/UPI/Payment" />
        </div>
      </div>
    </div>
  )
}
