import styled from '@emotion/styled'
import { Group, Stack, Image, Text } from '@mantine/core'

const PaymentImage = styled(Group)`
  background-color: #0062d6;
  height: 110px;
  width: 110px;
  border-radius: 1000px;
  transition-duration: 0.2s;
`
const PaymentStack = styled(Stack)`
  cursor: pointer;
  padding: 15px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.05);
    transition-duration: 0.3s;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
  }
`
interface Props {
  imageAddress?: string
  cardText?: string
  alt?: string
}

const MakePaymentCard = ({ imageAddress, cardText, alt }: Props) => {
  return (
    <PaymentStack>
      <PaymentImage>
        <Image
          src={imageAddress}
          height={60}
          width={60}
          mx={'auto'}
          alt={alt ?? ''}
          fit="contain"
        />
      </PaymentImage>
      <Text
        c={'#0062D6'}
        fz={'lg'}
        fw={500}
        w={120}
        style={{
          lineHeight: 1,
          textAlign: 'center',
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        {cardText}
      </Text>
    </PaymentStack>
  )
}

export default MakePaymentCard
