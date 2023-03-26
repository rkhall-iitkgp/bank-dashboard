import React from 'react'
import styled from '@emotion/styled'
import { Image } from '@mantine/core'
import Link from 'next/link'
import Heading from '../reusable-components/Heading'
import { useRouter } from 'next/router'
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-family: 'Montserrat';
  font-style: normal;
`
const StyledCont = styled.div`
  width: 40vw;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
`
const StyledHead = styled.div`
  height: 10vh;
  width: 48vw;
  background: #ddedff;
  display: flex;
  justify-content: center;
  align-items: end;
  border-radius: 30px 30px 0 0;
`
const StyledBot = styled.div`
  padding-top: 2vh;
  padding-bottom: 2vh;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`
const StyledBotCont = styled.div`
  margin: auto;
  padding-bottom: 2vh;
  width: 30vw;
  background: rgba(169, 248, 191, 0.38);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledText = styled.div`
  font-weight: 400;
  font-size: 1.5rem;
  color: #0052b3;
`
const StyledBut = styled.div`
  padding: 2px 18px;
  font-weight: 400;
  font-size: 1rem;
  line-height: 29px;
  background: #0062d6;
  border-radius: 30px;
  margin-top: 25px;
  margin-bottom: 1vh;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.2s;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`
const StyledTexthead = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 72px;
  color: #0052b3;
  margin: 5px 0 0 0;
  font-family: 'Montserrat';
  font-style: normal;
`
const StyledTexthead2 = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #636363;
  margin: 10px 0;
`
const StyledTexthead3 = styled.div`
  font-weight: 600;
  font-size: 2rem;
  line-height: 43.88px;
  text-align: center;
  /* font-weight: 400;
  font-size: 1rem;
  line-height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #636363; */
`
const StyledTexthead4 = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  /* margin-top: 20px; */

  color: #636363;
`

export default function PaymentSuccessPage() {
  const router = useRouter()
  const data = router.query
  return (
    <StyledContainer>
      <StyledCont>
        <Heading title="UPI Transfer" />
        <StyledBot>
          <StyledBotCont>
            <StyledTexthead>Payment Successful</StyledTexthead>
            <Image src="/images/tick.png" width={65} height={65} alt="" />
            <StyledTexthead2>
              You have successfully paid &nbsp;<b>{data.name}</b>
            </StyledTexthead2>
            <StyledTexthead3>₹{data.amount}</StyledTexthead3>
            <StyledTexthead4>
              UPI ID : <span style={{ color: 'black' }}> &nbsp;{data.upi}</span>
            </StyledTexthead4>
          </StyledBotCont>
          <Link href="/home">
            <StyledBut>Make Another Payment</StyledBut>
          </Link>
        </StyledBot>
      </StyledCont>
    </StyledContainer>
  )
}
