import { Image } from '@mantine/core'
import styled from '@emotion/styled'

const Row = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  padding: 20px;
`
const OfferCards = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  padding: 24px 48px;
  height: 180px;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 16px 20px rgba(0, 0, 0, 0.2);
  }
`

const CardText = styled('div')`
  font-family: Montserrat, sans-serif;
  flex: 1;
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 43px;
  display: flex;
  align-items: center;
  text-align: center;
`

const OfferCardsRow = () => {
  return (
    <Row >
      <OfferCards style={{ background: '#0062D6' }}>
        <CardText style={{ color: '#E7F4F9' }}>Gift Offers</CardText>
        <Image width={120} height={120} src="/giftbox.png" alt='giftbox'/>
      </OfferCards>

      <OfferCards style={{ background: '#E7F4F9' }}>
        <CardText style={{ color: '#0052B3' }}>Get Expert&apos;s Help</CardText>
        <Image width={120} height={120} src="/expert technical support.png" alt='support' />
      </OfferCards>

      <OfferCards style={{ background: '#0062D6' }}>
        <CardText style={{ color: '#E7F4F9' }}>Refer a friend</CardText>
        <Image width={100} height={100} src="/refer a friend.png" alt='refer-friend'/>
      </OfferCards>
    </Row>
  )
}

export default OfferCardsRow
