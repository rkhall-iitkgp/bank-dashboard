import { createStyles } from '@mantine/core'
import Image from 'next/image'
import { useState } from 'react'
import ButtonGroup from './SmallComponents/ButtonGroup'
import Heading from './SmallComponents/Heading'
//   import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
//   import { ContactIconsList } from '../ContactIcons/ContactIcons';
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
    justifyContent: `center`,
  },
  // title: {
  //   fontFamily: 'Montserrat',
  //   //   color: theme.black,
  //   lineHeight: 1,
  //   fontWeight: 500,
  //   margin: `0.8rem`,
  //   //   paddingBottom:`5px`,
  //   //   marginBottom:`10px`
  // },
  titlebold: {
    fontFamily: 'Montserrat',
    lineHeight: 1,
    fontWeight: 600,
    fontSize: '20px',
    // lineHeight: '39px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // textAlign:' center',
    // height: '72px',
    marginBottom: '20px',
  },

  form: {
    backgroundColor: theme.white,
    borderRadius: theme.radius.xl,
    boxShadow: theme.shadows.lg,
    width: `40vw`,
    height: '56vh',
    color: `#0052B3`,
    fontFamily: 'Montserrat',
  },

  forminside: {
    maxWidth: `90%`,
    width: `40vw`,
    padding: theme.spacing.xl,
    margin: `auto`,
  },

  // buttoncontainer: {
  //   fontFamily: 'Montserrat',
  // },

  //   fontSize: '20px',
  //   display: `flex`,
  //   justifyContent: `space-between`,
  //   marginTop: `3.5rem`,
  // },
  // button: {
  //   width: `150px`,
  //   backgroundColor: `#0062D6`,
  //   borderRadius: `20px`,
  // },
  // topheading: {
  //   width: `100%`,
  //   background: `#DDEDFF`,
  //   display: `flex`,
  //   justifyContent: `center`,
  //   borderTopLeftRadius: theme.radius.md,
  //   borderTopRightRadius: theme.radius.md,
  //   alignItems: `center`,
  // },
  // button1: {
  //   background: '#0062D6',
  //   borderRadius: '30px',
  //   fontFamily: 'Montserrat',
  //   color: 'white',
  //   fontSize: '20px',
  //   padding: '5px 20px',
  //   width: '10vw',
  //   textAlign: 'center',
  //   fontWeight: 400,
  //   '&:hover': {
  //     background: '#558ac9',
  //   },
  // },

  accountContainer: {
    margin: `1rem 3rem 5rem 3rem`,
    padding: `0 1rem`,

    // display:`flex`,
  },

  buttonContainer: {
    margin: `1rem 3rem 5rem 3rem`,
  },
  // buttonContainer: {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   width: '35vw',
  //   marginTop: `3.5rem`,
  // },
  account: {
    // width: `70%`,
    height: `60px`,
    background: `rgba(0, 82, 179, 0.1)`,
    borderRadius: `25px`,
    margin: `30px`,
    padding: `10px`,
    fontSize: `0.8rem`,
    textAlign: `center`,
    display: `flex`,
    // flexDirection:`column`,
    alignItems: `center`,
    justifyContent: `space-between`,
    ':hover': {
      border: `2px dotted #0052B3;`,
      boxShadow: ` inset 0px 4px 10px rgba(0, 0, 0, 0.25)`,
    },
    ':active': {
      border: `2px dotted #0052B3;`,
      boxShadow: ` inset 0px 4px 10px rgba(0, 0, 0, 0.25)`,
    },
    boxShadow: ' 0px 12px 20px rgba(0, 0, 0, 0.2)',
  },
  active: {
    boxShadow: ` inset 0px 12px 6px rgba(0, 0, 0, 0.05)`,
    border: `2px solid #0052B3`,
  },
  bankname: {
    lineHeight: `1.5rem`,
    fontWeight: 600,
    color: 'black',
    fontSize: `1rem`,
  },
  bankdesc: {
    color: '#737373',
    fontSize: '0.7rem',
    fontWeight: 600,
  },
  banknamecontainer: {
    width: `100%`,
  },
}))

//   const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];
function AccountType(props: {
  id: any
  setAccount: (arg0: any) => void
  src: any
  bankname: any
  bankdesc: any
}) {
  const { classes } = useStyles()
  return (
    <div
      className={classes.account}
      id={props.id}
      onClick={(event) => {
        props.setAccount(props.id)
        const accountlist = Array.from(
          document.getElementsByClassName(classes.account),
        )
        accountlist.forEach((e) => {
          e.classList.remove(classes.active)
        })
        document.getElementById(props.id)?.classList.add(classes.active)
      }}
    >
      <Image src={props.src} width={35} height={35} alt={''} style={{ marginLeft: '12px'}}></Image>
      <div className={classes.banknamecontainer}>
        <div className={classes.bankname}>{props.bankname}</div>

        <div className={classes.bankdesc}>{props.bankdesc}</div>
      </div>
    </div>
  )
}
export function BeneficiaryBank() {
  const { classes } = useStyles()
  const [account, setAccount] = useState(2)
  // const icons = social.map((Icon, index) => (
  //   <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
  //     <Icon size="1.4rem" stroke={1.5} />
  //   </ActionIcon>
  // ));
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
              <span>Select Beneficiary’s Bank</span>
            </div>
          </div>
          <div className={classes.accountContainer}>
            <AccountType
              src="/../public/icons/sbi.png"
              id={1}
              setAccount={setAccount}
              bankname="State Bank Of India"
              bankdesc="(Beneficiary is a SBI account holder)"
            />
            <AccountType
              src="/../public/icons/bank-building.png"
              id={2}
              setAccount={setAccount}
              bankname="Other Banks"
              bankdesc="(IFSC required)"
            />
          </div>

          {/* <div className={classes.buttoncontainer}>
            <Link href="/BankTransfer/">
              <Button className={classes.button}>Back</Button>
            </Link>
            <Link href="/BankTransfer/Paybenificiary">
              <Button className={classes.button}>Continue</Button>
            </Link>
          </div> */}
          {/* <div className={classes.buttonContainer}>
            <Link href="/BankTransfer/">
              <div className={classes.button1}>Back</div>
            </Link>
            <Link href="/BankTransfer/Paybenificiary">
              <div className={classes.button1}>Continue</div>
            </Link>
          </div> */}
          <ButtonGroup
            href1="/BankTransfer/"
            href2="/BankTransfer/Paybenificiary"
          />
        </div>
      </div>
    </div>
  )
}
