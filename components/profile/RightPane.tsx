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
  bankAccountList: any[]
}
const RightPane = ({ bankAccountList }: Props) => {
  const { classes } = useStyles()
  const [activeTab, setActiveTab] = useState<string | null>(
    bankAccountList[0].account_no?.toString(),
  )
  const [accountselected, setAccountselected] = useState<any>(
    String(bankAccountList[0].account_no) ?? '',
  )

  return (
    <>
      <Tabs
        value={activeTab}
        onTabChange={(e) => {
          setActiveTab(e)
        }}
        unstyled={true}
        className={classes.container2}
      >
        <Tabs.List className={classes.tablist}>
          {bankAccountList.map((acc, index) => {
            return (
              <span key={acc.account_no}>
                <Tabs.Tab
                  key={acc.account_no}
                  value={`${acc.account_no}`}
                  id={`${acc.account_no}`}
                  onClick={() => {
                    setAccountselected(acc.account_no)
                  }}
                  className={
                    activeTab === acc.account_no?.toString()
                      ? classes.active
                      : classes.tabs
                  }
                >
                  <div className={classes.tablabel}>
                    <Image
                      alt=""
                      width={35}
                      height={35}
                      src="/icons/sbi.png"
                    ></Image>
                    <div className={classes.content}>
                      {'**** ' + acc.account_no}
                    </div>
                  </div>
                </Tabs.Tab>
              </span>
            )
          })}
        </Tabs.List>
        {bankAccountList.map((acc) => {
          return (
            <Tabs.Panel
              className={classes.tabcontainer}
              value={`${acc.account_no}`}
              key={acc.account_no}
            >
              <ConsentFormComponent
                key={acc.account_no}
                id={acc.account_no}
                accountselected={accountselected}
              />
            </Tabs.Panel>
          )
        })}
        {/* <div className={classes.tabcontainer}>
          <Form id={1} accountselected={accountselected} />
        </div> */}
      </Tabs>
    </>
  )
}

export default React.memo(RightPane)
