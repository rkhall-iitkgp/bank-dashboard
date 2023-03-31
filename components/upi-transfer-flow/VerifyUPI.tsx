import {createStyles, Group, PinInput, Text, TextInput,} from '@mantine/core'
import Link from 'next/link'
import { SetStateAction, useEffect, useState, ChangeEvent } from 'react'
// import ButtonGroup from '../reusable-components/ButtonGroup'
import Heading from '../reusable-components/Heading'
import { NativeSelect } from '@mantine/core';
import useStorage from '../../hooks/useStorage';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: `100vh`,
    boxSizing: 'border-box',
    padding: `calc(${theme.spacing.xl} * 2.5)`,
    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    background: `grey`,
  },
  titlebox: {
    display: `flex`,
    justifyContent: `center`,
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    fontWeight: 500,
    margin: `0.8rem`,
  },
  titlebold: {
    fontFamily: 'Montserrat',
    //   color: theme.black,
    lineHeight: 1,
    fontWeight: 600,
    fontSize: `20px`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    paddingBottom: `20px`,
  },

  description: {
    color: `#737373`,
    fontSize: `1rem`,
    padding: `0.5rem 0`,
    textAlign: `center`,
    // marginTop: `10px`,
    boxSizing: `border-box`,
  },

  form: {
    backgroundColor: theme.white,
    borderRadius: theme.radius.xl,
    boxShadow: theme.shadows.lg,
    // paddingBottom: '5px',
    width: `40vw`,
    color: `#0052B3`,
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
    border: '0',
    borderRadius: '0',
    background: 'transparent',
    borderBottom: `2px solid #eee`,
  },

  inputLabel: {
    color: theme.black,
    position: `absolute`,
    top: `1.5rem`,
    transition: `0.25s ease`,
  },

  inputcontainer: {
    position: `relative`,
    paddingTop: `0.75rem`,
    marginTop: `0 !important`,
  },
  // : {
  //   // border: 'none',
  //   // padding: '40px',
  // },
  control: {
    backgroundColor: `#006AE4`,
    borderRadius: `20px`,
  },
  forminside: {
    maxWidth: `90%`,
    width: `40vw`,
    padding: theme.spacing.xl,
    margin: `auto`,
  },

  buttoncontainer: {
    display: `flex`,
    justifyContent: `space-between   `,
    // margin:`1rem`,
    // marginTop: `2rem`,
  },
  button: {
    width: `150px`,
    backgroundColor: `#0062D6`,
    borderRadius: `20px`,
  },

  buttonVerify: {
    // height:``,
    // width: `100px`,
    // backgroundColor: `#ffffff`,
    marginRight: '60px',
    cursor: 'no-drop',
    // borderRadius:,
  },
  topheading: {
    width: `100%`,
    background: `#DDEDFF`,
    display: `flex`,
    justifyContent: `center`,
    borderTopLeftRadius: theme.radius.md,
    borderTopRightRadius: theme.radius.md,
    alignItems: `center`,
  },
  input1: {
    padding: `25px`,
    borderRadius: '15px',
    border: '1px solid white',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '29px',
    display: 'flex',
    alignItems: 'center',

    // color: '#0062D6',
  },
  button1: {
    background: '#0062D6',
    borderRadius: '30px',
    width: '140px',
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: '1.25rem',
    padding: '5px 15px',
    textAlign: 'center',
    fontWeight: 400,
    // cursor: 'no-drop',
    '&:hover': {
      background: '#558ac9',
    },
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    // pointerEvents: 'none',

    marginTop: `3rem`,
  },
}))
function Demo() {
  return (
    <Group position="center">
      <PinInput placeholder="" />
    </Group>
  )
}
export function VerifyUPI() {
  const [buttonText, setButtonText] = useState('Verify')
  const [upiValue, setUpiValue] = useState('');
  const [data, setData] = useState<{ value: string, label: string }[]>([]);
  const { getItem, setItem } = useStorage()

  
  useEffect(() => {
    const storedAccounts = getItem('accounts');
    // console.log(storedAccounts)
    if (storedAccounts !== null) {
      const accounts = JSON.parse(storedAccounts);
      const upis = accounts?.map((account: { upi: string | null }) => account.upi);
      console.log(upis);
      
      // let upi = []
      // let ele;
      // upis?.map((ele)=>{
      //   upi.push({value: ele, label: ele})
      // })
      const upi = upis?.map((ele) => ({ value: ele, label: ele}))
      setData(upi)
      console.log(data);
      
    } else {
      console.log('No accounts found in session storage.');
    }
  }, []);
  const [style, setStyle] = useState({
    border: '1px solid white',
    borderRadius: '15px',
  })
  const [style2, setStyle2] = useState({
    color: '#0062D6',
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '18px',
    cursor: 'pointer',
  })
  // const handleChange = (selectedOption: { value: string | null; label: string | null }) => {
  //   setUpiValue({value : selectedOption.value, label: selectedOption.label})
  //   console.log(selectedOption.value)
  // }
  function handleClick1() {
    if (upiValue !== '') {
      setStyle2({
        color: '#00AD30',
        fontFamily: 'Montserrat',
        fontWeight: 600,
        fontSize: '18px',
        cursor: 'pointer',
      })
      setButtonText('Verified')
    }
  }
  function handleClick2() { }

  useEffect(() => {
    if (upiValue === '') {
      setButtonText('Verify')
      setStyle2({
        color: '#0062D6',
        fontFamily: 'Montserrat',
        fontWeight: 400,
        fontSize: '18px',
        cursor: 'no-drop',
      })
      setButtonText('Verify')
    } else {
      setStyle({
        border: 'solid 1px #00AD30',
        borderRadius: '15px',
      })
      setStyle2({
        color: '#0062D6',
        fontFamily: 'Montserrat',
        fontWeight: 400,
        fontSize: '18px',
        cursor: 'pointer',
      })
      setButtonText('Verify')
    }
    return () => { }
  }, [upiValue])
  const { classes } = useStyles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.form}>
        <Heading title="UPI Transfer" />
        <div className={classes.forminside}>
          {/* <div className={classes.titlebox}>
            <div className={classes.titlebold}>
              <span>Verify UPI</span>
            </div>
          </div> */}

          <div className={classes.description}>
            {/* <TextInput
              placeholder="Enter UPI ID*"
              style={style}
              classNames={{ input: classes.input1 }}
              value={upiValue}
              onChange={handleChange}
              rightSection={
                <Text
                  className={classes.buttonVerify}
                  style={style2}
                  onClick={upiValue !== '' ? handleClick1 : handleClick2}
                >
                  {buttonText}
                </Text>
              }
            /> */}
            <NativeSelect value={upiValue}  onChange={(event) => {console.log(event.currentTarget.value);setUpiValue(event.currentTarget.value);setItem('upi', event.currentTarget.value) }} data={data} onClick={upiValue !== '' ? handleClick1 : handleClick2} />
          </div>

          <div className={classes.buttonContainer}>
            <Link href="/UPI/">
              <div className={classes.button1}>Back</div>
            </Link>

            {buttonText === 'Verified' ? (
              <Link href="/UPI/payment-details">
                <div className={classes.button1}>Continue</div>
              </Link>
            ) : (
              <div className={classes.button1} style={{ cursor: 'no-drop' }}>
                Continue
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}