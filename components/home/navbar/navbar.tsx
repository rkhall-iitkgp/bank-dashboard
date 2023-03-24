import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { ProfileCard } from './ProfileCard'
import { useState } from 'react'
import { Popover, Text } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: #fff;
  height: 4rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
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

interface Props {
    bankAccountList: any[]
}

function Demo() {

    const [bankAccountList, setBankAccountList] = React.useState<any[]>([])
    React.useEffect(() => {
        const accounts = sessionStorage.getItem('accounts')        
        if (accounts) {
            setBankAccountList(JSON.parse(accounts))
        }
    }, [])
  return (
    <Popover width="auto" radius={25} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <StyledButton
          variant="gradient"
          gradient={{ from: 'white', to: 'white' }}
        >
          {' '}
          <StyledUserImage src="/images/dp.png"></StyledUserImage>
        </StyledButton>
      </Popover.Target>
      <Popover.Dropdown>
        <ProfileCard bankAccountList={bankAccountList}/>
      </Popover.Dropdown>
    </Popover>
  )
}
const StyledUserImage = styled.img`
  width: 40px;
  height: 40px;
  top: 20px;
  background: url('/images/dp.png');
  border-radius: 100%;
  margin-left: 2%;
`
const NavbarIcons = styled.img`
  width: 36px;
  height: 36px;
  padding: 6px 8px 10px 8px;
`


function Navbar() {
  const router = useRouter()

  const [show, setShow] = useState(false)
  function setting() {
    setShow(!show)
  }

  const [bankAccountList, setBankAccountList] = React.useState<any[]>([])
  React.useEffect(() => {
      const accounts = sessionStorage.getItem('accounts')        
      if (accounts) {
          setBankAccountList(JSON.parse(accounts))
      }
  }, [])
  return (
    <>
      <StyledNavbar>
        <BankName>
          <Link href="/home">shiftbank</Link>
        </BankName>
        <StyledButtonBar>
          <StyledButton
            variant="gradient"
            gradient={{ from: 'white', to: 'white' }}
            onClick={() => router.replace('/dashboard')}
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
          {/* <StyledUserImage src="/images/dp.png"></StyledUserImage> */}
          <Demo bankAccountList={bankAccountList}/>
        </StyledButtonBar>
      </StyledNavbar>
      {/* <ProfileCard/> */}
    </>
  )
}
export default Navbar
