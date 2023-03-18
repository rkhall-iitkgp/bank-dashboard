import type { NextPage } from 'next'
import Head from 'next/head'
import { ContactUs } from '../components/AddAcoount'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ContactUs/>
    </div>
  )
}

export default Home
