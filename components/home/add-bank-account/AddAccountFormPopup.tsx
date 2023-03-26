import {
  Button,
  createStyles,
  Group,
  Modal,
  NumberInput,
  rem,
  TextInput,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useEffect, useState } from 'react'
// import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { IconCheck, IconX } from '@tabler/icons-react';
import useStorage from '../../../hooks/useStorage';
import { notifications } from '@mantine/notifications';

import api from '../../api'
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
const useStyles = createStyles((theme) => ({
  wrapper: {
    // backgroundColor: `#000000de`,
    // position: `fixed`,
    // inset: 0,
    width: `100%`,
    // minHeight: `100vh`,
    boxSizing: 'border-box',
    // padding: `calc(${theme.spacing.xl} * 2.5)`,
    // [theme.fn.smallerThan('sm')]: {
    //   padding: `calc(${theme.spacing.xl} * 1.5)`,
    // },
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  title: {
    fontFamily: 'Montserrat, sans-serif',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '28px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#0052B3',
    padding: '20px 0px 8px 0px',
  },
  titlebold: {
    fontFamily: 'Montserrat, sans-serif',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '29px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#0052B3',
    padding: '20px 0px 8px 0px',
    justifyContent: `center`,
    paddingBottom: `28px`,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: rem(300),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  form: {
    backgroundColor: theme.white,
    borderRadius: theme.radius.md,
    color: `#0052B3`,
  },

  social: {
    color: theme.white,
    '&:hover': {
      color: theme.colors[theme.primaryColor][1],
    },
  },
  forminside: {
    maxWidth: `90%`,
    width: `500px`,
    padding: theme.spacing.xl,
    margin: `auto`,
  },
  input: {
    fontFamily: 'Montserrat, sans-serif',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '24px',
    color: '#434343',
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    border: '0',
    borderRadius: '0',
    background: 'transparent',
    borderBottom: `2px solid #eee`,
    margin: '4px 0px',
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
    fontFamily: 'Montserrat, sans-serif',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '26px',
    backgroundColor: `#006AE4`,
    borderRadius: `20px`,
    width: `100%`,
  },

  topheading: {
    background: `#DDEDFF`,
    display: `flex`,
    justifyContent: `center`,
    borderTopLeftRadius: theme.radius.md,
    borderTopRightRadius: theme.radius.md,
    alignItems: `center`,
  },
  beficiaryformcontainer: {
    width: `90%`,
    margin: `auto`,
  },
  error: {
    color: 'red',
    fontSize: `calc(0.875rem - 0.125rem)`,
    lineHeight: `1.2`,
    marginTop: `12px`
  },
}))

interface Props {
  setBankAccountList: Function
  setIsAddAccountPopupOpen: Function
  isAddAccountPopupOpen: boolean
  bankAccountList: any[]
}
export function AddAccountFormPopup({
  setBankAccountList,
  bankAccountList,
  setIsAddAccountPopupOpen,
  isAddAccountPopupOpen,
}: Props) {
  const { classes } = useStyles()
  const [otp, setOtp] = useState<boolean>(false)
  const [opened, { open, close }] = useDisclosure(false)
  const { setItem, getItem } = useStorage()
  const [account_no, setAccount_no] = useState<number | ''>('')
  const [mobile_no, setMobile_no] = useState<string>('')
  const [ifsc, setIfsc] = useState<string>('')
  const [otpNum, setOtpNum] = useState<string>('')
  const form = useForm({
    initialValues: {
      phone: '',
      account_no: '',
      IFSC: ""
    },

    validate: {
      phone: hasLength(12, 'Enter a Valid Phone Number'),
      account_no: isInRange({ min: 100000000000, max: 999999999999 }, 'Enter a Valid Account Number'),
      IFSC: matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Enter A Valid IFSC Code")

    },
  });
  useEffect(() => {


    return () => {
      api.get(`/user/accounts/${getItem("user_id")}/`, { headers: { "Authorization": `Bearer ${getItem("access_token")}` } })
        .then((response) => {
          console.log(response.data.accounts)
          const responseArray = response.data
          setBankAccountList(responseArray)
          console.log(bankAccountList)

          setItem('accounts', response.request.responseText)
          return response
        })
        .catch((err) => console.log(err))
    }
  }, [])

  return (
    <Modal
      withCloseButton={false}
      opened={isAddAccountPopupOpen}
      onClose={close}
      centered
      radius="lg"
      size="auto"
      padding={0}
    >
      <div className={classes.topheading}>
        <div className={classes.title}>Add Account</div>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.form}>
          <div className={classes.forminside}>
            <div className={classes.titlebold}>Enter Your Details</div>
            <div className={classes.beficiaryformcontainer}>
              <NumberInput
                placeholder="Account Number"
                type={'number'}
                required={true}
                hideControls={true}

                classNames={{
                  input: classes.input,
                  label: classes.inputLabel,
                  root: classes.inputcontainer,
                }}
                {...form.getInputProps('account_no')}

              />
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
                  fontSize: '18px',
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
              <TextInput
                placeholder="IFSC"
                mt="md"

                classNames={{
                  input: classes.input,
                  label: classes.inputLabel,
                  root: classes.inputcontainer,
                }}
                {...form.getInputProps('IFSC')}

              />
              {otp ? (
                <TextInput
                  placeholder="OTP"
                  mt="md"
                  value={otpNum}
                  onChange={(e) => setOtpNum(e.currentTarget.value)}
                  classNames={{
                    input: classes.input,
                    label: classes.inputLabel,
                    root: classes.inputcontainer,
                  }}
                />
              ) : (
                <></>
              )}

              <Group mt="lg">
                <Button
                  size="lg"
                  className={classes.control}
                  onClick={() => {
                    if (otp == false) {
                      console.log('contact_no', form.values.account_no)
                      form.validate()
                      if (form.isValid()) {
                        const response = api
                          .post('/user/sendaccountotp/', {
                            "contact_no": "+" + form.values.phone
                          }, { headers: { "Authorization": `Bearer ${getItem("access_token")}` } })
                          .then((response) => {
                            console.log(response)
                            setOtp(true)
                            notifications.show({
                              id: 'hello-there',
                              withCloseButton: true,
                              autoClose: 5000,
                              title: "Success",
                              message: 'Otp sent to your mobile number',
                              color: 'green',
                              icon: <IconCheck size={"1.1rem"} />,
                              loading: false,
                            });

                          })
                          .catch((err) => {
                            console.log('err', err)
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
                          })
                      }
                    } else {
                      setBankAccountList(bankAccountList)
                      setIsAddAccountPopupOpen(false)
                      console.log(otpNum)
                      const contact_no = getItem('contact_no')
                      const response = api
                        .post(`/user/accounts/${getItem("user_id")}/`, {
                          contact_no: "+" + form.values.phone,
                          account_no: form.values.account_no,
                          ifsc: form.values.IFSC,
                          otp: otpNum,
                        }, { headers: { "Authorization": `Bearer ${getItem("access_token")}` } })
                        .then((response) => {
                          notifications.show({
                            id: 'hello-there',
                            withCloseButton: true,
                            autoClose: 5000,
                            title: "Success",
                            message: 'Account Succesfully Added',
                            color: 'green',
                            icon: <IconCheck size={"1.1rem"} />,
                            loading: false,
                          });
                          // sessionStorage.setItem('bankAccountList', JSON.stringify(bankAccountList))
                          console.log(response)
                        })
                        .catch((err) => {
                          console.log('err', err)
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
                        })
                    }
                  }}
                >
                  {otp ? 'Add Account' : 'Get OTP'}
                </Button>
                <Button
                  size="lg"
                  className={classes.control}
                  onClick={() => setIsAddAccountPopupOpen(false)}
                >
                  Back
                </Button>
              </Group>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
