import { createStyles, TextInput, getStylesRef } from '@mantine/core'
import ButtonGroup from './SmallComponents/ButtonGroup'
import Heading from './SmallComponents/Heading'
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
    width: '90%',
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
    width: `40vw`,
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
  payingtext: {
    paddingTop: `0.25rem`,
    fontWeight: 600,
  },
}))

//   const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function Reviewdetailsbank(props: { sbi: any }) {
  const { classes } = useStyles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.form}>
        <Heading title="UPI Transfer" />
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
              value={`197288882222`}
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
              value={'John Doe'}
            />
            <TextInput
              label="Account Number"
              variant="unstyled"
              mt="md"
              value={'XXXXXXXX7394'}
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
              value={'Rs. 500'}
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
              required
            />
            <TextInput
              label="IFSC"
              variant="unstyled"
              mt="md"
              value={'9876'}
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
              required
            />
          </div>
          <ButtonGroup
            href1="/BankTransfer/Paybenificiary"
            href2="/BankTransfer/Otpconfirm"
          />
        </div>
      </div>
    </div>
  )
}
