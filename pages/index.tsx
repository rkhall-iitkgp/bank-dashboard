import type { NextPage } from 'next'
import { LoginSignupPage } from '../components/login-signup/LoginSIgnupPage'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <LoginSignupPage />
    </div>
  )
}

export default Home
