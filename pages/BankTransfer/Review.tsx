import React, { useEffect } from 'react'
import { ReviewDetailsBank } from '../../components/bank-transfer-flow/ReviewDetailsBank'

const Review = () => {
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
        <ReviewDetailsBank sbi={isSbi} />
    )
}
