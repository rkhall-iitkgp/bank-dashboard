import { Group, Stack, Text } from '@mantine/core'

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
        width: '220px',
        height: '155px',
        flex: 1.25,
        paddingLeft: '0',
      }}
    >
      <Stack
        ml={20}
        style={{
          flex: 2,
        }}
        justify="flex-start"
      >
        <Text
          c={'#7E7E7E'}
          fw={500}
          ff="Montserrat"
          style={{ lineHeight: 0.8, marginTop: 0 }}
          fz="0.9rem"
          mt={20}
        >
          Average EOD Balance
        </Text>
        <Text
          fw={700}
          fz="1.5rem"
          ff="Montserrat"
          mt={5}
          style={{ lineHeight: 0.5 }}
        >
          {props.balance}
        </Text>
      </Stack>
      <Stack
        ml={20}
        align="left"
        style={{
          flex: 1,
        }}
      >
        <Group
          bg={'#E8F6F0'}
          w={60}
          h={20}
          ml={0}
          style={{
            borderRadius: '0.4rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            // mx={0}
            c={'#2CC578'}
            ff="Montserrat"
            fz={12}
            fw={600}
            style={{ display: 'flex', alignItems: 'flex-start' }}
          >
            {props.comparision}%
          </Text>
        </Group>
        <Text
          c={'#7E7E7E'}
          fw={500}
          fz={12}
          ff="Montserrat"
          style={{ lineHeight: 0.8 }}
        >
          Compared to last 1 week
        </Text>
      </Stack>
    </Group>
  )
}

export default EodBalance
