import styled from '@emotion/styled'
import { Group, Image, Text } from '@mantine/core'
import Navbar from '../home/navbar/navbar'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const Dashboard = () => {
  const AccountComponent = (props: { label: string; ref: any }) => {
    return (
      <Group
        ref={props.ref}
        style={{
          borderRadius: '30px',
          cursor: 'pointer',
          padding: '0.8rem 1.2rem',
        }}
      >
        <Image
          src={'icons/sbilogo.png'}
          height={'28px'}
          width={'28px'}
          alt="sbi-logo"
        />
        <Text c={'#7E7E7E'}>{props.label}</Text>
      </Group>
    )
  }

  const AccountFakeData = ['**** 1234', '**** 1324', '**** 4231', '**** 3214']

  const Container = styled.div`
    display: flex;
    width: '100%';
    height: 100vh;
    margin-top: 16px;
  `
  return (
    <div style={{ backgroundColor: '#F4F4F4' }}>
      <Navbar />
      <Container>
        <LeftPane accountsList={AccountFakeData} />
        <RightPane />
      </Container>
    </div>
  )
}

export default Dashboard
