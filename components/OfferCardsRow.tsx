import { Image } from '@mantine/core'
import styled from '@emotion/styled'

const Row = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 4vh;
  margin-bottom: 3vh;
  gap: 30px;
`
const OfferCards = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  padding: 20px 40px;
  height: 120px;
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
  font-size: 24px;
  line-height: 43px;
  display: flex;
  align-items: center;
  text-align: center;
`

const OfferCardsRow = () => {
  return (
    <Row>
      <OfferCards style={{ background: '#0062D6', marginLeft: '3vw' }}>
        <CardText style={{ color: '#E7F4F9' }}>Gift Offers</CardText>
        <Image width={80} height={80} src="/giftbox.png" />
      </OfferCards>

      <OfferCards style={{ background: '#E7F4F9' }}>
        <CardText style={{ color: '#0052B3' }}>Get Expert's Help</CardText>
        <Image width={80} height={80} src="/expert technical support.png" />
      </OfferCards>

      <OfferCards style={{ background: '#0062D6', marginRight: '3vw' }}>
        <CardText style={{ color: '#E7F4F9' }}>Refer a friend</CardText>
        <Image width={80} height={80} src="/refer a friend.png" />
      </OfferCards>
    </Row>
  )
}

export default OfferCardsRow
