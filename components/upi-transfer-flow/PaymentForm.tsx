import { createStyles, getStylesRef, Text, TextInput } from '@mantine/core'
import { hasLength, isNotEmpty, useForm } from '@mantine/form'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SetStateAction, useEffect, useState } from 'react'
import Heading from '../reusable-components/Heading'
import useStorage from '../../hooks/useStorage'

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
  buttonVerify: {
    // height:``,
    // width: `100px`,
    // backgroundColor: `#ffffff`,
    marginRight: '60px',
    // cursor: 'pointer',
    // borderRadius:,
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

  const { getItem, setItem } = useStorage()
  const upiid = getItem('upi')
  // console.log(upiid)

  const [name, setName] = useState('')
  const [upi_id, setUpi] = useState('')
  const [amount, setAmount] = useState('')
  const [desc, setDesc] = useState('')

  const form = useForm({
    initialValues: {
      name: '',
      upi_id: '',
      amount: '',
    },

    // validate: {
    //   upi_id: isNotEmpty('Enter your upi id'),
    //   amount: isNotEmpty('Enter amount'),
    // },
  })



  // const icons = social.map((Icon, index) => (
  //   <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
  //     <Icon size="1.4rem" stroke={1.5} />
  //   </ActionIcon>
  // ));

  const [style2, setStyle2] = useState({
    color: '#0062D6',
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '18px',
    cursor: 'pointer',
  })
  const [buttonText, setButtonText] = useState('Verify')

  function handleClick1() {
    if (form.values.upi_id !== '') {
      setStyle2({
        color: '#00AD30',
        fontFamily: 'Montserrat',
        fontWeight: 600,
        fontSize: '18px',
        cursor: 'pointer',
      })
      setButtonText('Verified')
    }
  }
  function handleClick2() { }

  useEffect(() => {
    if (form.values.upi_id === '') {
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
    return () => { }
  }, [form.values.upi_id])

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
              label="UPI ID"
              variant="unstyled"
              disabled
              value={upiid}
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
              value={name}
              onChange={(e) => { setName(e.target.value); setItem('payingname', e.target.value) }}
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
              {...form.getInputProps('upi_id')}
              value={upi_id}
              onChange={(e) => { setUpi(e.target.value); setItem('payingupiid', e.target.value) }}
              // rightSection={
              //   <Text
              //     className={classes.buttonVerify}
              //     style={style2}
              //     onClick={
              //       form.values.upi_id !== '' ? handleClick1 : handleClick2
              //     }
              //   >
              //     {buttonText}
              //   </Text>
              // }
              required
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
              value={amount}
              onChange={(e) => { setAmount(e.target.value); setItem('payingamount', e.target.value) }}

            />

            <TextInput
              placeholder="Description"
              variant="unstyled"
              mt="md"
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.enterAmountContainer,
              }}
              // {...form.getInputProps('upi_id')}
              value={desc}
              onChange={(e) => { setDesc(e.target.value); setItem('description', e.target.value) }}
            />
          </div>

          <div className={classes.buttoncontainer}>
            <Link href="/UPI/verify-upi-id">
              <div className={classes.button1}>Back</div>
            </Link>
            {/* {buttonText !== 'Verify' ? ( */}
            <div
              className={classes.button1}
              onClick={() => {
                // form.validate()
                if (form.isValid()) {
                  router.push(
                    `/UPI/payment-details-review?name=${form.values.name}&amount=${form.values.amount}&upi=${form.values.upi_id}`,
                  )
                }
              }}
            >
              Continue
            </div>
            {/*  ) : ( */}
            {/*  <div */}
            {/* //   className={classes.button1} */}
            {/* //   style={{ cursor: 'no-drop' }} */}
            {/* //   onClick={() => { */}
            {/* //     form.validate() */}
            {/* //   }} */}
            {/* // > */}
            {/* //   Continue */}
            {/* // </div> */}
            {/* // )} */}
          </div>
          {/* <ButtonGroup href1="/UPI/Verify" href2="/UPI/Review" /> */}
        </div>
      </div>
    </div>
  )
}
