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
import api from '../../api'
import useStorage from '../../../hooks/useStorage'
import { useState } from 'react'
import { useEffect } from 'react'
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
// import { AddAccountFormPopup } from '../add-bank-account/AddAccountFormPopup'
const StyledButton = createPolymorphicComponent<'button', ButtonProps>(
  _StyledButton,
)

interface Props {
  SetIsKycPermissionPopUpOpen: Function
  isKycPermissionPopUpOpen: any
  setIsAddAccountPopupOpen: Function
}
export default function Payment({
  SetIsKycPermissionPopUpOpen,
  isKycPermissionPopUpOpen,
  setIsAddAccountPopupOpen,
}: Props) {
  const { getItem } = useStorage()
  const [result, setResult] = useState(1)
  const GetKycStatus = () => {
    const accessToken = getItem('access_token', 'session')
    console.log(accessToken)
    const user_id = getItem('user_id')
    const accLength = JSON.stringify(getItem('accounts'))?.length
    const response = api
      .get(`/user/getkyc/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        response.data
      })
      .catch((err) => {
        err.response.data.message == 'KYC not done' && setResult(0)
        // console.log(err.response.data.message)
      })
  }
  const [accLength, setAccLength] = useState('[]')
  useEffect(() => {
    GetKycStatus()
    // setResult(1)
    setAccLength(getItem('accounts'))
  }, [])
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
        </Group>
        <Group
          style={{ justifyContent: 'space-evenly', alignItems: 'flex-start' }}
          my={12}
        >
          {result === 0 && (
            <div
              onClick={() => {
                SetIsKycPermissionPopUpOpen(true)
              }}
            >
              <MakePaymentCard
                imageAddress="icons/bank-building-white.png"
                cardText="Bank Transfer"
                alt="Bank Transfer"
              />
            </div>
          )}

          {result === 1 && accLength !== '[]' && (
            <Link href="/bank-transfer" style={{ textDecoration: 'none' }}>
              <MakePaymentCard
                imageAddress="icons/bank-building-white.png"
                cardText="Bank Transfer"
                alt="Bank Transfer"
              />
            </Link>
          )}
          {result === 1 && accLength === '[]' && (
            <div
              onClick={() => {
                setIsAddAccountPopupOpen(true)
              }}
            >
              <MakePaymentCard
                imageAddress="icons/bank-building-white.png"
                cardText="Bank Transfer"
                alt="Bank Transfer"
              />
            </div>
          )}

          {result === 0 && (
            <div
              onClick={() => {
                SetIsKycPermissionPopUpOpen(true)
              }}
            >
              <MakePaymentCard
                imageAddress="icons/upi.png"
                cardText="UPI Payment"
                alt="UPI Payment"
              />
            </div>
          )}

          {result === 1 && accLength !== '[]' && (
            <Link href="/UPI" style={{ textDecoration: 'none' }}>
              <MakePaymentCard
                imageAddress="icons/upi.png"
                cardText="UPI Payment"
                alt="UPI Payment"
              />
            </Link>
          )}
          {result === 1 && accLength === '[]' && (
            <div
              onClick={() => {
                setIsAddAccountPopupOpen(true)
              }}
            >
              <MakePaymentCard
                imageAddress="icons/upi.png"
                cardText="UPI Payment"
                alt="UPI Payment"
              />
            </div>
          )}

          {/* {(result===0) ? (
            <div
              onClick={() => {
                SetIsKycPermissionPopUpOpen(true)
              }}
            >
              <MakePaymentCard
                imageAddress="icons/upi.png"
                cardText="UPI Payment"
                alt="UPI Payment"
              />
            </div>
          ) : (
            <Link href="/UPI">
              <MakePaymentCard
                imageAddress="icons/upi.png"
                cardText="UPI Payment"
                alt="UPI Payment"
              />
            </Link>
          )} */}
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
