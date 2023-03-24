import { createStyles, getStylesRef, TextInput } from '@mantine/core'
import { hasLength, isNotEmpty, useForm } from '@mantine/form'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Heading from '../reusable-components/Heading'

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: `#EEEEEE`,
    minHeight: `100vh`,
    boxSizing: 'border-box',
    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
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
    fontFamily: 'Montserrat, sans-serif',
    lineHeight: 1,
    fontWeight: 500,
    margin: `0.8rem`,
    //   paddingBottom:`5px`,
    //   marginBottom:`10px`
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
    paddingBottom: `10px`,
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
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,
    fontSize: '1rem',
    height: '1.2rem',
    fontFamily: 'Montserrat, sans-serif',

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
    fontSize: '1rem',
    height: '1.2rem',
    fontFamily: 'Montserrat, sans-serif',
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
  },
  inputcontainer: {
    backgroundColor: 'white',
    position: `relative`,
    marginTop: `0 !important`,
  },
  enterAmountContainer: {
    backgroundColor: 'white',
    position: `relative`,
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
  payingtext: {
    paddingTop: `0.25rem`,
    fontWeight: 600,
    marginBottom: `0.75rem`,
    marginTop: `0.5rem`,
  },
}))

export function PaymentForm() {
  const { classes } = useStyles()

  const router = useRouter()

  const form = useForm({
    initialValues: {
      name: '',
      upi_id: '',
      amount: '',
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
      upi_id: isNotEmpty('Enter your upi id'),
      amount: isNotEmpty('Enter amount'),
    },
  })

  // const icons = social.map((Icon, index) => (
  //   <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
  //     <Icon size="1.4rem" stroke={1.5} />
  //   </ActionIcon>
  // ));
  return (
    <div className={classes.wrapper}>
      <div className={classes.form}>
        <Heading title="UPI Transfer" />
        <div className={classes.forminside}>
          <div className={classes.titlebox}>
            <div className={classes.titlebold}>
              <span>Payment Amount</span>
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

            <TextInput
              label="UPI ID"
              variant="unstyled"
              disabled
              value="myself@oksbi"
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
            />
            <div className={classes.payingtext}>Paying</div>
            <TextInput
              placeholder="Name*"
              variant="unstyled"
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.enterAmountContainer,
              }}
              required
              {...form.getInputProps('name')}
            />
            <TextInput
              placeholder="UPI ID*"
              variant="unstyled"
              mt="md"
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.enterAmountContainer,
              }}
              required
              {...form.getInputProps('upi_id')}
            />
            <TextInput
              variant="unstyled"
              mt="md"
              placeholder={'Enter Amount*'}
              style={{ color: 'grey' }}
              classNames={{
                input: classes.inputAmount,
                label: classes.inputLabel,
                root: classes.enterAmountContainer,
              }}
              required
              {...form.getInputProps('amount')}
            />
          </div>

          <div className={classes.buttoncontainer}>
            <Link href="/UPI/Verify">
              <div className={classes.button1}>Back</div>
            </Link>
            <div
              className={classes.button1}
              onClick={() => {
                form.validate()
                if (form.isValid()) {
                  router.push('/UPI/Review')
                }
              }}
            >
              Continue
            </div>
          </div>
          {/* <ButtonGroup href1="/UPI/Verify" href2="/UPI/Review" /> */}
        </div>
      </div>
    </div>
  )
}
