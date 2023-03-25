import { createStyles, Group, PinInput } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ButtonGroup from '../reusable-components/ButtonGroup'
import Heading from '../reusable-components/Heading'
const useStyles = createStyles((theme) => ({
  wrapper: {
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
    display: `flex`,
    justifyContent: `center`,
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    fontWeight: 500,
    margin: `0.8rem`,
  },
  titlebold: {
    fontFamily: 'Montserrat',
    lineHeight: 1,
    fontWeight: 600,
    fontSize: `20px`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },

  description: {
    color: `#737373`,
    fontSize: `1rem`,
    padding: `0.5rem`,
    textAlign: `center`,
    marginTop: `30px`,
  },

  form: {
    backgroundColor: theme.white,
    borderRadius: theme.radius.xl,
    boxShadow: theme.shadows.lg,
    width: `40vw`,
    color: `#0052B3`,
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
  button1: {
    background: '#0062D6',
    borderRadius: '30px',
    width: '150px',
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: '1.25rem',
    padding: '5px 15px',
    textAlign: 'center',
    fontWeight: 400,
    // cursor: 'no-drop',
    '&:hover': {
      background: '#558ac9',
    },
  },
  control: {
    backgroundColor: `#006AE4`,
    borderRadius: `20px`,
  },
  forminside: {
    maxWidth: `90%`,
    width: `40vw`,
    // padding: theme.spacing.xl,
    margin: `auto`,
    padding: '30px',
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
}))

export function EnterUPIpin() {
  const { classes } = useStyles()
  const router = useRouter()
  const data = router.query

  return (
    <div className={classes.wrapper}>
      <div className={classes.form}>
        <Heading title="UPI Transfer" />
        <div className={classes.forminside}>
          <div className={classes.titlebox}>
            <div className={classes.titlebold}>
              <span>Enter PIN</span>
            </div>
          </div>
          <div className={classes.description}>
            <Group position="center">
              <PinInput placeholder="" />
            </Group>
          </div>

          {/* <ButtonGroup href1="/UPI/payment-details-review" href2="/UPI/payment-success" /> */}
          <div className={classes.buttoncontainer}>
            <Link href="/UPI/payment-details-review">
              <div className={classes.button1}>Back</div>
            </Link>
            <Link
              href={`/UPI/payment-success?name=${data.name}&amount=${data.amount}&upi=${data.upi}`}
            >
              <div className={classes.button1}>Continue</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
