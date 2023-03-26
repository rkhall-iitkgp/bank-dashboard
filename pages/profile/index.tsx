import React, { useEffect, useState } from 'react'
import api from '../../components/datams'
import Navbar from '../../components/home/navbar/navbar'
import Profile from '../../components/profile/Profile'
import useStorage from '../../hooks/useStorage'
const index = () => {

  const { getItem, setItem } = useStorage()
  const [bankAccountList, setBankAccountList] = useState([])
  const [loading, setLoading] = useState(false)
  const GetKycStatus = () => {
    const accessToken = getItem('access_token', 'session')
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
        console.log(response.data);
        // const responseArray = response.data
        // responseArray.map((acc: any) => {
        //   let temp = bankAccountList
        //   temp.push(acc)
        //   setBankAccountList(temp)
        // })
        // console.log(bankAccountList)

        // setItem('accounts', response.request.responseText)
        // return response
      })
      .catch((err) => err.response.data.message)
  }

  return (
    <>
      <Navbar />
      <Profile />
    </>
  )
}

export default index
