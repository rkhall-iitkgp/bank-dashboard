import type { NextPage } from 'next'
import Head from 'next/head'
import { ContactUs } from '../components/AddAcoount'
import { Banktransfer } from '../components/BankTransfer'
import { BeneficiaryBank } from '../components/benfeicarybank'
import { LoginSIgnupPage } from '../components/LoginSignup/LoginSIgnupPage'
import { OTP } from '../components/otp'
import { PayBenficiary } from '../components/PayBenificiary'
import { Reviewdetailsbank } from '../components/ReviewDetailsbank'
import { Reviewdetailsupi } from '../components/Reviewdetailsupi'
import { Upitransfer3 } from '../components/Upitransfer3'
import { UpiTransferHome } from '../components/Upitransferhome'
import Demo from '../components/SeeYourAnalysis'
import styles from '../styles/Home.module.css'
import OfferCardsRow from '../components/OfferCardsRow'
import Dashboard from './dashboard'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      {/* <ContactUs/> */}
      {/* <LoginSIgnupPage /> */}
      <Dashboard />
      {/* <PayBenficiary sbi={true}/> */}
      {/* <OTP /> */}
      {/* <Banktransfer/> */}
      {/* <BeneficiaryBank/> */}
      {/* <UpiTransferHome /> */}
      {/* <Upitransfer3/> */}
      {/* <Reviewdetailsupi/> */}
      {/* <Reviewdetailsbank sbi={false} /> */}
    </div>
  )
}

export default Home
