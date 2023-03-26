import { Tabs, createStyles, Image } from '@mantine/core'
import React, { useState } from 'react'
import ConsentFormComponent from './ConsentFormComponent'
const useStyles = createStyles((theme) => ({
  container2: {
    height: `100%`,
  },
  content: {
    fontWeight: 500,
    fontSize: `1.1rem`,
    textAlign: `center`,
    fontFamily: `Montserrat`,
    paddingTop: '2px',
  },
  Logout: {
    width: `170px`,
    height: `50px`,
    background: `#DD0000`,
    borderRadius: `50px`,
    margin: `10px`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    color: `white`,
    fontWeight: 600,
    fontSize: `1.2rem`,
    cursor: `pointer`,
  },
  tabs: {
    background: '#F3F9FF',
    border: `none`,
    borderTopRightRadius: '20px',
    borderTopLeftRadius: `20px`,
    cursor: `pointer`,
  },
  active: {
    border: `none`,
    borderTopRightRadius: '20px',
    borderTopLeftRadius: `20px`,
    background: `#DDEDFF`,
    cursor: `pointer`,
  },
  tablabel: {
    width: `150px`,
    height: `50px`,
    borderRadius: `50px`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `space-around`,
  },
  tabcontainer: {
    height: `90%`,
    width: `90%`,
    margin: `auto`,
    background: `white`,
    boxShadow: ` 0px 4px 40px rgba(0, 0, 0, 0.2)`,
    borderRadius: ' 0px 30px 30px 30px',
  },
  tablist: {
    width: `90%`,
    margin: `auto`,
  },
}))

interface Props {
  accounts: any[]
}
const RightPane = ({ accounts }: Props) => {
  const { classes } = useStyles()
  const [activeTab, setActiveTab] = useState<string | null>(
    accounts[0]?.toString(),
  )
  const [accountselected, setAccountselected] = useState<any>(
    String(accounts[0]) ?? '',
  )

  return (
    <>
    <div style={{width: '100%', height: '100%'}}>
      <ConsentFormComponent/>
    </div>
    </>
  )
}

export default React.memo(RightPane)
