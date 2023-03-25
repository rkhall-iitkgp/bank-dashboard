import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import api from '../../components/api'
import { AddAccountFormPopup } from '../../components/home/add-bank-account/AddAccountFormPopup'
import BankAccount from '../../components/home/add-bank-account/AddBankAccountSection'
import Payment from '../../components/home/make-payment-section'
import Navbar from '../../components/home/navbar/navbar'
import OfferCardsRow from '../../components/home/offers-referal-section/OfferCardsRow'
import SeeYourAnalysis from '../../components/home/see-your-analysis-section/SeeYourAnalysis'
import { PermissionFormPopup } from '../../components/reusable-components/Permissionprompt'
import useStorage from '../../hooks/useStorage'
import {KycPermissionFormPopup} from "../../components/reusable-components/Kycprompt"
const Home: NextPage = () => {
  const { getItem, setItem } = useStorage()
  const [bankAccountList, setBankAccountList] = useState<any[]>([
    { account_no: 1297 },
  ])
  const [isAddAccountPopupOpen, setIsAddAccountPopupOpen] =
    useState<boolean>(false)

  const GetAccounts = () => {
    const accessToken = getItem('access_token')
    console.log(accessToken)
    const user_id = getItem('user_id')

    const response = api
      .get(`/user/accounts/${user_id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response.data.accounts)
        const responseArray = response.data
        responseArray.map((acc: any) => {
          let temp = bankAccountList
          temp.push(acc)
          setBankAccountList(temp)
        })
        console.log(bankAccountList)

        setItem('accounts', response.request.responseText)
        return response
      })
      .catch((err) => console.log(err))
  }

  // const getServerSideProps = () => {
  //   const accessToken = sessionStorage.getItem('access_token')
  //   console.log(accessToken)
  //   const user_id = sessionStorage.getItem('user_id')

  //   const response = api
  //     .get(`/user/accounts/${user_id}`, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data.accounts)
  //       const responseArray = response.data.accounts
  //       responseArray.map((acc: any) => {
  //         let temp = bankAccountList
  //         temp.push(acc)
  //         setBankAccountList(temp)
  //       })
  //       console.log(bankAccountList)

  //       sessionStorage.setItem('accounts', response.request.responseText)
  //       return response
  //     }).catch((err) => console.log(err))
  // }

  useEffect(() => {
    if (!getItem('accounts')) {
      GetAccounts()
    }
  }, [])
  const [isPermissionPopUpOpen, setIsPermissionPopUpOpen] =
    useState<boolean>(false)
  const [isKycPermissionPopUpOpen, setIsKycPermissionPopUpOpen] =
    useState<boolean>(false)

    return (
    <>
      <PermissionFormPopup
        isPermissionPopUpOpen={isPermissionPopUpOpen}
        SetIsPermissionPopUpOpen={setIsPermissionPopUpOpen}
      />
      <Navbar />
      <SeeYourAnalysis SetIsPermissionPopUpOpen={setIsPermissionPopUpOpen} />
      <Payment 
        isKycPermissionPopUpOpen={isKycPermissionPopUpOpen}
        SetIsKycPermissionPopUpOpen={setIsKycPermissionPopUpOpen}/>
      <BankAccount
        bankAccountList={bankAccountList}
        setIsAddAccountPopupOpen={setIsAddAccountPopupOpen}
      />
      <OfferCardsRow />
      {isAddAccountPopupOpen ? (
        <AddAccountFormPopup
          bankAccountList={bankAccountList}
          isAddAccountPopupOpen={isAddAccountPopupOpen}
          setIsAddAccountPopupOpen={setIsAddAccountPopupOpen}
          setBankAccountList={setBankAccountList}
        />
      ) : (
        <></>
      )}
      {isKycPermissionPopUpOpen ? (
        <KycPermissionFormPopup  isKycPermissionPopUpOpen={isKycPermissionPopUpOpen}
        SetIsKycPermissionPopUpOpen={setIsKycPermissionPopUpOpen}/>
      ) : (
        <></>
      )}
    </>
  )
}

export default Home
