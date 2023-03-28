import { createStyles, getStylesRef, TextInput } from '@mantine/core'
import { useRouter } from 'next/router'
import Heading from '../reusable-components/Heading'
import useStorage from '../../hooks/useStorage'
import transms from '../transms'

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: `#EEEEEE`,
    minHeight: `100vh`,
    boxSizing: 'border-box',
    [theme.fn.smallerThan('sm')]: {},
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    background: `grey`,
  },
  titlebox: {
    margin: 'auto',
    fontSize: '28px',
    display: `flex`,
    justifyContent: `space-between`,
  },
  title: {
    fontFamily: 'Montserrat',
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
    paddingBottom: `20px`,
    marginLeft: `1.5rem`,
  },

  description: {
    color: `#737373`,
    fontSize: `0.5rem`,
    padding: `0.5rem`,
  },

  form: {
    backgroundColor: theme.white,
    borderRadius: theme.radius.xl,
    boxShadow: theme.shadows.lg,
    width: `600px`,
    margin: `auto`,
    color: `#0052B3`,
  },

  input: {
    fontFamily: 'Montserrat',
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,
    fontSize: '0.8rem',
    height: '1rem',

    ':focus': {
      borderColor: 'blue',
    },
    ':disabled': {
      color: '#000',
      backgroundColor: '#fff',
      opacity: `0.8`,
      height: '20px',
    },
    border: '0',
    borderRadius: '0',
    background: 'transparent',
    borderBottom: `2px solid #ccc`,
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

  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    // pointerEvents: 'none',

    marginTop: `3rem`,
  },
  inputAmount: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.colors.gray[6],
    fontSize: '1rem',
    height: '1.2rem',
    fontFamily: 'Montserrat',
    ':focus': {
      borderColor: 'blue',
    },
    ':disabled': {
      color: '#000',
      backgroundColor: '#fff',
      opacity: `0.8`,
      height: '20px',
    },
    border: '0',
    borderRadius: '0',
    background: 'transparent',
    borderBottom: `2px solid #ccc`,
  },
  inputLabel: {
    ref: getStylesRef('inputLabel'),
    paddingLeft: `2px`,
    color: theme.colors.gray[6],
    fontSize: `12px`,
    fontWeight: 400,
    transition: `0.25s ease`,
    height: `14px`,
    fontFamily: 'Montserrat, sans-serif',
  },
  inputcontainer: {
    backgroundColor: 'white',
    position: `relative`,
    fontFamily: 'Montserrat, sans-serif',
    marginTop: `0 !important`,
  },
  enterAmountContainer: {
    backgroundColor: 'white',
    position: `relative`,
    // paddingTop:`0.75rem`,
    opacity: 0.8,
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
  payingtext: {
    paddingTop: `0.25rem`,
    fontWeight: 600,
  },
}))

//   const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function ReviewDetailsBank(props: { sbi: any }) {
  const { classes } = useStyles()
  const router = useRouter()
  const data = router.query
  const { getItem } = useStorage()
  const accessToken = getItem('access_token')
  const contact_no = getItem('contact_no')
  const account = JSON.parse(getItem('accounts')).filter(
    (v: { id: number }) => v.id + '' == data.id,
  )[0]

  const handleContinue = () => {
    const response = transms
      .post(
        `/sendTrxnOtp/`,
        {
          contact_no: contact_no,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        },
      )
      .then((res) => {
        return res.data
      })
      .catch((err) => console.log(err))

    response
      .then((v) => {
        if (v) {
          console.log(v)
          router.replace({
            pathname: '/bank-transfer/confirm-otp',
            query: router.query,
          })
        } else {
          alert('error sending otp')
        }
      })
      .catch((e) => console.log(e))
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.form}>
        <Heading title="Bank Transfer" />
        <div className={classes.forminside}>
          <div className={classes.titlebox}>
            <div className={classes.titlebold}>
              <span>Review Details</span>
            </div>
          </div>
          <div className={classes.beficiaryformcontainer}>
            <TextInput
              label="Paying From"
              variant="unstyled"
              type={'number'}
              mt="md"
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.enterAmountContainer,
              }}
              value={account?.account_no}
              disabled
            />

            <div className={classes.payingtext}>Paying</div>
            <TextInput
              label="Name"
              variant="unstyled"
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
              disabled
              value={data.name}
            />
            <TextInput
              label="Account Number"
              variant="unstyled"
              mt="md"
              value={`****` + data.account_no?.slice(8, 12)}
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
              required
              disabled
            />
            <TextInput
              label="Amount"
              variant="unstyled"
              mt="md"
              value={data.amount}
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
              required
              disabled
            />
            {data.ifscReq === 'true' ? (
              <TextInput
                label="IFSC"
                variant="unstyled"
                mt="md"
                value={data.ifsc}
                classNames={{
                  input: classes.input,
                  label: classes.inputLabel,
                  root: classes.inputcontainer,
                }}
                required
                disabled
              />
            ) : (
              <></>
            )}
          </div>
          <div className={classes.buttonContainer}>
            <div className={classes.button1} onClick={router.back}>
              Back
            </div>
            <div className={classes.button1} onClick={handleContinue}>
              Continue
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
