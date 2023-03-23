import {
  Button,
  createStyles,
  Group,
  NumberInput,
  PinInput,
  Stack,
  Text,
  TextInput,
  Title,
  Box
} from '@mantine/core'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';

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
    fontSize: `2rem`,
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
    fontSize: `0.8rem`,
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
    height: `100%`,
    minHeight: `100vh`,
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
  dashboardImage1: {
    width: `56%`,
    borderRadius: `8px`,
    maxHeight: `20vw`,
    zIndex: 1,
  },
  dashboardImage2: {
    position: `absolute`,
    width: `44%`,
    borderRadius: `8px`,
    zIndex: 2,
    top: `20%`,
    left: `40%`,
  },
  error: {
    color: 'red',
    fontSize: `2rem`
  }
}))

export function LoginSignupPage() {
  const { classes } = useStyles()
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
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
        isaccount: 0,
      })
      .then((res) => {
        setEnterOtp(true)
        // sessionStorage.setItem('contact_no', res.data.contact_no)
        // sessionStorage.setItem('user_id', res.data.user_id)
        return res.data
      })
      .catch((err) => console.log(err))

    res.then((v) => console.log(v))
    setSignUpLoading(false)
    setSignUpLoading(false)
  }

  // const [otpValue, setOtpValue] = useState<boolean>(false)

  const validate = (contact_no: string, otp: string) => {
    let res = axios
      .post(`${BASEURL}/validateotp/`, {
        contact_no: contact_no,
        otp: parseInt(otp),
        email: email,
        isaccount: 0,
      })
      .then((res) => {
        router.replace('/home')
        // save response i.e access token and refresh token in session storage
        sessionStorage.setItem('contact_no', res.data.contact_no)
        sessionStorage.setItem('access_token', res.data.access_token)
        sessionStorage.setItem('refresh_token', res.data.refresh_token)
        sessionStorage.setItem('user_id', res.data.user_id)
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
      email: isEmail('Invalid email'),
      phone: hasLength(10, 'Enter a Valid Phone Number')
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
                <Box component="form">
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

                    {...form.getInputProps('phone')}

                  />
                  <TextInput
                    placeholder="Email"
                    type={'email'}
                    error={form.getInputProps('email').error}
                    mt="md"
                    classNames={{
                      input: classes.input,
                      label: classes.inputLabel,
                      root: classes.inputcontainer
                    }}
                    required
                    {...form.getInputProps('email')}
                  />{
                  }
                </Box>
                <Group className={classes.buttoncontainer} mt={15}>
                  <Button
                    className={classes.button}
                    loading={signUpLoading}
                    onClick={() => {
                      form.validate()

                      if (form.isValid()) {
                        setSignUpLoading(true)
                        console.log('mobile , email', form.values.phone, form.values.email)
                        SignUp(form.values.phone, form.values.email, 1)
                      }
                    }}
                  >
                    Sign Up
                  </Button>
                  <Button
                    className={classes.button}
                    loading={signinLoading}
                    onClick={() => {
                      form.validate()
                      if (form.isValid()) {
                        console.log('mobile , email', form.values.phone, form.values.email)
                        SignUp(form.values.phone, form.values.email, 0)
                        setSignInLoading(true)
                      }
                    }}
                  >
                    Sign In
                  </Button>
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
                  inputMode="numeric"
                  value={otp}
                  onChange={(e) => setOtp(e)}
                  mx="auto"
                  length={6}
                />
                <Button
                  className={classes.control}
                  onClick={() => {
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
                  className={classes.dashboardImage1}
                  src="/images/dashboardimg1.png"
                  alt="dashboard-img"
                />
                <img
                  className={classes.dashboardImage2}
                  src="/images/dashboardimg2.png"
                  alt="dashboard-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
