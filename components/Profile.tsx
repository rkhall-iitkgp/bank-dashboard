import React, { useState } from 'react'
import { Button, Container, createStyles, Radio, Tabs } from '@mantine/core'
import Image from 'next/image'

const useStyles = createStyles((theme) => ({
    wrapper: {
        backgroundColor: `#EEEEEE`,
        boxSizing: 'border-box',
        minHeight: `calc(100vh - 4rem)`,
        padding: `20px`,
        // padding: `calc(${theme.spacing.xl} * 2.5)`,
        [theme.fn.smallerThan('sm')]: {
            padding: `calc(${theme.spacing.xl} * 1.5)`,
        },
        display: `grid`,
        gridTemplateColumns: `40% 60%`,
        background: `white`,
    },
    container1: {
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `space-around`,
        height: `100%`,

    },
    container2: {
        // display: `flex`,
        // flexDirection: `column`,
        // alignItems: `center`,
        // justifyContent: `center`
        height: `100%`
    },
    profilephoto: {
        // width: `100%`,
        // height: `100%`,

    },
    name: {
        fontWeight: 700,
        fontSize: `1.5rem`,
        textAlign: `center`,
        fontFamily: `Montserrat`
    },
    title: {
        fontWeight: 600,
        fontSize: `0.8rem`,
        textAlign: `center`,
        fontFamily: `Montserrat`,
        color: `#4D4B4B
        `
    },
    content: {
        fontWeight: 600,
        fontSize: `1rem`,
        textAlign: `center`,
        fontFamily: `Montserrat`
    },
    email: {
        lineHeight: `1.3rem`
    },
    phone: {
        lineHeight: `1.3rem`
    },
    account: {
        width: `150px`,
        height: `50px`,
        background: `white`,
        borderRadius: `50px`,
        margin: `10px`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-around`,
        backgroundColor: `#E6EFF9`
    },
    Logout: {
        width: `170px`,
        height: `50px`,
        background: `#DD0000`,
        borderRadius: `50px`,
        margin: `10px`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        color: `white`,
        fontWeight: 600,
        fontSize: `1.2rem`,
        cursor: `pointer`
    },
    tabs: {
        background: '#F3F9FF',
        border: `none`,
        // padding: `10px 15px`,
        borderTopRightRadius: '20px',
        borderTopLeftRadius: `20px`,
        cursor: `pointer`
    },
    active: {
        // background: '#F3F9FF',
        border: `none`,
        // padding: `10px 15px`,
        borderTopRightRadius: '20px',
        borderTopLeftRadius: `20px`,
        background: `#DDEDFF
        `,
        cursor: `pointer`
    },
    tablabel: {
        width: `150px`,
        height: `50px`,
        // background: `white`,
        borderRadius: `50px`,
        // margin: `10px`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-around`,
        // backgroundColor: `#E6EFF9`
    },
    tabcontainer: {
        // padding: `20px`,
        height: `90%`,
        width: `90%`,
        margin: `auto`,
        background: `white`,
        boxShadow: ` 0px 4px 40px rgba(0, 0, 0, 0.2)`,
        borderRadius: ' 0px 30px 30px 30px'
    },
    tablist: {
        width: `90%`,
        margin: `auto`
    },
    heading: {
        width: `100%`,
        height: `10%`,
        padding: `10px`,
        paddingTop: `20px`,
        background: `#DDEDFF`,
        fontSize: `1.7rem`,
        textAlign: `center`,
        borderRadius: ' 0px 30px 0px 0px'
        , color: ` #0052B3`
    },
    form: {
        padding: `30px`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `space-evenly`,
        height: `90%`
    },
    formtitle: {
        fontSize: `1.3rem`,
        fontWeight: 600
    },
    questioncontainer: {
        padding: `5px`,
        ':first-of-type': {
            marginTop: `1rem`
        }
    },
    question: {
        fontSize: '1rem',
        color: `#4D4B4B`,
        fontWeight: 500
    },
    answer: {
        fontFamily: `Montserrat`,
        fontWeight: 600,
        lineHeight: `1rem`
    },
    radio: {
        width: `20px`,
        height: `20px`,
        border: `2px solid #aaa`,
        borderRadius: '5px',
        WebkitAppearance: `none`,
        appearance: `none`,
        backgroundColor: `#fff`,
        margin: `0 0.8rem`,
        position: `relative`,
        ':checked': {
            '::before': {
                content: `" "`,
                position: `absolute`,
                width: `14px`,
                borderRadius: '2.5px',
                height: `14px`,
                inset: `0`,
                margin: `1.2px`,
                background: `black`
            }
        }
    },
    answercontainer: {
        lineHeight: `1.2rem`
    },
    control: {
        backgroundColor: `#006AE4`,
        borderRadius: `20px`,
        display: `block`,
        margin: `auto 1rem`,
        width: `300px`,
        fontFamily: 'Montserrat'
    },
    button: {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
    },
    icon: {
        display: `none`
    }

}))
const AccountSelect = (prop: {
    account: number

}) => {
    const { classes } = useStyles()

    const { account } = prop
    return (
        <div className={classes.account}>
            <Image alt='' width={35} height={35} src='/icons/sbi.png'></Image>
            <div className={classes.content}>{'**** ' + account}</div>
        </div>
    )
}
const Form = (props: { id: any, accountselected: any }) => {
    const { classes } = useStyles()
    const [data, setData] = useState<string>()
    const [transaction, setTransaction] = useState<string>()

    return (<>
        <div className={classes.heading}>
            Consent Form
        </div>
        <div className={classes.form}>
            <div className={classes.formtitle}>
                This app would like to:
            </div>
            <div className={classes.questioncontainer} >
                <div className={classes.question}>Data Permissions:</div>
                <Radio.Group
                    value={data}
                    onChange={setData}
                    name="favoriteFramework"

                    withAsterisk >
                    <div style={{ display: 'flex', margin: `10px` }} >  <div><Radio unstyled={true} type="radio" id={`${props.id}1`} name="permission" value="1" classNames={{ radio: classes.radio, icon: classes.icon }} /></div>
                        <label htmlFor={`${props.id}1`} className={classes.answercontainer}><span className={classes.answer}>Unlimited: </span> Permission to collect all transaction data for the purpose of providing better financial services.</label></div>
                    <div style={{ display: 'flex', margin: `10px` }}> <div><Radio unstyled={true} type="radio" id={`${props.id}2`} name="permission" value="2" classNames={{ radio: classes.radio, icon: classes.icon }} /></div>
                        <label htmlFor={`${props.id}2`} className={classes.answercontainer}><span className={classes.answer}>Limited: </span> Asks for permission each time to access transaction data.</label></div>

                    <div style={{ display: 'flex', margin: `10px` }}><div><Radio unstyled={true} type="radio" id={`${props.id}3`} name="permission" value="3" classNames={{ radio: classes.radio, icon: classes.icon }} /></div>
                        <label htmlFor={`${props.id}3`} className={classes.answercontainer}><span className={classes.answer}>None: </span> No permission to access transaction data.</label></div>

                </Radio.Group>
            </div>
            <hr style={{ margin: `5px auto`, width: `70%` }} />
            <div className={classes.questioncontainer} >
                <div className={classes.question}>Transaction Permissions:</div>
                <Radio.Group value={transaction}
                    onChange={setTransaction}
                    name="favoriteFramework"

                    withAsterisk >
                    <div style={{ display: 'flex', margin: `10px` }}>  <div style={{ display: `flex`, alignItems: `center` }}><Radio unstyled={true} type="radio" id={`${props.id}11`} name="Transaction" value="1" classNames={{ radio: classes.radio, icon: classes.icon }} /></div>
                        <label htmlFor={`${props.id}11`} className={classes.answercontainer}><span className={classes.answer}>Allow</span> transaction from this account</label></div>
                    <div style={{ display: 'flex', margin: `10px` }}> <div><Radio unstyled={true} type="radio" id={`${props.id}22`} name="Transaction" value="2" classNames={{ radio: classes.radio, icon: classes.icon }} /></div>
                        <label htmlFor={`${props.id}22`} className={classes.answercontainer}><span className={classes.answer}>Do not allow</span> Transaction from this account</label></div>



                </Radio.Group>
            </div>
            <div className={classes.button}>
                <Button className={classes.control}
                    onClick={() => {
                        if (data && transaction) {
                            console.log({
                                "account": props.accountselected,
                                "data": data,
                                'transaction': transaction
                            })
                        }
                    }}>Confirm</Button>

            </div>
        </div></>)
}
const Profile = () => {
    const { classes } = useStyles()
    interface Account {
        id: number;
        account_no: string;
        ifsc: string;
        analysisconsent: any;
        trxnconsent: any;
        user_id: number;
      }
      
    const accountlist = sessionStorage.getItem('accounts')
    const accountsp: Account[] = JSON.parse(accountlist);

    // const accounts: string[] = accountsp.map(account => account.account_no);
    const accounts: string[] = accountsp.map(account => "****" + account.account_no.substr(-4));
    // const accounts = [8989, 4235, 7382]
    const [accountselected, setAccountselected] = useState<number>()
    const [activeTab, setActiveTab] = useState<string | null>(accounts[0].toString());
    return (
        <div className={classes.wrapper}>
            <div className={classes.container1}>
                <div className={classes.profilephoto}>
                    <Image src='/images/aboutus.png' width='200' height={200} alt='' style={{ margin: `auto`, display: "block", borderRadius: '100%', overflow: `hi` }}></Image>

                </div>
                <div className={classes.name}>Bill Gates</div>
                <div className={classes.email}>
                    <div className={classes.title}>Email</div>
                    <div className={classes.content}>Rraj@1369</div>
                </div>
                <div className={classes.phone}>
                    <div className={classes.title}>Phone Number</div>
                    <div className={classes.content}>9001175253</div>
                </div>
                <div>
                    <div className={classes.title}>Bank Accounts</div>
                    <div>
                        {accounts.map((ele) => {
                            return <div key={ele}>
                                <AccountSelect account={ele} />
                            </div>
                        })}
                    </div>
                </div>
                <div>
                    <div className={classes.Logout}>Logout <Image src='/icons/logout 1.png' alt='' style={{ marginLeft: `15px` }} width={20} height={20}></Image></div>

                </div>
            </div>
            <div className={classes.container2}>
                <Tabs value={activeTab} onTabChange={(e) => {
                    setActiveTab(e)
                }} unstyled={true} className={classes.container2}>
                    <Tabs.List className={classes.tablist}>
                        {accounts.map((ele) => {
                            return (<span key={ele}>
                                <Tabs.Tab value={`${ele}`} id={`${ele}`} onClick={() => {
                                    setAccountselected(ele)
                                }} className={(activeTab === ele.toString()) ? classes.active : classes.tabs}>
                                    <div className={classes.tablabel}>
                                        <Image alt='' width={35} height={35} src='/icons/sbi.png'></Image>
                                        <div className={classes.content}>{'**** ' + ele}</div>
                                    </div>
                                </Tabs.Tab>
                            </span>)
                        })}

                    </Tabs.List>

                    {/* {accounts.map((ele) => {
                        return (
                            <Tabs.Panel className={classes.tabcontainer} value={`${ele}`} key={ele} >
                                <Form id={ele} />
                            </Tabs.Panel>

                        )
                    })} */}
                    {/* <div className={classes.tabcontainer}></div> */}


                </Tabs >
            </div >
        </div >
    )
}

export default Profile