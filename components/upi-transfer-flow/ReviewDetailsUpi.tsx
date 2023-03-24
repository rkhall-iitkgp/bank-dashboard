<<<<<<< HEAD:components/PayBenificiary.tsx
import { createStyles, TextInput } from '@mantine/core'
import { useState } from 'react'
import ButtonGroup from './SmallComponents/ButtonGroup'
import Heading from './SmallComponents/Heading'
import { useRouter } from 'next/router'
import Link from 'next/link'

=======
import { createStyles, TextInput, getStylesRef } from '@mantine/core'
import ButtonGroup from '../reusable-components/ButtonGroup'
import Heading from '../reusable-components/Heading'
>>>>>>> b57f4294b3a1d4cb750a251221c020bb138d58ff:components/upi-transfer-flow/ReviewDetailsUpi.tsx
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
    // marginBottom:`20px`,
    width: '90%',
    margin: 'auto',
    fontSize: '28px',
    display: `flex`,
    justifyContent: `space-between`,
  },
  title: {
    fontFamily: 'Montserrat, sans-serif',
    //   color: theme.black,
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
    paddingBottom: `15px`,
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
    // paddingBottom: '5px',
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

    //   [`&:hover ~ .${getStylesRef('inputLabel')}`]: {
    //     color: theme.colors.violet[6],
    //     fontSize:`2rem !important`
    //   },
  },
  inputAmount: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.colors.gray[6],
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

    //   [`&:hover ~ .${getStylesRef('inputLabel')}`]: {
    //     color: theme.colors.violet[6],
    //     fontSize:`2rem !important`
    //   },
  },
  inputLabel: {
    ref: getStylesRef('inputLabel'),
    paddingLeft: `2px`,
    color: theme.colors.gray[6],
    // position:`absolute`,
    // top:`1.5rem`,
    fontSize: `12px`,
    fontWeight: 400,
    transition: `0.25s ease`,
    height: `14px`,
    fontFamily: 'Montserrat, sans-serif',
  },
  inputcontainer: {
    backgroundColor: 'white',
    position: `relative`,
    // paddingTop:`0.75rem`,
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
    paddingTop: `2%`,
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
<<<<<<< HEAD:components/PayBenificiary.tsx
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
  balance: {
    color: '#0052B3',
    fontSize: `1.2rem`,
=======
  payingtext: {
    paddingTop: `0.25rem`,
>>>>>>> b57f4294b3a1d4cb750a251221c020bb138d58ff:components/upi-transfer-flow/ReviewDetailsUpi.tsx
    fontWeight: 600,
  },
}))

//   const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

<<<<<<< HEAD:components/PayBenificiary.tsx
export function PayBenficiary() {
  const router = useRouter()
  const data = router.query
  const [benD, setBenD] = useState({
    name: '',
    accountNumber: '',
    amount: '',
    ifsc: '',
    ifscReq: data.ifsc,
  })
=======
export function ReviewDetailsUpi() {
>>>>>>> b57f4294b3a1d4cb750a251221c020bb138d58ff:components/upi-transfer-flow/ReviewDetailsUpi.tsx
  const { classes } = useStyles()

  // const icons = social.map((Icon, index) => (
  //   <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
  //     <Icon size="1.4rem" stroke={1.5} />
  //   </ActionIcon>
  // ));
<<<<<<< HEAD:components/PayBenificiary.tsx
  const [otp, setOtp] = useState(false)
  const handleChange = (event: any) => {
    const { name, value } = event.target
    setBenD((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      }
    })
  }
=======
>>>>>>> b57f4294b3a1d4cb750a251221c020bb138d58ff:components/upi-transfer-flow/ReviewDetailsUpi.tsx
  return (
    <div className={classes.wrapper}>
      <div className={classes.form}>
        {/* <div className={classes.topheading}>
          <div className={classes.title}>UPI Transfer</div>
        </div> */}
        <Heading title="UPI Transfer" />
        <div className={classes.forminside}>
          <div className={classes.titlebox}>
            <div className={classes.titlebold}>
              <span>Review Details</span>
            </div>
          </div>
          <div className={classes.beficiaryformcontainer}>
            <TextInput
<<<<<<< HEAD:components/PayBenificiary.tsx
              placeholder="Name*"
              name="name"
              mt="md"
              value={benD.name}
              onChange={handleChange}
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
              required
            />
            <TextInput
              placeholder="Account Number*"
              name="accountNumber"
              type={'number'}
              value={benD.accountNumber}
              onChange={handleChange}
              required
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
            />
            <TextInput
              placeholder="Re-enter Account Number*"
              type={'number'}
              required
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
            />
            <TextInput
              placeholder="Enter Amount*"
              type={'number'}
              name="amount"
              onChange={handleChange}
              value={benD.amount}
              mt="md"
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
=======
              label="Paying From"
              variant="unstyled"
              type={'number'}
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.enterAmountContainer,
>>>>>>> b57f4294b3a1d4cb750a251221c020bb138d58ff:components/upi-transfer-flow/ReviewDetailsUpi.tsx
              }}
              value={`197288882222`}
              disabled
              required
            />
<<<<<<< HEAD:components/PayBenificiary.tsx
            {data.ifsc === 'true' ? (
              <>
                <TextInput
                  placeholder="IFSC*"
                  type={'number'}
                  name="ifsc"
                  onChange={handleChange}
                  value={benD.ifsc}
                  mt="md"
                  classNames={{
                    input: classes.input,
                    label: classes.inputLabel,
                    root: classes.inputcontainer,
                  }}
                  required
                />
                <div className={classes.description}>
                  The user is responsible for ensuring the accuracy of the
                  account number, name, and IFSC code entered, and the bank will
                  not be held liable for any losses resulting from incorrect
                  information
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
=======

            <TextInput
              label="UPI ID"
              variant="unstyled"
              value={`WelcomtoGc@iitkgp`}
              disabled
>>>>>>> b57f4294b3a1d4cb750a251221c020bb138d58ff:components/upi-transfer-flow/ReviewDetailsUpi.tsx
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
<<<<<<< HEAD:components/PayBenificiary.tsx
            />
          ) : (
            <></>
          )}
          {/* <div className={classes.buttoncontainer}>
            <Link href='/BankTransfer/benfeiciary'><Button className={classes.button} >Back</Button></Link>
            <Link href='/BankTransfer/Review'><Button className={classes.button}>Continue</Button></Link>
          </div> */}
          {/* <ButtonGroup
            href1="/BankTransfer/benfeiciary"
            href2="/BankTransfer/Review"
          /> */}
          <div className={classes.buttonContainer}>
            <Link href="/BankTransfer/benfeiciary">
              <div className={classes.button1}>Back</div>
            </Link>

            <Link
              href={{
                pathname: '/BankTransfer/Review',
                query: benD,
              }}
            >
              <div className={classes.button1}>Continue</div>
            </Link>
          </div>
=======
              required
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
              required
              disabled
              value={'John Doe'}
            />
            <TextInput
              label="UPI ID"
              variant="unstyled"
              mt="md"
              value={'mytself@upi'}
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
              required
              disabled
            />
            <TextInput
              variant="unstyled"
              label="Amount"
              mt="md"
              value={''}
              style={{ color: 'grey' }}
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
              required
              disabled
            />
          </div>
          <ButtonGroup href1="/UPI/payment-details" href2="/UPI/enter-pin" />
>>>>>>> b57f4294b3a1d4cb750a251221c020bb138d58ff:components/upi-transfer-flow/ReviewDetailsUpi.tsx
        </div>
      </div>
    </div>
  )
}
