import styled from '@emotion/styled'
import {
  Button,
  ButtonProps,
  Card,
  createPolymorphicComponent,
  Group,
  Text,
} from '@mantine/core'
import Link from 'next/link'
import MakePaymentCard from './MakePaymentCards'

const _StyledButton = styled(Button)`
  border-radius: 30px;
  color: white;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  font-family: Montserrat, sans-serif;
  padding: 4px 20px;
  height: 42px;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`

const StyledButton = createPolymorphicComponent<'button', ButtonProps>(
  _StyledButton,
)

const Payment = () => {
  return (
    <div style={{ marginLeft: '3vw', marginRight: `3vw`, marginTop: '3vh' }}>
      <Card shadow="sm" padding="xs" radius="lg" withBorder bg={'#E0EEFF'}>
        <Group position="apart" mt="xs" mb="xs" mx={20}>
          <Text
            c={'#0062D6'}
            fz={30}
            fw={500}
            ml={36}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Make Payment
          </Text>
          <StyledButton
            variant="gradient"
            gradient={{ from: '#0062D6', to: '#0062D6' }}
          >
            Click here to activate
          </StyledButton>
        </Group>

        <Group
          style={{ justifyContent: 'space-evenly', alignItems: 'flex-start' }}
          my={12}
        >
          <Link href="/BankTransfer" style={{ textDecoration: 'none' }}>
            <MakePaymentCard
              imageAddress="icons/bank-building-white.png"
              cardText="Bank Transfer"
              alt="Bank Transfer"
            />
          </Link>
          <Link href="/UPI">
            <MakePaymentCard
              imageAddress="icons/upi.png"
              cardText="UPI Payment"
              alt="UPI Payment"
            />
          </Link>
          <MakePaymentCard
            imageAddress="icons/payphone.png"
            cardText="Pay Phone Number"
            alt="Pay Phone Number"
          />
          <MakePaymentCard
            imageAddress="icons/person.png"
            cardText="Self Transfer"
            alt="Self Transfer"
          />
          <MakePaymentCard
            imageAddress="icons/investments.png"
            cardText="Make Investment"
            alt="investments"
          />
          <MakePaymentCard
            imageAddress="icons/insurance.png"
            cardText="Get Insurance"
            alt="insurance"
          />
          <MakePaymentCard
            imageAddress="icons/mobile-recharge.png"
            cardText="Mobile Recharge"
            alt="recharge"
          />
        </Group>
      </Card>
    </div>
  )
}

export default Payment
