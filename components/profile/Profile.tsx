import {createStyles} from '@mantine/core'
import useStorage from '../../hooks/useStorage'
import LeftPane from './LeftPane'
import RightPane from './RightPane'
import {useState} from 'react'
import api from '../datams'
import {KycAuthentication} from '../kyc/KycAuthentication'
// import api from
import { useEffect } from 'react'
const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: `#EEEEEE`,
    boxSizing: 'border-box',
    // minHeight: `calc(100vh - 4rem)`,
    padding: `20px`,
    // padding: `calc(${theme.spacing.xl} * 2.5)`,
    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
    display: `grid`,
    gridTemplateColumns: `40% 60%`,
    background: `white`,
    height:'100vh',
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
  container1: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `space-around`,
    height: `87vh`,
  },
  container2: {
    height: `87vh`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-between`,
    marginLeft: '8vw',

  },
}))

interface props {
  bankAccountList: any[]
  loading: boolean
}
const Profile = ({ bankAccountList, loading }: props) => {
  const { classes } = useStyles()
  const { getItem } = useStorage()
  const { setItem } = useStorage()
    const accessToken = getItem('access_token','session')
    console.log(accessToken)
    const user_id = getItem('user_id')
   
  return (
    <div className={classes.wrapper}>
      <div className={classes.container1}>
        <LeftPane accounts={bankAccountList} />
      </div>
      <div className={classes.container2}>
        <RightPane />
      </div>
    </div>
  )
}

export default Profile