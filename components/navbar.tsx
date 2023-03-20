import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core'
import styled from '@emotion/styled'

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: #fff;
  height: 4rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
`
const BankName = styled.h1`
  vertical-align: middle;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-size: 32px;
  color: #0052b3;
  float: left;
  margin: auto 0;
`
const StyledButtonBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50vw;
  min-width: 600px;
  padding: 0 1vw 0 1vw;
`

const _StyledButton = styled(Button)`
  border-width: 0rem;
  color: #0052b3;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  background-color: white;
  padding: 0px;
  &:hover {
    cursor: pointer;
    background: white;
    transform: scale(1.05);
    transition-duration: 0.25s;
  }
  &:focus {
    background-color: white;
  }
`

const StyledButton = createPolymorphicComponent<'button', ButtonProps>(
  _StyledButton,
)
const StyledUserImage = styled.img`
  width: 40px;
  height: 40px;
  top: 20px;
  background: url(dp.png);
  border-radius: 100%;
  margin-left: 2%;
`
const NavbarIcons = styled.img`
  width: 36px;
  height: 36px;
  padding: 6px 8px 10px 8px;
`
function Navbar() {
  return (
    <StyledNavbar>
      <BankName>shiftbank</BankName>
      <StyledButtonBar>
        <StyledButton
          variant="gradient"
          gradient={{ from: 'white', to: 'white' }}
        >
          <NavbarIcons src="/images/dashboard.png"></NavbarIcons>Dashboard
        </StyledButton>
        <StyledButton
          variant="gradient"
          gradient={{ from: 'white', to: 'white' }}
        >
          <NavbarIcons src="/images/aboutus.png"></NavbarIcons>About Us
        </StyledButton>
        <StyledButton
          variant="gradient"
          gradient={{ from: 'white', to: 'white' }}
        >
          <NavbarIcons src="/images/support.png"></NavbarIcons>Support
        </StyledButton>
        <StyledButton
          variant="gradient"
          gradient={{ from: 'white', to: 'white' }}
        >
          <NavbarIcons src="/images/FAQs.png"></NavbarIcons>FAQs
        </StyledButton>
        <StyledUserImage src="/images/dp.png"></StyledUserImage>
      </StyledButtonBar>
    </StyledNavbar>
  )
}
export default Navbar
