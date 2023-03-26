import React, { useEffect, useState } from 'react'
import api from '../../components/api'
import Navbar from '../../components/home/navbar/navbar'
import Profile from '../../components/profile/Profile'
import useStorage from '../../hooks/useStorage'

const index = () => {
  const { getItem, setItem } = useStorage()
  const [bankAccountList, setBankAccountList] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    return () => {
      setLoading(true)
      api.get(`/user/accounts/${getItem("user_id")}/`, { headers: { "Authorization": `Bearer ${getItem("access_token")}` } })
        .then((response) => {
          console.log(response.data.accounts)
          const responseArray = response.data
          setBankAccountList(responseArray)
          console.log(bankAccountList)

          setItem('accounts', response.request.responseText)
          setLoading(false)
          return response
        })
        .catch((err) => {
          console.log('error', err)
          setLoading(false)
        })
    }
  }, [])
  return (
    <>
      <Navbar />
      <Profile loading={loading} bankAccountList={bankAccountList} />
    </>
  )
}

export default index
