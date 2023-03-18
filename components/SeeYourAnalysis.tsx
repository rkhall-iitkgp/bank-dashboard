import { Card, Image, Text, Badge, Button, Group, MantineProvider } from '@mantine/core';
// import MantineProvider  from '@mantine/core';
import { ButtonProps, createPolymorphicComponent } from '@mantine/core';
import styled from '@emotion/styled';
// import { Text } from '@mantine/core';

const _StyledButton = styled(Button)`
  border-width: 0.125rem;
  background-color: white;
  border-radius: 4rem;
  cursor: pointer;
`;
const StyledDiv = styled.div`
  text-align: center;
  display  :flex ;
  background-color: #0062D6;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 1rem;
  font-family: Montserrat;
`;
const TextDiv = styled.div`
  width:60%;
  font-family: Montserrat, sans-serif;
`;
const ButtonDiv = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  font-family: Montserrat, sans-serif;
`;
const StyledButton = createPolymorphicComponent<'button', ButtonProps>(_StyledButton);

function SeeYourAnalysis() {
  return (
      <StyledDiv>
        <TextDiv>
      <Text size="xl" color="white">
       We provide <b>detailed analysis </b>of your transactions and offer insights to help you make informed financial decisions.
      </Text>
      </TextDiv>
      <ButtonDiv>
     <StyledButton>
     <Text size="xl" color="blue">
      See your analysis 
      </Text>
     </StyledButton>
     </ButtonDiv>
     </StyledDiv>
   
  );
}
function Demo(){
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <SeeYourAnalysis />
        </MantineProvider>
    )
}
export default Demo
