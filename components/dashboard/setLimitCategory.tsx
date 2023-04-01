import { Card, Stack, Flex, Text, TextInput } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { useState, useEffect } from 'react'
import useStorage from '../../hooks/useStorage'
import datams from '../datams'
import useAccountStore from '../Store/Account'

const SetCategoryLimit = (props: {
  category: string
}) => {
  const { category } = props
  const [showLimit, setShowLimit] = useState(false)
  const [limit, setLimit] = useState(0);
  const { getItem } = useStorage()

  const handleFilterChange = (e) => {
    const newLimit = e.target.value
    setLimit(newLimit)
  }

  useEffect(() => {
    datams.post('/user/getlimit/', {
      user_id: getItem('user_id'),
      limitcategory: category
    },
      { headers: { "Authorization": `Bearer ${getItem("access_token")}` } }).then(res => {
        console.log(res.data)
        setLimit(parseInt(res.data.message[0][category]))
      }).catch(err => {
        console.log(err)
      })
  }, [category, useAccountStore().account_no])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setShowLimit(false)
      // setLimit(e.target.value)
      console.log('setting limit')
      datams.post('/user/setlimit/', {
        user_id: getItem('user_id'),
        limit: limit,
        limitcategory: category
      }, { headers: { "Authorization": `Bearer ${getItem("access_token")}` } }).then(res => {
        showNotification({ message: "Limit Set Successfull" })
      }).catch(v => {
        showNotification({ message: "Limit Set Failed" })
      })
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
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
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
          value={limit}
        />
      </div>
    </Card>
  )
}

export default SetCategoryLimit;