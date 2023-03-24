import React from 'react'
import styled from '@emotion/styled'
import { Image } from '@mantine/core'
import Link from 'next/link'
import Heading from '../reusable-components/Heading'
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-family: 'Montserrat';
  background-color: '#EEEEEE';
  font-style: normal;
`
const StyledCont = styled.div`
  width: 40vw;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
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
  margin: auto;
`
const StyledText = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
  color: #0052b3;
  font-family: 'Montserrat';
  font-style: normal;
`
const StyledBut = styled.div`
  padding: 15px;
  height: 5vh;
  font-weight: 400;
  font-size: 1rem;
  line-height: 29px;
  background: #0062d6;
  border-radius: 30px;
  margin-top: 25px;

  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
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
  font-weight: 400;
  font-size: 1rem;
  line-height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #636363;
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
  margin-top: 10px;

  color: #636363;
`

export default function PaymentSuccessful() {
  return (
    <StyledContainer>
      <StyledCont>
        <Heading title="Bank Transfer" />
        <StyledBot>
          <StyledBotCont>
            <StyledTexthead>Payment Successful</StyledTexthead>
            <Image src="/images/tick.png" width={65} height={65} alt="" />
            <StyledTexthead2>
              You have successfully paid John{' '}
              <span style={{ color: 'black' }}> &nbsp;₹500</span>
            </StyledTexthead2>
            <StyledTexthead3>
              Remaining balance:{' '}
              <span style={{ color: 'black' }}> &nbsp;₹11,845.67</span>
            </StyledTexthead3>
            <StyledTexthead3>
              A/c No. :{' '}
              <span style={{ color: 'black' }}> &nbsp;XXXXXXX8989</span>
            </StyledTexthead3>
            <StyledTexthead4></StyledTexthead4>
          </StyledBotCont>
          <Link href="/home">
            <StyledBut>Make Another Payment</StyledBut>
          </Link>
        </StyledBot>
      </StyledCont>
    </StyledContainer>
  )
}
