import type { NextPage } from 'next'
import { LoginSIgnupPage } from '../components/LoginSignup/LoginSIgnupPage'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <LoginSIgnupPage />
    </div>
  )
}

export default Home
