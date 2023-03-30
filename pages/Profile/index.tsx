import React, { useEffect, useState } from 'react'
import api from '../../components/datams'
import Navbar from '../../components/home/navbar/navbar'
import Profile from '../../components/profile/Profile'
import useStorage from '../../hooks/useStorage'
const ProfilePage = () => {
  const { getItem, setItem } = useStorage()


  const [loading, setLoading] = useState(false)
  const [bankAccountList, setBankAccountList] = useState<any[]>([])

  useEffect(() => {
    setLoading(true)
    setBankAccountList(JSON.parse(getItem("accounts")))
    setLoading(false)
  }, [])

  return (
  <>
      <Navbar dashClickHandler={() => {}}/>
    <div >
      
      <Profile loading={loading} bankAccountList={bankAccountList} />
    </div>
  </>
  )
}

export default ProfilePage
