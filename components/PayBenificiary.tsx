import { createStyles, TextInput } from '@mantine/core'
import { useState } from 'react'
import ButtonGroup from './reusable-components/ButtonGroup'
import Heading from './reusable-components/Heading'
import { useRouter } from 'next/router'
const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: `#EEEEEE`,
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
    // marginBottom:`20px`,
    display: `flex`,
    justifyContent: `space-between`,
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
    fontFamily: 'Montserrat',
    //   color: theme.black,
    lineHeight: 1,
    fontWeight: 600,
    fontSize: `20px`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
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
    color: `#0052B3`,
  },

  social: {
    color: theme.white,

    '&:hover': {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,
    fontFamily: `Montserrat`,
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
  amountbox: {
    backgroundColor: theme.white,
    borderRadius: theme.radius.md,
    boxShadow: `0px 6px 20px rgba(0, 0, 0, 0.2)`,
    width: `auto`,
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
  balance: {
    color: '#0052B3',
    fontSize: `1.2rem`,
    fontWeight: 600,
    paddingLeft: `3px`,
  },
  accountnumber: {
    color: 'black',
    fontSize: `0.6rem`,
    fontWeight: 600,
    textAlign: `end`,
    padding: `0 5px`,
  },
}))

//   const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function PayBenficiary(props: { sbi: any }) {
  const { classes } = useStyles()
  const router = useRouter()
  const data = router.query
  console.log(data)
  // const icons = social.map((Icon, index) => (
  //   <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
  //     <Icon size="1.4rem" stroke={1.5} />
  //   </ActionIcon>
  // ));
  const [otp, setOtp] = useState(false)
  return (
    <div className={classes.wrapper}>
      <div className={classes.form}>
        {/* <div className={classes.topheading}>
          <div className={classes.title}>Bank Transfer</div>
        </div> */}
        <Heading title="Bank Transfer" />
        <div className={classes.forminside}>
          <div className={classes.titlebox}>
            <div className={classes.titlebold}>
              <span>Pay Beneficiary</span>
            </div>
            <div className={classes.amountbox}>
              <div className={classes.amountinside}>
                <span>Balance:</span>{' '}
                <span className={classes.balance}> $5678.00</span>
              </div>
              <div className={classes.accountnumber}>XXXXXXXX1234</div>
            </div>
          </div>
          <div className={classes.beficiaryformcontainer}>
            <TextInput
              placeholder="Name*"
              mt="md"
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
              required
            />
            <TextInput
              placeholder="Account Number*"
              type={'number'}
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
              mt="md"
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
              required
            />
            {props.sbi == false? (
              <>
                <TextInput
                  placeholder="IFSC*"
                  type={'number'}
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
            <TextInput
              placeholder="OTP"
              type={'number'}
              required
              mt="md"
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
            />
          </div>
           
            
          

          {/* <div className={classes.buttoncontainer}>
            <Link href='/BankTransfer/benfeiciary'><Button className={classes.button} >Back</Button></Link>
            <Link href='/BankTransfer/Review'><Button className={classes.button}>Continue</Button></Link>
          </div> */}
          <ButtonGroup
            href1="/BankTransfer/benfeiciary"
            href2="/BankTransfer/Review"
          />
        </div>
      </div>
    </div>
  )
}
