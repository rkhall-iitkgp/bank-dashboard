// import Payment from "../../components/make-payment"

// export default Payment;

import type { NextPage } from 'next'
import Payment from "../../components/make-payment"
import Navbar from '../../components/navbar'
import OfferCardsRow from '../../components/OfferCardsRow'
import Demo from '../../components/SeeYourAnalysis'
import styles from '../../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <Navbar/>
        <Demo />
        <Payment />
        <OfferCardsRow />
    </div>
  )
}

export default Home
