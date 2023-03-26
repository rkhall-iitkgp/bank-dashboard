import { createStyles } from '@mantine/core'
import { useState, useRef } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';
import { ButtonProps, createPolymorphicComponent } from '@mantine/core';
import styled from '@emotion/styled';

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
        height: `45vh`,
        width: `400px`,
        marginBottom: `30px`,

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
        height: `20%`,
        padding: `20px`,
        fontSize: `0.6rem`,
        textAlign: `center`,
       
    },
    subcontainer: {
        color: `#000000`,
        position: 'absolute',
        width: `100%`,
        height: `80%`,
        display: `flex`,
        padding: '30px',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    uploadResetContainer: {
        color: `#000000`,
        display: `flex`,
        alignItems: `center`,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: `2px`,
    },

}))

export function KycAuthentication() {
    const [file, setFile] = useState<File | null>(null);
    const resetRef = useRef<() => void>(null);
    const clearFile = () => {
        setFile(null);
        resetRef.current?.();
    };

    const { classes } = useStyles()
    let data = {
       adhaarNumber:'1234/12345/12345',
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

                <div
                    style={{
                        display: 'flex',
                        //   alignItems: 'left',
                        justifyContent: 'space-around',
                        flexDirection: 'column',
                        //   margin:'0px',
                    }}
                >
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
                        Aadhar Number
                    </span>
                    <span
                        style={{
                            fontFamily: 'Montserrat',
                            fontStyle: `normal`,
                            fontWeight: `700`,
                            fontSize: `20px`,
                            lineHeight: `34px`,
                            color: '#000000',
                        }}
                    >
                        {data.adhaarNumber}
                    </span>
                </div>

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
