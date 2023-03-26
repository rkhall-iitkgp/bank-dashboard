import {
  Button,
  createStyles,
  Group,
  PinInput,
  Stack,
  Text,
  TextInput,
  Title,
  Box,
  Checkbox
} from '@mantine/core'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { IconCheck, IconX } from '@tabler/icons-react';
import PhoneInput from 'react-phone-input-2'
import { notifications } from '@mantine/notifications';
import Image from 'next/image'
import 'react-phone-input-2/lib/style.css'
import useStorage from '../../hooks/useStorage'
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
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
    justifyContent: `center`,
    flexDirection: `column`,
    alignItems: `center`,
    margin: `auto`
  },
  togglesignin: {
    marginTop: `20px`
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
  },
  error: {
    color: 'red',
    fontSize: `calc(0.875rem - 0.125rem)`,
    lineHeight: `1.2`,
    marginTop: `12px`
  },
  PhoneInput: {
    border: 'none',
    borderBottom: `2px solid #eee`,
    top: `0.5rem`,
    color: '#0052B3',
    margin: '6px 0',
    ':active': {
      borderBottom: `2px solid red`
    }
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
  const [isSignIn, setIsSignIn] = useState(true)
  const [checked, setChecked] = useState(false)
  const SignUp = (contact_no: string, email: string, si: number, name: string, consent: boolean) => {
    const { getItem, setItem } = useStorage()
    let res = api
      .post('/user/sendotp/', {
        contact_no: "+" + contact_no,
        email: email,
        signup: si,
        name: name,
        consent: consent,
        isaccount: 0,
      })
      .then((res) => {
        setEnterOtp(true)
        notifications.show({
          id: 'hello-there',
          withCloseButton: true,
          autoClose: 5000,
          title: "Success",
          message: 'Otp Sent To Your Mobile Number',
          color: 'green',
          icon: <IconCheck size={"1.1rem"} />,
          loading: false,
        });
        setItem('contact_no', res.data.contact_no, 'session')
        setItem('user_id', res.data.user_id, 'session')


        setSignInLoading(false)
        setSignUpLoading(false)

        return (res)
      })
      .catch((err) => {
        console.log(err)
        notifications.show({
          id: 'hello-there',
          withCloseButton: true,
          autoClose: 5000,
          title: "Unsuccessful",
          message: err.response.data?.message,
          color: 'red',
          icon: <IconX size={"1.1rem"} />,
          loading: false,
        });
        setSignInLoading(false)
        setSignUpLoading(false)
      })

    res.then((v) => console.log(v))
  }

  // const [otpValue, setOtpValue] = useState<boolean>(false)

  const Validate = (contact_no: string, otp: string, email: string, name: string, consent: boolean) => {
    const { setItem } = useStorage()

    let res = api
      .post('user/validateotp/', {
        contact_no: "+" + contact_no,
        otp: otp,
        email: email,
        isaccount: 0,
        name: name,
        consent: consent
      })
      .then((res) => {
        if (res.status === 200) {
          notifications.show({
            id: 'hello-there',
            withCloseButton: true,
            autoClose: 5000,
            title: "Success",
            message: `User Succesfull Signed In`,
            color: 'green',
            icon: <IconCheck size={"1.1rem"} />,
            loading: false,
          });
          router.replace('/home')
          // save response i.e access token and refresh token in session storage
          setItem('contact_no', res.data.contact_no)
          setItem('access_token', res.data.access_token)
          setItem('refresh_token', res.data.refresh_token)
          setItem('user_id', res.data.user_id)
          setItem('name', res.data.name)
          setItem('email', res.data.email)
          setItem('contact_no', res.data.contact_no)
          setItem('kyc', res.data.kyc)
          setItem('consent', res.data.consent)
          setItem('accounts', "[]")
        }
        return res
      })
      .catch((err) => {
        console.log(err.response.status)
        notifications.show({
          id: err.response.status,
          withCloseButton: true,
          autoClose: 5000,
          title: "Unsuccessful",
          message: err.response.data?.message,
          color: 'red',
          icon: <IconX size={"1.1rem"} />,
          loading: false,
        });
      })

    res.then((v) => console.log(v))
  }
  const form = useForm({
    initialValues: {
      phone: '',
    },

    validate: {
      phone: hasLength(12, 'Enter a Valid Phone Number')
    },
  });
  const form1 = useForm({
    initialValues: {
      email: '',
      name: ''
    },

    validate: {
      email: isEmail('Invalid email'),
      name: hasLength({ min: 2 }, "Name should be atleast 2 character long")
    },
  });

  const style = `
  .react-tel-input:active{
    border: 2px solid red
  }
`
  return (
    <div className={classes.wrapper}>
      <div className={classes.grid}>
        <div className={classes.form}>
          <div className={classes.forminside}>
            <div className={classes.titlebold}>shiftbank</div>

            {!enterOtp && (
              <Stack my={10}>
                <style>
                  {style}
                </style>
                <Box component="form">

                  <PhoneInput

                    placeholder="Mobile Number"
                    country={'in'}
                    containerStyle={{
                      border: 'none',
                      borderBottom: `2px solid #eee`,
                      top: `0.5rem`,
                      color: '#0052B3',
                      margin: '6px 0',

                    }}
                    inputStyle={{
                      background: 'transparent',
                      border: 'none',
                      margin: '4px 0',
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

                  <div className={classes.error}>{form.errors?.phone}</div>
                  {!isSignIn ? <TextInput
                    placeholder="Name"
                    withAsterisk
                    mt="md"
                    classNames={{
                      input: classes.input,
                      label: classes.inputLabel,
                      root: classes.inputcontainer
                    }}
                    required
                    {...form1.getInputProps('name')}
                  /> : <></>}
                  {!isSignIn ? <TextInput
                    placeholder="Email"
                    withAsterisk
                    {...form1.getInputProps('email')}
                    type={'email'}
                    mt="md"
                    classNames={{
                      input: classes.input,
                      label: classes.inputLabel,
                      root: classes.inputcontainer
                    }}
                    required
                  /> : <></>}
                  {
                    !isSignIn ? <><Checkbox my={20} label={"I herby give my consent to access data and transaction permission"} checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} /></> : <></>
                  }
                </Box>
                <Group mt={15}>

                  {isSignIn ? <div className={classes.buttoncontainer}>
                    <Button
                      className={classes.button}
                      loading={signinLoading}
                      onClick={() => {
                        console.log('form.values.phone', form.values.phone)
                        if (!signUpLoading) {
                          form.validate()
                          if (form.isValid()) {
                            setSignInLoading(true)
                            console.log('mobile , email', form.values.phone, form1.values.email)
                            SignUp(form.values.phone, form1.values.email, 0, form1.values.name, checked)
                          }
                        }
                      }}
                    >
                      Sign In
                    </Button>
                    <div className={classes.togglesignin}>Don't have an account?  <span style={{ color: `black`, fontWeight: 600, cursor: `pointer` }} onClick={() => {
                      setIsSignIn(false)
                    }}>Register</span></div>
                  </div> : <div className={classes.buttoncontainer}> <Button
                    className={classes.button}
                    loading={signUpLoading}
                    onClick={() => {
                      if (!signinLoading) {
                        form.validate()
                        form1.validate()
                        if (form.isValid() && form1.isValid()) {
                          setSignUpLoading(true)
                          console.log('mobile , email', form.values.phone, form1.values.email)
                          SignUp(form.values.phone, form1.values.email, 1, form1.values.name, checked)
                        }
                      }
                    }}
                  >
                    Sign Up
                  </Button><div className={classes.togglesignin}>Have an account? <span style={{ color: `black`, fontWeight: 600, cursor: `pointer` }} onClick={() => {
                    setIsSignIn(true)
                  }}>Login</span> </div> </div>}
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
                    Validate(form.values.phone, otp, form1.values.email, form1.values.name, checked)
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
