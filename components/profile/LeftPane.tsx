import { Button, createStyles, Image } from '@mantine/core'
import React, { useState } from 'react'
import useStorage from '../../hooks/useStorage'
import { useEffect } from 'react'
const useStyles = createStyles(() => ({
 
  container1: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `space-around`,
    height: `100vh`,
  },
  container2: {
    height: `100vh`,
  },

  name: {
    fontWeight: 700,
    fontSize: `1.5rem`,
    textAlign: `center`,
    fontFamily: `Montserrat`,
  },
  title: {
    fontWeight: 600,
    fontSize: `0.7rem`,
    textAlign: `center`,
    fontFamily: `Montserrat`,
    color: `#4D4B4B
          `,
  },
  content: {
    fontWeight: 600,
    fontSize: `1.1rem`,
    textAlign: `center`,
    fontFamily: `Montserrat`,
    paddingTop: '2px',
  },
  email: {
    lineHeight: `1.3rem`,
  },
  phone: {
    lineHeight: `1.3rem`,
  },
  accountCollection: {
    maxHeight: '160px',
    overflowY: 'auto',
  },
  account: {
    width: `150px`,
    background: `white`,
    borderRadius: `50px`,
    margin: `10px`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `space-around`,
    backgroundColor: `#E6EFF9`,
    padding: '5px 15px',
  },
  Logout: {
    width: `170px`,
    background: `#DD0000`,
    borderRadius: `50px`,
    margin: `10px`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    color: `white`,
  },
  tabs: {
    background: '#F3F9FF',
    border: `none`,
    borderTopRightRadius: '20px',
    borderTopLeftRadius: `20px`,
    cursor: `pointer`,
  },
  active: {
    border: `none`,
    borderTopRightRadius: '20px',
    borderTopLeftRadius: `20px`,
    background: `#DDEDFF`,
    cursor: `pointer`,
  },
  tablabel: {
    width: `150px`,
    height: `50px`,
    borderRadius: `50px`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `space-around`,
  },
  tabcontainer: {
    height: `90%`,
    width: `90%`,
    margin: `auto`,
    background: `white`,
    boxShadow: ` 0px 4px 40px rgba(0, 0, 0, 0.2)`,
    borderRadius: ' 0px 30px 30px 30px',
  },
  tablist: {
    width: `90%`,
    margin: `auto`,
  },
  icon: {
    display: `none`,
  },
}))
interface Props {
  account_no: number | string
}
const AccountSelect = ({ account_no }: Props) => {
  const { classes } = useStyles()
  return (
    <div className={classes.account}>
      <Image
        alt="bank-logo"
        width={20}
        height={20}
        src="/icons/sbi.png"
      ></Image>
      <div className={classes.content}>
        {'**** ' + account_no.toString().slice(8, 12)}
      </div>
    </div>
  )
}

interface Props2 {
  accounts: any[]
}
const LeftPane = ({ accounts }: Props2) => {
  const { classes } = useStyles()
  const { getItem } = useStorage()
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [contact_no,setContact_no]=useState('');
  useEffect(() => {
   setName(getItem('name'));
   setEmail(getItem('email'))
   setContact_no(getItem('contact_no').slice(0, 3) +' ' +getItem('contact_no').slice(3))
  }, [])
  return (
    <>
      <div>
        <Image
          src="/images/dp.png"
          width={150}
          height={150}
          alt="about-us"
          radius={1000}
        ></Image>
      </div>
      <div className={classes.name}>{name}</div>
      <div className={classes.name}></div>
      <div className={classes.email}>
        <div className={classes.title}>Email</div>
        <div className={classes.content}>{email}</div>
      </div>
      <div className={classes.phone}>
        <div className={classes.title}>Phone Number</div>
        <div className={classes.content}>
          {contact_no}
        </div>
      </div>
      <div>
        <div className={classes.title}>Bank Accounts</div>
        <div className={classes.accountCollection}>
          {accounts?.map((account_no, index) => {
            return (
              <div key={index}>
                <AccountSelect account_no={account_no.account_no} />
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <Button
          className={classes.Logout}
          variant="gradient"
          gradient={{ from: '#DD0000', to: '#DD0000' }}
          size="lg"
          rightIcon={
            <Image
              src="/icons/logout1.png"
              alt=""
              style={{ marginLeft: `15px` }}
              width={20}
              height={20}
            ></Image>
          }
        >
          Logout
        </Button>
      </div>
    </>
  )
}

export default React.memo(LeftPane)
