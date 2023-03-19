import styled from '@emotion/styled'
const StyledText = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  color: #0052b3;
  font-family: 'Montserrat';
  font-style: normal;
`
const StyledHead = styled.div`
  height: 10vh;
  width: 40vw;
  background: #ddedff;
  display: flex;
  justify-content: center;
  align-items: end;
  padding-bottom: 5px;
  border-radius: 30px 30px 0 0;
`

function Heading() {
  return (
    <StyledHead>
      <StyledText>Bank Transfer</StyledText>
    </StyledHead>
  )
}

export default Heading
