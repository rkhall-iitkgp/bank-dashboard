import {
  createStyles,
  TextInput,
  Button,
  Group,
  rem,
  Modal,
  NumberInput,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

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
    color: '#0052B3',
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

  const [account_no, setAccount_no] = useState<number | ''>('')
  const [mobile_no, setMobile_no] = useState<string>('')
  const [ifsc, setIfsc] = useState<string>('')

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
                value={account_no}
                onChange={setAccount_no}
                classNames={{
                  input: classes.input,
                  label: classes.inputLabel,
                  root: classes.inputcontainer,
                }}
              />
              <PhoneInput
                placeholder="Mobile Number"
                value={mobile_no}
                onChange={setMobile_no}
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
                  color: '#0052B3',
                }}
                buttonStyle={{
                  background: 'transparent',
                  border: 'none',
                }}
              />
              <TextInput
                placeholder="IFSC"
                mt="md"
                value={ifsc}
                onChange={(e) => setIfsc(e.currentTarget.value)}
                classNames={{
                  input: classes.input,
                  label: classes.inputLabel,
                  root: classes.inputcontainer,
                }}
              />
              {otp ? (
                <NumberInput
                  placeholder="OTP"
                  type={'number'}
                  mt="md"
                  hideControls={true}
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
                    if (otp == false) setOtp(true)
                    else {
                      bankAccountList.push({
                        account_no: account_no,
                        ifsc: ifsc,
                      })
                      setBankAccountList(bankAccountList)
                      setIsAddAccountPopupOpen(false)
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
