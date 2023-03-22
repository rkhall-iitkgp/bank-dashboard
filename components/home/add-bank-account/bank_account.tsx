import styled from '@emotion/styled'
import {
  Button,
  ButtonProps,
  createPolymorphicComponent,
  Image,
} from '@mantine/core'
import { useState } from 'react'
import { AddAccountFormPopup } from './AddAccountFormPopup'
import { useDisclosure } from '@mantine/hooks'
import { Modal } from '@mantine/core'

const Oflex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
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
  justify-content: space-around;
  padding: 24px;
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
}
export default function BankAccount({
  bankAccountList,
  setIsAddAccountPopupOpen,
}: Props) {
  return (
    <Container>
      <Iflex>
        <AddBankAccountText>Add Bank Account</AddBankAccountText>
        <AddAccountButton onClick={() => setIsAddAccountPopupOpen(true)}>
          Add Account
        </AddAccountButton>
      </Iflex>
      <Oflex>
        {bankAccountList.map((bankAccount) => {
          return (
            <div key={bankAccount.account_no}>
              <StyledCard>
                <BankImage>
                  <Image src="images/sbi1.png" alt="sbi" />
                </BankImage>
                <AccountNumber>****{bankAccount.account_no}</AccountNumber>
              </StyledCard>
            </div>
          )
        })}
        <AddAnotherBox>
          <PlusImageContainer onClick={() => setIsAddAccountPopupOpen(true)}>
            <Image src="images/frame.png" alt="add" />
          </PlusImageContainer>
        </AddAnotherBox>
      </Oflex>
    </Container>
  )
}
