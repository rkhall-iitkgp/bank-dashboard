import {Button, ButtonProps, createPolymorphicComponent, createStyles, FileButton, Group} from '@mantine/core'
import {useRef, useState} from 'react'
import styled from '@emotion/styled'
import 'react-phone-input-2/lib/style.css'
import {hasLength, useForm} from '@mantine/form'

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
  
  container: {
    borderRadius: `30px`,
    boxShadow: `0px 2px 20px rgba(0,0,0,0.1)`,
    color: `#0052B3`,
    position: 'relative',
    height: `300px`,
    width: `80%`,
    maxWidth: `500px`,
    minWidth: `400px`,
    marginLeft: `10px`,

    background: `#FFFFFF`,
    // gap:'1rem'
  },
  heading1: {
    width: `100%`,
    height: `20%`,
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
    height: `80%`,
    display: `flex`,
    // margin: '7px',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'space-around',
    padding: '20px 20px',
    // margin:'auto',
  },
  uploadResetContainer: {
    color: `#000000`,
    display: `flex`,
    alignItems: `center`,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
}))

export function KycAuthentication() {
  const form = useForm({
    initialValues: {
      aadharNo: '',
      mobileNo: '',
    },

    validate: {
      aadharNo: hasLength(12, 'Aadhar must be 12 digits'),
      mobileNo: hasLength(10, 'Aadhar must be 10 digits'),
    },
  })
  const [aadhar_no, setaadhar_no] = useState<number | ''>('')
  const [mobile_no, setMobile_no] = useState<string>('')
  const [otp_no, setOtp_no] = useState<number | ''>('')
  const [show,setShow]=useState(false);
  const [file, setFile] = useState<File | null>(null)
  const resetRef = useRef<() => void>(null)
  const clearFile = () => {
    setFile(null)
    resetRef.current?.()
  }
   function onOTP(){
       setShow(!show);
   }
  const { classes } = useStyles();
  let data = {
    aadharNumber: '1234/12345/12345',
  }
  return (

      <div className={classes.container}>
        <div className={classes.heading1}>
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
        </div>
        
        <div className={classes.subcontainer}>
          <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
            <span
              style={{
                fontFamily: 'Montserrat',
                fontStyle: `normal`,
                fontWeight: `400`,
                fontSize: `20px`,
                lineHeight: `20px`,
              }}
            >
             Aadhar Number
            </span>
            <span
              style={{
                fontFamily: 'Montserrat',
                fontStyle: `normal`,
                fontWeight: `600`,
                fontSize: `25px`,
                lineHeight: `20px`,
              }}
            >
              {data.aadharNumber}
            </span>
            </div>

         
          <div className={classes.uploadResetContainer}>
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
          
           
       
       
       
        </div>

      </div>
    
  )
}