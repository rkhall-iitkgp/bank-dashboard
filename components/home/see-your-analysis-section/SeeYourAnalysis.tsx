import React from 'react'
import styled from '@emotion/styled'
import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core'
import { useEffect, useState } from 'react'
import useStorage from '../../../hooks/useStorage'
import api from '../../datams'
const Container = styled.div`
  margin-left: 3vw;
  margin-right: 3vw;
  margin-top: 3vh;
  display: flex;
  background-color: #0062d6;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem;
  border-radius: 1.5rem;
`
const TextDiv = styled.div`
  flex: 2;
  font-size: 28px;
  line-height: 36px;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  color: white;
  padding-left: 60px;
`
const _StyledButton = styled(Button)`
  background-color: white;
  border-radius: 30px;
  color: #0062d6;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  font-family: Montserrat, sans-serif;
  padding: 4px 20px;
  height: 42px;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`

const StyledButton = createPolymorphicComponent<'button', ButtonProps>(
  _StyledButton,
)
interface Props {
  SetIsPermissionPopUpOpen: Function
  setIsfilteropen: Function
  SetIsKycPermissionPopUpOpen: Function,
  setIsAddAccountPopupOpen: Function
}
export default function SeeYourAnalysis({
  SetIsPermissionPopUpOpen,
  SetIsKycPermissionPopUpOpen,
  setIsAddAccountPopupOpen,
  setIsfilteropen
}: Props) {
  const { getItem } = useStorage()
  const [result, setResult] = useState(1)
  const GetKycStatus = () => {
    const accessToken = getItem('access_token','session')
    console.log(accessToken)
    const user_id = getItem('user_id')
    const accLength = JSON.stringify(getItem('accounts'))?.length
    const response = api
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
        err.response.data.message == 'KYC not done' && setResult(0)
        // console.log(err.response.data.message)
      })
  }
  const [accLength, setAccLength] = useState('[]')
  useEffect(() => {
    GetKycStatus()
    // setResult(0)
    setAccLength(getItem('accounts'))
    console.log(result)
  }, [])
  return (
    <Container>
      <TextDiv>
        We provide <span style={{ fontWeight: '500' }}>detailed analysis </span>
        of your <br />
        transactions and offer insights to help you <br /> make informed
        financial decisions.
      </TextDiv>
      {result === 0 && (
        <StyledButton
          variant="default"
          onClick={() => {
            SetIsKycPermissionPopUpOpen(true)
            // setIsfilteropen(true)
          }}
        >
          See your analysis
        </StyledButton>
      )}

      {result === 1 && accLength !== '[]' && (
        <StyledButton
          variant="default"
          onClick={() => {
            // SetIsPermissionPopUpOpen(true)
            setIsfilteropen(true);
          }}
        >
          See your analysis
        </StyledButton>
      )}
      {result === 1 && accLength === '[]' && (
        <StyledButton
          variant="default"
          onClick={() => {
            setIsAddAccountPopupOpen(true)
          }}
        >
          See your analysis
        </StyledButton>
      )}
    </Container>
  )
}

// export default SeeYourAnalysis
