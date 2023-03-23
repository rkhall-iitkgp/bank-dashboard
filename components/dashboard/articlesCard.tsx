import { Card, Text, List } from '@mantine/core'

const ArticlesCard = (props: { articles: string[] }) => {
  return (
    <Card
      radius={'lg'}
      style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' }}
    >
      <Card.Section>
        <Text mx={20} ff={'Montserrat'} c="#0062D6" fw={700} mt={20} fz={22}>
          Articles
        </Text>
      </Card.Section>
      <List mx={10}>
        {props.articles.map((v) => (
          <List.Item
            key={v}
            c={'#006BD2'}
            my={12}
            fz={13}
            fw={400}
            ff="Montserrat"
            style={{ textDecorationLine: 'underline' }}
          >
            {v}
          </List.Item>
        ))}
      </List>
    </Card>
  )
}

export default ArticlesCard
