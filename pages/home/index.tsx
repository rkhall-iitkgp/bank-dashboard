import type { NextPage } from 'next'
import BankAccount from '../../components/bank_account'
import Payment from "../../components/make-payment"
import Navbar from '../../components/navbar'
import OfferCardsRow from '../../components/OfferCardsRow'
import Demo from '../../components/SeeYourAnalysis'
import styles from '../../styles/Home.module.css'
import { useState } from 'react';
import { ContactUs } from '../../components/AddAcoount'


const Home: NextPage = () => {
    const [addAccount, setAddAccount] = useState(false)

    return (
        <div className={styles.container}>
            <Navbar />
            <Demo />
            <Payment />
            <BankAccount setAddAccount={setAddAccount} />
            <OfferCardsRow />
            {
                addAccount ?
                    <ContactUs setAddAccount={setAddAccount} />
                    : <></>
            }
            {/* <ContactUs setAddAccount={setAddAccount} /> */}
        </div>
    )
}

export default Home
