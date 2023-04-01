import { createStyles } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Heading from '../reusable-components/Heading'

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: `#EEEEEE`,
    minHeight: `100vh`,
    boxSizing: 'border-box',
    padding: `calc(${theme.spacing.xl} * 1.5)`,
    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    background: `grey`,
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
      cursor: 'pointer',
    },
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    // pointerEvents: 'none',

    marginTop: `3rem`,
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
    fontFamily: 'Montserrat',
    //   color: theme.black,
    lineHeight: 1,
    fontWeight: 600,
    fontSize: `20px`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    // paddingBottom: `10px`,
  },

  form: {
    backgroundColor: theme.white,
    borderRadius: theme.radius.xl,
    boxShadow: theme.shadows.lg,
    // paddingBottom: '5px',
    width: `30vw`,
    color: `#0052B3`,
  },

  forminside: {
    maxWidth: `90%`,
    width: `40vw`,
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
    alignItems: `center`,
  },
  accountContainer: {
    margin: `40px 1rem`,
    // padding:`0 1rem`,
    display: `flex`,
    justifyContent: `space-between`,
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
    cursor: 'pointer',
    ':hover': {
      border: `2px solid #040e1b;`,
      boxShadow: ` 0px 4px 10px rgba(0, 0, 0, 0.25)`,
    },
    ':active': {
      border: `2px solid #03080f;`,
      boxShadow: ` inset 0px 4px 10px rgba(0, 0, 0, 0.25)`,
    },
  },
  active: {
    boxShadow: ` inset 0px 4px 10px rgba(0, 0, 0, 0.25)`,
    border: `2px solid #03080f;`,
  },
  bankname: {
    lineHeight: `0.9rem`,
    fontSize: '0.80rem',
    fontWeight: 600,
    paddingTop: `4px`,
    textAlign: `center`,
  },
}))

function Account(props: {
  accountdata: {
    name: any
    id: any
    src: any
  }
  setAccount: (arg0: any) => void
}) {
  const { classes } = useStyles()

  return (
    <div>
      <div
        className={classes.account}
        id={props.accountdata.id}
        onClick={(event) => {
          props.setAccount(props.accountdata)
          const accountlist = Array.from(
            document.getElementsByClassName(classes.account),
          )
          accountlist.forEach((e) => {
            e.classList.remove(classes.active)
          })
          document.getElementById(props.accountdata.id)
            ?.classList.add(classes.active)
        }}
      >
        <Image
          src={`/icons/` + props.accountdata.src + '.png'}
          width={50}
          height={50}
          alt={''}
          style={{ objectFit: 'contain' }}
        ></Image>
      </div>
      <div className={classes.bankname}>{props.accountdata.name}</div>
    </div>
  )
}
interface props {
  setdropfiles: Function
  setIsanalysisopen: Function
  setIsfilteropen: Function
  bankAccountList: any[]
  setIsAddAccountPopupOpen: Function
}
export function AnalysisType({ setdropfiles, setIsanalysisopen, setIsfilteropen, bankAccountList, setIsAddAccountPopupOpen }: props) {
  const { classes } = useStyles()
  const [click, setClick] = useState(false)
  const [type, setType] = useState<number | undefined>(undefined)
  const [account, setAccount] = useState({
    id: 1,
  })
  let fetchedAccount = [
    { id: 1, name: 'Upload Transactions', src: `upi1` },
    { id: 2, name: 'Fetch Transactions', src: `bank-building-white` },
  ]
  const handleClick = () => {
    setClick(true)
  }

  const handleContinue = () => {
    if (type === 1) {
      return (
        <div className={classes.button1} onClick={() => {
          setdropfiles(false)
        }}>Continue</div>
      );
    } else if (type === 2) {
      return (

        <div className={classes.button1} onClick={() => {
          setdropfiles(true)
          setIsanalysisopen(false)
          if (bankAccountList.length === 0) {
            setIsAddAccountPopupOpen(true)
          } else {
            setIsfilteropen(true)
          }
        }}>Continue</div>
      );
    } else {
      return (
        <div className={classes.button1} style={{ cursor: 'no-drop' }}>
          Continue
        </div>
      );
    }
  };

  return (
    // <div className={classes.wrapper}>
    <div className={classes.form}>
      <div className={classes.topheading}>
        <div className={classes.title}>Analyze Your Transactions</div>
      </div>
      <div className={classes.forminside}>
        <div className={classes.titlebox}>
          <div className={classes.titlebold}>
            <span>Mode of Analysis</span>
          </div>
        </div>
        <div className={classes.accountContainer}>
          {fetchedAccount?.map((ele) => {
            return (
              <span key={ele.id} onClick={() => { handleClick(), setType(ele.id), console.log(ele.id) }}  >
                <Account setAccount={setAccount} accountdata={ele} />
              </span>
            )
          })}
        </div>
        {/* <ButtonGroup href1="/home" href2="/UPI/verify-upi-id" /> */}
        <div className={classes.buttonContainer}>
          <div className={classes.button1} onClick={() => {
            setIsanalysisopen(false)
          }}>Back</div>
          {click ? handleContinue() : (
            <div className={classes.button1} style={{ cursor: 'no-drop' }}>
              Continue
            </div>
          )}
        </div>
      </div>
    </div>
    // </div>
  )
}