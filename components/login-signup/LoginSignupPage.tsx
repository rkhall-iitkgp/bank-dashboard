import {
  Button,
  createStyles,
  Group,
  PinInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { useForm, hasLength, isEmail } from '@mantine/form'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm, isEmail, hasLength } from '@mantine/form';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import useStorage from '../../hooks/useStorage'
import api from '../api'

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
    fontFamily: `Montserrat`,
    color: theme.white,
    lineHeight: 1,
    fontWeight: 400,
    paddingBottom: `5px`,
    fontSize: `3vw`,
  },
  titlebold: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: `#1673E1`,
    lineHeight: 1,
    fontWeight: 400,
    fontSize: `3rem`,
    textAlign: `center`,
    marginBottom: `4rem`,
  },

  description: {
    fontFamily: `Montserrat`,
    color: theme.colors[theme.primaryColor][0],
    maxWidth: `rem(300)`,
    fontSize: `1rem`,
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
    height: `100vh`,
    // minHeight: `100vh`,
    padding: `2vh`,
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
    color: '#434343',

    '&::placeholder': {
      color: theme.colors.gray[5],
      fontFamily: `Montserrat`,
      fontStyle: `normal`,
    },
    border: '0',
    borderRadius: '0',
    background: 'transparent',
    borderBottom: `2px solid #eee`,
    fontFamily: `Montserrat`,
  },

  inputLabel: {
    color: theme.black,
    position: `absolute`,
    top: `1.5rem`,
    transition: `0.25s ease`,
  },
  inputcontainer: {
    position: `relative`,
    marginTop: `0 !important`,
    paddingLeft: 0,
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
    paddingTop: `100px`,
    height: `96vh`,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
    display: 'flex',
    flexDirection: 'column',
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
  otpbutton: {
    height: `36px`,
    width: `364px`,
    background: `#006AE4`,
    borderRadius: `30px`,
    marginTop: `20px`,
    fontFamily: `Montserrat`,
  },
  imagecontainer: {
    width: '100%',
    height: '75%'
  },
  dashboardImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    verticalAlign: 'center',
    objectFit: 'cover',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center'
  }
}))

export function LoginSignupPage() {
  const { classes } = useStyles()
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  // const BASEURL =
  //   'https://neobank-backend-aryasaksham-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/user'
  const [signinLoading, setSignInLoading] = useState(false)
  const [signUpLoading, setSignUpLoading] = useState(false)
  const [buttonClicked, setButtonClicked] = useState(false)
  const [enterOtp, setEnterOtp] = useState(false)
  const router = useRouter()

  const SignUp = (contact_no: string, email: string, si: number) => {
    const { getItem, setItem } = useStorage()
    let res = api
      .post('/user/sendotp/', {
        contact_no: contact_no,
        email: email,
        signup: si,
        isaccount: 0,
      })
      .then((res) => {
        setEnterOtp(true)
        setItem('contact_no', res.data.contact_no, 'session')
        setItem('user_id', res.data.user_id, 'session')
        return res.data
      })
      .catch((err) => console.log(err))

    res.then((v) => console.log(v))
    setSignUpLoading(false)
    setSignUpLoading(false)
  }

  // const [otpValue, setOtpValue] = useState<boolean>(false)

  const Validate = (contact_no: string, otp: string) => {
    const { setItem } = useStorage()

    let res = api
      .post('user/validateotp/', {
        contact_no: contact_no,
        otp: otp,
        email: email,
        isaccount: 0,
      })
      .then((res) => {
        router.replace('/home')
        // save response i.e access token and refresh token in session storage
        setItem('contact_no', res.data.contact_no)
        setItem('access_token', res.data.access_token)
        setItem('refresh_token', res.data.refresh_token)
        setItem('user_id', res.data.user_id)
        return res.data
      })
      .catch((err) => console.log(err))

    res.then((v) => console.log(v))
  }

  const form = useForm({
    initialValues: {
      phone: '',
      email: '',
    },

    validate: {
      phone: hasLength({min: 10, max: 10}, 'Phone Number must be 10 characters long'),
      email: isEmail('Invalid Email')
    },
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.grid}>
        <div className={classes.form}>
          <div className={classes.forminside}>
            <div className={classes.titlebold}>shiftbank</div>

            {!enterOtp && (
              <Stack my={10}>
                <Stack>
                  <PhoneInput
                    placeholder="Mobile Number"
                    country={'in'}
                    containerStyle={{
                      border: 'none',
                      borderBottom: `2px solid #eee`,
                      top: `0.5rem`,
                      color: '#0052B3',
                    }}
                    inputStyle={{
                      background: 'transparent',
                      border: 'none',
                      margin: '4px 0px',
                      fontFamily: 'Montserrat, sans-serif',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      // fontSize: '18px',
                      lineHeight: '24px',
                      color: '#434343',
                    }}
                    buttonStyle={{
                      background: 'transparent',
                      border: 'none',
                    }}
                    value={mobile.replaceAll('\\D+', '')}
                    onChange={(e) => setMobile(e)}
                  />
                  <TextInput
                    placeholder="Email"
                    withAsterisk
                    {...form.getInputProps('email')}
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
                </Stack>

                {/* <>
                    <Group className={classes.buttoncontainer}>
                      <Button
                        className={classes.otpbutton}
                        onClick={() => {
                          // if (otpValue == false) setOtpValue(true)

                        }}
                      >
                        Get OTP
                      </Button>
                    </Group>
                  </> */}

                <Group className={classes.buttoncontainer} mt={15}>
                  {buttonClicked && (
                    <Button
                      disabled
                      className={classes.button}
                      loading={signUpLoading}
                      onClick={() => {
                        SignUp(mobile, email, 1)
                        setSignUpLoading(true)
                        setButtonClicked(true)
                      }}
                    >
                      Sign Up
                    </Button>
                  )}
                  {!buttonClicked && (
                    <Button
                      className={classes.button}
                      loading={signUpLoading}
                      onClick={() => {
                        SignUp(mobile, email, 1)
                        setSignUpLoading(true)
                        setButtonClicked(true)
                      }}
                    >
                      Sign Up
                    </Button>
                  )}
                  {buttonClicked && (
                    <Button
                      disabled
                      className={classes.button}
                      loading={signinLoading}
                      onClick={() => {
                        SignUp(mobile, email, 0)
                        setSignInLoading(true)
                        setButtonClicked(true)
                      }}
                    >
                      Sign In
                    </Button>
                  )}
                  {!buttonClicked && (
                    <Button
                      className={classes.button}
                      loading={signinLoading}
                      onClick={() => {
                        SignUp(mobile, email, 0)
                        setSignInLoading(true)
                        setButtonClicked(true)
                      }}
                    >
                      Sign In
                    </Button>
                  )}
                </Group>
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
                  value={otp}
                  onChange={(e) => setOtp(e)}
                  mx="auto"
                  length={6}
                />
                <Button
                  className={classes.control}
                  onClick={() => {
                    console.log(otp)
                    Validate(mobile, otp)
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
            <>
              <Title className={classes.title}>
                A Comprehensive Analysis of your Transactions
              </Title>
              <Text className={classes.description} mt="sm" mb={30}>
                Enter your credentials to access your account
              </Text>
            </>

            <div className={classes.imagecontainer}>
                  <img 
                    className={classes.dashboardImage}
                    src='/images/dashboardimg.png'
                    alt="dashboard-img"
                  />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
