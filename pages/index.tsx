import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
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
