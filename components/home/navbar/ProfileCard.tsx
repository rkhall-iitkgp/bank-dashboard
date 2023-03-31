import { Button, createStyles, Text } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'

import useStorage from '../../../hooks/useStorage'
import { Key } from 'react'

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: `#ffffff`,
    borderRadius: `30px`,
    boxShadow: `0px 2px 20px rgba(0,0,0,0.1)`,
    color: `#0052B3`,
    // position: 'absolute',
    height: `560px`,
    width: `350px`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-around`,
    alignItems: `center`,
    // top:`138px`,
    textAlign: 'center',
    left: `500px`,
    padding: '20px',
  },
  button1: {
    width: `160px`,
    height: '40px',
    backgroundColor: `#0062D6`,
    borderRadius: `30px`,
    marginTop: '5px',
  },
  button2: {
    width: `160px`,
    height: '40px',
    backgroundColor: `#DD0000`,
    borderRadius: `30px`,
    marginBottom: '5px',
  },
  accountCollection: {
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: '10px',
    maxHeight: '110px',
    overflowY: 'auto',
  },
  accountContainer: {
    cursor: 'pointer',
    padding: '10px 15px',
    borderRadius: '30px',
    display: 'flex',
    flexdirection: 'row',
    alignItems: 'center',
    width: '120px',
    justifyContent: 'space-around',
    alignitems: 'center',
    margin: '5px',
    backgroundColor: '#E6EFF9',
    '&:hover': {
      transform: 'scale(1.05)',
      transitionDuration: '0.3s',
    },
  },
  controlButtons: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },
}))

interface Props {
  bankName?: string
  value?: string
}

const AccountCard = ({ bankName, value }: Props) => {
  const { classes } = useStyles()
  const { origin } = window.location;

  return (
    <div>
      <div className={classes.accountContainer}>
        <Image
          src={`${origin}/icons/sbi.png`}
          width={20}
          height={20}
          alt={''}
        ></Image>

        <Text
          c={'#0062D6'}
          fz={'lg'}
          fw={500}
          w={120}
          style={{
            lineHeight: '24px',
            textAlign: 'center',
            fontFamily: 'Montserrat',
            fontStyle: `normal`,
            fontWeight: '600',
            fontSize: '14px',
            color: '#000000',
          }}
        >
          {"****" + value?.slice(8, 12)}
        </Text>
      </div>
    </div>
  )
}

export function ProfileCard() {
  const { classes } = useStyles()
  const { getItem } = useStorage()

  let BankAccount = JSON.parse(getItem("accounts"))
  // let BankAccount = [
  //   { id: 1, bankName: 'sbi', value: '****1234' },
  //   { id: 2, bankName: 'sbi', value: '****4235' },
  //   { id: 3, bankName: 'sbi', value: '****8090' },
  //   { id: 1, bankName: 'sbi', value: '****1234' },
  //   { id: 2, bankName: 'sbi', value: '****4235' },
  //   { id: 3, bankName: 'sbi', value: '****8090' },
  // ]
  let data = {
    PersonName: getItem('name'),
    Email: getItem('email'),
    PhoneNumber: getItem('contact_no'),
  }
  return (
    <div className={classes.container}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'column',
        }}
      >
        <Image
          src={`/icons/profilePhoto.png`}
          width={80}
          height={80}
          alt={''}
          style={{ margin: '20px 0' }}
        ></Image>
        <span
          style={{
            fontFamily: 'Montserrat',
            fontStyle: `normal`,
            fontWeight: `700`,
            fontSize: `28px`,
            lineHeight: `34px`,
            color: '#000000',
          }}
        >
          {getItem("name")}
        </span>
        <span
          style={{
            fontFamily: 'Montserrat',
            fontStyle: `normal`,
            fontWeight: `500`,
            fontSize: `15px`,
            lineHeight: `22px`,
            color: '#4D4B4B',
          }}
        >
          {getItem("email")}
        </span>
      </div>
      <div
        style={{
          margin: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'column',
        }}
      >
        <span
          style={{
            fontFamily: 'Montserrat',
            fontStyle: `normal`,
            fontWeight: `600`,
            fontSize: `12px`,
            lineHeight: `17px`,
            color: ' #4D4B4B',
          }}
        >
          Phone Number
        </span>
        <span
          style={{
            fontFamily: 'Montserrat',
            fontStyle: `normal`,
            fontWeight: `600`,
            fontSize: `16px`,
            lineHeight: `27px`,
            color: '#000000',
          }}
        >
          {getItem("contact_no").slice(0, 3) + " " + getItem("contact_no").slice(3)}
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'column',
        }}
      >
        <span
          style={{
            fontFamily: 'Montserrat',
            fontStyle: `normal`,
            fontWeight: `600`,
            fontSize: `12px`,
            lineHeight: `17px`,
            color: ' #4D4B4B',
          }}
        >
          Bank Accounts
        </span>
        <div className={classes.accountCollection}>
          {BankAccount?.map((ele: { id: Key | null | undefined; bankName: string | undefined; account_no: string | undefined }, key: any) => {
            return (
              <span key={ele.id}>
                <AccountCard
                  bankName={ele.bankName}
                  value={ele.account_no}
                ></AccountCard>
              </span>
            )
          })}
        </div>
      </div>

      <Link href="/profile">
        <Button size="xs" className={classes.button1}>
          <span
            style={{
              fontFamily: 'Montserrat',
              fontStyle: `normal`,
              fontWeight: `500`,
              fontSize: `16px`,
              lineHeight: `27px`,
            }}
          >
            Settings
          </span>{' '}
          &nbsp;{' '}
          <Image
            src={`/icons/settings.png`}
            width={18}
            height={18}
            alt={''}
          ></Image>
        </Button>
      </Link>
      <Button size="xs" className={classes.button2}>
        <span
          style={{
            fontFamily: 'Montserrat',
            fontStyle: `normal`,
            fontWeight: `500`,
            fontSize: `16px`,
            lineHeight: `27px`,
          }}
          onClick={() => {
            sessionStorage.clear()
          }}
        >
          Logout
        </span>{' '}
        &nbsp;{' '}
        <Image
          src={`/icons/logout.png`}
          width={18}
          height={18}
          alt={''}
        ></Image>
      </Button>
    </div>
  )
}