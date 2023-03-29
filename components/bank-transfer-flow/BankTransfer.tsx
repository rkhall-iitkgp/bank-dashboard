import {createStyles} from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useState} from 'react'
import useStorage from '../../hooks/useStorage'
import Heading from '../reusable-components/Heading'
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
    display: `flex`,
    justifyContent: `center`,
  },
  title: {
    fontFamily: `Montserrat, ${theme.fontFamily}`,
    lineHeight: 1,
    fontWeight: 500,
    margin: `1rem`,
    //   paddingBottom:`5px`,
    //   marginBottom:`10px`
  },
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
    minWidth: `600px`,
    color: `#0052B3`,
  },

  forminside: {
    maxWidth: `90%`,
    width: `40vw`,
    minWidth: `500px`,
    padding: theme.spacing.xl,
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
    alignItems: `baseline`,
  },
  accountContainer: {
    margin: `1rem 1rem 1rem 1rem`,
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    minWidth: `400px`,
  },
  account: {
    width: `120px`,
    height: `120px`,
    background: `rgba(0, 82, 179, 0.1)`,
    borderRadius: `30px`,
    margin: `10px`,
    padding: `15px 10px 10px 10px`,
    fontSize: `0.8rem`,
    textAlign: `center`,
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `space-between`,
    ':hover': {
      //border: `2px dotted #0052B3;`,
      // boxShadow: ` 0px 4px 10px rgba(0, 0, 0, 0.25)`,
      cursor: `pointer`,
    },
    ':active': {
      //border: `2px dotted #0052B3;`,
      boxShadow: ` 0px 4px 10px rgba(0, 0, 0, 0.25)`,
    },
  },
  active: {
    boxShadow: ` inset 0px 4px 10px rgba(0, 0, 0, 0.25)`,
    border: `2px solid #0052B3`,
  },
  bankname: {
    lineHeight: `0.9rem`,
    fontSize: '0.80rem',
    fontWeight: 400,
    paddingTop: `4px`,
  },
  accountnumber: {
    color: `black`,
    fontWeight: 600,
    fontSize: `0.9rem`,
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
}))

//   const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];
function Account(props: {
  accountdata: { id: any, account_no: string }
  setAccount: (arg0: any) => void
}) {
  const { classes } = useStyles()

  return (
    <div
      className={classes.account}
      id={props.accountdata.account_no.slice(8, 12)}
      onClick={(event) => {
        props.setAccount({ id: props.accountdata.id })
        const accountlist = Array.from(
          document.getElementsByClassName(classes.account),
        )
        accountlist.forEach((e) => {
          e.classList.remove(classes.active)
        })
        document
          .getElementById(props.accountdata.account_no.slice(8, 12))
          ?.classList.add(classes.active)
      }}
    >
      <Image
        src={'/../public/icons/SBI-Logo.png'}
        width={60}
        height={28}
        alt={''}
        style={{ paddingBottom: '6px' }}
      ></Image>
      <div className={classes.bankname}>State Bank Of India</div>
      <div className={classes.accountnumber}>{"****" + props.accountdata.account_no.slice(8, 12)}</div>
    </div>
  )
}
export function BankTransfer() {
  const { getItem } = useStorage();
  // console.log("user_id = ", getItem("user_id"));
  // console.log("accounts = ", getItem("accounts"))

  const { classes } = useStyles()
  const [click, setClick] = useState(false)
  const router = useRouter();
  const [account, setAccount] = useState({
    id: 1,
  })
  let accounts = getItem("accounts");
  let fetchedAccount = JSON.parse(accounts ? accounts : "[]");
  console.log(fetchedAccount);


  const handleClick = () => {
    setClick(true)
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.form}>
        <Heading title="Bank Transfer" />
        <div className={classes.forminside}>
          <div className={classes.titlebox}>
            <div className={classes.titlebold}>
              <span>Select Your Bank Account</span>
            </div>
          </div>
          <div className={classes.accountContainer}>
            {fetchedAccount?.map((ele: { id: number, account_no: string, ifsc: string }) => {
              return (
                <span key={ele.account_no.slice(8, 12)} onClick={handleClick}>
                  <Account setAccount={setAccount} accountdata={ele} />
                </span>
              )
            })}
          </div>
          <div className={classes.buttonContainer}>
            <div className={classes.button1} onClick={router.back}>Back</div>
            {click ? (
              <Link
                href={{
                  pathname: '/bank-transfer/select-beneficiary',
                  query: account,
                }}
              >
                <div className={classes.button1}>Continue</div>
              </Link>
            ) : (
              <div className={classes.button1} style={{ cursor: 'no-drop' }}>
                Continue
              </div>
            )}
          </div>

          {/* <ButtonGroup href1="/home" href2="/bank-transfer/select-beneficiary" /> */}
        </div>
      </div>
    </div>
  )
}