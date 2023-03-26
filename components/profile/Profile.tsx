import { createStyles } from '@mantine/core'
import useStorage from '../../hooks/useStorage'
import { AccountType } from './constants'
import LeftPane from './LeftPane'
import RightPane from './RightPane'
import api from '../../components/api'
import { useEffect } from 'react'
import { useState } from 'react'
import { KycAuthentication } from '../kyc/KycAuthentication'
const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: `#EEEEEE`,
    boxSizing: 'border-box',
    minHeight: `calc(100vh - 4rem)`,
    padding: `20px`,
    // padding: `calc(${theme.spacing.xl} * 2.5)`,
    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
    display: `grid`,
    gridTemplateColumns: `40% 60%`,
    background: `white`,
  },
  container1: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `space-around`,
    height: `100%`,
  },
  container2: {
    height: `100%`,
  },
}))

interface props {
  bankAccountList: any[]
  loading: boolean
}
const Profile = ({ bankAccountList }: props) => {
  const { classes } = useStyles()
  const { getItem } = useStorage()
  const { setItem } = useStorage()
  const [result,setResult]=useState('1')
const GetKycStatus = () => {
  const accessToken = getItem('access_token','session')
  console.log(accessToken)
  const user_id = getItem('user_id')

  const response = api
    .get(`/user/getkyc/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      (response.data);
      
    })
    .catch((err) =>((err.response.data.message=='KYC not done') && setResult('0')))
  
}

 
  const bankAccountList1 = [2353]
  
  useEffect(() => {
   
    GetKycStatus()
      
  }, [])
  return (
    <div className={classes.wrapper}>
      {result=='0' &&
       <KycAuthentication/>}
      <div className={classes.container1}>
        <LeftPane accounts={bankAccountList} />
      </div>
      <div className={classes.container2}>
        {bankAccountList1.length ? (
          <RightPane accounts={bankAccountList} />
        ) : (
          <>
            No Accounts Connected Yet. Add an account to access all the cool
            features!!
          </>
        )}
       
      </div>
    </div>
  )
}

export default Profile
