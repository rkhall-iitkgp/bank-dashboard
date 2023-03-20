import { Button, MantineProvider } from '@mantine/core'
// import MantineProvider  from '@mantine/core';
import { ButtonProps, createPolymorphicComponent } from '@mantine/core'
import styled from '@emotion/styled'
// import { Text } from '@mantine/core';

const _StyledButton = styled(Button)`
  border-width: 0.125rem;
  background-color: white;
  border-radius: 4rem;
  :hover {
    cursor: pointer;
    transform: scale(1.05);
    background: #fff;
  }
`
const Container = styled.div`
  margin-left: 3vw;
  margin-right: 3vw;
  margin-top: 5vh;
  display: flex;
  background-color: #0062d6;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem;
  border-radius: 1.5rem;
  font-size: 1.2rem;
  font-family: cursive !important;
`
const TextDiv = styled.div`
  flex: 2;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  color: white;
  padding-left: 60px;
`
const ButtonDiv = styled.div`
  position: relative;
  display: flex;
  padding: 0.5rem;
  align-items: flex-end;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
`

const StyledButton = createPolymorphicComponent<'button', ButtonProps>(
  _StyledButton,
)

function SeeYourAnalysis() {
  return (
    <Container>
      <TextDiv>
        We provide <span style={{ fontWeight: '600' }}>detailed analysis </span>
        of your <br />
        transactions and offer insights to help you <br /> make informed
        financial decisions.
      </TextDiv>
      <ButtonDiv>
        <StyledButton
          radius="3rem"
          variant="gradient"
          gradient={{ from: 'white', to: 'white' }}
        >
          <span
            style={{
              color: '#0062D6',
              fontWeight: 600,
              fontFamily: 'Montserrat',
              fontSize: '1.2rem',
            }}
          >
            See your analysis
          </span>
        </StyledButton>
      </ButtonDiv>
    </Container>
  )
}
function Demo() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <SeeYourAnalysis />
    </MantineProvider>
  )
}
export default Demo
