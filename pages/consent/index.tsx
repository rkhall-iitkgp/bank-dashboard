import { createStyles } from '@mantine/core'
import React from 'react'
import ConsentFormComponent from '../../components/profile/ConsentFormComponent'
<<<<<<< HEAD
const useStyles = createStyles(() => ({
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
        alignItems: `center`,
        backgroundColor: `#EEEEEE`
    },
    consentwrap:{
        width:`80%`,
        maxWidth:`700px`
    }
}))
const index = () => {
    const { classes } = useStyles()
    return (
        <div className={classes.wraper}>
            <div className={classes.consentwrap}>
            <ConsentFormComponent />
            </div>
        </div>
    )
=======
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
>>>>>>> 63747de6d7d1add2e83b3237bc2f8eda294274fa
}

export default Consent
