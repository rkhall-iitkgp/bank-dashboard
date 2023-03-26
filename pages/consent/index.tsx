import { createStyles } from '@mantine/core'
import React from 'react'
import ConsentFormComponent from '../../components/profile/ConsentFormComponent'
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
}

export default index
