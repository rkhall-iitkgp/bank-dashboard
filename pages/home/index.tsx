import type { NextPage } from 'next'
import BankAccount from '../../components/home/add-bank-account/bank_account'
import Payment from '../../components/home/make-payment-section'
import Navbar from '../../components/home/navbar/navbar'
import OfferCardsRow from '../../components/home/offers-referal-section/OfferCardsRow'
import SeeYourAnalysis from '../../components/home/see-your-analysis-section/SeeYourAnalysis'
import { useState } from 'react'
import { AddAccountFormPopup } from '../../components/home/add-bank-account/AddAccountFormPopup'

const Home: NextPage = () => {
  const [bankAccountList, setBankAccountList] = useState<any[]>([
    { account_no: 1297 },
  ])
  const [isAddAccountPopupOpen, setIsAddAccountPopupOpen] =
    useState<boolean>(false)
  return (
    <>
    
      <Navbar />
      
      <SeeYourAnalysis />
      <Payment />
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
      
    </>
  )
}

export default Home
