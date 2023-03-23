import { createStyles } from '@mantine/core'
import Heading from '../../SmallComponents/Heading'
import styled from '@emotion/styled'
import { Group, Stack, Text } from '@mantine/core'
import Image from 'next/image'
import { Button } from '@mantine/core'
import { wrap } from 'module'
const useStyles = createStyles((theme) => ({
    container: {
        backgroundColor: `#ffffff`,
        borderRadius: `30px`,
        boxShadow: `0px 2px 20px rgba(0,0,0,0.1)`,
        color: `#0052B3`,
        position: 'relative',
        height: `719px`,
        width: `487px`,
        display:`flex`,
        flexDirection:`column`,
        justifyContent:`space-around`,
        alignItems:`center`,
        top:`138px`,
        left:`1009px`,
    },
    button1: {
        width: `150px`,
        backgroundColor: `#0062D6`,
        borderRadius: `30px`,
        marginTop:'5px',
      },
    button2: {
        width: `150px`,
        backgroundColor: `#DD0000`,
        borderRadius: `30px`,
        marginBottom:'5px',
      },
    accountCollection:{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        flexDirection:'row',
        flexWrap: 'wrap',
    },
    accountContainer:{
        cursor:'pointer',
        padding: '20px',
        borderRadius: '30px',
        display: 'flex',
        flexdirection: 'row',
        width:'178px',
        height:'57px',
        justifyContent: 'center',
        alignitems: 'center',
        margin: '15px',
       backgroundColor: '#E6EFF9',
         '&:hover': {
            transform: 'scale(1.05)',
            transitionDuration: '0.3s', 
         }  
    },
    controlButtons:{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
    }
}))

interface Props {
    bankName?: string
    value?: string
}

const AccountCard = ({ bankName, value }: Props) => {
    const { classes } = useStyles()
    return (
        <div  >
            <div className={classes.accountContainer}>
               <Image
                src={'/../public/icons/sbi.png'}
                width={15}
                height={15}
                alt={''}
              ></Image>
             
                <Text
                    c={'#0062D6'}
                    fz={'lg'}
                    fw={500}
                    w={120}
                    style={{
                        lineHeight: '24px',
                        textAlign: 'center',
                        fontFamily: 'Montserrat',
                        fontStyle:`normal`,
                        fontWeight: '600',
                        fontSize: '20px',
                        color: '#000000',
                    }}
                >
                    {value}
                </Text>
            </div>
        </div>
    )
}
export function ProfileCard() {
    const { classes } = useStyles()
    let BankAccount = [
        { id: 1, bankName: 'sbi', value: '****1234' },
        { id: 2, bankName: 'sbi', value: '****4235' },
        { id: 3, bankName: 'sbi', value: '****8090' },
       
    ]
    return (
        <div className={classes.container}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-around' ,flexDirection:'column'}}>
            <Image
                src={'/../public/icons/profilePhoto.png'}
                width={120}
                height={120}
                alt={''}
              ></Image>
             <span style={{
                    fontFamily: 'Montserrat',
                    fontStyle: `normal`,
                    fontWeight: `700`,
                    fontSize: `28px`,
                    lineHeight: `34px`,
                    color:'#000000',
                }}>
                    Bill Gates
                </span>
             <span style={{
                    fontFamily: 'Montserrat',
                    fontStyle: `normal`,
                    fontWeight: `500`,
                    fontSize: `18px`,
                    lineHeight: `22px`,
                    color: '#4D4B4B',
                    
                }}>
                   bgiamrich@gmail.com
                </span>
                </div>   
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-around' ,flexDirection:'column'}}>
              <span style={{
                    fontFamily: 'Montserrat',
                    fontStyle: `normal`,
                    fontWeight: `600`,
                    fontSize: `14px`,
                    lineHeight: `17px`,
                    color:' #4D4B4B',
                }}>
                    Phone Number
                </span>
              <span style={{
                    fontFamily: 'Montserrat',
                    fontStyle: `normal`,
                    fontWeight: `600`,
                    fontSize: `22px`,
                    lineHeight: `27px`,
                    color:'#000000',
                }}>
                    8675645300
                </span>
                </div>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-around' ,flexDirection:'column'}}>  
            <span style={{
                    fontFamily: 'Montserrat',
                    fontStyle: `normal`,
                    fontWeight: `600`,
                    fontSize: `14px`,
                    lineHeight: `17px`,
                                                                                                                                                                                                                                                                                                                                 color:' #4D4B4B',
                }}>
                    Bank Accounts
                </span>
          <div className={classes.accountCollection}>
          {BankAccount.map((ele,key) => {
                            return (
                                <span key={ele.id}>
                                    <AccountCard bankName={ele.bankName} value={ele.value}></AccountCard>
                                </span> 
                            )
                        })}
          </div>
          </div> 
         
         <Button className={classes.button1}><span style={{
                    fontFamily: 'Montserrat',
                    fontStyle: `normal`,
                    fontWeight: `500`,
                    fontSize: `22px`,
                    lineHeight: `27px`,
                }}>Settings</span> &nbsp; <Image
                src={'/../public/icons/settings.png'}
                width={18}
                height={18}
                alt={''}
              ></Image></Button> 
         <Button className={classes.button2}><span style={{
                    fontFamily: 'Montserrat',
                    fontStyle: `normal`,
                    fontWeight: `500`,
                    fontSize: `22px`,
                    lineHeight: `27px`,
                }}>Logout</span> &nbsp; <Image
                src={'/../public/icons/logout.png'}
                width={18}
                height={18}
                alt={''}
              ></Image></Button> 

        </div>
      
    )
}
