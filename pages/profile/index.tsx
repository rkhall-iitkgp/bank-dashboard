import React, { useEffect, useState } from 'react'
import api from '../../components/datams'
import { AddAccountFormPopup } from '../../components/home/add-bank-account/AddAccountFormPopup'
import Navbar from '../../components/home/navbar/navbar'
import FilterPopUp from '../../components/home/see-your-analysis-section/FilterPopUp'
import Profile from '../../components/profile/Profile'
import { KycPermissionFormPopup } from '../../components/reusable-components/Kycprompt'
import useStorage from '../../hooks/useStorage'
const ProfilePage = () => {
    const { getItem, setItem } = useStorage()
    const [isAddAccountPopupOpen, setIsAddAccountPopupOpen] = useState<boolean>(false)
    const [isfilteropen, setIsfilteropen] = useState(false)
    const [accLength, setAccLength] = useState('[]')
    const [isKycPermissionPopUpOpen, setIsKycPermissionPopUpOpen] = useState<boolean>(false)
    const [kycStatus, setKycStatus] = useState(1)
    const [loading, setLoading] = useState(false)
    const [bankAccountList, setBankAccountList] = useState<any[]>([])

    const GetAccounts = () => {
        // setItem('accounts', '[]')
        setLoading(true)
        api
            .get(`/user/accounts/${getItem('user_id')}/`, {
                headers: { Authorization: `Bearer ${getItem('access_token')}` },
            })
            .then((response) => {
                console.log(response.data.accounts)
                const responseArray = response.data
                setBankAccountList(responseArray)
                console.log(bankAccountList)

                setItem('accounts', response.request.responseText)
                setAccLength(response.request.responseText)
                setLoading(false)
                return response
            })
            .catch((err) => {
                console.log('error', err)
                setLoading(false)
            })
    }

    const GetKycStatus = () => {
        const accessToken = getItem('access_token', 'session')
        console.log(accessToken)
        api
            .get(`/user/getkyc/`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                response.data
            })
            .catch((err) => {
                err.response.data.message == 'KYC not done' && setKycStatus(0)
                // console.log(err.response.data.message)
            })
    }

    const dashClickHandler = (accLength, kycStatus) => {
        console.log(`acclength = `, accLength)
        if (kycStatus === 0) {
            setIsKycPermissionPopUpOpen(true)
        } else if (kycStatus === 1 && bankAccountList.length !== 0) {
            setIsfilteropen(true)
        } else if (kycStatus === 1 && bankAccountList.length === 0) {
            setIsAddAccountPopupOpen(true)
        }
    }

    useEffect(() => {
        GetAccounts()
        GetKycStatus()
    }, [])


    return (
        <>
            <Navbar dashClickHandler={() => dashClickHandler(accLength, kycStatus)} />
            <Profile loading={loading} bankAccountList={bankAccountList} />
            <AddAccountFormPopup
                bankAccountList={bankAccountList}
                isAddAccountPopupOpen={isAddAccountPopupOpen}
                setIsAddAccountPopupOpen={setIsAddAccountPopupOpen}
                setBankAccountList={setBankAccountList}
            />
            <KycPermissionFormPopup
                isKycPermissionPopUpOpen={isKycPermissionPopUpOpen}
                SetIsKycPermissionPopUpOpen={setIsKycPermissionPopUpOpen}
            />
            <FilterPopUp
                isfilteropen={isfilteropen}
                setIsfilteropen={setIsfilteropen}
            />
        </>
    )
}

export default ProfilePage