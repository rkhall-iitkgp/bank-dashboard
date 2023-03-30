import React, {useState} from 'react'
import Link from 'next/link'
import {createStyles} from '@mantine/core'
import {UrlObject} from 'url'

const useStyles = createStyles((theme) => ({
  button1: {
    background: '#0062D6',
    borderRadius: '30px',
    width: '150px',
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: '1.25rem',
    padding: '5px 15px',
    textAlign: 'center',
    fontWeight: 400,
    // cursor: 'no-drop',
    '&:hover': {
      background: '#558ac9',
      cursor: `pointer`,
    },
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    // pointerEvents: 'none',

    marginTop: `3rem`,
  },
}))

export default function ButtonGroup(props: {
  href1: string | UrlObject
  href2: string | UrlObject
}) {
  const { classes } = useStyles()
  const [style1, setstyle1] = useState({ PointerEvent: 'none' })
  // const handleClick = (event: any) => {
  //   if (!props.clickValue) {
  //     event.currentTarget.disabled = true
  //   }
  // }

  return (
    <div className={classes.buttonContainer}>
      <Link href={props.href1}>
        <div className={classes.button1}>Back</div>
      </Link>

      <Link href={props.href2}>
        <div className={classes.button1}>Continue</div>
      </Link>
      {/* <div className={classes.buttonContainer}>
      <Link
        href={{
          pathname: href1,
          query: query1, // the data
        }}
      >
        <div className={classes.button1}>Back</div>
      </Link>

      <Link
        href={{
          pathname: href2,
          query: query2, // the data
        }}
      >
        <div className={classes.button1}>Continue</div>
      </Link>
    </div> */}
    </div>
  )
}