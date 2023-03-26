import { Card, Text, Group, Stack, HoverCard } from '@mantine/core'

const EodBalance = (props: { balance: string; comparision: number }) => {
  return (
    <Group
      py={12}
      px={12}
      bg="#FFF"
      style={{
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '2rem',
        justifyContent: 'space-between',
      }}
    >
      <Stack
        ml={20}
        style={{
          flex: 2,
        }}
      >
        <Text
          c={'#7E7E7E'}
          fw={500}
          ff="Montserrat"
          style={{ lineHeight: 0.5 }}
        >
          Average EOD Balance
        </Text>
        <Text fw={700} fz="1.5rem" ff="Montserrat" style={{ lineHeight: 0.8 }}>
          {props.balance}
        </Text>
      </Stack>
      <Stack
        mr={20}
        align="center"
        style={{
          flex: 1,
        }}
      >
        <Group
          bg={'#E8F6F0'}
          w={60}
          style={{
            borderRadius: '0.4rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            mx={15}
            c={'#2CC578'}
            ff="Montserrat"
            fz={14}
            fw={600}
            style={{ display: 'flex' }}
          >
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
