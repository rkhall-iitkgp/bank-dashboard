import { createStyles } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Heading from '../reusable-components/Heading'
import { Group, Text, useMantineTheme, rem } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, MIME_TYPES } from '@mantine/dropzone';
import useStorage from '../../hooks/useStorage'
import analyzerms from '../analyzerms'
import { useRouter } from 'next/router'
import useAccountStore from '../Store/Account'
import { DropzoneAccept } from '@mantine/dropzone/lib/DropzoneStatus'

const useStyles = createStyles((theme) => ({
    wrapper: {
        backgroundColor: `#EEEEEE`,
        minHeight: `100vh`,
        boxSizing: 'border-box',
        padding: `calc(${theme.spacing.xl} * 1.5)`,
        [theme.fn.smallerThan('sm')]: {
            padding: `calc(${theme.spacing.xl} * 1.5)`,
        },
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        background: `grey`,
    },
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
        },
    },

    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        // pointerEvents: 'none',

        marginTop: `3rem`,
    },
    titlebox: {
        // marginBottom:`20px`,
        display: `flex`,
        justifyContent: `center`,
    },
    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        //   color: theme.black,
        lineHeight: 1,
        fontWeight: 500,
        margin: `0.8rem`,
        //   paddingBottom:`5px`,
        //   marginBottom:`10px`
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
        // paddingBottom: `10px`,
    },

    form: {
        backgroundColor: theme.white,
        borderRadius: theme.radius.xl,
        boxShadow: theme.shadows.lg,
        // paddingBottom: '5px',
        width: `30vw`,
        color: `#0052B3`,
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
        marginTop: `2rem`,
    },
    button: {
        width: `150px`,
        backgroundColor: `#0062D6`,
        borderRadius: `20px`,
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
    accountContainer: {
        margin: `40px 1rem`,
        // padding:`0 1rem`,
        display: `flex`,
        justifyContent: `center`,
    },
    account: {
        width: `80px`,
        height: `80px`,
        background: `#1665C1`,
        borderRadius: `50%`,
        margin: ` 0 20px`,
        marginBottom: `0`,
        padding: `10px`,
        fontSize: `0.8rem`,
        textAlign: `center`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        cursor: 'pointer',
        ':hover': {
            border: `2px solid #040e1b;`,
            boxShadow: ` 0px 4px 10px rgba(0, 0, 0, 0.25)`,
        },
        ':active': {
            border: `2px solid #03080f;`,
            boxShadow: ` inset 0px 4px 10px rgba(0, 0, 0, 0.25)`,
        },
    },
    active: {
        boxShadow: ` inset 0px 4px 10px rgba(0, 0, 0, 0.25)`,
        border: `2px solid #03080f;`,
    },
    bankname: {
        lineHeight: `0.9rem`,
        fontSize: '0.80rem',
        fontWeight: 600,
        paddingTop: `4px`,
        textAlign: `center`,
    },
}))

function Account(props: {
    accountdata: {
        name: any
        id: any
        src: any
    }
    setAccount: (arg0: any) => void
}) {
    const { classes } = useStyles()
    const origin = useRouter().pathname;

    return (
        <div>
            <div
                className={classes.account}
                id={props.accountdata.id}
                onClick={(event) => {
                    props.setAccount(props.accountdata)
                    const accountlist = Array.from(
                        document.getElementsByClassName(classes.account),
                    )
                    accountlist.forEach((e) => {
                        e.classList.remove(classes.active)
                    })
                    document.getElementById(props.accountdata.id)
                        ?.classList.add(classes.active)
                }}
            >
                <Image
                    src={`/icons/` + props.accountdata.src + '.png'}
                    width={50}
                    height={50}
                    alt={''}
                    style={{ objectFit: 'contain' }}
                ></Image>
            </div>
            <div className={classes.bankname}>{props.accountdata.name}</div>
        </div>
    )
}
interface props {
    setdropfiles: Function
    setIsanalysisOpen: Function
}
export function DropFiles({ setdropfiles, setIsanalysisOpen }: props) {
    const { classes } = useStyles()
    const [click, setClick] = useState(false)
    const router = useRouter()
    const { setItem } = useStorage()
    const [account, setAccount] = useState({
        id: 1,
    })

    const handleClick = () => {
        setClick(true)
    }

    const theme = useMantineTheme();
    const { getItem } = useStorage()
    const authToken = getItem('access_token')
    const userId = getItem('user_id')
    const [dropedfiles, setDropedfiles] = useState<any[]>()
    const onDrop = async (files) => {
        const formData = new FormData();
        formData.append('user_id', userId);
        formData.append('file', files[0]);

        // analyzerms.post('/transaction/upload/', formData, {
        //     headers: {
        //         Authorization: `Bearer ${authToken}`,
        //         'Content-Type': 'multipart/form-data'
        //     }
        // })
        // .then(response => {
        //     console.log(response);
        // })
        // .catch(error => {
        //     console.log(error);
        // });

        const response = await analyzerms?.post('/transaction/upload/', formData, {
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'multipart/form-data'
            }
        })

        if (response?.status !== 200) {
            alert('Error in uploading file')
            return
        }
        const trxn = JSON?.parse(response.data.Transactions)
        const transactions = trxn?.data;
        const columns = trxn?.columns;
        const UserDebtToIncome = response.data.UserDebtToIncome
        console.log(transactions);
        console.log(columns);

        let newTrxn: any[] = []
        for (let i = 0; i < transactions.length; i++) {
            let obj = {};
            let cred = -1;
            let deb = -1;
            for (let j = 0; j < columns.length; j++) {
                if (columns[j] === 'date') {
                    let date = new Date(transactions[i][j])
                    let year = date.getFullYear()
                    let month = date.getMonth() + 1
                    let dt = date.getDate()
                    let dd = dt + '';
                    let mm = month + '';

                    if (dt < 10) {
                        dd = '0' + dt
                    }
                    if (month < 10) {
                        mm = '0' + month
                    }
                    console.log(dt, month, year);
                    obj['date'] = year + '-' + mm + '-' + dd
                }
                if (columns[j] === 'payee') {
                    let payee = transactions[i][j].split('/')
                    obj['description'] = payee[payee.length - 1]
                    if (payee[0].split(' ')[1] === "FROM") {
                        cred = 1;
                    }
                    else {
                        deb = 1;
                    }
                    if (payee[0].split(' ').includes('-UPI/')) {
                        obj['mode'] = 0
                    }
                    else {
                        obj['mode'] = 1
                    }
                }
                if (columns[j] === 'amount') {
                    if (cred === 1) {
                        obj['credit'] = transactions[i][j]
                        obj['debit'] = 0;
                    }
                    else {
                        obj['debit'] = transactions[i][j]
                        obj['credit'] = 0;
                    }
                }
                if (columns[j] == 'category') {
                    if (transactions[i][j] !== null)
                        obj['category'] = transactions[i][j].name
                }
            }
            if (obj['category'] === undefined) {
                obj['category'] = 'misc'
            }
            if (obj)
                newTrxn.push(obj)
        }
        // send to session strage
        setItem('transactions', JSON.stringify(newTrxn))
        setItem('UserDebtToIncome', UserDebtToIncome)

    }


    return (
        // <div className={classes.wrapper}>
        <div className={classes.form}>
            {/* <Heading title="Analyze your Transactions" /> */}
            <div className={classes.topheading}>
                <div className={classes.title}>Analyze Your Transactions</div>
            </div>

            <div className={classes.forminside}>
                <div className={classes.titlebox}>
                    <div className={classes.titlebold}>
                        <span>Upload your Transactions</span>
                    </div>
                </div>
                <div className={classes.accountContainer}>
                    {/* {fetchedAccount?.map((ele) => {
              return (
                <span key={ele.id} onClick={handleClick}>
                  <Account setAccount={setAccount} accountdata={ele} />
                </span>
              )
            })} */}
                    <Dropzone
                        onDrop={(files) => { setDropedfiles(files) }}
                        onReject={(files) => console.log('rejected files', files)}
                        maxSize={3 * 1024 ** 2}
                        onClick={handleClick}
                    >
                        <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
                            <Dropzone.Accept>
                                <IconUpload
                                    size="3.2rem"
                                    stroke={1.5}
                                    color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
                                />
                            </Dropzone.Accept>
                            <Dropzone.Reject>
                                <IconX
                                    size="3.2rem"
                                    stroke={1.5}
                                    color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
                                />
                            </Dropzone.Reject>
                            <Dropzone.Idle>
                                <IconPhoto size="3.2rem" stroke={1.5} />
                            </Dropzone.Idle>

                            <div>
                                <Text size="xl" inline>
                                    Drag csv here or click to select files
                                </Text>
                                <Text size="sm" color="dimmed" inline mt={7}>
                                    File size should not exceed 5mb
                                </Text>
                            </div>
                        </Group>
                    </Dropzone>
                </div>
                {/* <ButtonGroup href1="/home" href2="/UPI/verify-upi-id" /> */}
                <div className={classes.buttonContainer}>
                    <div className={classes.button1} onClick={() => {
                        setdropfiles(true)
                    }}>Back</div>

                    <div className={classes.button1} onClick={() => {
                        setdropfiles(true)
                        setIsanalysisOpen(false)
                        useAccountStore.setState({ uploaded: true })
                        onDrop(dropedfiles)
                        console.log(dropedfiles?.[0])
                    }}>Continue</div>
                </div>
            </div>
        </div>
        // </div>
    )
}