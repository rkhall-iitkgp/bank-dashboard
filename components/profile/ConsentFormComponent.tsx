import { Button, createStyles, Radio } from '@mantine/core'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'

const useStyles = createStyles((theme) => ({
  wrap: {
    background: `white`,
    borderRadius: `30px`,
    boxShadow: ` 0px 4px 40px rgba(0, 0, 0, 0.2)`,
    width: `80%`,
    height: `80%`,
    minWidth: `400px`,
    maxWidth: `500px`,
    maxHeight: `420px`,
    marginLeft: `10px`,
    marginTop: `3vh`,
  },
  heading: {
    width: `100%`,
    height: `10%`,
    padding: `10px`,
    paddingTop: `20px`,
    background: `#DDEDFF`,
    fontSize: `1.3rem`,
    textAlign: `center`,
    borderRadius: ' 30px 30px 0px 0px',
    color: ` #0052B3`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  form: {
    padding: `30px`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-evenly`,
  },
  formtitle: {
    fontSize: `1rem`,
    fontWeight: 600,
  },
  questioncontainer: {
    padding: `5px`,
    marginTop: '1.8rem',
  },
  question: {
    fontSize: '0.9rem',
    color: `#4D4B4B`,
    fontWeight: 500,
    marginBottom: '8px',
  },
  answer: {
    fontFamily: `Montserrat`,
    fontWeight: 600,
    // lineHeight: `2rem`,
  },
  radio: {
    // width: `20px`,
    // height: `20px`,
    // border: `2px solid #aaa`,
    // borderRadius: '5px',
    // WebkitAppearance: `none`,
    // appearance: `none`,
    // backgroundColor: `#fff`,
    // margin: `0 0.8rem`,
    // ':checked': {
    //   '::before': {
    //     content: `" "`,
    //     width: `14px`,
    //     borderRadius: '2.5px',
    //     height: `14px`,
    //     inset: `0`,
    //     margin: `1.2px`,
    //     background: `black`,
    //   },
    // },
  },
  answercontainer: {
    lineHeight: `1.2rem`,
    fontSize: `0.9rem`,
  },
  control: {
    backgroundColor: `#006AE4`,
    borderRadius: `20px`,
    display: `block`,
    margin: `auto 1rem`,
    width: `300px`,
    fontFamily: 'Montserrat',
  },
  button: {
    display: `flex`,
    flexDirection: `column`,
    gap: `20px`,
    alignItems: `center`,
    justifyContent: `center`,
    marginTop: '30px',
  },
  icon: {
    display: `none`,
  },
}))

interface Props {
  id?: any
  accountselected?: any
}
const ConsentFormComponent = ({ id, accountselected }: Props) => {
  const { classes } = useStyles()
  const [data, setData] = useState<string>('1')
  // console.log('accountselected :', accountselected)
  const router = useRouter()

  return (
    <div key={`${accountselected}`} style={{ height: '100%' }} className={classes.wrap}>
      <div className={classes.heading}>Consent Form</div>
      <div className={classes.form}>
        <div className={classes.formtitle}>This app requires:</div>
        <div className={classes.questioncontainer}>
          <div className={classes.question}>Data and Transaction Permissions::</div>
          <Radio
            checked={data === '1'}
            onChange={(e: any) => setData('1')}
            my={16}
            label={
              <span className={classes.answercontainer}>
                <span className={classes.answer}>Allow: </span>

              </span>
            }
          />
          <Radio
            checked={data === '2'}
            onChange={(e: any) => setData('2')}
            my={16}
            label={
              <span className={classes.answercontainer}>
                <span className={classes.answer}>Do Not Allow: </span>
              </span>
            }
          />


        </div>

        <div className={classes.button}>
          <Button
            size="lg"
            className={classes.control}
            onClick={() => {
              if (data) {
                console.log({
                  account: accountselected,
                  data: data,
                })
                sessionStorage.setItem("permission", "true")
                router.push("/home")
              }
            }}
          >
            Confirm
          </Button>
          <Button
            size="lg"
            className={classes.control}
            onClick={() => {
              router.push("/home")
            }}
          >
            Later
          </Button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(ConsentFormComponent)