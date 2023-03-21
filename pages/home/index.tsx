import type { NextPage } from 'next'
import BankAccount from '../../components/home/add-bank-account/bank_account'
import Payment from '../../components/home/make-payment-section'
import Navbar from '../../components/navbar'
import OfferCardsRow from '../../components/home/offers-referal-section/OfferCardsRow'
import SeeYourAnalysis from '../../components/home/see-your-analysis-section/SeeYourAnalysis'
import { useState } from 'react'
import { ContactUs } from '../../components/add-bank-account-flow/AddAccount'

const Home: NextPage = () => {
  const [addAccount, setAddAccount] = useState(false)

  return (
    <div>
      <Navbar />
      <SeeYourAnalysis />
      <Payment />
      <BankAccount setAddAccount={setAddAccount} />
      <OfferCardsRow />
      {addAccount ? <ContactUs setAddAccount={setAddAccount} /> : <></>}
    </div>
  )
}

export default Home
