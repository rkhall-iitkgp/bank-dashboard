import styled from '@emotion/styled'
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from 'react'
import Link from 'next/link'
import { Button } from '@mantine/core'
import { useRouter } from 'next/router'
const StyledText = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  color: #0052b3;
  font-family: 'Montserrat';
  font-style: normal;
`
const StyledHead = styled.div`
  padding-top: 18px;
  background: #ddedff;
  display: flex;
  justify-content: flex-start;
  align-items: end;
  padding-bottom: 5px;
  border-radius: 30px 30px 0 0;
  padding: 1rem;
`

// function getCurrentURL () {
//   return window.location.href;
// }

// const href = getCurrentURL()

function Heading(props: {
  title:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined
}) {
  const router = useRouter()
  let show = (!router.pathname.includes('payment-success'))
  let justify = show?'flex-start':'center'

  return (
    <StyledHead style={{justifyContent:justify}}>
        <div onClick={() => {
          router.replace('/home')
        }}>
        {show && <Button style={{backgroundColor: "#DD0000", marginRight: "9rem", alignItems: "center"}} radius="xl" size="xs">
          Cancel
        </Button>
        }
        </div>
      <StyledText>{props.title}</StyledText>
    </StyledHead>
  )
}

export default Heading
