import styled from '@emotion/styled'
import { ButtonProps, createPolymorphicComponent } from '@mantine/core'
import { Image } from '@mantine/core'
import {
  Button,
} from '@mantine/core'

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
  background: #0062d6;
  border-radius: 30px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  //margin-right: 50px;
`
const StyledButton = createPolymorphicComponent<'button', ButtonProps>(
  _StyledButton,
)
const StyledImage = styled.div`
  width: 90px;
  height: 30px;
`
const StyledImage1 = styled.div`
  width: 140px;
  height: 140px;
  &:hover {
    width: 160px;
    height: 160px;
  }
`

const StyledCard = styled.div`
  width: 160px;
  height: 190px;
  background: rgba(0, 82, 179, 0.1);
  border: 2px solid #0052b3;
  border-radius: 30px;
  margin-right: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px 20px;
`

const StyledAddCard = styled.div`
  width: 160px;
  height: 190px;
  background: rgba(0, 82, 179, 0.1);
  border: 2px dashed #0052b3;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 35px;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4vh 3vw 0 3vw;
  border-radius: 30px;
  box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.2);
  padding: 0 52px 40px 52px;
`

const StyledText = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 49px;
  display: flex;
  align-items: center;
  text-align: center;
  //margin-left: 30px;
  color: #0052b3;
`
const StyledText2 = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 49px;
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
  setAddAccount: Function;
}
export default function BankAccount({setAddAccount}:Props) {
  return (
    <StyledContainer>
      <Iflex>
        <StyledText>Add Bank Account</StyledText>

        <StyledButton
          onClick={() => {
            setAddAccount(true)
            const body = document.body
            const scrollY = body.style.top
            body.style.position = 'fixed'
          }}
        >
          Add Account
        </StyledButton>
      </Iflex>
      <Oflex>
        <StyledCard>
          <StyledImage>
            <Image src="images/sbi 1.png" alt="sbi" />
          </StyledImage>
          <StyledText1>STATE BANK OF INDIA</StyledText1>
          <StyledText2>9878</StyledText2>
        </StyledCard>
        <StyledAddCard>
          <StyledImage1>
            <Image src="images/frame .png" alt="add" />
          </StyledImage1>
        </StyledAddCard>
      </Oflex>
    </StyledContainer>
  )
}
