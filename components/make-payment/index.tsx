import styled from '@emotion/styled/types/base';
import { Card, Image, Text, Badge, Button, Group, Stack } from '@mantine/core';

const Payment = () => {
    return (
        <>
    <Card shadow="sm" padding="xs" radius="lg" withBorder bg={'#E0EEFF'}>
      <Group position="apart" mt="xs" mb="xs" mx={20}>
        <Text c={'#0062D6'} fz={38} fw={500} ml={40} style={{fontFamily: "'Montserrat', sans-serif"}}>Make Payment</Text>
          <Button radius="xl" size="md" fz={22} fw={400} variant="gradient" gradient={{from: '#0062D6', to: '#0062D6'}}>
            Click here to activate
          </Button>
      </Group>

      <Group style={{justifyContent: 'space-evenly', alignItems: 'flex-start'}} my={20}>
        <Stack>
            <Card radius={100} bg={'#0062D6'} h={120} w={120}>
                <Image src='icons/bank-building.png' height={80} width={80} mx={'auto'}/>
            </Card>
            <Text c={'#0062D6'} fz={"lg"} fw={500} w={120} style={{lineHeight: 1, textAlign: "center"}}>Bank Transfer</Text>
        </Stack>
        <Stack>
            <Card radius={100} bg={'#0062D6'} h={120} w={120}>
                <Image src='icons/upi.png' height={90} width={90} mx={'auto'} fit={'contain'}/>
            </Card>
            <Text c={'#0062D6'} fz={"lg"} fw={500} w={120} style={{lineHeight: 1, textAlign: "center"}}>UPI Payment</Text>
        </Stack>
        <Stack>
            <Card radius={100} bg={'#0062D6'} h={120} w={120}>
                <Image src='icons/payphone.png' height={80} width={80} mx={'auto'} fit={'contain'}/>
            </Card>
            <Text c={'#0062D6'} fz={"lg"} fw={500} w={120} style={{lineHeight: 1, textAlign: "center"}}>Pay Phone Number</Text>
        </Stack>
        <Stack>
            <Card radius={100} bg={'#0062D6'} h={120} w={120}>
                <Image src='icons/person.png' height={80} width={80} mx={'auto'} fit={'contain'}/>
            </Card>
            <Text c={'#0062D6'} fz={"lg"} fw={500} w={120} style={{lineHeight: 1, textAlign: "center"}}>Self Transfer</Text>
        </Stack>
        <Stack>
            <Card radius={100} bg={'#0062D6'} h={120} w={120}>
                <Image src='icons/investments.png' height={80} width={80} mx={'auto'} fit={'contain'} mt={5}/>
            </Card>
            <Text c={'#0062D6'} fz={"lg"} fw={500} w={120} style={{lineHeight: 1, textAlign: "center"}}>Make Investment</Text>
        </Stack>
        <Stack>
            <Card radius={100} bg={'#0062D6'} h={120} w={120}>
                <Image src='icons/insurance.png' height={80} width={80} mx={'auto'}/>
            </Card>
            <Text c={'#0062D6'} fz={"lg"} fw={500} w={120} style={{lineHeight: 1, textAlign: "center"}}>Get Insurance</Text>
        </Stack>
        <Stack>
            <Card radius={100} bg={'#0062D6'} h={120} w={120}>
                <Image src='icons/mobile-recharge.png' height={80} width={80} ml={1} fit={'contain'}/>
            </Card>
            <Text c={'#0062D6'} fz={"lg"} fw={500} w={120} style={{lineHeight: 1, textAlign: "center"}}>Mobile Recharge</Text>
        </Stack>
      </Group>

    </Card>
    </>
    )
};

export default Payment;