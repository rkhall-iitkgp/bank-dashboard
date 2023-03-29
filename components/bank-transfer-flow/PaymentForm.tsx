import React from 'react'
import { Box, createStyles, Text, TextInput } from '@mantine/core'
import { hasLength, isNotEmpty, useForm } from '@mantine/form'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useStorage from '../../hooks/useStorage'
import datams from '../datams'
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
    width: `600px`,
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
    width: `500px`,
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
    // boxShadow: `0px 6px 20px rgba(0, 0, 0, 0.2)`,
    width: `auto`,
    fontFamily: `Montserrat`,
    color: `#0052B3`,
    padding: `10px`,
    minHeight: `60px`,
    minWidth: `150px`,
  },
  buttonVerify: {
    // height:``,
    // width: `100px`,
    // backgroundColor: `#ffffff`,
    marginRight: '60px',
    // cursor: 'pointer',
    // borderRadius:,
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
      cursor: `pointer`,
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
  const [buttonText, setButtonText] = useState('Verify')
  const router = useRouter()
  const data = router.query
  const { getItem } = useStorage()
  let account
  try {
    account = JSON.parse(getItem('accounts') ?? '[]')?.filter(
      (v: { id: number }) => v.id + '' == data.id,
    )[0]
  } catch {
    console.log('JSON parsing error')
  }
  const accessToken = getItem('access_token')
  const [ben_account_id, setBenAccId] = useState('')
  // console.log('account = ', account);

  const form = useForm({
    initialValues: {
      name: '',
      account_no: '',
      reaccountno: '',
      amount: '',
      ifsc: '',
      account_id: '',
    },

    validate: {
      name: hasLength({ min: 2, max: 16 }, 'Name must be 2-16 characters long'),
      account_no: isNotEmpty('Enter your account no'),
      // reaccountno: matches(accountno, 'Re-Enter your account no'),

      reaccountno: (value, values) =>
        value !== values.account_no ? 'Re-Enter your account no' : null,

      amount: isNotEmpty('Enter amount'),
      // ifsc: isNotEmpty('Enter IFSC'),
    },
  })

  const [style2, setStyle2] = useState({
    color: '#0062D6',
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '18px',
    cursor: 'pointer',
  })

  function handleClick1() {
    if (form.values.account_no !== '') {
      if (data.selfOrOther === '1') {
        const response = datams
          .post(
            '/user/getid/',
            {
              account_no: form.values.account_no,
            },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
              },
            },
          )
          .then((res) => res.data)
          .catch((err) => console.log(err))

        response.then((v) => {
          if (form.values.account_no !== account.account_no && v?.account_id) {
            setStyle2({ ...style2, color: '#00AD30' })
            setButtonText('Verified')
            console.log('v = ', v)
            setBenAccId(v.account_id)
          } else {
            setButtonText('Cannot Find Account')
            setStyle2({ ...style2, color: 'red' })
          }
        })
      } else {
        setStyle2({ ...style2, color: '#00AD30' })
        setButtonText('Verified')
        setBenAccId(form.values.account_no)
      }
    }
  }
  function handleClick2() {}

  useEffect(() => {
    if (form.values.account_no === '') {
      setButtonText('Verify')
      setStyle2({
        color: '#0062D6',
        fontFamily: 'Montserrat',
        fontWeight: 400,
        fontSize: '18px',
        cursor: 'no-drop',
      })
      setButtonText('Verify')
    } else {
      setStyle2({
        color: '#0062D6',
        fontFamily: 'Montserrat',
        fontWeight: 400,
        fontSize: '18px',
        cursor: 'pointer',
      })
      setButtonText('Verify')
    }
    return () => {}
  }, [form.values.account_no])

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
                  <span className={classes.balance}> ${account?.balance}</span>
                </div>
                <div className={classes.accountnumber}>
                  ****{account?.account_no.slice(8, 12)}
                </div>
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
                {...form.getInputProps('account_no')}
                rightSection={
                  <Text
                    className={classes.buttonVerify}
                    style={style2}
                    onChange={() => {
                      setStyle2({ ...style2, color: '#0062D6' })
                    }}
                    onClick={
                      form.values.account_no !== ''
                        ? handleClick1
                        : handleClick2
                    }
                  >
                    {buttonText}
                  </Text>
                }
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
              {data.selfOrOther !== '1' ? (
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

            <div className={classes.buttoncontainer}>
              <div className={classes.button1} onClick={router.back}>
                Back
              </div>
              {buttonText !== 'Verify' ? (
                <div
                  className={classes.button1}
                  onClick={() => {
                    form.validate()
                    if (form.isValid()) {
                      router.push({
                        pathname: `/bank-transfer/review-payment-details`,
                        query: {
                          name: form.values.name,
                          acc_no: ben_account_id,
                          amount: form.values.amount,
                          ifsc: form.values.ifsc,
                          ...router.query,
                          account_no: form.values.account_no,
                        },
                      })
                    }
                  }}
                >
                  Continue
                </div>
              ) : (
                <div
                  className={classes.button1}
                  style={{ cursor: 'no-drop' }}
                  onClick={() => {
                    form.validate()
                  }}
                >
                  Continue
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* </form> */}
    </Box>
  )
}
