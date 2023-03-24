import React from 'react'
import Navbar from '../../components/home/navbar/navbar'
import Profile from '../../components/profile/Profile'

const index = () => {

    const [bankAccountList, setBankAccountList] = React.useState<any[]>([])
    React.useEffect(() => {
        const accounts = sessionStorage.getItem('accounts')        
        if (accounts) {
            setBankAccountList(JSON.parse(accounts))
        }
    }, [])
  return (
    <>
      {
        bankAccountList.length!==0 && (
            <>
                <Navbar bankAccountList={bankAccountList}/>
                <Profile bankAccountList={bankAccountList}/>
            </>
        )
      }
    </>
  )
}

export default index
