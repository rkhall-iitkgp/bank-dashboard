import styled from "@emotion/styled";
import {
  ButtonProps,
  createPolymorphicComponent
  
} from "@mantine/core";
import { Image } from "@mantine/core";
import logo from "./sbi 1.png";
import circle from "./Frame .png";
import { Text } from "@mantine/core";
import {
  // Box, CSSObject, rem , Flex,
  Button,
} from "@mantine/core";

const Oflex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const Iflex = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const _StyledButton = styled(Button)`
  height: 5vh;
  background: #0062d6;
  border-radius: 30px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-right: 50px;
`;
const StyledButton = createPolymorphicComponent<"button", ButtonProps>(
  _StyledButton
);
const StyledImage = styled.div`
  width: 140px;
  height: 48px;
`;
const StyledImage1 = styled.div`
  width: 140px;
  height: 140px;
  &:hover{
    width:160px;
    height:160px;
  }
`;

const StyledCard = styled.div`
  width: 211px;
  height: 231px;
  background: rgba(0, 82, 179, 0.1);
  border: 2px solid #0052b3;
  border-radius: 30px;
  margin: 20px 20px 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledAddCard = styled.div`
  width: 211px;
  height: 231px;
  background: rgba(0, 82, 179, 0.1);
  border: 2px dashed #0052b3;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 96vw;
  margin: 0 2vw;
  border-radius: 30px;
  box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.2);
`;

const StyledText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 49px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 30px;
  color: #0052b3;
`;
const StyledText1 = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 49px;
  text-align: center;
  color: black;
`;

const Styledplus = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  color: #0052b3;`;

export default function BankAccount() {
  return (
    <StyledContainer>
      <Iflex>
        <StyledText>Add Bank Account</StyledText>
        <StyledButton>Add Account</StyledButton>
      </Iflex>
      <Oflex>
        <StyledCard>
          <StyledImage>
            <Image src={logo} />
          </StyledImage>
          <Styledplus>STATE BANK OF INDIA</Styledplus>
          <StyledText1>9878</StyledText1>
        </StyledCard>
        <StyledAddCard>
            <StyledImage1>
            <Image src={circle} />
            </StyledImage1>
        </StyledAddCard>
      </Oflex>
    </StyledContainer>
  );
}
