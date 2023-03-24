import { Box, createStyles, TextInput } from '@mantine/core'
import { hasLength, isNotEmpty, useForm } from '@mantine/form'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import { useState } from 'react'
import Heading from '../reusable-components/Heading'

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: `#EEEEEE`,
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
    // marginBottom:`20px`,
    display: `flex`,
    justifyContent: `space-between`,
  },
  title: {
    fontFamily: 'Montserrat, sans-serif',
    //   color: theme.black,
    lineHeight: 1,
    fontWeight: 500,
    margin: `0.8rem`,
  },
  titlebold: {
    fontFamily: 'Montserrat, sans-serif',
    //   color: theme.black,
    lineHeight: 1,
    fontWeight: 600,
    fontSize: `20px`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    marginLeft: `1.5rem`,
  },

  description: {
    color: `#737373`,
    fontSize: `0.5rem`,
    fontFamily: `Montserrat`,
    fontWeight: 400,
    padding: `0.5rem`,
  },

  form: {
    backgroundColor: theme.white,
    borderRadius: theme.radius.xl,
    boxShadow: theme.shadows.lg,
    width: `40vw`,
    color: `#0052B3`,
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
    fontFamily: 'Montserrat, sans-serif',
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
  beficiaryformcontainer: {
    width: `90%`,
    margin: `auto`,
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
  amountbox: {
    backgroundColor: theme.white,
    borderRadius: theme.radius.md,
    boxShadow: `0px 6px 20px rgba(0, 0, 0, 0.2)`,
    width: `auto`,
    fontFamily: `Montserrat`,
    color: `#0052B3`,
    padding: `10px`,
    minHeight: `60px`,
    minWidth: `150px`,
  },
  amountinside: {
    maxWidth: `90%`,
    width: `auto`,
    padding: `0 5px`,
    margin: `auto`,
    fontSize: `0.7rem`,
    color: 'black',
    whiteSpace: `nowrap`,
    display: `flex`,
    justifyContent: `center`,
    textAlign: `end`,
    alignItems: `center`,
  },
  balance: {
    color: '#0052B3',
    fontSize: `1.2rem`,
    fontWeight: 600,
    paddingLeft: `3px`,
  },
  accountnumber: {
    color: 'black',
    fontSize: `0.6rem`,
    fontWeight: 600,
    textAlign: `end`,
    padding: `0 5px`,
  },
  button1: {
    background: '#0062D6',
    borderRadius: '30px',
    width: '150px',
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: '1.25rem',
    padding: '5px 15px',
    textAlign: 'center',
    cursor: 'pointer',
    fontWeight: 400,
    '&:hover': {
      background: '#558ac9',
    },
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: `3rem`,
  },
}))

export function PaymentForm(props: { sbi: any }) {
  const { classes } = useStyles()
  const [click, setClick] = useState(false)

  const [otp, setOtp] = useState(false)
  const router = useRouter()
  const data = router.query

  const form = useForm({
    initialValues: {
      name: '',
      accountno: '',
      reaccountno: '',
      amount: '',
      ifsc: '',
    },

    validate: {
      name: hasLength({ min: 2, max: 16 }, 'Name must be 2-16 characters long'),
      accountno: isNotEmpty('Enter your account no'),
      reaccountno: isNotEmpty('Re-Enter your account no'),
      amount: isNotEmpty('Enter amount'),
      // ifsc: isNotEmpty('Enter IFSC'),
    },
  })

  return (
    <Box component="form" mx="auto" onSubmit={form.onSubmit(() => {})}>
      {/* <form onSubmit={form.onSubmit(console.log)}> */}
      <div className={classes.wrapper}>
        <div className={classes.form}>
          <Heading title="Bank Transfer" />
          <div className={classes.forminside}>
            <div className={classes.titlebox}>
              <div className={classes.titlebold}>
                <span>Pay Beneficiary</span>
              </div>
              <div className={classes.amountbox}>
                <div className={classes.amountinside}>
                  <span>Balance:</span>{' '}
                  <span className={classes.balance}> $5678.00</span>
                </div>
                <div className={classes.accountnumber}>XXXXXXXX1234</div>
              </div>
            </div>
            <div className={classes.beficiaryformcontainer}>
              <TextInput
                placeholder="Name*"
                mt="md"
                required
                withAsterisk
                classNames={{
                  input: classes.input,
                  label: classes.inputLabel,
                  root: classes.inputcontainer,
                }}
                {...form.getInputProps('name')}
              />
              <TextInput
                placeholder="Account Number*"
                type={'number'}
                required
                withAsterisk
                classNames={{
                  input: classes.input,
                  label: classes.inputLabel,
                  root: classes.inputcontainer,
                }}
                {...form.getInputProps('accountno')}
              />
              <TextInput
                placeholder="Re-enter Account Number*"
                type={'number'}
                required
                withAsterisk
                classNames={{
                  input: classes.input,
                  label: classes.inputLabel,
                  root: classes.inputcontainer,
                }}
                {...form.getInputProps('reaccountno')}
              />
              <TextInput
                placeholder="Enter Amount*"
                type={'number'}
                mt="md"
                required
                withAsterisk
                classNames={{
                  input: classes.input,
                  label: classes.inputLabel,
                  root: classes.inputcontainer,
                }}
                {...form.getInputProps('amount')}
              />
              {data.ifsc === 'true' ? (
                <>
                  <TextInput
                    placeholder="IFSC*"
                    mt="md"
                    classNames={{
                      input: classes.input,
                      label: classes.inputLabel,
                      root: classes.inputcontainer,
                    }}
                    {...form.getInputProps('ifsc')}
                    required
                  />
                  <div className={classes.description}>
                    The user is responsible for ensuring the accuracy of the
                    account number, name, and IFSC code entered, and the bank
                    will not be held liable for any losses resulting from
                    incorrect information
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            {otp ? (
              <TextInput
                placeholder="OTP"
                type={'number'}
                required
                mt="md"
                classNames={{
                  input: classes.input,
                  label: classes.inputLabel,
                  root: classes.inputcontainer,
                }}
              />
            ) : (
              <></>
            )}

            <div className={classes.buttoncontainer}>
              <Link href="/bank-transfer/select-beneficiary">
                <div className={classes.button1}>Back</div>
              </Link>
              <div
                className={classes.button1}
                onClick={() => {
                  form.validate()
                  if (form.isValid()) {
                    router.push(
                      `/bank-transfer/review-payment-details?name=${form.values.name}&amount=${form.values.amount}&ifsc=${form.values.ifsc}&accountNo=${form.values.accountno}`,
                    )
                  }
                }}
              >
                Continue
              </div>
              {/* {click ? (
                <Link
                  href={{
                    pathname: '/bank-transfer/review-payment-details',
                    query: {},
                  }}
                >
                  <div className={classes.button1}>Continue</div>
                </Link>
              ) : (
                <div
                  className={classes.button1}
                  onClick={() => {
                    form.validate()
                  }}
                >
                  Continue
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
      {/* </form> */}
    </Box>
  )
}
