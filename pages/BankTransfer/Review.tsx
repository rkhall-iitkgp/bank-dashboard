import React, { useEffect } from 'react'
import { Reviewdetailsbank } from '../../components/ReviewDetailsbank'

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
        <Reviewdetailsbank sbi={isSbi} />
    )
}
