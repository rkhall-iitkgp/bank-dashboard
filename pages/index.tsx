import type { NextPage } from 'next'
import Head from 'next/head'
import { ContactUs } from '../components/AddAcoount'
import { LoginSIgnupPage } from '../components/LoginSignup/LoginSIgnupPage'
import { OTP } from '../components/otp'
import { PayBenficiary } from '../components/PayBenificiary'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <ContactUs/> */}
      {/* <LoginSIgnupPage/> */}
      {/* <PayBenficiary sbi={true}/> */}
      <OTP/>
    </div>
  )
}

export default Home
