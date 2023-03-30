import {Card, Stack, Flex, Text, TextInput} from '@mantine/core'
import {useState} from 'react'

const CashCard = (props: {
  category: string[]
  type: string
  limit: number
  setLimit: Function
}) => {
  const { category, type, limit, setLimit } = props
  const [showLimit, setShowLimit] = useState(false)

  const bgc = type === 'withdrawl' ? '#FFE5E4' : '#E8F6F0'
  const ffc = type === 'withdrawl' ? '#D73331' : '#2CC578'

    const handleFilterChange = (e) => {
        const newLimit = e.target.value
        setLimit(newLimit)
      }
    
      const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          setShowLimit(false)
          setLimit(e.target.value)
        }
      }

  return (
    <Card
      radius={'lg'}
      style={{
        fontSize: '0.8rem',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        flex: 1,
      }}
    >
      <div style ={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
        <Text
          c={'#4D4B4B'}
          ff="Montserrat"
          fw={700}
          fz={12}
          style={{ lineHeight: 0, cursor: 'pointer' }}
          onClick={() => setShowLimit(!showLimit)}
        >
          Set Limit on {category}
        </Text>
        <TextInput 
          radius={'lg'} 
          w={100}
          style={{ 
            visibility: showLimit ? 'visible' : 'hidden',
            border: 'none',
            // boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
          }} 
          onChange={handleFilterChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </Card>
  )
}

export default CashCard;