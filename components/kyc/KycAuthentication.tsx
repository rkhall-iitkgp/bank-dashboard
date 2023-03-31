import {Button, ButtonProps, createPolymorphicComponent, createStyles, FileButton, Group} from '@mantine/core'
import {useRef, useState} from 'react'
import styled from '@emotion/styled'
import 'react-phone-input-2/lib/style.css'
import {hasLength, useForm} from '@mantine/form'
import Link from 'next/link'
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
  control: {
    backgroundColor: `#006AE4`,
    borderRadius: `20px`,
    display: `block`,
    margin: `auto 1rem`,
    width: `300px`,
    fontFamily: 'Montserrat',
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
  function onOTP(){
       setShow(!show);
   }
  const { classes } = useStyles();
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
            Please provide your Aadhar Card number for authentication using E-KYC
            </span>
            </div>
          <div className={classes.uploadResetContainer}>
            <Link href='kyc/authentication1'>
          <Button
            size="lg"
            className={classes.control}
            onClick={() => {
              5555555
            }}
          >
            Provide Details
          </Button>
          </Link>
         </div>

      </div>
    </div>
  )
}