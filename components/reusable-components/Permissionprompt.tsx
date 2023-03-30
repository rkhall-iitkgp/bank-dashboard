import {Button, createStyles, Group, Modal,} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import Link from 'next/link'
import {useState} from 'react'

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
    fontWeight: 600,
    lineHeight: '29px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: 'black',
    // padding: '0px 0px 0px 0px',
    justifyContent: `center`,
    paddingBottom: `28px`,
    fontSize: `1.2rem`,
  },

  description: {
    color: `black`,
    // maxWidth: rem(300),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
    textAlign: `center`,
    fontSize: `1.2rem`,
    fontWeight: 400,
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
    maxWidth: `100%`,
    width: `700px`,
    padding: `1.5rem 0 `,
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
    fontSize: '18px',
    lineHeight: '16px',
    backgroundColor: `#006AE4`,
    borderRadius: `50px`,
    width: `280px`,
    margin: `auto`,
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
  cancel: {
    padding: `2.5px 20px`,
    background: `#DD0000`,
    position: `absolute`,
    left: `20px`,
    borderRadius: `40px`,
    color: `white`,
    cursor: `pointer`,
    ':hover': {
      background: `#a90404`,
    },
  },
}))

interface Props {
  SetIsPermissionPopUpOpen: Function
  isPermissionPopUpOpen: boolean
}
export function PermissionFormPopup({
  SetIsPermissionPopUpOpen,
  isPermissionPopUpOpen,
}: Props) {
  const { classes } = useStyles()
  const [otp, setOtp] = useState<boolean>(false)
  const [opened, { open, close }] = useDisclosure(false)

  const [account_no, setAccount_no] = useState<number | ''>('')
  const [ifsc, setIfsc] = useState<string>('')

  return (
    <Modal
      withCloseButton={false}
      opened={isPermissionPopUpOpen}
      onClose={close}
      centered
      radius="lg"
      size="auto"
      padding={0}
    >
      <div className={classes.topheading}>
        <div
          className={classes.cancel}
          onClick={() => SetIsPermissionPopUpOpen(false)}
        >
          Cancel
        </div>
        <div className={classes.title}>Permission Required</div>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.form}>
          <div className={classes.forminside}>
            <div className={classes.beficiaryformcontainer}>
              <div className={classes.description}>
                We are unable to process your transaction request as you have
                not provided permission to access your transaction data.
              </div>
              <div className={classes.titlebold}>
                Please click the button below to proceed to your profile page
                where you can provide your consent.
              </div>
              <Group mt="lg">
                <Link href="/profile" style={{ margin: 'auto' }}>
                  <Button size="lg" className={classes.control}>
                    Provide Consent
                  </Button>
                </Link>
              </Group>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}