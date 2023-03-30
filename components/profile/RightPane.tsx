import { createStyles } from '@mantine/core'
import React from 'react'
import ConsentFormComponent from './ConsentFormComponent'
import { useState } from 'react'
import api from '../datams'
import useStorage from '../../hooks/useStorage'
import { useEffect } from 'react'
import { KycAuthentication } from '../kyc/KycAuthentication'
const useStyles = createStyles((theme) => ({
  container2: {
    height: `100%`,
  },
  content: {
    fontWeight: 500,
    fontSize: `1.1rem`,
    textAlign: `center`,
    fontFamily: `Montserrat`,
    paddingTop: '2px',
  },
  Logout: {
    width: `170px`,
    height: `50px`,
    background: `#DD0000`,
    borderRadius: `50px`,
    margin: `10px`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    color: `white`,
    fontWeight: 600,
    fontSize: `1.2rem`,
    cursor: `pointer`,
  },

}))
const KycNotDone=()=>{
  return (
    <div>
      <KycAuthentication />
      <ConsentFormComponent />
    </div>
  )
}
const KycDone=()=>{
  return (
    <div>
      <ConsentFormComponent />
    </div>
  )
}
const RightPane = () => {
  const { classes } = useStyles()
  const { getItem } = useStorage()
  const { setItem } = useStorage()
  const accessToken = getItem('access_token', 'session')
  console.log(accessToken)
  const user_id = getItem('user_id')
  const [result, setResult] = useState(1)
  const GetKycStatus = () => {
    const accessToken = getItem('access_token', 'session')
    console.log(accessToken)
    const user_id = getItem('user_id')
    const accLength = JSON.stringify(getItem('accounts'))?.length
    const response = api
      .get(`/user/getkyc/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        response.data.message === 'KYC done' && setResult(1)
        console.log(response.data.message);

      })
      .catch((err) => {
        err.response.data.message === 'KYC not done' && setResult(0)
        console.log(err.response.data.message)
      })
  }

  useEffect(() => {
    GetKycStatus()
    console.log(result)
    // setResult(0);
  }, [])
  return (
    <div>
      {result === 0 &&
        <KycNotDone/>}
      {result === 1 &&  <KycDone/>}

    </div>
  )
}

export default React.memo(RightPane)