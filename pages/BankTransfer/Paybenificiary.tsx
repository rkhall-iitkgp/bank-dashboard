import React, { useEffect } from 'react'
import { PayBenficiary } from '../../components/PayBenificiary'

const Paybenificiary = () => {
    let isSbi;
    useEffect(()=>{
        const sbi = sessionStorage.getItem('sbi')
        if(sbi === 'true'){
            isSbi = true
        }else{
            isSbi = false
        }
      },[])
    return (
        <PayBenficiary sbi={isSbi}/>
    )
}
