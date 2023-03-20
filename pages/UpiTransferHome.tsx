import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  MantineProvider,
  Container,
  Title,
} from '@mantine/core'
// import MantineProvider  from '@mantine/core';
// import { ButtonProps, createPolymorphicComponent } from '@mantine/core'
import styled from '@emotion/styled'
// import { Text } from '@mantine/core';

const StyledContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  background: #eeeeee;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerDiv = styled.div`
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 500px;
  background: #fff;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);

  .upi_title {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ddedff;
    height: 60px;
    color: #0052b3;
    h2 {
      font-size: 1rem !important;
      font-weight: 800;
    }
  }
  .button_container {
    display: flex;
    justify-content: space-between;
    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }
    button {
      padding: 4px 20px;
      background: #0062d6;
      color: #fff;
      border-radius: 100px;
      transition: 0.2s ease-in-out;
      &:hover {
        background: #2487ff;
      }
    }
  }
`

const LogoDiv = styled.div`
  padding: 2rem;
  h4 {
    text-align: center;
    font-size: 1.4rem;
    color: #0052b3;
  }
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }
  p {
    color: #0052b3;
    text-align: center;
    font-size: 14px;
  }
  Image {
    width: 80px;
    aspect-ratio: 1;
    object-fit: cover;
    display: flex;
    justify-content: center;
  }
`

const url =
  'https://thedigitalfifth.com/wp-content/uploads/2019/10/Banner15-1170x480.png'

function SeeYourAnalysis() {
  return (
    <StyledContainer className="UpiTransferHome">
      <InnerDiv style={{ borderRadius: '50px' }}>
        <div className="upi_title">
          <h2>UPI transfer</h2>
        </div>
        <LogoDiv className="logo_div">
          <h4>Make Payment</h4>
          <LogoContainer>
            <div>
              <Image src={url} alt="" />
              <p>UPI Payment</p>
            </div>
            <div>
              <Image src={url} alt="" />
              <p>Bank Transfer</p>
            </div>
            <div>
              <Image src={url} alt="" />
              <p>Pay Phone Number</p>
            </div>
          </LogoContainer>
          <div className="button_container">
            <button>Back</button>
            <button>Continue</button>
          </div>
        </LogoDiv>
      </InnerDiv>
    </StyledContainer>
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
