import { createStyles } from '@mantine/core'
import React from 'react'
import ConsentFormComponent from '../../components/profile/ConsentFormComponent'
const useStyles = createStyles((theme) => ({
  wraper: {
    width: `100%`,
    minHeight: `100vh`,
    height: `100%`,
    boxSizing: 'border-box',
    // padding: `calc(${theme.spacing.xl} * 2.5)`,
    // [theme.fn.smallerThan('sm')]: {
    //   padding: `calc(${theme.spacing.xl} * 1.5)`,
    // },
    display: `flex`,
    justifyContent: `center`,
    alignItems: `centuer`,
    backgroundColor: `#EEEEEE`,
  },
}))
const Consent = () => {
  const { classes } = useStyles()
  return (
    <div className={classes.wraper}>
      <ConsentFormComponent />
    </div>
  )
}

export default Consent
