import styled from '@emotion/styled'
import { Card, Image, Text, Badge, Button, Group, Stack } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import Link from 'next/link'

const PaymentImage = styled(Card)`
  background-color: #0062d6;
  height: 120px;
  width: 120px;
  border-radius: 100px;
  transition-duration: 0.2s;
  box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.2);
`

const PaymentStack = styled(Stack)`
  cursor: pointer;
  padding: 15px;
  border-radius: 15px;
  height: 200px;
  &:hover {
    transform: scale(1.05);
    transition-duration: 0.3s;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
  }
`

const Payment = () => {
  return (
    <div style={{ marginLeft: '3vw', marginRight: `3vw`, marginTop: '4vh', boxShadow: '0px 12px 40px rgba(0, 0, 0, 0.2)', borderRadius: '1rem'}}>
      <Card shadow="sm" padding="xs" radius="lg" withBorder bg={'#E0EEFF'}>
        <Group position="apart" mt="xs" mb="xs" mx={20}>
          <Text
            c={'#0062D6'}
            fz={38}
            fw={500}
            ml={40}
            style={{ fontFamily: "'Montserrat', sans-serif", marginLeft: '0px' }}
          >
            Make Payment
          </Text>
          <Button
            radius="xl"
            size="md"
            fz={22}
            fw={400}
            variant="gradient"
            gradient={{ from: '#0062D6', to: '#0062D6' }}
          >
            Click here to activate
          </Button>
        </Group>

        <Group
          style={{ justifyContent: 'space-evenly', alignItems: 'flex-start', flexDirection: 'row', flexWrap: 'wrap', }}
          my={20}
        >
          <Link href="/BankTransfer" style={{ textDecoration: 'none', height: '150px'}}>
            <PaymentStack>
              <PaymentImage>
                <Image
                  src="icons/bank-building.png"
                  height={80}
                  width={80}
                  mx={'auto'}
                />
              </PaymentImage>
              <Text
                c={'#0062D6'}
                fz={'lg'}
                fw={500}
                w={120}
                style={{ lineHeight: 1, textAlign: 'center' }}
              >
                Bank Transfer
              </Text>
            </PaymentStack>
          </Link>
          <Link href="/UPI">
            <PaymentStack>
              <PaymentImage>
                <Image
                  src="icons/upi.png"
                  height={90}
                  width={90}
                  mx={'auto'}
                  fit={'contain'}
                />
              </PaymentImage>
              <Text
                c={'#0062D6'}
                fz={'lg'}
                fw={500}
                w={120}
                style={{ lineHeight: 1, textAlign: 'center' }}
              >
                UPI Payment
              </Text>
            </PaymentStack>
          </Link>
          <PaymentStack>
            <PaymentImage>
              <Image
                src="icons/payphone.png"
                height={80}
                width={80}
                mx={'auto'}
                fit={'contain'}
              />
            </PaymentImage>
            <Text
              c={'#0062D6'}
              fz={'lg'}
              fw={500}
              w={120}
              style={{ lineHeight: 1, textAlign: 'center' }}
            >
              Pay Phone Number
            </Text>
          </PaymentStack>

          <PaymentStack>
            <PaymentImage>
              <Image
                src="icons/person.png"
                height={80}
                width={80}
                mx={'auto'}
                fit={'contain'}
              />
            </PaymentImage>
            <Text
              c={'#0062D6'}
              fz={'lg'}
              fw={500}
              w={120}
              style={{ lineHeight: 1, textAlign: 'center' }}
            >
              Self Transfer
            </Text>
          </PaymentStack>

          <PaymentStack>
            <PaymentImage>
              <Image
                src="icons/investments.png"
                height={80}
                width={80}
                mx={'auto'}
                fit={'contain'}
                mt={5}
              />
            </PaymentImage>
            <Text
              c={'#0062D6'}
              fz={'lg'}
              fw={500}
              w={120}
              style={{ lineHeight: 1, textAlign: 'center' }}
            >
              Make Investment
            </Text>
          </PaymentStack>

          <PaymentStack>
            <PaymentImage>
              <Image
                src="icons/insurance.png"
                height={80}
                width={80}
                mx={'auto'}
              />
            </PaymentImage>
            <Text
              c={'#0062D6'}
              fz={'lg'}
              fw={500}
              w={120}
              style={{ lineHeight: 1, textAlign: 'center' }}
            >
              Get Insurance
            </Text>
          </PaymentStack>

          <PaymentStack>
            <PaymentImage>
              <Image
                src="icons/mobile-recharge.png"
                height={80}
                width={80}
                ml={1}
                fit={'contain'}
              />
            </PaymentImage>
            <Text
              c={'#0062D6'}
              fz={'lg'}
              fw={500}
              w={120}
              style={{ lineHeight: 1, textAlign: 'center' }}
            >
              Mobile Recharge
            </Text>
          </PaymentStack>
        </Group>
      </Card>
    </div>
  )
}

export default Payment
