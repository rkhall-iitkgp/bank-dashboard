import {
  createStyles,
  TextInput,
  Button,
  Group,
  rem,
} from '@mantine/core';
import Image from 'next/image';
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
    margin: `40px 1rem`,
    // padding:`0 1rem`,
    display: `flex`,
    justifyContent: `center`,

  },
  account: {
    width: `80px`,
    height: `80px`,
    background: `#1665C1`,
    borderRadius: `50%`,
    margin: ` 0 20px`,
    marginBottom: `0`,
    padding: `10px`,
    fontSize: `0.8rem`,
    textAlign: `center`,
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
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
    fontSize: '0.80rem',
    fontWeight: 600,
    paddingTop: `4px`,
    textAlign: `center`
  }
}));

//   const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];
function Account(props: {
  accountdata: {
    name: any; id: any; src: any;
  }; setAccount: (arg0: any) => void;
}) {
  const { classes } = useStyles();

  return (
    <div>
      <div className={classes.account} id={props.accountdata.id} onClick={(event) => {
        props.setAccount(props.accountdata)
        const accountlist = Array.from(document.getElementsByClassName(classes.account))
        accountlist.forEach(e => {
          e.classList.remove(classes.active)
        })
        document.getElementById(props.accountdata.id)?.classList.add(classes.active)
      }}>
        <Image src={'/../public/icons/' + props.accountdata.src + '.png'} width={50} height={50} alt={''} ></Image>
      </div>
      <div className={classes.bankname}>{props.accountdata.name}</div>
    </div>
  )
}
export function UpiTransferHome() {
  const { classes } = useStyles();
  const [account, setAccount] = useState({
    id: 1
  })
  let fetchedAccount = [{ id: 1, name: 'UPI Payment', src: `upi1` }, { id: 2, name: 'Bank Transfer', src: `bank-building-white` }, { id: 3, name: 'Pay Phone Number', src: `payphone1` }]
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
            <div className={classes.titlebold}><span >Make Payment</span></div>

          </div>
          <div className={classes.accountContainer}>

            {fetchedAccount.map((ele) => {
              return (<span key={ele.id}><Account setAccount={setAccount} accountdata={ele} /></span>)
            })}
          </div>


          <div className={classes.buttoncontainer}>
            <Button className={classes.button} onClick={() => {
            }}>Back</Button>
            <Button className={classes.button} onClick={() => {
            }}>Continue</Button>
          </div>
        </div>
      </div>
    </div>
  );
}