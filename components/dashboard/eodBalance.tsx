import { Card, Text, Group, Stack, HoverCard } from '@mantine/core'

const EodBalance = (props: { balance: string; comparision: number }) => {
  return (
    <Group
      px={10}
      bg="#FFF"
      py={5}
      style={{
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '2rem',
        justifyContent: 'space-between',
      }}
    >
      <Stack mx={20} my={20}>
        <Text
          c={'#7E7E7E'}
          fw={500}
          ff="Montserrat"
          style={{ lineHeight: 0.5 }}
        >
          Average EOD Balance
        </Text>
        <Text fw={700} fz={28} ff="Montserrat" style={{ lineHeight: 0.8 }}>
          {props.balance}
        </Text>
      </Stack>
      <Stack w={80} ml={20} mr={25}>
        <Group bg={'#E8F6F0'} w={50} style={{ borderRadius: '0.4rem' }}>
          <Text mx={15} c={'#2CC578'} ff="Montserrat" fz={13} fw={600}>
            {props.comparision}%
          </Text>
        </Group>
        <Text
          c={'#7E7E7E'}
          fw={500}
          fz={12}
          ff="Montserrat"
          style={{ lineHeight: 1.3 }}
        >
          Compared to last 1 week
        </Text>
      </Stack>
    </Group>
  )
}

export default EodBalance
