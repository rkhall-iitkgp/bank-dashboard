import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import api from '../../components/api'
import { AddAccountFormPopup } from '../../components/home/add-bank-account/AddAccountFormPopup'
import BankAccount from '../../components/home/add-bank-account/AddBankAccountSection'
import Payment from '../../components/home/make-payment-section'
import Navbar from '../../components/home/navbar/navbar'
import OfferCardsRow from '../../components/home/offers-referal-section/OfferCardsRow'
import SeeYourAnalysis from '../../components/home/see-your-analysis-section/SeeYourAnalysis'
import { PermissionFormPopup } from '../../components/reusable-components/Permissionprompt'
import useStorage from '../../hooks/useStorage'

const Home: NextPage = () => {
    const { getItem, setItem } = useStorage()
    const [bankAccountList, setBankAccountList] = useState<any[]>([])
    const [isAddAccountPopupOpen, setIsAddAccountPopupOpen] =
        useState<boolean>(false)

    // get Accounts and populate bankAccountList once adding the 
    // details to sessionStorage and render BankAccount component

    const GetAccounts = async()=>{

        const accessToken = getItem('access_token')
        const user_id = getItem('user_id')

        const response = await api.get(`/user/accounts/${user_id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        })

        const responseArray = response.data

        setBankAccountList(responseArray)
        setItem('accounts', response.request.responseText)
    }

    useEffect(() => {
        if (!getItem('accounts')) {
            GetAccounts()
        }
        else{
            setBankAccountList(JSON.parse(getItem('accounts')))
        }        
    }, [])

    const [isPermissionPopUpOpen, setIsPermissionPopUpOpen] =
        useState<boolean>(false)
    return (
        <>
            <PermissionFormPopup
                isPermissionPopUpOpen={isPermissionPopUpOpen}
                SetIsPermissionPopUpOpen={setIsPermissionPopUpOpen}
            />
            <Navbar bankAccountList={bankAccountList}/>
            <SeeYourAnalysis SetIsPermissionPopUpOpen={setIsPermissionPopUpOpen} />
            <Payment />
            {bankAccountList.length!==0 && <BankAccount
                bankAccountList={bankAccountList}
                setIsAddAccountPopupOpen={setIsAddAccountPopupOpen}
            />}
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
