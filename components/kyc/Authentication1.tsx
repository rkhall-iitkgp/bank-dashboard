import {
    Button,
    ButtonProps,
    createPolymorphicComponent,
    createStyles,
    FileButton,
    Group,
    NumberInput
} from '@mantine/core'
import {useRef, useState} from 'react'
import styled from '@emotion/styled'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {useRouter} from 'next/router'
import {hasLength, isInRange, useForm} from '@mantine/form'
import Link from 'next/link'
import Heading from '../reusable-components/Heading'
import {IconCheck, IconX} from '@tabler/icons-react';
import api from '../datams'
import {notifications} from '@mantine/notifications';
import useStorage from '../../hooks/useStorage'

const _StyledButton = styled(Button)`
  border-width: 0.125rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
  padding-left: 0px;
`
const StyledButton = createPolymorphicComponent<'button', ButtonProps>(
  _StyledButton,
)

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: `#eeeeee`,
    minHeight: `100vh`,
    boxSizing: 'border-box',
    padding: `calc(${theme.spacing.xl} * 1.5)`,
    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  container: {
    borderRadius: `30px`,
    boxShadow: `0px 2px 20px rgba(0,0,0,0.1)`,
    color: `#0052B3`,
    position: 'relative',
    height: `600px`,
    width: `600px`,
    margin: `5px`,
    background: `#FFFFFF`,
  },
  heading1: {
    width: `100%`,
    height: `10%`,
    padding: `20px`,
    background: `#DDEDFF`,
    fontSize: `1.3rem`,
    textAlign: `center`,
    borderRadius: ' 30px 30px 0px 0px',
    color: ` #0052B3`,
  },
  heading2: {
    width: `100%`,
    height: `10%`,
    // padding: `20px`,
    fontSize: `0.6rem`,
    textAlign: `center`,
  },

  subcontainer: {
    color: `#000000`,
    position: 'absolute',
    width: `100%`,
    height: `90%`,
    display: `flex`,
    // margin: '7px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '40px 100px',
    // margin:'auto',
  },
  uploadResetContainer: {
    color: `#000000`,
    display: `flex`,
    alignItems: `center`,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: `2px`,
  },
  input: {
    fontFamily: 'Montserrat, sans-serif',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '24px',
    color: '#434343',
    backgroundColor: '#fffff',
    borderColor: 'grey',
    border: '0',
    borderRadius: '0',
    background: 'transparent',
    borderBottom: `2px solid #eee`,
    margin: '4px 0px',
  },
  inputLabel: {
    color: 'black',
    position: `absolute`,
    top: `1.5rem`,
    transition: `0.25s ease`,
  },
  inputcontainer: {
    position: `relative`,
    paddingTop: `0.75rem`,
    marginTop: `0 !important`,
    width: `100%`,
  },
  button1: {
    width: `200px`,
    height: '40px',
    backgroundColor: `#0062D6`,
    borderRadius: `30px`,
    marginTop: '5px',
  },
  button2: {
    width: `160px`,
    height: '40px',
    backgroundColor: `#0062D6`,
    borderRadius: `30px`,
    marginTop: '5px',
  },
  error: {
    color: 'red',
    fontSize: `calc(0.875rem - 0.125rem)`,
    lineHeight: `1.2`,
    marginTop: `12px`
  },
}))

export function Authentication1() {

  const router = useRouter()
  const { getItem } = useStorage()
  const form = useForm({
    initialValues: {
      aadhar_no: '',
      number: '',
    },

    validate: {
      aadhar_no: isInRange({ min: 100000000000, max: 999999999999 }, 'Aadhar Number must be 12 characters long'),
      number: hasLength(12, 'Enter Valid Number'),
    },
  })


  //   const [aadhar_no, setaadhar_no] = useState<number | ''>('')
  //   const [mobile_no, setMobile_no] = useState<string>('')
  //   const [otp_no, setOtp_no] = useState<number | ''>('')
  const [show, setShow] = useState(false);
  const [file, setFile] = useState<File | null>(null)
  const resetRef = useRef<() => void>(null)
  const [otp_no, setOtp_no] = useState<any>()
  const clearFile = () => {
    setFile(null)
    resetRef.current?.()
  }

  const { classes } = useStyles()
  let data = {
    aadharNumber: '1234/12345/12345',
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {/* <div className={classes.heading1}>
          <span
            style={{
              fontFamily: 'Montserrat',
              fontStyle: `normal`,
              fontWeight: `500`,
              fontSize: `20px`,
              lineHeight: `20px`,
            }}
          >
            Authentication
          </span>
        </div> */}
        <Heading title='Authentication' />

        <div className={classes.subcontainer}>
          <div className={classes.heading2}>
            <span
              style={{
                fontFamily: 'Montserrat',
                fontStyle: `normal`,
                fontWeight: `600`,
                fontSize: `25px`,
                lineHeight: `20px`,
              }}
            >
              Enter your details
            </span>
          </div>

          <NumberInput
            placeholder="Aadhar Number"
            type={'number'}
            required={true}
            hideControls={true}
            classNames={{
              input: classes.input,
              label: classes.inputLabel,
              root: classes.inputcontainer,
            }}
            {...form.getInputProps('aadhar_no')}
          />
          <div style={{ width: `100%` }}>
            <PhoneInput
              placeholder="Mobile Number"
              // value={mobile_no.replaceAll('\\D+', '')}
              // onChange={setMobile_no}
              country={'in'}
              containerStyle={{
                border: 'none',
                borderBottom: `2px solid #eee`,
                top: `0.5rem`,
                color: '#0052B3',
              }}
              inputStyle={{
                background: 'transparent',
                border: 'none',
                margin: '4px 0px',
                fontFamily: 'Montserrat, sans-serif',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '24px',
                color: '#434343',
              }}
              buttonStyle={{
                background: 'transparent',
                border: 'none',
              }}
              {...form.getInputProps('number')}
            />
            <div className={classes.error}>{form.errors?.number}</div>
          </div>
          <div style={{ width: `100%` }}>

            <div className={classes.uploadResetContainer} style={{ margin: `auto` }}>
              <Group position="center">
                <FileButton
                  resetRef={resetRef}
                  onChange={setFile}
                  accept="image/png,image/jpeg"
                >
                  {(props) => (
                    <StyledButton style={{ background: '#ffffff' }} {...props}>
                      {!file && (
                        <span
                          style={{
                            fontFamily: 'Montserrat',
                            fontStyle: `normal`,
                            fontWeight: `500`,
                            fontSize: `20px`,
                            lineHeight: `34px`,
                            color: '#006AE4',
                          }}
                        >
                          Upload fingerprint
                        </span>
                      )}
                      {file && (
                        <span
                          style={{
                            fontFamily: 'Montserrat',
                            fontStyle: `normal`,
                            fontWeight: `500`,
                            fontSize: `20px`,
                            lineHeight: `34px`,
                            color: '#c0c0c0',
                          }}
                        >
                          Upload fingerprint
                        </span>
                      )}
                    </StyledButton>
                  )}
                </FileButton>
                <StyledButton
                  style={{ background: '#ffffff' }}
                  disabled={!file}
                  onClick={clearFile}
                >
                  {file && (
                    <span
                      style={{
                        fontFamily: 'Montserrat',
                        fontStyle: `normal`,
                        fontWeight: `500`,
                        fontSize: `20px`,
                        lineHeight: `34px`,
                        color: ' #DD0000',
                      }}
                    >
                      Reset
                    </span>
                  )}
                  {!file && (
                    <span
                      style={{
                        fontFamily: 'Montserrat',
                        fontStyle: `normal`,
                        fontWeight: `500`,
                        fontSize: `20px`,
                        lineHeight: `34px`,
                        color: ' #c0c0c0',
                      }}
                    >
                      Reset
                    </span>
                  )}
                </StyledButton>
              </Group>
            </div>
            {!file && form.isTouched('aadhar_no') && <div className={classes.error}>Upload File to Proceed</div>}
          </div>
          {file && (
            <span
              style={{
                fontFamily: 'Montserrat',
                fontStyle: `normal`,
                fontWeight: `500`,
                fontSize: `15px`,
                lineHeight: `22px`,
                color: '#4D4B4B',
              }}
            >
              Picked file: <br /> {file.name}
            </span>
          )}
          {!file && (
            <span
              style={{
                fontFamily: 'Montserrat',
                fontStyle: `normal`,
                fontWeight: `500`,
                fontSize: `15px`,
                lineHeight: `22px`,
                color: '#4D4B4B',
              }}
            >
              Please upload your fingerprint for E-KYC verification
            </span>
          )}
          {show && (<div>
            <NumberInput
              placeholder="OTP"
              type={'number'}
              required={true}
              hideControls={true}
              value={otp_no}
              onChange={setOtp_no}

              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
            // {...form.getInputProps('otp')}
            // required
            // {...form.getInputProps('name')}
            />
          </div>)
          }


          {!show && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '65%' }}>
              <Button size='lg' className={classes.button1} style={{
                width: '100%',
              }} onClick={() => {

                form.validate()
                console.log('file', file)
                if (form.isValid() && file) {
                  const data = new FormData()
                  data.append("files", file)
                  data.append("aadhaar_no", form.values.aadhar_no)
                  data.append("user_id", getItem("user_id"))
                  api
                    .post('/user/sendkycotp/', data, { headers: { "Authorization": `Bearer ${getItem("access_token")}` } })
                    .then((response) => {
                      console.log(response)
                      setShow(true)
                      notifications.show({
                        id: 'hello-there',
                        withCloseButton: true,
                        autoClose: 5000,
                        title: "Success",
                        message: 'Otp sent to your mobile number',
                        color: 'green',
                        icon: <IconCheck size={"1.1rem"} />,
                        loading: false,
                      });
                    })
                    .catch((err) => {
                      console.log('err', err)
                      notifications.show({
                        id: 'hello-there',
                        withCloseButton: true,
                        autoClose: 5000,
                        title: "Unsuccessful",
                        message: err.response.data?.message,
                        color: 'red',
                        icon: <IconX size={"1.1rem"} />,
                        loading: false,
                      });
                    })
                }
              }}>
                <span
                  style={{
                    fontFamily: 'Montserrat',
                    fontStyle: `normal`,
                    fontWeight: `500`,
                    fontSize: `16px`,
                    lineHeight: `27px`,
                  }}

                >
                  Get OTP
                </span>{' '}
                &nbsp;{' '}
              </Button>
              <Link href='/home'>
                <Button className={classes.button2} style={{ width: '100%' }}>
                  <span
                    style={{
                      fontFamily: 'Montserrat',
                      fontStyle: `normal`,
                      fontWeight: `500`,
                      fontSize: `16px`,
                      lineHeight: `27px`,
                    }}
                  >
                    Back
                  </span>{' '}
                  &nbsp;{' '}
                </Button>
              </Link>
            </div>
          )}
          {show && (<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '5px', width: '100%' }}>
            <Link href='/home'>
              <Button size="lg" className={classes.button1} >
                <span
                  style={{
                    fontFamily: 'Montserrat',
                    fontStyle: `normal`,
                    fontWeight: `500`,
                    fontSize: `16px`,
                    lineHeight: `27px`,
                  }}
                >
                  Back
                </span>{' '}
                &nbsp;{' '}

              </Button>
            </Link>
            {/* <Link href='/kyc/enter-mpin'> */}
            <Button size="xs" className={classes.button2} onClick={() => {
              if (otp_no) {
                api.post("/user/verifykycotp/", {
                  "user_id": getItem("user_id"),
                  "otp": otp_no
                }, { headers: { "Authorization": `Bearer ${getItem("access_token")}` } }).then((response) => {
                  console.log(response)
                  router.push(
                    `/kyc/enter-mpin`
                  )
                  notifications.show({
                    id: 'hello-there',
                    withCloseButton: true,
                    autoClose: 5000,
                    title: "Success",
                    message: response.data.message,
                    color: 'green',
                    icon: <IconCheck size={"1.1rem"} />,
                    loading: false,
                  });
                })
                  .catch((err) => {
                    console.log('err', err)
                    notifications.show({
                      id: 'hello-there',
                      withCloseButton: true,
                      autoClose: 5000,
                      title: "Unsuccessful",
                      message: err.response.data?.message,
                      color: 'red',
                      icon: <IconX size={"1.1rem"} />,
                      loading: false,
                    });
                  })
              }
            }}
              style={{
                fontFamily: 'Montserrat',
                fontStyle: `normal`,
                fontWeight: `500`,
                fontSize: `16px`,
                lineHeight: `27px`,
              }}>
              <span

              >
                Continue
              </span>{' '}
              &nbsp;{' '}
            </Button>
            {/* </Link> */}
          </div>)
          }
        </div>

      </div>
    </div >
  )
}