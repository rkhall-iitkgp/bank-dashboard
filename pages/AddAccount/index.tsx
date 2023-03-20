import React, {useState} from 'react'
import { ContactUs } from '../../components/AddAcoount'

const Index = () => {
  const [addAccount, setAddAccount] = useState<boolean>(false);
  return (
    <ContactUs setAddAccount={setAddAccount} />
  )
}

export default Index