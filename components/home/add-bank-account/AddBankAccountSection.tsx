import styled from '@emotion/styled'
import {
  Button,
  ButtonProps,
  createPolymorphicComponent,
  Image,
  Loader,
} from '@mantine/core'
import api from '../../datams'
import { useState, useEffect } from "react"
import useStorage from '../../../hooks/useStorage'
const Oflex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  height: 200px;
  overflow-x: auto;
`

const Iflex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0 20px 0;
`

const _StyledButton = styled(Button)`
  border-radius: 30px;
  color: white;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  font-family: Montserrat, sans-serif;
  padding: 4px 48px;
  height: 42px;
  background: #0062d6;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`

const AddAccountButton = createPolymorphicComponent<'button', ButtonProps>(
  _StyledButton,
)
const BankImage = styled.div`
  width: 90px;
  height: 30px;
`

const PlusImageContainer = styled.div`
  width: 110px;
  height: 120px;
  :hover {
    cursor: pointer;
    transform: scale(1.4);
    transition: all 0.1s ease-in-out;
  }
`

const StyledCard = styled.div`
  min-width: 150px;
  min-height: 150px;
  background: rgba(0, 82, 179, 0.1);
  border: 2px solid #0052b3;
  border-radius: 30px;
  margin-right: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 36px 24px 24px 24px;
`

const AddAnotherBox = styled.div`
  min-width: 150px;
  min-height: 150px;
  background: rgba(0, 82, 179, 0.1);
  border: 2px dashed #0052b3;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 35px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3vh 3vw 0 3vw;
  border-radius: 30px;
  box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.2);
  padding: 0 52px 40px 52px;
`

const AddBankAccountText = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 49px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #0052b3;
`
const AccountNumber = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
  color: black;
`

const StyledText1 = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  color: #0052b3;
`
interface Props {
  setIsAddAccountPopupOpen: Function
  bankAccountList: any[]
  loading: any
  SetIskycPermissionPopUpOpen: Function
}
export default function BankAccount({
  bankAccountList,
  setIsAddAccountPopupOpen,
  loading,
  SetIskycPermissionPopUpOpen
}: Props) {
  const [result, setResult] = useState(1)
  const { getItem } = useStorage()
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
        err.response.data.message == 'KYC not done' && setResult(0)
        // console.log(err.response.data.message)
      })
  }
  useEffect(() => {

    GetKycStatus()
  }, [])

  return (
    <Container>
      <Iflex>
        <AddBankAccountText>Add Bank Account</AddBankAccountText>
        <AddAccountButton onClick={() => {
          if (result === 0) {
            SetIskycPermissionPopUpOpen(true)
          } else {
            setIsAddAccountPopupOpen(true)
          }
        }}>
          Add Account
        </AddAccountButton>
      </Iflex>
      <Oflex>
        {loading ? <Loader size={40} m={30} /> : <></>}
        {bankAccountList?.map((bankAccount) => {
          return (
            <div key={bankAccount.account_no}>
              <StyledCard>
                <BankImage>
                  <Image src="images/sbi1.png" alt="sbi" />
                </BankImage>
                <AccountNumber>
                  ****{bankAccount.account_no.slice(8, 12)}
                </AccountNumber>
              </StyledCard>
            </div>
          )
        })}

        <AddAnotherBox>
          <PlusImageContainer onClick={() => {
            if (result === 0) {
              SetIskycPermissionPopUpOpen(true)
            } else {
              setIsAddAccountPopupOpen(true)
            }
          }}>
            <Image src="images/frame.png" alt="add" />
          </PlusImageContainer>
        </AddAnotherBox>
      </Oflex>
    </Container>
  )
}
