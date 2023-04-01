import React from 'react';
import { createStyles } from '@mantine/core'
import Image from 'next/image'

const useStyles = createStyles(() => ({
  container: {
    backgroundColor: `#ffffff`,
    borderRadius: `30px`,
    boxShadow: `0px 2px 20px rgba(0,0,0,0.1)`,
    color: `#0052B3`,
    position: 'relative',
    height: `155px`,
    width: `1000px`,
    display: `flex`,
    flex: 1.5,
  },
  subcontainer1: {
    color: `#737373`,
    position: 'absolute',
    top: `10px`,
    left: `1rem`,
    width: `144px`,
    height: `18px`,
    textAlign: `center`,
    marginTop: `15px`,
    display: `flex`,
    justifyContent: `space`,
    padding: `2px`,
  },
  subcontainer5: {
    color: `#737373`,
    position: 'absolute',
    top: `10px`,
    right: `10px`,
    width: `102px`,
    height: `15px`,
    marginTop: `18px`,
    textAlign: `right`,
    display: `flex`,
    justifyContent: `flex-end`,
  },
  subcontainer2: {
    color: `#000000`,
    position: 'absolute',
    top: `62px`,
    left: `1rem`,
    width: `240px`,
    height: `20px`,
    display: `flex`,
    alignItems: `center`,
    padding: `2px`,
  },
  subcontainer3: {
    color: `#737373`,
    fontSize: `1rem`,
    position: 'absolute',
    top: `90px`,
    left: `1rem`,
    width: `58px`,
    height: `16px`,
    textAlign: `center`,
    display: `flex`,
    justifyContent: `center`,
    textalign: `center`,
    background: `#E8F6F0`,
    borderRadius: `5px`,
    margin: `6px`,
  },
  subcontainer4: {
    color: `#737373`,
    position: 'absolute',
    top: `110px`,
    left: `1rem`,
    width: `178px`,
    height: `18px`,
    textAlign: `center`,
    display: `flex`,
    justifyContent: `space`,
    padding: `2px`,
    marginTop: `15px`,
  },
}))

interface Props{
  totalBalance?: any;
  increment?: any;
  timePeriod?: any;
  accountNumber?: any;
}
export function TotalBalance({ totalBalance, increment, timePeriod, accountNumber }:Props) {
  const { classes } = useStyles();
  const data = {
    totalBalance: totalBalance,
    increment: increment,
    timePeriod: timePeriod,
    number: accountNumber,
  }
  return (
    <div className={classes.container}>
      <div className={classes.subcontainer1}>
        <span
          style={{
            fontFamily: 'Montserrat',
            fontStyle: `normal`,
            fontWeight: `500`,
            fontSize: `14px`,
            lineHeight: `20px`,
          }}
        >
          Total Balance
        </span>
      </div>

      <div className={classes.subcontainer2}>
        <span
          style={{
            fontFamily: 'Montserrat',
            fontStyle: `normal`,
            fontWeight: `700`,
            fontSize: `1.6rem`,
            lineHeight: `44px`,
          }}
        >
          {data.totalBalance}{' '}
        </span>
      </div>
      <div className={classes.subcontainer3}>
        <span
          style={{
            fontFamily: 'Montserrat',
            fontStyle: `normal`,
            fontWeight: `600`,
            fontSize: `12px`,
            color: `#2CC578`,
            lineHeight: `15px`,
          }}
        >
          {' '}
          <Image
            src={'/../public/icons/increment.png'}
            width={14}
            height={14}
            alt={''}
          ></Image>
          {data.increment}
        </span>
      </div>
      <div className={classes.subcontainer4}>
        <span
          style={{
            fontFamily: 'Montserrat',
            fontStyle: `normal`,
            fontWeight: `500`,
            fontSize: `12px`,
            lineHeight: `15px`,
          }}
        >
          Compared to last {data.timePeriod} week
        </span>
      </div>
    </div>
  )
}