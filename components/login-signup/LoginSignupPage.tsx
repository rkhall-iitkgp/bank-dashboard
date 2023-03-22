import {
  Button,
  createStyles,
  Group,
  PinInput,
  rem,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: `#EEEEEE`,
    minHeight: `100vh`,
    boxSizing: 'border-box',
    borderRadius: theme.radius.md,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    background: `white`,
  },

  titlebox: {
    marginBottom: `20px`,
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
    fontWeight: 400,
    paddingBottom: `5px`,
    fontSize: `2rem`,
  },
  titlebold: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: `#1673E1`,
    lineHeight: 1,
    fontWeight: 400,
    fontSize: `3rem`,
    textAlign: `center`,
    marginBottom: `4rem`
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 400,
    fontSize: `1rem`,
    fontFamily: `Montserrat, ${theme.fontFamily}`,
    fontWeight: 300,
    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    width: `400px`,
    color: `#0052B3`,
    display: `flex`,
    margin: `auto`,
  },
  sideContainer: {
    width: `100%`,
    margin: `auto`,
  },
  social: {
    color: theme.white,

    '&:hover': {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,
    height: `16px`,
    '&::placeholder': {
      color: theme.colors.gray[5],
    },
    border: '0',
    borderRadius: '0',
    background: 'transparent',
    borderBottom: `2px solid #eee`,
    fontFamily: `Montserrat`,
    fontWeight: 400,
    // marginTop: `1rem`,
  },

  inputLabel: {
    color: theme.black,
    position: `absolute`,
    top: `1.5rem`,
    transition: `0.25s ease`,
  },
  inputcontainer: {
    paddingLeft: 0,
    position: `relative`,
    marginTop: `0 !important`,
  },
  control: {
    backgroundColor: `#006AE4`,
    borderRadius: `20px`,
    margin: `1rem`,
    width: `300px`,
  },
  forminside: {
    maxWidth: `80%`,
    width: `300px`,
    margin: `auto`,
  },
  grid: {
    display: `grid`,
    gridTemplateColumns: `40% 60%`,
    width: `100%`,
    height: `100%`,
  },
  sidecontainerinside: {
    background: `#006BE5`,
    width: `100%`,
    padding: '50px',
    paddingTop: `8vh`,
    display: `flex`,
    flexDirection: `column`,
    height: `96vh`,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },
  buttoncontainer: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  button: {
    width: `125px`,
    backgroundColor: `black`,
    borderRadius: `20px`,
    fontFamily: `Montserrat`,
  },
  outerimagecontainer: {
    width: `100%`,
    position: `relative`,
    margin: `auto`,
  },
  imagecontainer: {
    width: `100%`,
    position: `relative`,
    minWidth: `300px`,
    minHeight: `160%`,
    top: `0%`,
  },
  dashboardimg1: {
    width: `56%`,
    borderRadius: `8px`,
    maxHeight: `20vw`,
    zIndex: 1,
  },
  dashboardimg2: {
    position: `absolute`,
    width: `44%`,
    borderRadius: `8px`,
    zIndex: 2,
    top: `20%`,
    left: `40%`,
  },
  otpbutton: {
    height: `36px`,
    width: `364px`,
    background: `#006AE4`,
    borderRadius: `20px`,
    marginTop: `20px`,
    fontFamily: `Montserrat`,
  },
  inputStack: {
    gap: `0rem`,
  }
}))

export function LoginSignupPage() {
  const { classes } = useStyles()
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [ifOtp, setIfOtp] = useState(false)
  const [otpValue, setOtpValue] = useState('')
  const BASEURL =
    'https://neobank-backend-aryasaksham-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/user'
  const [signinLoading, setSignInLoading] = useState(false)
  const [signUpLoading, setSignUpLoading] = useState(false)
  const [enterOtp, setEnterOtp] = useState(false)
  const router = useRouter()

  const SignUp = (contact_no: string, email: string, si: number) => {
    let res = axios
      .post(`${BASEURL}/sendotp/`, {
        contact_no: contact_no,
        email: email,
        signup: si,
        isAccount: 0,
      })
      .then((res) => {
        setEnterOtp(true)
        return res.data
      })
      .catch((err) => console.log(err))

    res.then((v) => console.log(v))
    setSignUpLoading(false)
    setSignUpLoading(false)
  }

  const validate = (contact_no: string, otp: string) => {
    let res = axios
      .post(`${BASEURL}/validateotp/`, {
        contact_no: contact_no,
        otp: parseInt(otp),
        email: email,
        isAccount: 0,
      })
      .then((res) => {
        router.replace('/home')
        return res.data
      })
      .catch((err) => console.log(err))

    res.then((v) => console.log(v))
  }
  
  return (
    <div className={classes.wrapper}>
      <div className={classes.grid}>
        <div className={classes.form}>
          <div className={classes.forminside}>
            <div className={classes.titlebold}>Shiftbank</div>

            {!enterOtp && (
              <Stack my={10}>
                <Stack className='inputStack'>
                  <TextInput
                    placeholder="Mobile Number"
                    type={'number'}
                    required
                    classNames={{
                      input: classes.input,
                      label: classes.inputLabel,
                      root: classes.inputcontainer,
                    }}
                    value={mobile}
                    onChange={(e) => setMobile(e.currentTarget.value)}
                  />
                  <TextInput
                    placeholder="Email"
                    type={'email'}
                    mt="md"
                    classNames={{
                      input: classes.input,
                      label: classes.inputLabel,
                      root: classes.inputcontainer,
                    }}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                  {ifOtp ? (
                    <TextInput
                    placeholder="OTP"
                    type={'number'}
                    mt="md"
                    classNames={{
                      input: classes.input,
                      label: classes.inputLabel,
                      root: classes.inputcontainer,
                    }}
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.currentTarget.value)}  
                    
                  />
              ) : (
                <Group className={classes.buttoncontainer}>
                  <Button className={classes.otpbutton} onClick={() => setIfOtp(true)}>
                    Get OTP
                  </Button>
                </Group>
              )}
                </Stack>
              {ifOtp ? (
                <Group className={classes.buttoncontainer} mt={15}>
                <Button
                  className={classes.button}
                  loading={signUpLoading}
                  onClick={() => {
                    SignUp(mobile, email, 1)
                    setSignUpLoading(true)
                  }}
                >
                  Sign Up
                </Button>
                <Button
                  className={classes.button}
                  loading={signinLoading}
                  onClick={() => {
                    SignUp(mobile, email, 0)
                    setSignInLoading(true)
                  }}
                >
                  Log In
                </Button>
              </Group>
              ) : <></>}
              </Stack>
            )}

            {enterOtp && (
              <Stack my={20}>
                <Text
                  c={'#656565'}
                  fz={'lg'}
                  style={{
                    letterSpacing: '0.1em',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                  ml={15}
                >
                  Enter OTP
                </Text>
                <PinInput
                  inputMode="numeric"
                  value={otp}
                  onChange={(e) => setOtp(e)}
                  mx="auto"
                />
                <Button
                  className={classes.control}
                  onClick={() => {
                    console.log(otp)
                    validate(mobile, otp)
                  }}
                >
                  Confirm
                </Button>
              </Stack>
            )}
          </div>
        </div>

        <div className={classes.sideContainer}>
          <div className={classes.sidecontainerinside}>
            <Title className={classes.title}>
              A Comprehensive Analysis of your Transactions
            </Title>
            <Text className={classes.description} mt="sm" mb={30}>
            Enter your credentials to access your account
            </Text>
            <div className={classes.outerimagecontainer}>
              <div className={classes.imagecontainer}>
                <img
                  className={classes.dashboardimg1}
                  src="/images/dashboardimg1.png"
                />
                <img
                  className={classes.dashboardimg2}
                  src="/images/dashboardimg2.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
