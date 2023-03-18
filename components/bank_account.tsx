import styled from '@emotion/styled';
import { Card, Container } from '@mantine/core';
import { Image } from '@mantine/core';
import { Text, } from '@mantine/core';
import {Box, CSSObject, rem , Flex, Button, MantineProvider} from '@mantine/core';

const Oflex = styled.div`
    display: flex;
    flex-direction: row;
    width: 90vw;
    flex-wrap: wrap;
`;

const Iflex = styled.div`
    width: 90vw;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

const StyledButton = styled(Button)`
    width: 332px;
    height: 62px;
    background: #0062D6;
    border-radius: 30px;
    margin-right: 40px;
    margin-top: 21px;
`;

const StyledCard = styled( Card )`
    width: 211px;
    height: 231px;
    background: rgba(0, 82, 179, 0.1);
    border: 2px solid #0052B3;
    border-radius: 30px;
    margin-left: 46px;
    margin-top: 40px;
    margin-bottom: 40px;
`;

const StyledAddCard = styled( Card )`
    width: 211px;
    height: 231px;
    background: rgba(0, 82, 179, 0.1);
    border: 2px dashed #0052B3;
    border-radius: 30px;
    margin-left: 46px;
    margin-top: 40px;
    margin-bottom: 40px;
`;


const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin-left: 46px;
    margin-top: 82px;
    border-radius: 30px; 
    box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.2);
`;

const StyledText = styled(Text)`
    width: 435px;
    height: 79px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 60;
    font-size: 40px;
    line-height: 49px;
    color: #0052B3;
    margin-left: 40px;
    margin-top: 21px;
    padding: 10px;
`;

const Styledplus = styled(Text)`
    width: 45px;
    height: 45px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 73px;
    color: rgba(0, 82, 179, 0.73);
`;

export default function Demo() {
    return (
        <StyledContainer>
            <Iflex>
                <StyledText>Add Bank Account</StyledText>
                <StyledButton>Add Account</StyledButton>
            </Iflex>
            <Oflex>
                <StyledCard>
                    <Image src={logo} />
                    <Text>STATE BANK OF INDIA</Text>
                    <Text>9875</Text>
                </StyledCard>
                <StyledAddCard>
                </StyledAddCard>
            </Oflex>
        </StyledContainer>
);
}

