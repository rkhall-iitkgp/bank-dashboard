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
import { KycPermissionFormPopup } from '../../components/reusable-components/Kycprompt'
import Filter from '../../components/filter'
import FilterPopUp from '../../components/home/see-your-analysis-section/FilterPopUp'
const Home: NextPage = () => {
  const { getItem, setItem } = useStorage()
  const [bankAccountList, setBankAccountList] = useState<any[]>([])
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

  useEffect(() => {
    setLoading(true)
    api
      .get(`/user/accounts/${getItem('user_id')}/`, {
        headers: { Authorization: `Bearer ${getItem('access_token')}` },
      })
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
  }, [])
  const [isPermissionPopUpOpen, setIsPermissionPopUpOpen] =
    useState<boolean>(false)

  const [isKycPermissionPopUpOpen, setIsKycPermissionPopUpOpen] =
    useState<boolean>(false)

  const [loading, setLoading] = useState(false)
  const [isfilteropen, setIsfilteropen] = useState(false)
  return (
    <>
      <PermissionFormPopup
        isPermissionPopUpOpen={isPermissionPopUpOpen}
        SetIsPermissionPopUpOpen={setIsPermissionPopUpOpen}
      />
      <Navbar />
      <SeeYourAnalysis SetIsPermissionPopUpOpen={setIsPermissionPopUpOpen} setIsfilteropen={setIsfilteropen} />
      <Payment
        isKycPermissionPopUpOpen={isKycPermissionPopUpOpen}
        SetIsKycPermissionPopUpOpen={setIsKycPermissionPopUpOpen}
      />
      <BankAccount
        bankAccountList={bankAccountList}
        setIsAddAccountPopupOpen={setIsAddAccountPopupOpen}
        loading={loading}
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
        <KycPermissionFormPopup
          isKycPermissionPopUpOpen={isKycPermissionPopUpOpen}
          SetIsKycPermissionPopUpOpen={setIsKycPermissionPopUpOpen}
        />
      ) : (
        <></>
      )}
      {isfilteropen ? (
        <FilterPopUp
          isfilteropen={isfilteropen}
          setIsfilteropen={setIsfilteropen}
        />
      ) : (
        <></>
      )}

    </>
  )
}

export default Home
