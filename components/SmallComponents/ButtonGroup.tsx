import React from 'react'
import Link from 'next/link'
import { createStyles, TextInput, Button, Group, rem } from '@mantine/core'
import { UrlObject } from 'url'
const useStyles = createStyles((theme) => ({
  button1: {
    background: '#0062D6',
    borderRadius: '30px',
    width: '150px',
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: '20px',
    padding: '5px 15px',
    textAlign: 'center',
    fontWeight: 400,
    '&:hover': {
      background: '#558ac9',
    },
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: `2.5rem`,
  },
}))

interface Props{
  href1: string | UrlObject
  href2: string | UrlObject
  query1?: string
  query2?: string
}
export default function ButtonGroup({href1, href2, query1, query2}:Props) {
  const { classes } = useStyles()
  return (
    <div className={classes.buttonContainer}>
      <Link href={{ pathname: `${href1}`, query: {iSame : `${query1}`}}}>
        <div className={classes.button1}>Back</div>
      </Link>
      {/* <div className={classes.button1}>Back</div> */}
      <Link href={{ pathname: `${href2}`, query: {iSame : `${query2}`}}}>
        <div className={classes.button1}>Continue</div>
      </Link>
    </div>
  )
}
