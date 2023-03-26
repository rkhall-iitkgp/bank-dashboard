import {Card, List, Text} from '@mantine/core'

const InsightCard = (props: { insights: string[] }) => {
  const { insights } = props
  return (
    <Card>
      <Text ff={'Montserrat'} c="#0062D6" fw={700} fz={22}>
        Insights
      </Text>
      <List ml={30}>
        {insights.map((v) => (
          <List.Item
            key={v}
            ff={'Montserrat'}
            c="#4D4B4B"
            w={400}
            my={10}
            fw={700}
          >
            {v}
          </List.Item>
        ))}
      </List>
    </Card>
  )
}

export default InsightCard