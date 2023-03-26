import { createStyles } from '@mantine/core'
import useStorage from '../../hooks/useStorage'
import { AccountType } from './constants'
import LeftPane from './LeftPane'
import RightPane from './RightPane'
import { Authentication1 } from '../kyc/Authentication1'
const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: `#EEEEEE`,
    boxSizing: 'border-box',
    minHeight: `calc(100vh - 4rem)`,
    padding: `20px`,
    // padding: `calc(${theme.spacing.xl} * 2.5)`,
    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
    justifyContent: `space-evenly`,
    display: `flex`,
    flex: `40% 60%`,
    background: `white`,
  },
  container1: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `space-around`,
    height: `100%`
  },
  container2: {
    height: `100%`,
    display: `flex`,
    flex: `50% 50%`,
    flexDirection: `column`
  },
}))

const Profile = () => {
  const { classes } = useStyles()
  const { getItem } = useStorage()
  const accountList = getItem('accounts', 'session')
  const accountsp: AccountType[] = accountList
    ? JSON.parse(accountList)
    : ([] as AccountType[])

  // const accounts: string[] = accountsp.map(account => account.account_no);
  // const accounts: string[] = accountsp?.map(
  //   (account) => '****' + account.account_no.substr(-4),
  // )
  const accounts = [8989, 4235, 7382]

  return (
    <div className={classes.wrapper}>
      <div className={classes.container1}>
        <LeftPane accounts={accounts} />
      </div> 
      <div className={classes.container2}>
        <div >
          <Authentication1/>
        </div>
        {accounts.length ? (
          <RightPane accounts={accounts} />
        ) : (
          <>
            No Accounts Connected Yet. Add an account to access all the cool
            features!!
          </>
        )}
      </div>
    </div>
  )
}

export default Profile
