import {
  createStyles,
  TextInput,
  Button,
  Group,
  rem,
} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'
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
    background: `grey`
  },
  titlebox: {
    // marginBottom:`20px`,
    display: `flex`,
    justifyContent: `center`,


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


  },

  form: {
    backgroundColor: theme.white,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
    width: `500px`,
    color: `#0052B3`
  },


  forminside: {
    maxWidth: `90%`,
    width: `500px`,
    padding: theme.spacing.xl,
    margin: `auto`
  },

  buttoncontainer: {
    display: `flex`,
    justifyContent: `space-between   `,
    // margin:`1rem`,
    marginTop: `2rem`
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
  accountContainer: {
    margin: `1rem`,
    padding: `0 1rem`,
    // display:`flex`,

  },
  account: {
    width: `90%`,
    height: `50px`,
    background: `rgba(0, 82, 179, 0.1)`,
    borderRadius: `30px`,
    margin: `10px`,
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
    }
  },
  active: {
    boxShadow: ` inset 0px 4px 10px rgba(0, 0, 0, 0.25)`,
    border: `2px solid #0052B3`
  },
  bankname: {
    lineHeight: `0.9rem`,
    fontWeight: 600,
    color: 'black',
    fontSize: `1.1rem`
  },
  bankdesc: {
    color: 'black',
    fontSize: '0.8rem'
  },
  banknamecontainer: {
    width: `100%`
  }
}));

//   const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];
function AccountType(props: { id: any; setAccount: (arg0: any) => void; src: any; bankname: any; bankdesc: any; }) {
  const { classes } = useStyles();
  return (
    <div className={classes.account} id={props.id} onClick={(event) => {
      props.setAccount(props.id)
      const accountlist = Array.from(document.getElementsByClassName(classes.account))
      accountlist.forEach(e => {
        e.classList.remove(classes.active)
      })
      document.getElementById(props.id)?.classList.add(classes.active)
    }}>
      <Image src={props.src} width={30} height={30} alt={''}></Image>
      <div className={classes.banknamecontainer}>
        <div className={classes.bankname}>{props.bankname}</div>

        <div className={classes.bankdesc}>{props.bankdesc}</div>
      </div>
    </div>
  )
}
export function BeneficiaryBank() {
  const { classes } = useStyles();
  const [account, setAccount] = useState(2)
  // const icons = social.map((Icon, index) => (
  //   <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
  //     <Icon size="1.4rem" stroke={1.5} />
  //   </ActionIcon>
  // ));
  return (
    <div className={classes.wrapper}>

      <div className={classes.form}>
        <div className={classes.topheading}>

          <div className={classes.title}>Bank Transfer</div>
        </div>
        <div className={classes.forminside}>
          <div className={classes.titlebox}>
            <div className={classes.titlebold}><span >Select Your Bank Account</span></div>

          </div>
          <div className={classes.accountContainer}>
            <AccountType src='/../public/icons/sbi.png' id={1} setAccount={setAccount} bankname='State Bank Of India' bankdesc='(Beneficiary is a SBI account holder)' />
            <AccountType src='/../public/icons/bank-building.png' id={2} setAccount={setAccount} bankname='Other Banks' bankdesc='(IFSC required)' />
          </div>


          <div className={classes.buttoncontainer}>
            <Link href='/BankTransfer/'><Button className={classes.button}>Back</Button></Link>
            <Link href='/BankTransfer/Paybenificiary'><Button className={classes.button}>Continue</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}