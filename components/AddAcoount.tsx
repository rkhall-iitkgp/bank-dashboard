import { createStyles, TextInput, Button, Group, rem } from '@mantine/core'
import { useState } from 'react'
// import LongButton from './SmallComponents/LongButton'
//   import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
//   import { ContactIconsList } from '../ContactIcons/ContactIcons';
const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: `#000000de`,
    position: `fixed`,
    inset: 0,
    width: `100%`,
    minHeight: `100vh`,
    boxSizing: 'border-box',
    // borderRadius: theme.radius.md,
    padding: `calc(${theme.spacing.xl} * 2.5)`,
    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    zIndex: 100,
    // overflow: `hidden`
  },
  titlebox: {
    marginBottom: `10px`,
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    //   color: theme.black,
    lineHeight: 1,
    fontWeight: 500,
    margin: `0.8rem`,
    //   paddingBottom:`5px`,
    //   marginBottom:`10px`
  },
  titlebold: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    //   color: theme.black,
    lineHeight: 1,
    fontWeight: 600,
    fontSize: `1.5rem`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    paddingBottom: `10px`,
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
    boxShadow: theme.shadows.lg,
    width: `500px`,
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
    width: `100%`,
    // marginTop: `20px`,
    fontSize: `1rem`,
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
  beficiaryformcontainer: {
    width: `90%`,
    margin: `auto`,
  },
}))

interface Props {
  setAddAccount: Function
}
export function ContactUs({ setAddAccount }: Props) {
  const { classes } = useStyles()
  const [otp, setOtp] = useState(false)
  return (
    <div className={classes.wrapper}>
      <div className={classes.form}>
        <div className={classes.topheading}>
          <div className={classes.title}>Add Account</div>
        </div>
        <div className={classes.forminside}>
          <div className={classes.titlebox}>
            <div className={classes.titlebold}>Enter Your Details</div>
          </div>
          <div className={classes.beficiaryformcontainer}>
            <TextInput
              placeholder="Account Number"
              type={'number'}
              required
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
            />
            <TextInput
              placeholder="Mobile Number"
              type={'number'}
              mt="md"
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
            />
            <TextInput
              placeholder="IFSC"
              mt="md"
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
            />
            {otp ? (
              <TextInput
                placeholder="OTP"
                type={'number'}
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

            <Group mt="lg">
              <Button
                className={classes.control}
                onClick={() => {
                  setOtp(true)
                }}
              >
                {otp ? 'Add Account' : 'Get OTP'}
              </Button>
              <Button
                className={classes.control}
                onClick={() => {
                  setAddAccount(false)
                  const body = document.body
                  const scrollY = body.style.top
                  body.style.position = ''
                  body.style.top = ''
                  window.scrollTo(0, parseInt(scrollY || '0') * -1)
                }}
              >
                Back
              </Button>
            </Group>
          </div>
        </div>
      </div>
    </div>
  )
}
