import { Modal } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { DropFiles } from './dropfiles'
import { AnalysisType } from './selectType'
interface props {
    isanalysisopen: boolean
    setIsanalysisopen: Function
    setIsfilteropen: Function
    setIsAddAccountPopupOpen: Function
    bankAccountList: any[]
    SetIskycPermissionPopUpOpen: Function

}
const AnalysisPopUp = ({ isanalysisopen, setIsanalysisopen, setIsAddAccountPopupOpen, setIsfilteropen, bankAccountList, SetIskycPermissionPopUpOpen }: props) => {
    const [dropfiles, setDropfiles] = useState(false)

    useEffect(() => {


        return () => {
            setDropfiles(true)
        }
    }, [])

    return (
        <Modal
            withCloseButton={false}
            opened={isanalysisopen}
            onClose={() => { setIsanalysisopen(false); setDropfiles(true) }}
            centered
            radius="lg"
            size="auto"
            padding={0}
        >
            {dropfiles ? <AnalysisType setdropfiles={setDropfiles} setIsfilteropen={setIsfilteropen} SetIskycPermissionPopUpOpen={SetIskycPermissionPopUpOpen} bankAccountList={bankAccountList}
                setIsanalysisopen={setIsanalysisopen} setIsAddAccountPopupOpen={setIsAddAccountPopupOpen} /> : <DropFiles setdropfiles={setDropfiles} setIsanalysisOpen={setIsanalysisopen} />}
        </Modal>
    )
}

export default AnalysisPopUp