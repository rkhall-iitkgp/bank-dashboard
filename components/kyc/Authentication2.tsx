
import { createStyles } from '@mantine/core'
import { useState, useRef } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';
import { ButtonProps, createPolymorphicComponent } from '@mantine/core';
import styled from '@emotion/styled';
import { NumberInput } from '@mantine/core';
import { Input } from '@mantine/core';
import { TextInput } from '@mantine/core';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import ButtonGroup from '../reusable-components/ButtonGroup';
const _StyledButton = styled(Button)`
  border-width: 0.125rem;
  &:hover { 
    cursor: pointer;
    transform: scale(1.02);
  }
  padding-left: 0px;
`;
const StyledButton = createPolymorphicComponent<'button', ButtonProps>(_StyledButton);
const useStyles = createStyles(() => ({
    container: {
        borderRadius: `30px`,
        boxShadow: `0px 2px 20px rgba(0,0,0,0.1)`,
        color: `#0052B3`,
        position: 'relative',
        height: `600px`,
        width: `400px`,
        margin: `5px`,

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
        padding: '18px',
        // margin: '7px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
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
    },
    button1: {
        width: `160px`,
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

export function Authentication2() {
    const [adhaar_no, setAdhaar_no] = useState<number | ''>('')
    const [mobile_no, setMobile_no] = useState<string>('')
    const [otp_no, setOtp_no] = useState<number | ''>('')
    const [file, setFile] = useState<File | null>(null);
    const resetRef = useRef<() => void>(null);
    const clearFile = () => {
        setFile(null);
        resetRef.current?.();
    };

    const { classes } = useStyles()
    let data = {
        adhaarNumber: '1234/12345/12345',
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
                    placeholder="Adhaar Number"
                    type={'number'}
                    required={true}
                    hideControls={true}
                    value={adhaar_no}
                    onChange={setAdhaar_no}
                    classNames={{
                        input: classes.input,
                        label: classes.inputLabel,
                        root: classes.inputcontainer,
                    }}
                />
                <PhoneInput
                    placeholder="Mobile Number"
                    value={mobile_no.replaceAll('\\D+', '')}
                    onChange={setMobile_no}
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
                />




                <div className={classes.uploadResetContainer}>

                    <Group position="center">
                        <FileButton resetRef={resetRef} onChange={setFile} accept="image/png,image/jpeg">
                            {(props) => <StyledButton style={{ background: '#ffffff' }} {...props}>
                                {!file && <span
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
                                }
                                {file && <span
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
                                }
                            </StyledButton>
                            }
                        </FileButton>
                        <StyledButton style={{ background: '#ffffff' }} disabled={!file} onClick={clearFile}>
                            {file &&
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
                            }
                            {!file &&
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
                            }
                        </StyledButton>
                    </Group>
                  
            </div>
            <div>
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
            
             </div>
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
              <div>
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
                />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',margin:'5px',width:'100%' }}>
               
                    <Button size="xs" className={classes.button1}>
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
                    <Button size="xs" className={classes.button2}>
                        <span
                            style={{
                                fontFamily: 'Montserrat',
                                fontStyle: `normal`,
                                fontWeight: `500`,
                                fontSize: `16px`,
                                lineHeight: `27px`,
                            }}
                        >
                           Continue
                        </span>{' '}
                        &nbsp;{' '}
                    </Button>
                </div>
                </div>



          
             </div>
        </div>


    )
}

