import { Group, Stack, Text } from '@mantine/core'

const EodBalance = (props: { balance: string; comparision: number }) => {
  return (
    <Stack
      // py={12}
      // px={12}
      bg="#FFF"
      style={{
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '2rem',
        justifyContent: 'space-between',
        width: '300px',
        height: '155px',
        flex: 1.5,
        padding: '10px 10px 20px 30px',
      }}
    >
      <Text
        c={'#7E7E7E'}
        fw={500}
        ff="Montserrat"
        style={{ lineHeight: 0.8, marginTop: '10px' }}
        fz="0.9rem"
        mt={10}
      >
        Average EOD Balance
      </Text>
      <Text
        fw={700}
        fz="1.54rem"
        ff="Montserrat"
        mt={5}
        style={{ lineHeight: 0.5 }}
      >
        &#8377;{props.balance}
      </Text>

      <Group
        bg={props.comparision >= 0 ? '#EBF7E9' : '#FFE5E4'}
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
          style={{ display: 'flex', alignItems: 'flex-start', backgroundColor: props.comparision >= 0 ? '#EBF7E9' : '#FFE5E4', color: props.comparision >= 0 ? '#2CC578' : '#FF4D4D' }}
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
  )
}

export default EodBalance
